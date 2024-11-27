/**
 * 排序对象
 */
export default class GxSort {
    /**
     * 排序字段，如果为空标识默认排序
     * 类型为string
     */
    sortBy?:string;
    /**
     * true：正序；false：倒序
     * 类型为bool
     */
    asc?:boolean;

    constructor(sortBy:string, asc = false) {
        this.asc = asc;
        this.sortBy = sortBy;
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        if (this.sortBy === null) delete this.sortBy;
        if (this.asc === null) delete this.asc;
        return this;
    }
}