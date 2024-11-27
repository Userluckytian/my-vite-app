import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxDataTypeFilter extends GxSortFilter {
    /**
     * 根据团队进行检索，类型为long
     * 如果为0表示是系统，大于0表示团队
     */
    clan?:number;
    /**bool
     * 是否加载文件规则的信息，类型为bool
     */
    loadFileRule?:boolean;
    /**
     * 是否加载作者，类型为bool
     */
    loadAuthor?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.clan)) delete this.clan;
        if (this.isNone(this.loadFileRule)) delete this.loadFileRule;
        if (this.isNone(this.loadAuthor)) delete this.loadAuthor;
        return this;
    }
}