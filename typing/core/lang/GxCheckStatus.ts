/** 对象审核状态 */
export default class GxCheckStatus {
  static DELETE = 0;// 已删除
  static PENGING = 1;// 待审核
  static PASSED = 2;// 已通过
  static TIPOFF = 4;// 被举报
  static LOCKED = 8;// 被锁定
  static NOPASS = 16;// 未通过
}

