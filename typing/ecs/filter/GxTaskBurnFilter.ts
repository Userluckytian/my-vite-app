import GxSortFilter from "../../core/filter/GxSortFilter";

/**
 * 工作量信息查询过滤器
 */
export default class GxTaskBurnFilter extends GxSortFilter {
    /**
     * 是否查询自己的，类型为bool
     */
    bMine ?:boolean;
    /**
     * 任务ID，类型为long
     */
    taskId?:number;
    /**
     * 任务指定的成果ID，类型为long
     */
    achievementId?:number;
    /**
     * 是否查询归档，类型为bool
     */
    archive?:boolean;
    /**
     * 加载工时所有者，类型为bool
     */
    loadWorker?:boolean;
    /**
     * 加载工时创建者，类型为bool
     */
    loadCreator?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.bMine)) delete this.bMine;
        if (this.isNone(this.taskId)) delete this.taskId;
        if (this.isNone(this.achievementId)) delete this.achievementId;
        if (this.isNone(this.archive)) delete this.archive;
        if (this.isNone(this.loadWorker)) delete this.loadWorker;
        if (this.isNone(this.loadCreator)) delete this.loadCreator;
        return this;
    }
}