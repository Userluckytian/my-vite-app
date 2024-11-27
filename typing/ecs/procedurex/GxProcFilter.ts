import GxOType from "../../core/lang/GxOType";
import GxEcsOType from "../GxEcsOType";
import GxProcedure from "../craft/GxProcedure";

/**
 * 继续工序对象，对前置输出数据的过滤作用
 */
export default class GxProcFilter extends GxProcedure {
    constructor(options?:any) {
        super(options);
        this.setOType(new GxOType({ otid: GxEcsOType.PROC_FILTER, name: 'Filter' }));
    }

    /**
     * 判断工序对象是否有效
     */
    isValidate() {
        return super.isValidate();
    }
}