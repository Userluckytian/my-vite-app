import GxObject from "../lang/GxObject";
import GxUser from "../lang/GxUser";

/**
 * 评论对象
 */
export default class GxComment extends GxObject {
  /** 累计被吐槽或评论次数 */
  count?: number;
  /** 评论的时间 */
  time?: Date;
  /** 进行评论和吐槽的用户 */
  user?: GxUser;
  /** 被评论的对象，只有前端才会传值到后台，后台不返回值到前台 */
  obj?: GxObject;
  /** 在什么位置进行评论 */
  pos?: GxObject;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.count) this.count = options.count;
      if (options.time) this.time = new Date(options.time);
      if (options.user) this.user = new GxUser(options.user);
      if (options.obj) this.obj = new GxObject(options.obj);
      if (options.pos) this.pos = new GxObject(options.pos);
    }
  }
}
