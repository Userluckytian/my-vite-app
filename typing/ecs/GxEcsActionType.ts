import GxActionType from "../core/action/GxActionType";

export default class GxEcsActionType extends GxActionType {
  static START = 10; //下发
  static COMMIT = 11; //提交
  static FINISH = 12; //完成
  static PAUSE = 13; //暂停
  static ABANDON = 14; //放弃
  static ROLLBACK = 15; //回滚
  static TAKE = 16; //领取
  static REPLACE_MANAGER = 17; //更换负责人
  static CHECK_PASS = 18; //质检通过
  static CHECK_REFUSE = 19; //质检打回
  static DISPATCH = 20; //指派
  static RESET = 21; //重置
  static RESUME = 22; //恢复
  static URGE = 23; //催办
  static FEED = 24; //投料
}
