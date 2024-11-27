import GxObject from "../../core/lang/GxObject";

/**
 * 数据所在的层，记录层的标识、名称等属性
 */
export default class GxRegionLayer extends GxObject {
  /**维度（0维、1维、2维、3维...） */
  dim = 0;

  /**层所包含的数据个数 */
  regionCount = 0;

  constructor(options?:any) {
    super(options);
    if (options) {
      if (options.dim) this.dim = options.dim;
      if (options.regionCount) this.regionCount = options.regionCount;
    }
  }
}
