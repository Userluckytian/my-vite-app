import GxDataType from "./GxDataType";
import GxUnit from "./GxUnit";

/** 
 * 数据范式，用于定义工序生产成果的范式
 */
export default class GxDataSchema {
  /** 主键，4.1.1版本不需要了 */
  // id = 0;

  /**数据BOM */
  dataType = new GxDataType();

  /** 是否有标签; 有，表示生产的数据必须加上标签 */
  hasLabel = false;

  /** 继承前置哪一道工序的标签，若为null，则表示自定义 */
  inheritFrom = 0;

  /** 单位 */
  unit = new GxUnit();

  /** 单价/度量 */
  measure = 0;

  constructor(options?:any) {
    if (options) {
      // if (options.id) this.id = options.id;
      if (options.dataType) this.dataType = new GxDataType(options.dataType);
      if (options.hasLabel) this.hasLabel = options.hasLabel;
      if (options.inheritFrom) this.inheritFrom = options.inheritFrom;
      if (options.unit) this.unit = new GxUnit(options.unit);
      if (options.measure) this.measure = options.measure;
    }
  }
}
