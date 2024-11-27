import GxFileMetaItem from "./GxFileMetaItem";
import GxFileRule from "./GxFileRule";
/**
 * 文件规则的实例化对象
 */
export default class GxFileMeta {
  /** 满足文件规则的文件列表内容 */
  content = new Array();
  /** 文件规则 typeof GxFileRule*/
  fileRule?: GxFileRule;
  constructor(options?: any) {
    if (options) {
      if (options.fileRule) this.fileRule = new GxFileRule(options.fileRule);
      if (options.content) {
        this.content = new Array();
        for (let i = 0; i < options.content.length; i++) {
          this.content.push(new GxFileMetaItem(options.content[i]));
        }
      }
    }
  }

  /**
   * 判断该对象是否有效
   */
  isValidate = () => {
    let validate = true;
    if (
      this.fileRule &&
      this.fileRule.count > 0 &&
      this.fileRule.count != this.content?.length
    ) {
      validate = false;
    }

    for (let i = 0; i < this.content.length; i++) {
      const item = this.content[i];
      if (!item.isValidate()) {
        validate = false;
        break;
      } else {
        if (this.fileRule && !this.fileRule.validate(item.url)) {
          validate = false;
          break;
        }
      }
    }
    return validate;
  };
}
