import GxUser from "../lang/GxUser";

/**
 * 消息接收者对象
 */
export default class GxReceiver {
  /** 消息是否已读 */
  bRead = false;
  /** 消息的接收者对象 */
  receiver?: GxUser;
  constructor(options?: any) {
    if (options) {
      if (options.bRead) this.bRead = options.bRead;
      if (options.receiver) this.receiver = new GxUser(options.receiver);
    }
  }
}
