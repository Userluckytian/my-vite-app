import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxAchievementFilter extends GxSortFilter {
    /**
     * 是否查询归档，类型为bool
     */
    archive?: boolean;
    /**
     * 项目ID，类型为long
     */
    projectId?:number;
    /**
     * 工序ID，类型为long
     */
    procedureId?:number;
    /**
     * 任务ID，类型为long
     */
    taskId?:number;
    /**
     * 任务ID集合
     * 类型为Array or Set<long>
     */
    taskIds?:Array<number>;
    /**
     * 成果状态列表
     * 类型为Array or Set<int>
     */
    status?:Array<number>;
    /**
     * 关联任务的标签模糊查询
     * 类型为string
     */
    label?:string;
    /**
     * 是否是我的成果，类型为bool
     */
    bMine?:boolean;
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
     * 是否加载成果下的数据详情，类型为bool
     */
    loadData?:boolean;
    /**
     * 是否加载成果作业者，类型为bool
     */
    loadWorker?:boolean;
    /**
     * 是否加载成果数据所属者，类型为bool
     */
    loadDataWorker?:boolean;

    loadContent ?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.archive)) delete this.archive;
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.procedureId)) delete this.procedureId;
        if (this.isNone(this.taskId)) delete this.taskId;
        if (this.isNone(this.taskIds)) delete this.taskIds;
        if (this.isNone(this.status)) delete this.status;
        if (this.isNone(this.label)) delete this.label;
        if (this.isNone(this.bMine)) delete this.bMine;
        if (this.isNone(this.loadProject)) delete this.loadProject;
        if (this.isNone(this.loadProcedure)) delete this.loadProcedure;
        if (this.isNone(this.loadTask)) delete this.loadTask;
        if (this.isNone(this.loadData)) delete this.loadData;
        if (this.isNone(this.loadWorker)) delete this.loadWorker;
        if (this.isNone(this.loadDataWorker)) delete this.loadDataWorker;
        if (this.isNone(this.loadContent)) delete this.loadContent;
        return this;
    }
}