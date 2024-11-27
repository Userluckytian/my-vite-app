import GxGroup from "../../core/lang/GxGroup";
import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxCraft from "../craft/GxCraft";
import GxUnit from "../data/GxUnit";
import GxProjectStatus from "./GxProjectStatus";
import GxRegionLayer from "./GxRegionLayer";

/**
 * 项目
 */
export default class GxProject extends GxGroup {
  /** 优先级（数字越大，优先级越高） */
  priority = 1;

  /** 项目状态 */
  status = GxProjectStatus.NEW;

  /** 单位 */
  unit = new GxUnit();

  /** 单价/度量 */
  measure = 0;

  /** 作业量 */
  workload = 0;

  /** 计划工期（以天为单位）整型 */
  planTime = 0;

  /** 该项目所关联的数据层 */
  layers = new Array();

  /** 该项目所关联的工序列表 */
  prcFields = new Array();

  /** 项目分区信息（整个外接矩形）geojson格式 */
  envelope = "";

  /** 完成任务数量 */
  finishedTasks = 0;

  /** 进行中任务数量 */
  handlingTasks = 0;

  /** 异常的任务数量 */
  abnormalTasks = 0;

  /** 未领取任务数量*/
  unclaimedTasks = 0;
  /**项目扩展信息，主要放一些额外的属性，比如模型训练的实时进度等 */
  extension?:any;
  /** 所用工艺 */
  craft?: GxCraft;
  /** 创建时间 */
  createTime?: Date;
  /** 项目启动时间 */
  beginTime?: Date;
  /** 截止时间 */
  deadline?: Date;
  /** 结束提交时间 */
  endTime?: Date;
  /** 项目负责人 */
  manager?: GxUser;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.craft) this.craft = new GxCraft(options.craft);
      if (options.createTime) this.createTime = new Date(options.createTime);
      if (options.beginTime) this.beginTime = new Date(options.beginTime);
      if (options.deadline) this.deadline = new Date(options.deadline);
      if (options.endTime) this.endTime = new Date(options.endTime);
      if (options.manager) this.manager = new GxUser(options.manager);
      if (options.priority) this.priority = options.priority;
      if (options.status) this.status = options.status;
      if (options.unit) this.unit = new GxUnit(options.unit);
      if (options.measure) this.measure = options.measure;
      if (options.workload) this.workload = options.workload;
      if (options.planTime) this.planTime = options.planTime;
      if (options && options.layers && options.layers.length > 0) {
        options.layers.forEach((item: any) => {
          this.layers.push(new GxRegionLayer(item));
        });
      }
      if (options.prcFields) {
        for (let i = 0; i < options.prcFields.length; i++) {
          this.prcFields.push(new GxObject(options.prcFields[i], true));
        }
      }
      if (options.envelope) this.envelope = options.envelope;
      if (options.extension) this.extension = options.extension;
      if (options.finishedTasks) this.finishedTasks = options.finishedTasks;
      if (options.handlingTasks) this.handlingTasks = options.handlingTasks;
      if (options.abnormalTasks) this.abnormalTasks = options.abnormalTasks;
      if (options.unclaimedTasks) this.unclaimedTasks = options.unclaimedTasks;
    }
  }

  /**判断项目是否为工艺调试项目 */
  isCraftProject = () => {
    return this.craft && this.craft.id === this.id;
  };

  /** 判断项目是否为当前posid的项目 */
  isInPos = (posid: any) => {
    return this.pos && this.pos.id === posid;
  };
}
