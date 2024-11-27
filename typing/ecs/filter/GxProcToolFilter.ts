import GxFilter from "../../core/filter/GxFilter";

/**
 * 工序配置工具的过滤器
 * 对应查询的对象为GxProcToolConfig
 */
export default class GxProcToolFilter extends GxFilter {
    /**
     * 项目id，类型为long
     */
    projectId?:number;
    /**
     * 工序id集合，类型为Array or Set<long>
     */
    procedureIds?:Array<number>;
    /**
     * 是否是质检，类型为bool
     */
    forQc?:boolean;
    /**
     * 工具id，类型为Set<long>
     */
    toolIds?:Array<number>;
    /**
     * 加载工具，类型为bool
     */
    loadTool?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.procedureIds)) delete this.procedureIds;
        if (this.isNone(this.forQc)) delete this.forQc;
        if (this.isNone(this.toolIds)) delete this.toolIds;
        if (this.isNone(this.loadTool)) delete this.loadTool;
        return this;
    }
}