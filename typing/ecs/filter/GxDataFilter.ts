import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxDataFilter extends GxSortFilter {
    /**
     * 是否查询归档，类型为bool
     */
    archive?:boolean;
    /**
     * 项目ID，类型为long
     */
    projectId?:number;
    /**
     * 工序ID，类型为long
     */
    procedureId?:number;
    /**
     * 批次信息，类型为int
     */
    sn?:number;
    /**
     * 任务ID（集合），类型为long
     */
    taskId?:number;
    taskIds?:Array<number>;//Array or Set<long>
    /**
     * 标签列表，类型为Array or Set<string>
     */
    labels?:Array<string>;
    /**
     * 成果ID，类型为long
     */
    achievementId?:number;
    /**
     * 加载数据的内容，类型为bool
     */
    loadContent?:boolean;
    /**
     * 是否加载隶属项目，类型为bool
     */
    loadProject?:boolean;
    /**
     * 是否加载隶属工序，类型为bool
     */
    loadProcedure?:boolean;
    /**
     * 是否加载隶属任务，类型为bool
     */
    loadTask?:boolean;
    /**
     * 加载数据所属的成果，类型为bool
     */
    loadAchievement?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.archive)) delete this.archive;
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.procedureId)) delete this.procedureId;
        if (this.isNone(this.sn)) delete this.sn;
        if (this.isNone(this.taskId)) delete this.taskId;
        if (this.isNone(this.taskIds)) delete this.taskIds;
        if (this.isNone(this.labels)) delete this.labels;
        if (this.isNone(this.achievementId)) delete this.achievementId;
        if (this.isNone(this.loadContent)) delete this.loadContent;
        if (this.isNone(this.loadProject)) delete this.loadProject;
        if (this.isNone(this.loadProcedure)) delete this.loadProcedure;
        if (this.isNone(this.loadTask)) delete this.loadTask;
        if (this.isNone(this.loadAchievement)) delete this.loadAchievement;
        return this;
    }
}