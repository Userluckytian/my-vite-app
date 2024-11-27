import GxSortFilter from "../../core/filter/GxSortFilter";

/**
 * 标志库样本数据查询过滤器
 */
export default class GxMarkSampleFilter extends GxSortFilter {
  /** 行政区划ID */
  regionId?: number;
  /** 几何范围 */
  geom?: string;
  /** 一级分类编码 */
  firstClsCode?: string;
  /** 一级分类编码 */
  secondClsCode?: string;
  /** 一级分类编码 */
  thirdClsCode?: string;
  constructor(options?: any) {
    super(options);
    if (options && options.regionId) {
      this.regionId = options.regionId;
    }
    if (options && options.geom) {
      this.geom = options.geom;
    }
    if (options && options.firstClsCode) {
      this.firstClsCode = options.firstClsCode;
    }
    if (options && options.secondClsCode) {
      this.secondClsCode = options.secondClsCode;
    }
    if (options && options.thirdClsCode) {
      this.thirdClsCode = options.thirdClsCode;
    }
  }

  /**
   * 去除所有未定义或空值属性
   */
  trim() {
    super.trim();
    if (this.isNone(this.regionId)) delete this.regionId;
    if (this.isNone(this.geom)) delete this.geom;
    if (this.isNone(this.firstClsCode)) delete this.firstClsCode;
    if (this.isNone(this.secondClsCode)) delete this.secondClsCode;
    if (this.isNone(this.thirdClsCode)) delete this.thirdClsCode;
    return this;
  }
}
