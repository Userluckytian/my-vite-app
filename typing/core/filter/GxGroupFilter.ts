import GxSortFilter from "./GxSortFilter";

export default class GxGroupFilter extends GxSortFilter {
    /**
     * 是否查询当前登录用户隶属的组织
     * 类型为bool
     */
    bMine?:boolean;

    /**
     * 父组织ID
     * 类型为long
     */
    parentId?:number;

    /**
     * 父组织类型ID
     * 类型为int
     */
    parentOtypeId?:number;

    /**
     * 指定用户
     * 类型为long
     */
    targetUid?:number;

    /**
     * 组织关联对象的类型ID
     * 类型为int
     */
    relatedOtype?:|number;

    /**
     * 审核状态列表
     * 类型为Array or Set<int>
     */
    checkState?:Array<any> = [];

    /**
     * 组织是否关闭:true为关闭，false为未关闭，null为所有
     * 类型为bool
     */
    closed?:boolean;

    /**
     * 加载组织负责人
     * 类型为bool
     */
    loadGroupManager?:boolean;

    /**
     * 加载组织的父组织
     * 类型为bool
     */
    loadGroupPos?:boolean;

    /**
     * 负责人账户名和昵称
     * 类型为string
     */
    userName?:string;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.bMine)) delete this.bMine;
        if (this.isNone(this.parentId)) delete this.parentId;
        if (this.isNone(this.parentOtypeId)) delete this.parentOtypeId;
        if (this.isNone(this.targetUid)) delete this.targetUid;
        if (this.isNone(this.relatedOtype)) delete this.relatedOtype;
        if (this.isNone(this.checkState)) delete this.checkState;
        if (this.isNone(this.closed)) delete this.closed;
        if (this.isNone(this.loadGroupManager)) delete this.loadGroupManager;
        if (this.isNone(this.loadGroupPos)) delete this.loadGroupPos;
        if (this.isNone(this.userName)) delete this.userName;
        return this;
    }
}