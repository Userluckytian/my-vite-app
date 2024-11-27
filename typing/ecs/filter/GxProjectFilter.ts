import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxProjectFilter extends GxSortFilter {
    /**
     * 项目所属团队ID，类型为long
     */
    clanId?:number;
    /**
     * 根据创建者进行查询
     * 类型为Array or Set<long>
     */
    creators?:Array<any>;
    /**
     * uid:映射creator，根据创建者查询用uid
     * 此处是根据工程负责人查询
     * 类型为Array or Set<long>
     */
    managers?:Array<any>;
    /**
     * 根据项目状态进行过滤
     * 类型为Array or Set<int>
     */
    status?:Array<any>;
    /**
     * 根据工艺进行查询
     * 类型为Array or Set<long>
     */
    craftIds?:Array<any>;
    /**
     * 只检索普通项目，即工艺调试项目为true
     * 类型为bool
     */
    onlyProject?:boolean;
    /**
     * 项目的参与者，类型为long
     */
    joinerId?:number;
    /**
     * 加载项目进度，类型为bool
     */
    loadProgress?:boolean;
    /**
     * 加载项目所属的团队的信息，类型为bool
     */
    loadPos?:boolean;
    /**
     * 加载项目的创建者，类型为bool
     */
    loadCreator?:boolean;
    /**
     * 加载项目的负责人，类型为bool
     */
    loadManager?:boolean;
    /**
     * 加载关联工艺的信息，类型为bool
     */
    loadCraft?:boolean;
    /**
     * 加载项目关联的工艺图信息，类型为bool
     */
    loadDag?:boolean;
    /**
     * 加载项目的属性信息，类型为bool
     */
    loadProps?:boolean;
    /**
     * 是否加载横向数据相关信息（proFields、layers和evenlope）
     * 类型为bool
     */
    loadRegionInfo?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.clanId)) delete this.clanId;
        if (this.isNone(this.creators)) delete this.creators;
        if (this.isNone(this.managers)) delete this.managers;
        if (this.isNone(this.status)) delete this.status;
        if (this.isNone(this.craftIds)) delete this.craftIds;
        if (this.isNone(this.onlyProject)) delete this.onlyProject;
        if (this.isNone(this.joinerId)) delete this.joinerId;
        if (this.isNone(this.loadProgress)) delete this.loadProgress;
        if (this.isNone(this.loadPos)) delete this.loadPos;
        if (this.isNone(this.loadCreator)) delete this.loadCreator;
        if (this.isNone(this.loadManager)) delete this.loadManager;
        if (this.isNone(this.loadCraft)) delete this.loadCraft;
        if (this.isNone(this.loadDag)) delete this.loadDag;
        if (this.isNone(this.loadProps)) delete this.loadProps;
        if (this.isNone(this.loadRegionInfo)) delete this.loadRegionInfo;
        return this;
    }
}