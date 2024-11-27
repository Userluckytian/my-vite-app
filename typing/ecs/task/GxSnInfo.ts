import GxObject from "../../core/lang/GxObject";

/** 项目批次信息 */
export default class GxSnInfo {
  /**进行中 */
  static SN_DOING = 0;

  /**已完成 */
  static SN_FINISHED = 1;

  /**异常 */
  static SN_ABNORMAL = 2;

  /** 批次号 */
  sn = 0;

  /** 批次状态，0:进行中；1:已完成；2:异常 */
  snStatus = GxSnInfo.SN_DOING;

  /** 运行的任务列表 */
  runningTask = new Array();
   /** 开始时间 */
  startTime?: Date;

  constructor(options?: any) {
    if (options) {
      if (options.sn) this.sn = options.sn;
      if (options.snStatus) this.snStatus = options.snStatus;
      if (options.startTime) this.startTime = new Date(options.startTime);
      if (options.runningTask) {
        for (let i = 0; i < options.runningTask.length; i++) {
          this.runningTask.push(new GxObject(options.runningTask[i], true));
        }
      }
    }
  }
}
