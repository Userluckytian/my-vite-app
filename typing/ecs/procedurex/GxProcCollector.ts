import GxOType from "../../core/lang/GxOType";
import GxProcedure from "../craft/GxProcedure";
import GxEcsOType from "../GxEcsOType";

/**
 * 继承工序对象的收集器，收集前置数据，并配置输出的数据个数
 */
export default class GxProcCollector extends GxProcedure {
    constructor(options?:any) {
        super(options);
        this.setOType(new GxOType({ otid: GxEcsOType.PROC_COLLECTOR, name: 'Collector' }));
        /**向后输出的数据个数 */
        if (!options?.attributes?.dataCount)
            this.attributes.dataCount = 0;
    }

    /**
     * 判断工序对象是否有效
     */
    isValidate() {
        if (typeof this.attributes.dataCount === 'undefined' || this.attributes.dataCount < 0)
            return false;

        return super.isValidate();
    }
}