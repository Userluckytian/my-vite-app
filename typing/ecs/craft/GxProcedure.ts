import GxObject from "../../core/lang/GxObject";
import GxOType from "../../core/lang/GxOType";
import GxDataSchema from "../data/GxDataSchema";
import GxDataStorage from "../data/GxDataStorage";
import GxEcsOType from "../GxEcsOType";
import GxProcToolConfig from "../tool/GxProcToolConfig";
import GxPoint from "./GxPoint";
import GxProcedurePart from "./GxProcedurePart";
import GxQcConfig from "./GxQcConfig";
// import GxQStandard from "./GxQStandard";
import GxWorkRule from "./GxWorkRule";

/** 
 * 工艺工序对象 
 */
export default class GxProcedure extends GxObject {
  /** 工序被更新对象部分的标记, 部分值参考GxProcedurePart*/
  partFlag = 0;

  /** 位置信息（x,y） */
  form = new GxPoint();

  /** 标记是否计算完成度，默认是false */
  completion = false;

  /** 完成度权重[0-100]至多保留一位小数 */
  weight = 0;

  /** 优先级，值越大优先级越高
   * 说明：对解决任务堆积具有作用 
   */
  priority = 0;

  /** 作业员继承的前置工序 */
  workerInherit = 0;

  /**  
   * 任务信息继承的前置工序
   */
  workloadInherit = 0;

  /**任务生成的频率（以秒为单位） */
  generateRate = 0;

  /** 是否按照标签匹配 */
  labelMatch = false;

  /** 是否质检 */
  qc = false;

  /**作业规范 */
  workRules = new Array();

  /**
   * 不同类别工序对象（收集器、分拣器等）的参数
   * key-value的形式
   */
  attributes: any = {};
  /** 所属位置对象(团队或者系统) */
  pos?: GxObject;
  /** 所属工艺 */
  craft?: GxObject;
  /** 数据中心 */
  dataStorage?: GxDataStorage;
  /** 输出数据概要 */
  outputSchema?: GxDataSchema;
  /** 生成工具配置 */
  prodToolConfig?: GxProcToolConfig;
  /** 质检数据概要 */
  qcSchema?: GxDataSchema;
  /** 质检工具概要 */
  qcToolConfig?: GxProcToolConfig;
  /** 质检配置信息,作用：支撑普通质检和多级质检 */
  qcConfig?: GxQcConfig;
  constructor(options?: any) {
    super(options);
    if (!options || typeof (options.type) === 'undefined')
      this.setOType(new GxOType({ otid: GxEcsOType.PROCEDURE, name: 'Procedure' }));
    if (options) {
      /** 所属位置对象(团队或者系统) */
      if (options.pos) this.pos = new GxObject(options.pos);
      /** 所属工艺 */
      if (options.craft) this.craft = new GxObject(options.craft, true);
      if (options.partFlag) this.partFlag = options.partFlag;
      if (options.form) this.form = new GxPoint(options.form);
      if (options.completion) this.completion = options.completion;
      if (options.weight) this.weight = options.weight;
      if (options.priority) this.priority = options.priority;
      /** 数据中心 */
      if (options.dataStorage) this.dataStorage = new GxDataStorage(options.dataStorage);
      if (options.workerInherit) this.workerInherit = options.workerInherit;
      if (options.workloadInherit) this.workloadInherit = options.workloadInherit;
      if (options.generateRate) this.generateRate = options.generateRate;
      if (options.labelMatch) this.labelMatch = options.labelMatch;
      /** 输出数据概要 */
      if (options.outputSchema) this.outputSchema = new GxDataSchema(options.outputSchema);
      /** 生成工具配置 */
      if (options.prodToolConfig) this.prodToolConfig = new GxProcToolConfig(options.prodToolConfig);
      if (options.qc) this.qc = options.qc;
      /** 质检数据概要 */
      if (options.qcSchema) this.qcSchema = new GxDataSchema(options.qcSchema);
      /** 质检工具概要 */
      if (options.qcToolConfig) this.qcToolConfig = new GxProcToolConfig(options.qcToolConfig);
      /** 质检配置信息,作用：支撑普通质检和多级质检 */
      if (options.qcConfig) this.qcConfig = new GxQcConfig(options.qcConfig);
      /**验收标准 */
      if (options.workRules) {
        for (let i = 0; i < options.workRules.length; i++) {
          this.workRules.push(new GxWorkRule(options.workRules[i]));
        }
      }
      /**不同类别工序对象（收集器、分拣器等）的参数 */
      if (options.attributes) Object.assign(this.attributes, options.attributes);
    }
  }

  /**
   * 判断工序对象是否有效
   */
  isValidate() {
    if (this.type?.otid === GxEcsOType.PROCEDURE
      || this.type?.otid === GxEcsOType.PROC_FEEDER
      || this.type?.otid === GxEcsOType.PROC_FILTER) {
      if (typeof this.outputSchema === 'undefined'
        || typeof this.outputSchema?.dataType === 'undefined'
        || !this.outputSchema.dataType.isValidate()
      ) {
        return false;
      }

      if (this.qc) {
        if (typeof this.qcSchema === 'undefined'
          || typeof this.qcSchema?.dataType === 'undefined'
          || !this.qcSchema.dataType.isValidate()
        ) return false;
      }
    }
    return super.isValidate();
  }

  /**
     * 拷贝属性信息
     * @param {GxProcedure} procedure 
     * @param {long} partFlag 
     */
  copyAttr(procedure: GxProcedure, partFlag: number) {
    if (partFlag & GxProcedurePart.NAME) this.name = procedure.name;
    if (partFlag & GxProcedurePart.POSITION) this.form = procedure.form;
    if (partFlag & GxProcedurePart.COMPLETION) {
      this.completion = procedure.completion;
      this.weight = procedure.weight;
    }
    if (partFlag & GxProcedurePart.PRIORITY) this.priority = procedure.priority;
    if (partFlag & GxProcedurePart.DATA_STORAGE) this.dataStorage = procedure.dataStorage;
    if (partFlag & GxProcedurePart.WORKER_INHERIT) this.workerInherit = procedure.workerInherit;
    if (partFlag & GxProcedurePart.WORKLOAD_INHERIT) this.workloadInherit = procedure.workloadInherit;
    if (partFlag & GxProcedurePart.LABEL_MATCH) this.labelMatch = procedure.labelMatch;
    if (partFlag & GxProcedurePart.OUTPUT_SCHEMA) this.outputSchema = procedure.outputSchema;
    if (partFlag & GxProcedurePart.WORK_TOOL) this.prodToolConfig = procedure.prodToolConfig;
    if (partFlag & GxProcedurePart.QC_SCHEMA) {
      this.qc = procedure.qc;
      this.qcSchema = procedure.qcSchema;
    }
    if (partFlag & GxProcedurePart.QC_TOOL) this.qcToolConfig = procedure.qcToolConfig;
    if (partFlag & GxProcedurePart.QC_CONFIG) this.qcConfig = procedure.qcConfig;
    if (partFlag & GxProcedurePart.WORK_RULE) this.workRules = procedure.workRules;
    // if (partFlag & GxProcedurePart.QC_STANDARD) this.qStandard = procedure.qStandard;
    if (partFlag & GxProcedurePart.ATTRIBUTE) this.attributes = procedure.attributes;
    if (partFlag & GxProcedurePart.GENERATE_RATE) this.generateRate = procedure.generateRate;
  }

  /**
   * 返回不同类型工序界面显示部分
   * @returns 
   */
  uiParts() {
    if (this.type) {
      switch (this.type.otid) {
        case GxEcsOType.PROC_FEEDER: {
          return new GxProcedurePart(GxProcedurePart.NAME | GxProcedurePart.ATTRIBUTE
            | GxProcedurePart.OUTPUT_SCHEMA | GxProcedurePart.WORK_TOOL
            | GxProcedurePart.DATA_STORAGE | GxProcedurePart.GENERATE_RATE
            | GxProcedurePart.QC_SCHEMA | GxProcedurePart.QC_TOOL | GxProcedurePart.QC_CONFIG);
        }
        case GxEcsOType.PROC_COLLECTOR:
        case GxEcsOType.PROC_SORTER:
        case GxEcsOType.PROC_CARRIER: {
          return new GxProcedurePart(GxProcedurePart.NAME | GxProcedurePart.ATTRIBUTE);
        }
        case GxEcsOType.PROC_OR: {
          return new GxProcedurePart(GxProcedurePart.NAME);
        }
        case GxEcsOType.PROC_FILTER: {
          return new GxProcedurePart(GxProcedurePart.NAME | GxProcedurePart.OUTPUT_SCHEMA);
        }
        default: {
          return new GxProcedurePart(GxProcedurePart.NAME | GxProcedurePart.ATTRIBUTE
            | GxProcedurePart.LABEL_MATCH
            | GxProcedurePart.OUTPUT_SCHEMA | GxProcedurePart.WORK_TOOL
            | GxProcedurePart.COMPLETION | GxProcedurePart.DATA_STORAGE | GxProcedurePart.PRIORITY
            | GxProcedurePart.WORKER_INHERIT | GxProcedurePart.WORKLOAD_INHERIT | GxProcedurePart.GENERATE_RATE
            | GxProcedurePart.QC_SCHEMA | GxProcedurePart.QC_TOOL | GxProcedurePart.QC_CONFIG
            | GxProcedurePart.WORK_RULE);
        }
      }
    }
    else return new GxProcedurePart(GxProcedurePart.NAME);
  }
}
