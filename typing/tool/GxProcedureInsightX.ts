
export default class GxProcedureInsightX {
    /** 节点ID */
    procedureId: number = -1;

    /** 开始时间 */
    startTime?: Date;

    /** 消耗时间（秒） */
    costTime: number = 0;

    /** 协作者（个） */
    workerCount: number = 0;

    constructor(options?: any) {
        if (options) {
            if (options.procedureId) this.procedureId = options.procedureId;
            if (options.startTime) this.startTime = new Date(options.startTime);
            if (options.costTime) this.costTime = options.costTime;
            if (options.workerCount) this.workerCount = options.workerCount;
        }
    }
}