import GxDFilter from "./GxDFilter";
import GxSort from "./GxSort";

/**
 * 排序过滤
 */
export default class GxSortFilter extends GxDFilter {
    /**
     * 根据字段进行排序
     * 类型为GxSort
     */
    sort?:GxSort;

    constructor (options?: any) {
        super(options);
        if (options && options.sort) {
            this.sort = new GxSort(options.sort);
        }
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.sort)) delete this.sort;
        else this.sort!.trim();
        return this;
    }
}