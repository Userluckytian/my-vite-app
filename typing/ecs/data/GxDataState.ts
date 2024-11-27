/** 数据在流转过程中的状态 */
export default class GxDataState {
  // 正常数据
  static NORMAL = 1;
  // 生产报废数据
  static INVALID = 2;
  // 质检不通过数据
  static REJECTED = 3;
  // 有效数据
  static VALID = 4;
}
