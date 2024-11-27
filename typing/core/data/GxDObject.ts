import GxRow from "./GxRow";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/9/25 10:55
 * @Description:一个具体数据对象
 */
export default class GxDObject extends GxRow {
  static readonly GEOMETRY = 4; //数据的位置部分
  static readonly ATTRIBUTES = 8; //数据的私有属性部分
  /**
   * 描述数据对象的位置信息
   */
  geom?: string;
  /**
   * 数据对象的私有属性信息
   */
  attributes?: Map<string, any>;

  constructor(options?: any) {
    super(options);
    if (options && options.geom) {
      this.geom = options.geom;
    }
    if (options && options.attributes) {
        this.attributes = options.attributes;
      }
  }
}
