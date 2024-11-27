
import GxProcedure from "../ecs/craft/GxProcedure";
import GxEcsOType from "../ecs/GxEcsOType";
import GxProcedureInsight from "../ecs/task/GxProcedureInsight";
import GxProcedureInsightX from "./GxProcedureInsightX";

export class GxToolXInsight extends GxProcedureInsight {
    /** 开始时间 */
    startTime?: Date;

    /** 消耗时间（秒） */
    costTime: number = 0;

    /** 协作者（个） */
    workerCount: number = 0;

    constructor(options?: any) {
        super(options);
        if (options) {
            if (options.startTime) this.startTime = new Date(options.startTime);
            if (options.costTime) this.costTime = options.costTime;
            if (options.workerCount) this.workerCount = options.workerCount;
        }
    }

    /**
     * 从GxProcedureInsightX对象中拷贝数据
     */
    copyFromX = (insight: GxProcedureInsightX) => {
        if (!insight || this.id !== insight.procedureId) return;
        this.startTime = insight.startTime;
        this.costTime = insight.costTime;
        this.workerCount = insight.workerCount;
    }

    /**
     * 根据节点列表构建模型统计信息列表
     */
    static fromNodes = (nodes: Array<GxProcedure>): Array<GxToolXInsight> => {
        let insights = new Array<GxToolXInsight>();
        if (!nodes) return insights;
        for (let i = 0; i < nodes.length; i++) {
            const node = nodes[i];
            if (node.isOType(GxEcsOType.PROCEDURE) || node.isOType(GxEcsOType.PROC_FEEDER))
                insights.push(new GxToolXInsight(node));
        }
        return insights;
    }
}