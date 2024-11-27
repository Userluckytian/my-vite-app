import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxToolFilter extends GxSortFilter {
    /**
     * 根据团队Id查询，类型为long
     */
    clanId?:number;

    /**
     * 根据工具执行文件名查询，类型为string
     */
    realName?:string;

    /**
     * 根据工具调用方式，类型为Set<int>
     * 参见GxToolCategory
     */
    categories?:Array<number>;

    /**
     * 根据运行的操作系统，类型为Array or Set<int>
     * 参见GxOsType
     */
    osTypes?:Array<number>;

    /**
     * 根据创建者Id查询，类型为Array or Set<long>
     */
    authors?:Array<number>;
    /**
     * 是否加载创建者的信息，类型为bool
     */
    loadAuthor?:boolean;

    /**
     * 是否查询公开的还是私有的 
     */
    share?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.clanId)) delete this.clanId;
        if (this.isNone(this.realName)) delete this.realName;
        if (this.isNone(this.categories)) delete this.categories;
        if (this.isNone(this.osTypes)) delete this.osTypes;
        if (this.isNone(this.authors)) delete this.authors;
        if (this.isNone(this.loadAuthor)) delete this.loadAuthor;
        return this;
    }
}