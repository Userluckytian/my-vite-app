import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxTaskFilter extends GxSortFilter {
    /**
     * 查询指定项目下任务，类型为Set<long>
     */
    project?:Array<number>;
    /**
     * 查询指定工序下任务，类型为Array or Set<long>
     */
    procedure?:Array<number>;
    /**
     * 查询指定状态下任务，类型为Array or Set<long>
     * 状态任务参照GxTaskStatus
     */
    status ?:Array<number>;
    /**
     * 批次精准匹配，类型为int
     */
    sn ?:number;
    /**
     * 任务的标签，类型为string
     */
    label?:string;
    /**
     * 关键字，类型为string
     */
    keyword?:string;
    /**
     * 是否加载持续时间，类型为bool
     */
    loadDurationTime?:boolean;
    /**
     * 是否按照任务的优先级排序查询，类型为bool
     */
    prioritySort?:boolean;
    /**
     * 是否按照项目的优先级排序查询，类型为bool
     */
    projectPrioritySort?:boolean;
    /**
     * 查看归档的任务，类型为bool
     */
    archive ?:boolean;
    /**
     * 是否查看自己的，类型为bool
     */
    bMine?:boolean;
    /**
     * 是否根据位置查询，类型为bool
     * 说明：默认是按照位置进行查询
     */
    bPos ?:boolean;
    /**
     * 是否加载用户的信息，类型为bool
     */
    loadUser?:boolean;
    /**
     * 是否加载团队的信息，类型为bool
     */
    loadClan?:boolean;
    /**
     * 是否加载项目的信息，类型为bool
     */
    loadProject?:boolean;
    /**
     * 是否加载工序的信息，类型为bool
     */
    loadProcedure ?:boolean;
    /**
     * 查询被指派的任务，类型为bool
     */
    dispatch ?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.project)) delete this.project;
        if (this.isNone(this.procedure)) delete this.procedure;
        if (this.isNone(this.status)) delete this.status;
        if (this.isNone(this.sn)) delete this.sn;
        if (this.isNone(this.label)) delete this.label;
        if (this.isNone(this.keyword)) delete this.keyword;
        if (this.isNone(this.loadDurationTime)) delete this.loadDurationTime;
        if (this.isNone(this.prioritySort)) delete this.prioritySort;
        if (this.isNone(this.projectPrioritySort)) delete this.projectPrioritySort;
        if (this.isNone(this.archive)) delete this.archive;
        if (this.isNone(this.bMine)) delete this.bMine;
        if (this.isNone(this.bPos)) delete this.bPos;
        if (this.isNone(this.loadUser)) delete this.loadUser;
        if (this.isNone(this.loadClan)) delete this.loadClan;
        if (this.isNone(this.loadProject)) delete this.loadProject;
        if (this.isNone(this.loadProcedure)) delete this.loadProcedure;
        if (this.isNone(this.dispatch)) delete this.dispatch;
        return this;
    }
}