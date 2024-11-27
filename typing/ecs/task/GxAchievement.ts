import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxData from "../data/GxData";
import GxTaskStatus from "./GxTaskStatus";

/**
 * 每个任务对应的成果
 */
export default class GxAchievement extends GxObject {
  /** 花费时间 */
  costHour = 0;

  /** 登记的作业量 */
  workload = 0;

  /** 成果数据列表 */
  data = new Array();

  /** 成果提交时任务的状态 */
  oldStatus = GxTaskStatus.NULL;

  /** 成果提交后任务的状态 */
  status = GxTaskStatus.NULL;

  /** 成果描述：比如生产、质检、修订 */
  description = "";
  /** 所属项目 */
  project?: GxObject;

  /** 所属工序 */
  procedure?: GxObject;
  /** 所属任务 */
  task?: GxObject;
  /** 开始时间和结束时间 */
  beginTime?: Date;
  endTime?: Date;
  /** 作业人员 */
  worker?: GxUser;
  /** 成果对应的数据是谁的 */
  dataWorker?: GxUser;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.project) this.project = new GxObject(options.project, true);
      if (options.procedure)
        this.procedure = new GxObject(options.procedure, true);
      if (options.task) this.task = new GxObject(options.task, true);
      if (options.beginTime) this.beginTime = new Date(options.beginTime);
      if (options.endTime) this.endTime = new Date(options.endTime);
      if (options.costHour) this.costHour = options.costHour;
      if (options.workload) this.workload = options.workload;
      if (options.data) {
        for (let i = 0; i < options.data.length; i++) {
          this.data.push(new GxData(options.data[i]));
        }
      }
      if (options.oldStatus) this.oldStatus = options.oldStatus;
      if (options.status) this.status = options.status;
      if (options.description) this.description = options.description;
      if (options.worker) this.worker = new GxUser(options.worker);
      if (options.dataWorker) this.dataWorker = new GxUser(options.dataWorker);
    }
  }
}
