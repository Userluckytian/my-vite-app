/**
 * @author yukun24@126.com
 * @version v1.0-beta
 * @date created on 2024/6/5:12:15
 * @description 标志库样本点关联的遥感实例样本切片，基于样本点对应的图斑对影像进行切片
 * 不相交的切片不需要生成 （切片大小：256*256）
 */
export default class GxMarkSampleDataImageTile {
  id?: number;
  /**
   * 遥感影像样本切片命名规则
   * RFS-RP-ST-NO-CD-PN-NM
   * RFS：遥感影像实例文件切片标识符号。
   * NM:同一位置的切片序号，格式为三位数字，如001、002。
   * 其它符号说明见遥感影像实例文件命名规则。
   */
  name?: string;
  /**关联的样本点遥感实例影像*/
  markSampleImageId?: number;
  /**关联的标志样本点ID*/
  markSampleId?: number;
  /**关联的标志样本点编号*/
  pmarkSampleName?: string;
  /**存储设备ID*/
  storage?: number;
  /**将tif路径转成可以web端读取的png url地址*/
  path?: string;
}
