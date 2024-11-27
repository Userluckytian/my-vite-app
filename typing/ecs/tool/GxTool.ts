import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxArgument from "./GxArgument";
import GxOsType from "./GxOsType";
import GxToolCategory from "./GxToolCategory";

/**
 * 工具
 */
export default class GxTool extends GxObject {
  /** 工具的执行文件名称，程序执行名 */
  realName: string = "";

  /** 工具描述 */
  description: string = "";

  /**
   * 参数分隔符,支持（空格）、逗号（，）、分号（；）
   * 默认使用（空格)，原因：aphache CommandLine只支持空格
   */
  delimiter: string = " ";

  /** 工具参数表 */
  arguments:Array<GxArgument> = [];

  /** 工具类型 */
  category: number = GxToolCategory.APPLICATION;

  /** 执行环境操作系统要求 */
  os: number = GxOsType.WINDOWS;

  /** 工具的英文名称 */
  enName?: string;

  /** 工具存储在云端的位置*/
  url?: string;

  /**
   * 工具所用的编程语言
   * 注意：只有在云端会用到，在终端用不上
   */
  language?: string;

  /**
   * 工具所用编程语言的版本
   * 注意：只有在云端会用到，在终端用不上
   */
  lgVersion?: string;

  /** 工具字符编码*/
  encode?: string;

  /** 工具的标签 */
  tags: Array<string> = [];

  /** 创建者 */
  author?: GxUser;
  /** 所属团队 */
  pos?: GxObject;
  /** 创建时间 */
  createTime?: Date;
  /** 更新时间 */
  updateTime?: Date;

  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.realName) this.realName = options.realName;
      if (options.description) this.description = options.description;
      if (options.delimiter) this.delimiter = options.delimiter;
      if (options.category) this.category = options.category;
      if (options.os) this.os = options.os;
      if (options.author) this.author = new GxUser(options.author);
      if (options.pos) this.pos = new GxObject(options.pos);
      if (options.arguments) {
        for (let i = 0; i < options.arguments.length; i++) {
          this.arguments.push(new GxArgument(options.arguments[i]));
        }
      }
      if (options.createTime) this.createTime = new Date(options.createTime);
      if (options.updateTime) this.updateTime = new Date(options.updateTime);
      if (options.enName) this.enName = options.enName;
      if (options.url) this.url = options.url;
      if (options.language) this.language = options.language;
      if (options.lgVersion) this.lgVersion = options.lgVersion;
      if (options.encode) this.encode = options.encode;
      if (options.tags) this.tags = new Array(...options.tags);
    }
  }

  /**
   * 从别的参数列表中拷贝参数值
   */
  copyArgValues = (args: Array<GxArgument>) => {
    for (let i = 0; i < this.arguments.length; i++) {
      const argument = this.arguments[i];
      const index = args.findIndex((el) => el.id === argument.id);
      if (index !== -1) {
        argument.copyValue(args[index]);
      }
    }
  };
}
