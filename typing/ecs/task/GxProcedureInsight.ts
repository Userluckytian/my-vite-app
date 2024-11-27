import GxObject from "../../core/lang/GxObject";

export default class GxProcedureInsight extends GxObject {
    /**
     * 待领取任务数量，类型为int
     */
    waitForHandleTasks: number = 0;
    /**
     * 进行中任务数量，类型为int
     */
    handlingTasks: number = 0;
    /**
     * 待质检任务数量，类型为int
     */
    waitForCheckTasks: number = 0;
    /**
     * 质检中任务数量，类型为int
     */
    checkingTasks: number = 0;
    /**
     * 待修订任务数量，类型为int
     */
    waitForReviseTasks: number = 0;
    /**
     * 修订中任务数量，类型为int
     */
    revisingTasks: number = 0;
    /**
     * 完成任务数量，类型为int
     */
    finishedTasks: number = 0;
    /**
     * 异常任务数量，类型为int
     */
    abnormalTasks: number = 0;
    /**
     * 总数，类型为int
     */
    totalCount: number = 0;
    /**
     * 已归档的数量，类型为int
     */
    archiveCount: number = 0;

    constructor(options?: any) {
        super(options);
        if (options) {
            if (options.waitForHandleTasks) this.waitForHandleTasks = options.waitForHandleTasks;
            if (options.handlingTasks) this.handlingTasks = options.handlingTasks;
            if (options.waitForCheckTasks) this.waitForCheckTasks = options.waitForCheckTasks;
            if (options.checkingTasks) this.checkingTasks = options.checkingTasks;
            if (options.waitForReviseTasks) this.waitForReviseTasks = options.waitForReviseTasks;
            if (options.revisingTasks) this.revisingTasks = options.revisingTasks;
            if (options.finishedTasks) this.finishedTasks = options.finishedTasks;
            if (options.abnormalTasks) this.abnormalTasks = options.abnormalTasks;
            if (options.totalCount) this.totalCount = options.totalCount;
            if (options.archiveCount) this.archiveCount = options.archiveCount;
        }
    }

    /**
     * 从GxProcedureInsight对象中拷贝数据
     */
    copyFrom = (insight: GxProcedureInsight) => {
        if (!insight || this.id !== insight.id) return;
        this.waitForHandleTasks = insight.waitForHandleTasks;
        this.handlingTasks = insight.handlingTasks;
        this.waitForCheckTasks = insight.waitForCheckTasks;
        this.checkingTasks = insight.checkingTasks;
        this.waitForReviseTasks = insight.waitForReviseTasks;
        this.revisingTasks = insight.revisingTasks;
        this.finishedTasks = insight.finishedTasks;
        this.abnormalTasks = insight.abnormalTasks;
        this.totalCount = insight.totalCount;
        this.archiveCount = insight.archiveCount;
    }

    /**
     * 返回包含insight信息的JSON对象
     */
    toJsonObject = () => {
        let obj = {
            insight: {
                waitForHandleTasks: this.waitForHandleTasks, //待领取任务数量
                handlingTasks: this.handlingTasks,//进行中任务数量
                waitForCheckTasks: this.waitForCheckTasks,//待质检任务数量
                checkingTasks: this.checkingTasks,//质检中任务数量
                waitForReviseTasks: this.waitForReviseTasks,//待修订任务数量
                revisingTasks: this.revisingTasks,//修订中任务数量
                finishedTasks: this.finishedTasks,//完成任务数量
                abnormalTasks: this.abnormalTasks,//异常任务数量
                totalCount: this.totalCount,//总数
                archiveCount: this.archiveCount,//已归档的数量 
            }
        };
        return obj;
    }
}