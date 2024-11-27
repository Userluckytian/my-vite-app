import GxOType from "../../core/lang/GxOType";
import GxEcsOType from "../GxEcsOType";
import GxProcedure from "../craft/GxProcedure";

/**
 * 继承工序对象，作为对前置工序输出数据的分拣作用
 */
export default class GxProcSorter extends GxProcedure {
    constructor(options?:any) {
        super(options);
        this.setOType(new GxOType({ otid: GxEcsOType.PROC_SORTER, name: 'Sorter' }));
        /**分拣条件 */
        if (!options?.attributes?.condition)
            this.attributes.condition = '';
        /** 判断方法：满足或不满足 */
        if (!options?.attributes?.judgement)
            this.attributes.judgement = true;
    }

    /**
     * 判断工序对象是否有效
     */
    isValidate() {
        if (typeof this.attributes.condition === 'undefined'
            || this.attributes.condition.length === 0
            || typeof this.attributes.judgement === 'undefined')
            return false;

        return super.isValidate();
    }
}