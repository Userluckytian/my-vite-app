import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxExecutorFilter extends GxSortFilter {
    /**
     * 执行器的Ip地址，类型为Array<string>
     */
    addrs?:Array<string>;
    /**
     * 用户ID，类型为Array<long>
     */
    userIds?:Array<number>;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.addrs)) delete this.addrs;
        if (this.isNone(this.userIds)) delete this.userIds;
        return this;
    }
}