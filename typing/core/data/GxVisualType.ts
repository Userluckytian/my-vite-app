/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/10/7 14:16
 * @Description:可视化类型，采用或方式进行组合
 */
export default class GxVisualType {
  static readonly TEXT = 1; //字符文本
  static readonly DOC = 2; //文档文件
  static readonly TABLE = 4; //表格数据
  static readonly VECTOR = 8; //矢量图层
  static readonly RASTER = 16; //栅格图层
  static getAllVType(){
    return {
      1:"字符文本",
      2:"文档文件",
      4:"表格数据",
      8:"矢量图层",
      16:"栅格图层",
    };
  }
}
