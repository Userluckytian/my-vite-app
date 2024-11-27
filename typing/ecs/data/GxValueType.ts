/** 参数类型 */
export default class GxValueType {
  // 文件夹
  static DIRECTORY = 0;
  // 文件
  static FILE = 1;
  // 其他
  static OTHER = 2;

  static typeName = (type: number) => {
    let name = '其他';
    if (type === GxValueType.DIRECTORY) name = '文件夹';
    else if (type === GxValueType.FILE) name = '文件';
    return name;
  }

  static getAllValMap(){
    return {
      0:"文件夹",
      1:"文件",
      2:"其他"
    }
  }
}

