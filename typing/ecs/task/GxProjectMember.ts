import GxObject from "../../core/lang/GxObject";
import GxMemberx from "../GxMemberx";

/**
 * 项目的成员对象
 */
export default class GxProjectMember extends GxMemberx {
  /**具备的作业权限工序列表 */
  workProcedure = new Array();

  /**具备的质检权限工序列表 */
  qcProcedure = new Array();

  constructor(options?:any) {
    super(options);
    if (options) {
      if (options.workProcedure) {
        for (let i = 0; i < options.workProcedure.length; i++) {
          this.workProcedure.push(new GxObject(options.workProcedure[i]));
        }
      }
      if (options.qcProcedure) {
        for (let i = 0; i < options.qcProcedure.length; i++) {
          this.qcProcedure.push(new GxObject(options.qcProcedure[i]));
        }
      }
    }
  }
}
