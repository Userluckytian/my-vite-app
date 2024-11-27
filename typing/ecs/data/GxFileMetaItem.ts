import GxValueType from "./GxValueType";

/** 具体的文件*/
export default class GxFileMetaItem {
  /** 文件名称 */
  name = '';

  /** 文件URL */
  url = '';

  /** 值得类型 */
  type: number = GxValueType.OTHER;

  constructor(options?: any) {
    if (options) {
      if (options.name) this.name = options.name;
      if (options.url) this.url = options.url;
      if (options.type || options.type === 0) this.type = options.type;
    }
  }

  /**
   * 判断该对象是否有效
   */
  isValidate = () => {
    if (this.name?.length === 0 || this.url?.length === 0) return false;
    else return true;
  }
}
