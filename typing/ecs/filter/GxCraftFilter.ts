import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxCraftFilter extends GxSortFilter {
    /**
     * 根据工艺状态，类型为Array or Set<int>
     */
    status?:Array<number>;
    /**
     * 根据团队进行检索，系统0，团队>0
     * 类型为long
     */
    clan?:number;
    /**
     * 创建者，类型为Array or Set<long>
     */
    creators?:Array<number>;
    /**
     * 是否加载工艺创建者，类型为bool
     */
    loadCreator?:boolean;
    /**
     * 是否加载工艺图，类型为bool
     */
    loadDag?:boolean;
    /**
     * 加载项目的属性信息，类型为bool
     */
    loadProps?:boolean;
    /**
     * 类型
     */
    classifications?:Array<string | number>;
    /**
     * 标签
     */
    tags?:Array<string>;
    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.status)) delete this.status;
        if (this.isNone(this.clan)) delete this.clan;
        if (this.isNone(this.creators)) delete this.creators;
        if (this.isNone(this.loadCreator)) delete this.loadCreator;
        if (this.isNone(this.loadDag)) delete this.loadDag;
        if (this.isNone(this.loadProps)) delete this.loadProps;
        if (this.isNone(this.tags)) delete this.tags;
        if (this.isNone(this.classifications)) delete this.classifications;
        return this;
    }
}