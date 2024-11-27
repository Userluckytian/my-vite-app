import GxOType from "./GxOType";
import GxUser from "./GxUser";

/** 组织成员 */
export default class GxMember extends GxUser {
  gpid?: number;
  constructor(options?: any) {
    super(options);
    if (options) {
      /**
       * 隶属的组织
       * 目的：在给组织增加成员时，需要传递组织标识
       */
      if (options.gpid) this.gpid = options.gpid;
    }
  }

  /**
   * 转化为GxMember对象
   */
  toReal() {
    if (this.isOType(GxOType.MEMBER)) return new GxMember(this);
    else return this;
  }
}
