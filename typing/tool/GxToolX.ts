import GxProcedure from "../ecs/craft/GxProcedure";
import GxDataSchema from "../ecs/data/GxDataSchema";
import GxFileRule from "../ecs/data/GxFileRule";
import GxProcToolConfig from "../ecs/tool/GxProcToolConfig";
import GxTool from "../ecs/tool/GxTool";


/**
 * 工具模型
 */
export default class GxToolX extends GxTool {
    /** 文件规则 */
    fileRules: Array<GxFileRule> = [];

    /** 目录层级（‘/’开头）*/
    catalog?: string;

    /** 模型是否共享 */
    share: boolean = false;

    constructor(options?: any) {
        super(options);
        if (options) {
            if (options.fileRules) {
                for (let i = 0; i < options.fileRules.length; i++)
                    this.fileRules.push(new GxFileRule(options.fileRules[i]));
            }
            if (options.catalog) this.catalog = options.catalog;
            if (options.share) this.share = options.share;
        }
    }

    /**
     * 数据从生产信息中来
     */
    static fromCook = (procedure: GxProcedure) => {
        let toolConfig = procedure.prodToolConfig;
        let dataSchema = procedure.outputSchema;
        if (!toolConfig || !dataSchema || !toolConfig.tool || !dataSchema.dataType) return null;

        let toolx = new GxToolX(toolConfig.tool);

        let fileRules = dataSchema.dataType.fileRules;
        for (let i = 0; i < fileRules.length; i++)
            toolx.fileRules.push(new GxFileRule(fileRules[i]));

        return toolx;
    }

    /**
     * 数据从质检信息中来
     */
    static fromQc = (procedure: GxProcedure) => {
        if (!procedure.qc) return null;
        let toolConfig = procedure.qcToolConfig;
        let dataSchema = procedure.qcSchema;
        if (!toolConfig || !dataSchema || !toolConfig.tool || !dataSchema.dataType) return null;

        let toolx = new GxToolX(toolConfig.tool);

        let fileRules = dataSchema.dataType.fileRules;
        for (let i = 0; i < fileRules.length; i++)
            toolx.fileRules.push(new GxFileRule(fileRules[i]));

        return toolx;
    }

    /**
     * 更新到工序生产信息中
     */
    toCook = (procedure: GxProcedure) => {
        if (!procedure) return;
        procedure.name = this.name;
        procedure.prodToolConfig = new GxProcToolConfig({ arguments: this.arguments, tool: new GxTool(this) });
        procedure.outputSchema = new GxDataSchema({ dataType: { id: this.id, name: this.name, fileRules: this.fileRules } });
        return procedure;
    }

    /**
     * 更新到工序质检信息中
     * @param procedure 
     */
    toQc = (procedure: GxProcedure) => {
        if (!procedure) return;
        procedure.qcToolConfig = new GxProcToolConfig({ arguments: this.arguments, tool: new GxTool(this) });
        procedure.qcSchema = new GxDataSchema({ dataType: { id: this.id, name: this.name, fileRules: this.fileRules } });
    }
}