import GxObject from "../lang/GxObject";
import GxSortFilter from "./GxSortFilter";
/**
 * 用户偏爱的过滤器
 */
export default class GxPreferenceFilter extends GxSortFilter {
    /**
     * 动作的类型：收藏，关注，点赞
     * 类型为int，参见：GxActionType
     */
    atid?:number;
    /**
     * 位置对象，类型为GxObject
     */
    pos?:GxObject;
    /**
     * 加载对象的详情
     * 类型为bool
     */
    loadObject?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.atid)) delete this.atid;
        if (this.isNone(this.pos)) delete this.pos;
        if (this.isNone(this.loadObject)) delete this.loadObject;
        return this;
    }
}