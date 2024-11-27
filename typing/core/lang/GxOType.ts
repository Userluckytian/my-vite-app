/**  */
export default class GxOType {
  static SYSTEM = 0; // 系统
  static USER = 1; // 用户
  static GROUP = 2; // 组织
  static MEMBER = 3; // 成员
  static NOTICE = 4; // 通知
  static COMMENT = 5; // 评论
  static FIELD = 6; // 字段
  static ATTRIBUTE = 7; // 属性

  /**对象类型唯一标识 */
  otid = -1;
  name:string = "";

  constructor(options?:any) {
    if (options) {
      //说明：传入的参数不可能没有otid
      this.otid = options.otid;
      /** 对象类型名*/
      if (options.name) this.name = options.name;
    }
  }

  /**
   * 获取内核支持的组织类型列表
   * 返回GxOType数组
   */
  static groupOtArr = [
    new GxOType({ otid: GxOType.SYSTEM, name: '系统' }),
    new GxOType({ otid: GxOType.GROUP, name: '团队' }),
  ];
  static groupTypes = () => {
    return this.groupOtArr;
  }
}
