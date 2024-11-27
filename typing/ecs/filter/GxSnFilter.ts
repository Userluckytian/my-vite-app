import GxSortFilter from "../../core/filter/GxSortFilter";

export default class GxSnFilter extends GxSortFilter {
    /**
     * 项目主键，类型为Long
     */
    projectId?:number;
    /**
     * 批次号模糊查询，类型为int
     */
    sn?:number;
    /**
     * 批次0-进行中，1-已完成，2-异常筛选,null-所有
     * 类型为int
     */
    snStatus?:number;
    /**
     * 是否归档，类型为bool
     */
    archive?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.sn)) delete this.sn;
        if (this.isNone(this.snStatus)) delete this.snStatus;
        if (this.isNone(this.archive)) delete this.archive;
        return this;
    }
}