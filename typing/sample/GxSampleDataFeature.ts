import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
import GxMetaInfo from "../metainfo/GxMetaInfo";
import GxSampleDataLabel from "./GxSampleDataLabel";
/**
 * <p>样本要素数据</p>
 *
 */
export default class GxSampleDataFeature {
  /**
   * 属性
   */
  attributes?: { [key: string]: any };
  /**
   * 采集工程
   */
  from?: number;
  /**
   * 范围
   */
  geom?: string;
  /**
   * 唯一标识
   */
  id?: number;
  /**
   * 模板
   */
  objClass?: { [key: string]: any };
  label?: GxSampleDataLabel;
  labelId?: number;
  constructor(options?: any) {}
}
