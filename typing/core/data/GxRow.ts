import GxObject from "../lang/GxObject";
import GxOType from "../lang/GxOType";
import GxDataOType from "./GxDataOType";
import GxDimension from "./GxDimension";
import GxVisualType from "./GxVisualType";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/3/8 19:55
 * @Description: 表中一条记录
 */
export default class GxRow extends GxObject {
  /** 数据的共有属性部分 */
  static readonly VALUES = 2;
  /**
   * 数据的维度，包括：0维、1维、2维、3维
   */
  dim = GxDimension.ZERO_D;
  /**
   * 来源于哪个数据对象，0为没有来源
   * 例如某条记录来源于某个csv文件
   */
  from?: GxObject;
  /**
   * 一条记录的共性属性值
   * 说明：key为字段名称，value为属性值
   * 属性 Key name ,Object Value
   */
  values?: Map<string, any>;
  /**
   * 该记录所关联的表对象，前端传递时用于按照属性值进行更新
   */
  table?: GxObject;
  /**
     * 文件可视化方式
     */
  visualType = GxVisualType.TABLE;

  constructor(options?:any){
    super(options)
    this.dim = (options && options.dim) || 0;
    if (options && options.from) {
        this.from = new GxObject(options.from);
    }
    if (options && options.values) {
        this.from = options.values;
    }
    if (options && options.table) {
        this.from = new GxObject(options.table);
    }
    if (options && options.visualType) {
        this.visualType = options.visualType;
    }
    this.setOType(new GxOType({otid:GxDataOType.ROW,name:""}));
  }
}
