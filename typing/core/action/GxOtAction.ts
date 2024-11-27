import GxOType from "../lang/GxOType";
import GxActionType from "./GxActionType";

/**
 * 用户操作动作类型（该动作类型包括操作结果对象类型和动作类型）
 */
export default class GxOtAction {
  static readonly ACTION = 1; //标记为：操作
  static readonly DYNAMIC = 2; //标记为：动态
  static readonly NOTICE = 4; //标记为：通知
  /** 动作类型*/
  at?: GxActionType;
  /** 操作的结果对象类型标识*/
  rtype?: GxOType;
  /** 对动作类型进行区分的标记，例如：动态、操作记录，可以混合 */
  flag: number = GxOtAction.ACTION;
  constructor(options?: any) {
    if (options) {
      if (options.at) this.at = new GxActionType(options.at);
      if (options.rtype) this.rtype = new GxOType(options.rtype);
      if (options.flag) this.flag = options.flag;
    }
  }
}
