import GxObject from "../lang/GxObject";
import GxDFilter from "./GxDFilter";

export default class GxCommentFilter extends GxDFilter {
    /**
     * 根节点
     * 类型为GxObject
     */
    root?:GxObject;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.root)) delete this.root;
        return this;
    }
}