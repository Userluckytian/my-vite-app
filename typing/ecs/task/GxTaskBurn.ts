import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxTaskStatus from "./GxTaskStatus";

/**
 * 登记工时的业务模型
 */
export default class GxTaskBurn extends GxObject {
  /** 任务状态 */
  taskStatus = GxTaskStatus.NULL;
  /** 消耗工时 */
  costHours = 0;
  /** 作业量 */
  workload = 0;
  /** 废品量 */
  waste = 0;
  /** 备注和描述 */
  description = "";
  /** 隶属的任务 */
  task?: GxObject;
  /** 隶属的成果 */
  achievement?: GxObject;
  /** 工时隶属作者 */
  worker?:GxUser;
  /** 工时的创建者 */
  creator?:GxUser;
  /** 创建时间 */
  createTime?:Date;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.task) this.task = new GxObject(options.task);
      if (options.achievement)
        this.achievement = new GxObject(options.achievement);
      if (options.taskStatus) this.taskStatus = options.taskStatus;
      if (options.costHours) this.costHours = options.costHours;
      if (options.workload) this.workload = options.workload;
      if (options.waste) this.waste = options.waste;
      if (options.description) this.description = options.description;
      if (options.worker) this.worker = new GxUser(options.worker);
      if (options.creator) this.creator = new GxUser(options.creator);
      if (options.createTime) this.createTime = new Date(options.createTime);
    }
  }
}
