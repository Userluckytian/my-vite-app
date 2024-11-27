import GxObject from "../lang/GxObject";
import GxUser from "../lang/GxUser";
import GxActionType from "./GxActionType";

/**
 * 用户操作对象的动作
 */
export default class GxAction {
  /** 动作ID */
  aid?: number;
  /** 动作内容，记录用户操作的动作内容 */
  rcontent?: string;
  /** 动作的操作（创建）时间  */
  time?:Date ;
  /** 动作类型 */
  actionType?: GxActionType;
  /**
   * 用户标识，执行动作的人
   * 注意：当查询某个用户所做动作时，该对象为NULL
   */
  user?: GxUser = new GxUser({ id: 0 });
  /** 被操作的对象，该对象类型与 动作类型 中的被操作对象类型保持一致 */
  obj?: GxObject;
  /** 操作的结果对象，与 对象的动作类型 中的结果对象类型保持一致 */
  result?: GxObject;
  /** 动作发生的位置信息 */
  pos?: GxObject;
  
  constructor(options?: any) {
    if (options) {
      if (options.aid) this.aid = options.aid;
      if (options.rcontent) this.rcontent = options.rcontent;
      if (options.time) this.time = new Date(options.time);
      if (options.actionType) {
        this.actionType = new GxActionType(options.actionType);
      }
      if (options.user) this.user = new GxUser(options.user);
      if (options.obj) this.obj = new GxObject(options.obj);
      if (options.result) this.result = new GxObject(options.result);
      if (options.pos) this.pos = new GxObject(options.pos);
    }
  }
}
