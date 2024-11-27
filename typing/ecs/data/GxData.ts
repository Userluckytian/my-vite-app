import GxObject from "../../core/lang/GxObject";
import GxDataState from "./GxDataState";
import GxFileMeta from "./GxFileMeta";

/**
 * 成果数据（包含输入和输出)
 * 说明：前端只负责接收模型展示，不负责具体的业务处理
 */
export default class GxData extends GxObject {
  /** 实例化后的数据列表 */
  fileMetas = new Array();

  /** 标签 */
  label = "";

  /** 作业量 */
  workload = 0;

  /** 序列号 */
  sn = 0;

  /** 数据的状态 */
  dataState = GxDataState.NORMAL;
  /** 创建时间 */
  createTime?: Date;
  /** 所属的项目 */
  project?: GxObject;
  /** 所属的工序 */
  procedure?: GxObject;

  /** 所属的任务 */
  task?: GxObject;
  /** 任务所属的成果 */
  achievement?: GxObject;
  /** 数据的作业员 */
  worker?: GxObject;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.fileMetas) {
        for (let i = 0; i < options.fileMetas.length; i++) {
          this.fileMetas.push(new GxFileMeta(options.fileMetas[i]));
        }
      }
      if (options.label) this.label = options.label;
      if (options.workload) this.workload = options.workload;
      if (options.createTime) this.createTime = new Date(options.createTime);
      if (options.project) this.project = new GxObject(options.project, true);
      if (options.procedure)
        this.procedure = new GxObject(options.procedure, true);
      if (options.task) this.task = new GxObject(options.task, true);
      if (options.achievement)
        this.achievement = new GxObject(options.achievement, true);
      if (options.worker) this.worker = new GxObject(options.worker, true);
      if (options.sn) this.sn = options.sn;
      if (options.dataState) this.dataState = options.dataState;
    }
  }

  /**
   * 判断该对象数据是否有效
   */
  isValidate = () => {
    if (this.fileMetas?.length === 0) return false;
    else {
      for (let i = 0; i < this.fileMetas.length; i++) {
        if (!this.fileMetas[i].isValidate()) return false;
      }
      return true;
    }
  };

  /**
   * 过滤出fileMetas中fileRule.entry为true的数据
   */
  getEntryFileMetas = () => {
    return this.fileMetas.find((fileMeta) => fileMeta.fileRule.entry);
  }

  getFileMetas = () => {
    return this.fileMetas;
  }

  /** 获取解译or训练的收集结果 */
  filterFileMetas = (groupId:number,trainGroupId:number) => {
      if (groupId == trainGroupId) {
        return this.fileMetas.find((fileMeta) => !fileMeta.fileRule.entry);
      }
      return this.getEntryFileMetas;
  }
}
