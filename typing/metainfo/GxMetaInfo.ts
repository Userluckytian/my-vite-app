import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
/**
 * <p>遥感数据资产元信息</p>
 *
 * @author yukun24@126.com
 * @version v.1.0-alpha
 * @date created on 2024/5/6-21:47
 */
export default class GxMetaInfo extends GxObject {
  /**属性信息，波段数、时相等*/
  props = new Map<string, any>();
  /**资产文件大小，传递过来，主要是为了统计方便*/
  fileSize?: number;
  /**范围*/
  geometry?: string;
  /**资产类型，预留字段，*/
  category?: string;
  /**存储设备ID*/
  storage?: number;
  /**主文件的相对路径，具体到文件名*/
  path?: string;
  /**数据类型:影像、矢量、高程或其他*/
  dataType?: string;
  /**数据格式，也可以称作是主数据文件的后缀，如：tif、shp等*/
  dataFormat?: string;
  /**采集时间，兼容检索*/
  acquireTime?: string;
  /**入库时间，兼容检索*/
  inputTime?: string;
  /**标记清除*/
  markForClean = false;
  user?: GxUser;
  constructor(options?: any) {
    super(options);
  }
}
