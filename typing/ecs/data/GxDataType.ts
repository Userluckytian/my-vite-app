import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxArgument from "../tool/GxArgument";
import GxDataTypeCategory from "./GxDataTypeCategory";
import GxFileRule from "./GxFileRule";
/**
 * 数据类型（物料）
 */
let num = 1;
export default class GxDataType extends GxObject {
  /** 图标 */
  logo = "";

  /** 维度：0维、1维、2维、3维 */
  dim = 0;

  /** 版本，即物料型号 */
  version = "";

  /** 描述信息 */
  description = "";

  /** 物料类型（1:数据；2:实物） */
  category = GxDataTypeCategory.DATA;

  /** 文件规则 */
  fileRules: Array<GxFileRule> = [];
  /** 创建者 */
  author?: GxUser;
  /** 所属位置对象 */
  pos?: GxObject;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.logo) this.logo = options.logo;
      if (options.dim) this.dim = options.dim;
      if (options.version) this.version = options.version;
      if (options.description) this.description = options.description;
      if (options.author) this.author = new GxUser(options.author);
      if (options.pos) this.pos = new GxObject(options.pos);
      if (options.category) this.category = options.category;
      if (options.fileRules) {
        for (let i = 0; i < options.fileRules.length; i++){
          var rule = new GxFileRule(options.fileRules[i]);
          // rule.id = num++;
          this.fileRules.push(rule);
        }
          
      }
    }
  }

  /**
   * 添加文件规则
   * @param {GxFileRule} fileRule
   * @returns 增加成功返回true，否则返回false
   */
  add(fileRule: GxFileRule) {
    for (let i = 0; i < this.fileRules.length; i++) {
      if (fileRule.uniqueId() === this.fileRules[i].uniqueId()) return false;
    }
    this.fileRules.push(fileRule);
    return true;
  }

  /**
   * 判断是否包含文件规则
   * @param {GxFileRule} fileRule
   * @returns 包含返回true，否则false
   */
  hasFileRule(fileRule: GxFileRule) {
    for (let i = 0; i < this.fileRules.length; i++) {
      if (fileRule.uniqueId() === this.fileRules[i].uniqueId()) return true;
    }
    return false;
  }

  /**
   * 移除指定ID的文件规则对象
   * @param {String} id
   */
  removeById(id: string | number) {
    for (let i = 0; i < this.fileRules.length; i++) {
      if (id == this.fileRules[i].uniqueId()) {
        this.fileRules.splice(i, 1);
        return;
      }
    }
  }

  /**
   * 移除指定文件规则
   * @param {GxFileRule} fileRule
   */
  remove(fileRule: GxFileRule) {
    this.removeById(fileRule.uniqueId());
  }

  /**
   * 根据工具参数判断该BOM的合法性
   * 说明：参数值类型(0-文件夹；1-文件；2-其他)
   * @param {GxArgument} argument
   * @returns 合法返回true，否则返回false
   */
  isLegal(argument: GxArgument) {
    //参数类型为2的肯定合法
    if (argument.valueType === 2) return true;
    for (let rule of this.fileRules) {
      if (argument.valueType <= (rule.directory ? 0 : 1)) return true;
    }
    return false;
  }

  /**
   * 根据工具参数适配合适Pattern
   * 说明：参数值类型(0-文件夹；1-文件；2-其他)
   * @param {GxArgument} argument
   * @returns 返回
   */
  adaptPattern(argument: GxArgument) {
    let maxVt = 0;
    for (let rule of this.fileRules) {
      let vt = rule.directory ? 0 : 1;
      if ((vt == argument.valueType) && rule.entry) return rule.pattern;
      maxVt = maxVt < vt ? vt : maxVt;
    }
    if (maxVt > argument.valueType) return "./";
    else return "*";
  }
}
