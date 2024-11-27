import GxObject from "../lang/GxObject";
import GxUser from "../lang/GxUser";

/**
 * 消息对象
 */
export default class GxNotice extends GxObject {
  /** 消息内容 */
  content?: string;

  /** 消息的所有接收者对象 */
  receivers = new Array();

  /** 消息是否已读（默认false未读） */
  bRead = false;

  /** 消息是否强提醒 */
  bWarn = false;
  /** 消息时间 */
  time?: Date;
  /** 记录与被通知用户相关对象（动作中的结果对象） */
  obj?: GxObject;
  /** 该消息在什么地方发出 */
  pos?: GxObject;
  /** 消息发送者 */
  sender?: GxUser;

  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.content) this.content = options.content;
      if (options.bRead) this.bRead = options.bRead;
      if (options.bWarn) this.bWarn = options.bWarn;
      if (options.time) this.time = new Date(options.time)
      if (options.obj) this.obj = new GxObject(options.obj);
      if (options.pos) this.pos = new GxObject(options.pos);
      if (options.sender) this.sender = new GxUser(options.sender);
      if (options.receivers) {
        for (let i = 0; i < options.receivers.length; i++) {
          this.receivers.push(options.receivers[i]);
        }
      }
    }
  }
}
