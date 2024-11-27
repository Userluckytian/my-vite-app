import GxFilter from "../../core/filter/GxFilter";

export default class GxProcedureFilter extends GxFilter {
    /**
     * 如果是生产线就是工艺ID，如果是项目就是项目ID
     * 类型为long
     */
    craftId?:number;
    /**
     * 部分对象标记，参见GxProcedurePart
     * 类型为int
     */
    partFlag?:number;
    /**
     * 根节点，类型为bool
     */
    root?:boolean;
    /**
     * 所有的前置，类型为bool
     */
    deepHeads?:boolean;
    /**
     * 所有的后置，类型为bool
     */
    deepTails?:boolean;
    /**
     * 一级前置，类型为bool
     */
    heads?:boolean;
    /**
     * 一级后置，类型为bool
     */
    tails?:boolean;
    /**
     * 带标签的，类型为bool
     */
    hasLabel?:boolean;
    /**
     * 需要作业的[只查投料口和普通工序]，类型为bool
     */
    needWork?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        if (this.isNone(this.craftId)) delete this.craftId;
        if (this.isNone(this.partFlag)) delete this.partFlag;
        if (this.isNone(this.root)) delete this.root;
        if (this.isNone(this.deepHeads)) delete this.deepHeads;
        if (this.isNone(this.deepTails)) delete this.deepTails;
        if (this.isNone(this.heads)) delete this.heads;
        if (this.isNone(this.tails)) delete this.tails;
        if (this.isNone(this.hasLabel)) delete this.hasLabel;
        if (this.isNone(this.needWork)) delete this.needWork;
        return this;
    }
}