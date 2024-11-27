import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
/**
 * <p>标样数据标签（带分组的key-value）</p>
 * 参考：https://engine.piesat.cn/ai/samplelabel/
 * @author yukun2@126.com
 * @version v.1.0-alpha
 * @date created on 2024/5/7-9:30
 */
export default class GxSampleDataLabel {
  /**标样标签唯一标识，主要用来更新和删除*/
  id?: number;
  /**标样标签名称*/
  labelName?: string;
  /**标样标签类别ID（和颜色联合主键，标注的颜色是可以相同的，但是类别ID（1-255）是唯一的，后台生成）*/
  code?: string;
  /**
   * 标样标签填充颜色（数组放rgb三个颜色的值），只有当标样数据是多边形的时候才奏效，点不需要
   * "fillColor":[
   *                30,
   *                179,
   *                57
   *             ]
   */
  fillColor?: string;
  /**
   * 边框颜色（数组放rgb三个颜色的值），只有当标样数据是多边形的时候才奏效，点不需要
   * "frameColor":[
   *                170,
   *                89,
   *                147
   *             ]
   */
  frameColor?: string;
  /**标样标签分组ID（系统级别的才有分组的概念，而样本采集工程中的标样是没有分组概念的，采集工程中的值为0）*/
  group?: number;
  /**标样标签所关联的的采集工程ID，如果值为0，那group的ID一定不为0*/
  project?: number;
  /**创建用户*/
  user?: GxUser;
  /**创建时间*/
  cTime?: string;
  /**修改时间*/
  uTime?: string;

  constructor(options?: any) {
    if (options && options.id) {
      this.id = options.id;
    }
    if (options && options.group) {
      this.group = options.group;
    }
    if (options && options.labelName) {
      this.labelName = options.labelName;
    }
    if (options && options.code) {
      this.code = options.code;
    }
    if (options && options.fillColor) {
      this.fillColor = options.fillColor;
    }
    if (options && options.frameColor) {
      this.frameColor = options.frameColor;
    }
    if (options && options.project) {
      this.project = options.project;
    }
    if (options && options.user) {
      this.user = new GxUser(options.user);
    }
    if (options && options.cTime) {
      this.cTime = options.cTime;
    }
    if (options && options.uTime) {
      this.uTime = options.uTime;
    }
  }
}
