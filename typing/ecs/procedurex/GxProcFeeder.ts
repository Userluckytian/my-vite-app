import GxOType from "../../core/lang/GxOType";
import GxProcedure from "../craft/GxProcedure";
import GxEcsOType from "../GxEcsOType";

/**
 * 继承工序对象的投料口，用于投料
 */
export default class GxProcFeeder extends GxProcedure {
    constructor(options?: any) {
        super(options);
        this.setOType(new GxOType({ otid: GxEcsOType.PROC_FEEDER, name: 'Feeder' }));
        /** 最大执行数量 */
        if (!options?.attributes?.exTaskLimit)
            this.attributes.exTaskLimit = 20;
    }

    /**
     * 判断工序对象是否有效
     */
    isValidate() {
        if (typeof this.attributes.exTaskLimit === 'undefined' || this.attributes.exTaskLimit < 0)
            return false;

        return super.isValidate();
    }
}