/**
 * @author yukun24@126.com
 * @version v1.0-beta
 * @date created on 2024/6/5:11:30
 * @description 标志库样本点数据关联的遥感数据实例
 * 要求：样本点数据要尽量落在影像数据的中心，采集生产标志样本时自动计算裁剪得到实例影像数据
 */
export default class GxMarkSampleDataImage {
  id?: number;
  /**
   * 实例数据标命名规则
   * RF-TJ-GF1B-SP-130224-00001-2023-06-03T105800-1228304886
   * RF-RP-ST-NO-CD-PN
   * RF：遥感影像实例文件标识符号。
   * RP：遥感平台标识符号，包括天基卫星（TJ）、空基遥感(KJ)、航空无人机(HK)、移动监测（YD）等；
   * ST：卫星代码，即所用影像的英文代码，如GF1、GF2等，如无代码，用XX代替。
   * NO：样本点编号。
   * CD：影像拍摄时间，格式为YYYYMMDDHHMMSS。
   * PN：遥感影像实例文件名称唯一性附加符，如遥感影像产品号 或 ID等。
   */
  name?: string;
  /**
   * 裁剪后的遥感数据实例的路径，后缀可以是tif或img
   * 数据库存的是相对storage的相对路径
   * 查询时的path为一个tif或img文件地址可预览的url，前端拿到这个url可以构建一个栅格瓦片的图层
   */
  path?: string;
  /**文件存储标识*/
  storage?: number;
  /**关联的标志样本点ID*/
  markSampleId?: number;
  /**关联的标志样本点编号*/
  markSampleName?: string;
  /**
   * 遥感平台（RemoteSensing Platform），依据影像实际来源填写，如天基卫星（TJ）、空基遥感 (KJ)、
   * 航空无人机(HK)、移动监测（YD）等等
   */
  platform?: string;
  /**
   * 卫星代码
   * 与影像数据源相同
   * 即所用影像数据源的英文代码，如GF1、GF2等，如无代码，用XX代替。
   */
  satellite?: string;
  /**
   * 影像分辨率与影像数据源相同
   */
  resolution?: number;
  /**
   * 影像波段数与影像数据源相同
   */
  bands?: number;
  /**
   * 影像拍摄时间与影像数据源相同
   * 填写格式为: YYYY-MM-DDTHH:MM:SS。
   * 不能准确填写的部分用0补齐。
   * 如：2022-11-26T04:23:06
   */
  photoTime?: string;
  /**遥感数据的空间范围*/
  geom?: string;
  constructor(options?: any) {}
}
