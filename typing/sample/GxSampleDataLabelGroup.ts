import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";

export default class GxSampleDataLabelGroup {
  /** 标注标签分组ID */
  id?: number;
  /** 标注标签分组名称（同位置下，名称唯一） */
  name?: string;
  /** 标注标签分组描述 */
  desc?: string;
  /** 标注标签创建用户 */
  user?: GxUser;
  /** 标注标签所在的位置 */
  pos?: GxObject;
  /** 标注标签创建时间 */
  cTime?: string;
  /** 标注标签修改时间 */
  uTime?: string;
  constructor(options?: any) {
    if (options && options.id) {
      this.id = options.id;
    }
    if (options && options.name) {
      this.name = options.name;
    }
    if (options && options.desc) {
      this.desc = options.desc;
    }
    if (options && options.desc) {
      this.desc = options.desc;
    }
    if (options && options.pos) {
        this.pos = new GxObject(options.pos);
      }
      if (options && options.user) {
        this.user = new GxUser(options.user);
      }
      if (options && options.cTime) {
        this.cTime = options.cTime;
      }
      if (options && options.uTime) {
        this.uTime = options.uTime;
      }
  }
}
