import GxObject from "../../core/lang/GxObject";

/** 
 * 工序的质检配置
 * */
export default class GxQcConfig {
  // 是否打回给原作业员，默认是false
  dispatchToWorker = false;

  /**
   * 质检员列表，有序
   * 如果对象的类型是：用户，标识选择是质检员
   * 如果对象的类型是：工序，标识选择是前置一级继承的工序
   */
  checkers = new Array();

  constructor(options?:any) {
    if (options) {
      if (options.dispatchToWorker) this.dispatchToWorker = options.dispatchToWorker;
      if (options.checkers) {
        for (let i = 0; i < options.checkers.length; i++) {
          this.checkers.push(new GxObject(options.checkers[i]));
        }
      }
    }
  }
}
