import GxSortFilter from "./GxSortFilter";

export default class GxUserFilter extends GxSortFilter {
    /**
     * 用户角色，类型为int
     */
    role?:number;
    /**
     * 用户权限，类型为long
     */
    purview?:number;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.role)) delete this.role;
        if (this.isNone(this.purview)) delete this.purview;
        return this;
    }
}