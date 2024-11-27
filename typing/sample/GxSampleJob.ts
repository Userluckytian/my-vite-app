export default class GxSampleJob {
  key?: string;
  id?: number;
  name?: string;
  /** 任务类型*/
  jobProvider?:string;
  /** 任务执行关联的执行器 */
  executor?:string;
  dataMap?: any;
  /** 创建时间 */
  creationTime?: string;
  /** 执行时间 */
  tookTime?: string;
  /** 完成时间 */
  finishedTime?: string;
  /** 状态 */
  status?: number;
  /** 重试次数 */
  retryCount?: number;
  /** status = 4的时候回显这个异常消息  */
  lastError?: string;
  constructor(options?: any) {}
}
