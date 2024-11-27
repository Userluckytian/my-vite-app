import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
import GxMetaInfo from "../metainfo/GxMetaInfo";
import GxFile from '../file/GxFile';
import GxSampleDataLabel from './GxSampleDataLabel';
/**
 * <p>样本数据采集工程</p>
 *
 * @author yukun@24@126.com
 * @version v.1.0-alpha
 * @date created on 2024/5/6-17:49
 */
export default class GxSampleDataProject extends GxObject {
  /**默认采集工程的状态为：采集中*/
  static readonly COLLECTING = 0;
  /**用户采集完保存后，可直接进行标准化+入库二合一操作，此时状态为入库中，任务执行中*/
  static readonly IMPORTING = 1;
  /**标准化+入库要做两件事情，标准化就是输出样本文件到指定的存储位置，入库就要构建样本数据然后关联存储*/
  static readonly DONE = 2;
  /**入库异常*/
  static readonly ERROR = 3;
  /**采集工程初始定位范围 */
  extent?: string;
  /**中文字符串：变化检测、目标识别、地物分类等*/
  projectType?: any;
  /**前时相（影像元信息）*/
  pre?: GxFile;
  /**前时相字段名（定义样本采集工程中变化图标在前时相影像中的类型字段，字段值由用户在线填充）*/
  preField?: string;
  /**后时相（影像元信息）*/
  post?: GxFile;
  /**后时相字段名（定义样本采集工程中变化图标在后时相影像中的类型字段，字段值由用户在线填充）*/
  postField?: string;
  status = GxSampleDataProject.COLLECTING;
  /**标准化入库任务执行过程中出现异常时记录的异常信息*/
  errorMsg?: string;
  /** 标样标签数组 */
  labels?:GxSampleDataLabel[];
  /** 其他属性 */
  props?: any;
  cTime?: string;
  /**创建人*/
  user?: GxUser;
  constructor(options?: any) {
    super(options);
    if(options && options.extent){
      this.extent = options.extent;
    }
    if(options && options.projectType){
      this.projectType = options.projectType;
    }
    if(options && options.pre){
      this.pre = options.pre;
    }
    if (options && options.preField) {
      this.preField = options.preField;
    }
    if(options && options.post){
      // this.post = new GxMetaInfo(options.post);
      this.post = options.post;
    }
    if (options && options.postField) {
      this.postField = options.postField;
    }
    if(options && options.status){
      this.status = options.status;
    }
    if(options && options.errorMsg){
      this.errorMsg = options.errorMsg;
    }
    if(options && options.labels){
      this.labels = options.labels.map((label: any) => new GxSampleDataLabel(label));
    }
    if(options && options.props){
      this.props = options.props;
    }
    if(options && options.cTime){
      this.cTime = options.cTime;
    }
    if(options && options.user){
      this.user = new GxUser(options.user);
    }
  }


  /**
   * 判断状态是否为采集中
   */
  isCollecting() {
    return this.status === GxSampleDataProject.COLLECTING;
  }

  /**
   * 判断状态是否为入库中
   */
  isImporting() {
    return this.status === GxSampleDataProject.IMPORTING;
  }

  /**
   * 判断状态是否为已完成
   */
  isDone() {
    return this.status === GxSampleDataProject.DONE;
  }

  /**
   * 判断状态是否为异常
   */
  isError() {
    return this.status === GxSampleDataProject.ERROR;
  }
}
