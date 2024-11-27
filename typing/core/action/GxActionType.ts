/**
 * 动作类型对象
 */
export default class GxActionType {
  static COMMENT = 5; //评论
  static COLLECT = 6; //用户偏爱（收藏）
  static FOCUS = 7; //用户偏爱（关注）
  static PRAISE = 8; //用户偏爱（点赞）
  /**
   * 动作类型标识
   */
  atid?: number;
  /**
   * 动作类型名称
   */
  name?: string;
  constructor(options?: any) {
    if (options) {
      if (options.atid) this.atid = options.atid;

      if (options.name) this.name = options.name;
    }
  }
}
