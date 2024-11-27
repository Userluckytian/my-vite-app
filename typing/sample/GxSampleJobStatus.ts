/** 任务执行状态 */
export default class GxSampleJobStatus {
  /**等待  */
  static readonly JS_READY = 0;
  /**执行  */
  static readonly JS_RUNNING = 1;
  /**取消  */
  static readonly JS_CANCELLED = 2;
  /**完成  */
  static readonly JS_SUCCESS = 3;
  /**失败  */
  static readonly JS_FAILED = 4;
  /**数据准备  */
  static readonly JS_PREPARING = 5;
}
