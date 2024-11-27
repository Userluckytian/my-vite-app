import GxObject from "../../core/lang/GxObject";

/** 单位 */
export default class GxUnit {
  /** 单位唯一标识 */
  id = 1;
  /** 单位名称 */
  name = '平方米';
  pos?:GxObject;
  constructor(options?:any) {
    if (options) {
      if (options.id) this.id = options.id;
      if (options.name) this.name = options.name;
      if (options.pos) this.pos = new GxObject(options.pos);
    }
  }

  /** 创建系统域的单位对象 */
  static createSysUnit(value:string) {
    return new GxUnit({ name: value });
  }
}
