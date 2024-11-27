import GxOType from "../../core/lang/GxOType";
import GxProcedure from "../craft/GxProcedure";
import GxEcsOType from "../GxEcsOType";

/**
 * 继承工序对象，用于对前置工序任一工序输出数据的流转作用
 */
export default class GxProcOR extends GxProcedure {
    constructor(options?:any) {
        super(options);
        this.setOType(new GxOType({ otid: GxEcsOType.PROC_OR, name: 'OR' }));
    }

    /**
     * 判断工序对象是否有效
     */
    isValidate() {
        return super.isValidate();
    }
}