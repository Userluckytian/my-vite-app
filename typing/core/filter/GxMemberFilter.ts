import GxDFilter from "./GxDFilter";

export default class GxMemberFilter extends GxDFilter {
    /**
     * 组织主键，类型为long
     */
    gpid?:number;

    /**
     * 成员主键，类型为long
     */
    memberId?:number;

    /**
     * 成员别名，类型为string
     */
    memberAlias ?:string;

    /**
     * 角色主键，类型为int
     */
    roleId?:number;

    /**
     * 权限值，类型为long
     */
    purview?:number;

    constructor (options?: any) {
        super(options);
        if (options && options.gpid) {
            this.gpid = options.gpid;
        }
        if (options && options.memberId) {
            this.memberId = options.memberId;
        }
        if (options && options.memberAlias) {
            this.memberAlias = options.memberAlias;
        }
        if (options && options.roleId) {
            this.roleId = options.roleId;
        }
        if (options && options.purview) {
            this.purview = options.purview;
        }
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.gpid)) delete this.gpid;
        if (this.isNone(this.memberId)) delete this.memberId;
        if (this.isNone(this.memberAlias)) delete this.memberAlias;
        if (this.isNone(this.roleId)) delete this.roleId;
        if (this.isNone(this.purview)) delete this.purview;
        return this;
    }
}