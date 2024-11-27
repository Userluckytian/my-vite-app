import GxOType from "../../core/lang/GxOType";
import GxProcedure from "../craft/GxProcedure";
import GxEcsOType from "../GxEcsOType";

/**
 * 继承工序对象的搬运器
 */
export default class GxProcCarrier extends GxProcedure {
  constructor(options?: any) {
    super(options);
    this.setOType(
      new GxOType({ otid: GxEcsOType.PROC_CARRIER, name: "Carrier" })
    );
    /**是否为入口搬运器 */
    if (!options?.attributes?.isEntry) this.attributes.isEntry = false;
    /** 所关联入口搬运器标识 */
    if (!options?.attributes?.linkedEntry) this.attributes.linkedEntry = 0;
  }

  /**
   * 判断工序对象是否有效
   */
  isValidate() {
    if (typeof this.attributes.isEntry === "undefined") return false;
    if (!this.attributes.isEntry) {
      if (
        typeof this.attributes.linkedEntry === "undefined" ||
        this.attributes.linkedEntry <= 0
      )
        return false;
    }
    return super.isValidate();
  }
}
