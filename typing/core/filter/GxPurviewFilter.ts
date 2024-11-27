import GxFilter from "./GxFilter";

export default class GxPurviewFilter extends GxFilter {
    /**
     * 权限的作用域，类型为int
     * 系统为1，团队为2，项目为4，可以或组合
     */
    scope?:number;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.scope)) delete this.scope;
        return this;
    }
}