import GxObject from "../lang/GxObject";
import GxDFilter from "./GxDFilter";

export default class GxActionFilter extends GxDFilter {
    /**
     * OtAction的flag标记
     * 类型为int
     */
    otaFlag?:number;

    /**
     * 动作发生地点
     * 类型为GxObject
     */
    pos?:GxObject;

    /**
     * 动作的被操作对象ID
     * 类型为long
     */
    oid?:string|number;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.otaFlag)) delete this.otaFlag;
        if (this.isNone(this.pos)) delete this.pos;
        if (this.isNone(this.oid)) delete this.oid;
        return this;
    }
}