import GxVisualType from "../../core/data/GxVisualType";
import GxValueType from "./GxValueType";

/** 文件规则 */
export default class GxFileRule {
  /** 文件名的约束模板，通常文件都按文件后缀名进行约束，
   * 例如shp、dbf等,在复杂情况下，该模板支持正则表达式 
   */
  pattern: string = '*';

  /** 是否有数量限制 0标识不限制 >0标识固定数量 */
  count: number = 1;

  /**标识在该数据类型中是否是入口文件，
   * 例如shape file数据类型，其入口文件为*.shp 
   */
  entry: boolean = false;

  /** 是否必须保持文件名一致，若为真，则必须以其他标记了nameDuplicated的文件名称一样 */
  nameDuplicated: boolean = false;

  /** 为兼容4.0.5以下版本，标识【数据是否为文件夹】， */
  directory: boolean = false;

  /** 值类型(0-文件夹；1-文件；2-其他) */
  valueType: number = GxValueType.OTHER;

  /** 对规则的描述信息 */
  description: string = '';

  /**
   * 输出内容的KEY
   * 注意：入口文件必须有KEY
   */
  key?: string;

  /**
   * 该输出的可视化方式
   */
  visualType: number = GxVisualType.TEXT;

  // id?:number;

  constructor(options?: any) {
    if (options) {
      if (options.pattern) this.pattern = options.pattern;
      if (options.count || options.count === 0) this.count = options.count;
      if (options.entry) this.entry = options.entry;
      if (options.nameDuplicated) this.nameDuplicated = options.nameDuplicated;
      if (options.directory) this.directory = options.directory ? true : false;
      if (options.valueType || options.valueType === 0) this.valueType = options.valueType;
      if (options.description) this.description = options.description;
      if (options.key) this.key = options.key;
      if (options.visualType) this.visualType = options.visualType;
      // if (options.id) this.id = options.id;
    }
  }

  /**
   * 获取该文件规则的唯一标识：值类型+pattern
   * 返回值为String类型
   * 说明：值类型(0-文件夹；1-文件；2-其他)
   */
  uniqueId() {
    let vt = this.valueType === 2 ? this.valueType : (this.directory ? 0 : 1);
    return vt.toString() + this.pattern;
  }

  /**
   * 判断url是否符合模板
   */
  validate(url: string) {
    const _pattern = this.pattern.replace("*", "[\\S\\s]*");
    const regex = new RegExp(_pattern, "ig");
    return regex.test(url);
  }
}
