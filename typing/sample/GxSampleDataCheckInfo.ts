import GxUser from "../core/lang/GxUser";
import GxFileIndex from "../file/GxFileIndex";

/**
 * <p>样本数据核查信息（外业核查，与Web端联动）</p>
 *
 * @author appleyk
 * @version v.1.0-alpha
 * @date created on 2024/5/7-10:08
 */
export default class GxSampleDataCheckInfo {
  id?: number;
  /**关联的样本数据ID*/
  sampleDataId?: number;
  /**文件上传后对应的服务端的文件索引对象,基于这个对象可以预览文件流（图片、文档、视频等）*/
  fileIndex?: GxFileIndex;
  /**二级类编码，如：442*/
  typeCode?: string;
  /**二级类编码对应的名称，如：442对应湖泊*/
  typeName?: string;
  /**现场审核人*/
  user?: GxUser;
  /**现场核查描述*/
  desc?: string;
  /**审核时间 */
  cTime?: string;
  constructor(options?: any) {
  }
}
