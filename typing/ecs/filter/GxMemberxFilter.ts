import GxMemberFilter from "../../core/filter/GxMemberFilter";

export default class GxMemberxFilter extends GxMemberFilter {
    /**
     * 加载参与的项目,进行中的任务，类型为bool
     */
    loadStatistic?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.loadStatistic)) delete this.loadStatistic;
        return this;
    }
}