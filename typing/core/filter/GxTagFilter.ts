import GxSortFilter from "./GxSortFilter";

/**
 * 标签筛选
 */
export default class GxTagFilter extends GxSortFilter {

    /**
     * 根据对象标签进行检索
     * 类型为Array or Set<string>
     */
    tags?:Array<string>;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.tags)) delete this.tags;
        return this;
    }
}