import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxProcedure from "../craft/GxProcedure";

/**
 * 数据在某个工序生产情况对象
 * 继承的GxObject就是该数据关联的工序
 */
export default class GxRegionProc extends GxObject {
  /**数据在该工序的作业进度 */
  progress = 0;
  assigner?: GxUser;
  qcAssigners?: any;
  constructor(options?: any) {
    super(options);
    if (options) {
      /** 数据在该工序被安排的作业员。 默认：被安排的人就是作业的人 */
      if (options.assigner) this.assigner = new GxUser(options.assigner);
      /** 数据在质检各环节（一检、二检等等）安排的作业员 */
      if (options.qcAssigners) {
        this.qcAssigners = new Array();
        for (let i = 0; i > options.qcAssigners.length; i++) {
          this.qcAssigners.push(new GxUser(options.qcAssigners[i]));
        }
      }

      /**数据在该工序的作业进度 */
      if (options.progress) this.progress = options.progress;
    }
  }

  /**
   * 通过工序重新设置质检员，并保留原先的设置的质检员
   * @param {GxProcedure} procedure
   */
  resetQcAssigners = (procedure: GxProcedure) => {
    const assigners = this.qcAssigners;
    this.qcAssigners = new Array();
    const checkers = procedure.qcConfig?.checkers;
    for (let i = 0; i < checkers!.length; i++) {
      if (assigners) {
        let assigner = assigners[i];
        if (!assigner) assigner = null;
        this.qcAssigners.push(assigner);
      } else this.qcAssigners.push(null);
    }
  };
}
