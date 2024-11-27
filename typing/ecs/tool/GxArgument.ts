import GxDomain from "../../core/data/GxDomain";
import GxUIType from "../../core/data/GxUIType";
import GxVisualType from "../../core/data/GxVisualType";
import GxValueType from "../data/GxValueType";

/** 工具参数 */
export default class GxArgument {
  /** 值唯一标识 */
  id: number = 0;

  /** 参数名称*/
  name: string = '';

  /** 参数描述*/
  description: string = '';

  /** 参数值*/
  value: string = '';

  /** 参数前缀*/
  prefix: string = '';

  /** 连接符，默认是空格，连接参数前缀和参数值，支持（空格）、等号（=）*/
  connector: string = ' ';

  /** 值分割符,默认是逗号，参数值之间的分割符，支持（空格）、逗号（，）、分号（；） */
  delimiter: string = ',';

  /** 值的个数：>0:具体整数；0:任意整数 */
  count: number = 1;

  /** 值类型(0-文件夹；1-文件；2-其他) */
  valueType: number = GxValueType.OTHER;

  /** 值模板,默认值* */
  pattern: string = '*';

  /** 是否创建目录,只有在值类型是（文件夹）时才起作用 */
  createDir: boolean = false;

  /** 参数key */
  key?: string;

  /** 
   * 值域，以模型串接流程的方式
   * 注意：有值域时，默认值必须有值
   */
  domain: GxDomain = null;

  /**
    * 参数的界面样式
    */
  uiType: string = GxUIType.TEXT.code;

  /**
   * 该参数的可视化方式
   */
  visualType: number = GxVisualType.TEXT;

  constructor(options?: any) {
    if (options) {
      if (options.id) this.id = options.id;
      if (options.name) this.name = options.name;
      if (options.description) this.description = options.description;
      if (options.value) this.value = options.value;
      if (options.prefix) this.prefix = options.prefix;
      if (options.connector) this.connector = options.connector;
      if (options.delimiter) this.delimiter = options.delimiter;
      if (options.count || options.count === 0) this.count = options.count;
      if (options.valueType || options.valueType === 0) this.valueType = options.valueType;
      if (options.pattern) this.pattern = options.pattern;
      if (options.createDir) this.createDir = options.createDir;
      if (options.key) this.key = options.key;
      if (options.domain) this.domain = new GxDomain(options.domain);
      if (options.uiType) this.uiType = options.uiType;
      if (options.visualType) this.visualType = options.visualType;
    }
  }

  /**
   * 从arc参数中拷贝value相关信息
   * @param arg 
   */
  copyValue = (arg: GxArgument) => {
    if (!arg || this.id !== arg.id) return;
    this.value = arg.value;
    this.pattern = arg.pattern;
    this.domain = new GxDomain(arg.domain);
    this.uiType = arg.uiType;
    this.visualType = arg.visualType;
  }
}
