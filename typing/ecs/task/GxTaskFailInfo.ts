/** 任务失败信息 */
export default class GxTaskFailInfo {
  static DEBUG = 0;
  static INFO = 1;
  static WARN = 2;
  static ERROR = 3;
  /** 任务ID */
  taskId = 0;
  /** IP地址（如果为自动化终端计算，则展示机器IP） */
  execIp = "";
  /** 执行命令（如果为自动化终端计算，则展示执行命令） */
  execCmd = "";
  /** 异常原因 */
  detail = "";
  /** 错误日志（工具打印的日志， 执行器截取工具输出的最近的20条日志，反馈给ECS） */
  errorLog = "";
  /** 异常时间 */
  time = "";
  /** 版本号 */
  version = 0;
  /** 日志级别,ERROR > WARN > INFO > DEBUG*/
  level = 0;
  constructor(options?:any) {
    Object.assign(this, options);
  }
}
