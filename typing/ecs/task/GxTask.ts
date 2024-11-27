import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxProcedure from "../craft/GxProcedure";
import GxProject from "./GxProject";
import GxTaskFailInfo from "./GxTaskFailInfo";

/**
 * 任务
 */
export default class GxTask extends GxObject {
  // 未知状态
  static NULL = 0;
  /**
   * 待领取状态标记2^0,
   * 进行中状态标记2^1,
   * 异常状态标记2^2,
   * 预留标记2^3。
   */
  static CLAIM = 1;
  static HANDLE = 2;
  static ABNORMAL = 4;
  // 生产状态2^4
  static WORK = 16;
  static STATE_WORK = "生产";
  // 质检状态2^5
  static CHECK = 32;
  static STATE_CHECK = "质检";
  // 修订状态2^6,预留标记2^7，2^8
  static REVISE = 64;
  static STATE_REVISE = "修订";
  // 完成状态2^9
  static FINISH = 512;

  /** 标签 */
  label = "";

  /** 任务状态 */
  status = 0;
  /** 任务之前的状态 */
  oldStatus = 0;

  /** 消耗工时 */
  consumedHours = 0;

  /** 生产序列号 */
  sn = 0;

  /** 任务是否质检 */
  qc = false;

  /** 版本号控制*/
  version = 0;

  /** 任务的总量（只查询不持久化） */
  total = 0;

  /** 是否归档 */
  archive = false;
  /** 所属团队 */
  pos?: GxObject;
  /** 当前作业人员 */
  curtWorker?: GxUser;
  /** 前一阶段作业人员 */
  preWorker?: GxUser;
  /** 所属工序 */
  procedure?: GxProcedure;
  /** 所属项目 */
  project?: GxProject;
  /** 领取时间 */
  createTime?: Date;
  /** 领取时间 */
  takeTime?: Date;
  /** 提交时间 */
  submitTime?: Date;

  /** 持续时间 */
  durationTime?: Date;
  /** 异常信息 */
  taskFailInfo?: GxTaskFailInfo;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.label) this.label = options.label;
      if (options.status) this.status = options.status;
      if (options.oldStatus) this.oldStatus = options.oldStatus;
      if (options.consumedHours) this.consumedHours = options.consumedHours;
      if (options.sn) this.sn = options.sn;
      if (options.qc) this.qc = options.qc;
      if (options.version) this.version = options.version;
      if (options.total) this.total = options.total;
      if (options.archive) this.archive = options.archive;
      if (options.pos) this.pos = new GxObject(options.pos);
      if (options.curtWorker) this.curtWorker = new GxUser(options.curtWorker);
      if (options.preWorker) this.preWorker = new GxUser(options.preWorker);
      if (options.procedure)
        this.procedure = new GxProcedure(options.procedure);
      if (options.project) this.project = new GxProject(options.project);
      if (options.createTime) this.createTime = new Date(options.createTime);
      if (options.takeTime) this.takeTime = new Date(options.takeTime);
      if (options.submitTime) this.submitTime = new Date(options.submitTime);
      if (options.durationTime) this.durationTime = new Date(options.durationTime);
      if (options.taskFailInfo)
        this.taskFailInfo = new GxTaskFailInfo(options.taskFailInfo);
    }
  }
}
