import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxRegionProc from "./GxRegionProc";
import GxTask from "./GxTask";

/**
 * 项目分区信息
 */
export default class GxRegion extends GxObject {
  /**
   * 更新时所包含的数据ID集合
   * 注意：如果该集合不为空，则GxObject.Id为projectId
   *      否则GxObject.Id为Region唯一标识
   */
  ids = new Set();

  /** 该区域的工作量 */
  workload = 0;

  /** 难易度 */
  difficulty = 0;

  /** 该区域生产进度 */
  progress = 0;

  /**该数据相关工序情况 */
  procs = new Array();
  /**该区域被安排的作业员 */
  assigner?: GxUser;
  /**
   * 该区域在执行的任务
   * 说明：任务来源于配置完成度的工序
   */
  task?: GxTask;
  /**创建时间，更新时间 */
  creatTime?: Date;
  updateTime?: Date;
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.ids) this.ids = new Set(options.ids);
      if (options.workload) this.workload = options.workload;
      if (options.difficulty) this.difficulty = options.difficulty;
      if (options.assigner) this.assigner = new GxUser(options.assigner);
      if (options.task) this.task = new GxTask(options.task);
      if (options.creatTime) this.creatTime = new Date(options.creatTime);
      if (options.updateTime) this.updateTime = new Date(options.updateTime);
      if (options.progress) this.progress = options.progress;
      if (options.procs) {
        for (let i = 0; i > options.procs.length; i++) {
          this.procs.push(new GxRegionProc(options.procs[i]));
        }
      }
    }
  }
}
