/**
 * 工具运行操作系统类型
 */
export default class GxOsType {
  // Windows
  static WINDOWS = 1;
  // Linux
  static LINUX = 2;
  // Mac
  static MAC = 3;

  static osTypeArr = [
    new GxOsType(GxOsType.WINDOWS, "Windows"),
    new GxOsType(GxOsType.LINUX, "Linux"),
    new GxOsType(GxOsType.MAC, "Mac"),
  ];

  /** 操作系统类型值 */
  type = 1;
  /** 操作系统类型字符串 */
  name = "Windows";

  constructor(type = 1, name = "Windows") {
    this.type = type;
    this.name = name;
  }

  /**
   * 获取操作系统类型列表
   */
  static list = () => {
    this.osTypeArr;
  };

  /**
   * 根据类型，获取操作系统信息
   * @param {int} type
   */
  static get = (type: number) => {
    let _type = null;
    for (let i = 0; i < this.osTypeArr.length; i++) {
      if (type === this.osTypeArr[i].type) {
        _type = this.osTypeArr[i];
        break;
      }
    }
    return _type === null ? this.osTypeArr[0] : _type;
  };
}
