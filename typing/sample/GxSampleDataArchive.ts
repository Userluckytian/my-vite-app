import GxClassificationSystem from "./GxClassificationSystem";
/**
 * 样本数据归档业务模型
 */
export default class GxSampleDataArchive {
  /** 文件索引ID，后端基于该ID可以找到样本数据的归档路径 */
  fileId?: number;
  /** 样本数据关联的样本数据集 */
  sampleDataSet?: number;
  /** 样本（数据）类型 */
  sampleType?: number;
  /** 归档任务标识 */
  jobName?: string;
  /** 一级分类（传名称和编码） */
  firstCls?: GxClassificationSystem;
  /** 二级分类（传名称和编码） */
  secondCls?: GxClassificationSystem;
  constructor(options?:any){
    
  }
}
