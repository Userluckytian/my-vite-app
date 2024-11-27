import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxRegionFilter extends GxSortFilter {
    /**
     * 项目ID，类型为long
     */
    projectId?:number;
    /**
     * 空间范围，类型为string
     * 注意：如果存在同时赋值，则geometry优先级更高
     */
    geo?:string;//geojson格式
    geometry?:string;//wkt格式

    /**
     * 负责人ID，类型为long
     */
    assignerId?:number;

    /**
     * 工序ID，类型为long
     */
    procedureId?:number;

    /**
     * 作业员ID，类型为long
     */
    workerId?:number;

    /**
     * 查询模式，类型为int
     * 0-进度筛选
     * 1-安排筛选
     */
    queryMode?:number;

    /**
     * 加载基础信息，类型为bool
     * 说明：基础信息包括名称、作业量、难易度、工天等
     */
    loadBasicInfo?:boolean;
    /**
     * 加载加载几何信息，类型为bool
     */
    loadGeo ?:boolean;
    /**
     * 加载正在做的状态信息，类型为bool
     * 说明：包括最新做的任务信息和进度信息
     */
    loadCurState?:boolean;
    /**
     * 加载作业区域作业情况(工序、作业员、进度等)
     */
    loadRegionProc?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.geo)) delete this.geo;
        if (this.isNone(this.geometry)) delete this.geometry;
        if (this.isNone(this.assignerId)) delete this.assignerId;
        if (this.isNone(this.procedureId)) delete this.procedureId;
        if (this.isNone(this.workerId)) delete this.workerId;
        if (this.isNone(this.queryMode)) delete this.queryMode;
        if (this.isNone(this.loadBasicInfo)) delete this.loadBasicInfo;
        if (this.isNone(this.loadGeo)) delete this.loadGeo;
        if (this.isNone(this.loadCurState)) delete this.loadCurState;
        if (this.isNone(this.loadRegionProc)) delete this.loadRegionProc;
        return this;
    }
}