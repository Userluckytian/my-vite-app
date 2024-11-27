import GxObject from "./GxObject";
import GxRole from "./GxRole";
export default class GxUser extends GxObject {
  /** name为账户信息，此处alias为用户的别名 */
  alias = '';
  /** 用户头像 */
  avatar = '';
  /** 用户角色 */
  role? : GxRole = new GxRole();
  /** 用户额外信息 */
  info?: Map<string,any>;
  /** 用户所在位置 */
  pos?:GxObject;
  cTime?:Date;
  uTime?:Date;
  constructor(options?:any) {
    super(options);
    if (options) {
      if (options.alias) this.alias = options.alias;
      if (options.avatar) this.avatar = options.avatar;
      if (options.role) this.role = new GxRole(options.role);
      /** 用户在什么位置，WHERE */
      if (options.pos) this.pos = new GxObject(options.pos);
      /** 用户信息创建和更新时间，WHEN*/
      if (options.cTime) this.cTime = new Date(options.cTime)
      if (options.uTime) this.uTime = new Date(options.uTime);
    }
  }
}