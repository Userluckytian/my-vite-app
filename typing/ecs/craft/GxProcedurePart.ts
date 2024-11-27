export default class GxProcedurePart {
  static NAME = 1; //名称
  static POSITION = 2; //坐标
  static COMPLETION = 4; //完成度标记
  static PRIORITY = 8; //优先级
  static DATA_STORAGE = 16; //数据中心
  static WORKER_INHERIT = 32; //作业员继承
  static WORKLOAD_INHERIT = 64; //作业量继承
  static LABEL_MATCH = 128; //标签匹配
  static OUTPUT_SCHEMA = 256; //生产物料范式
  static WORK_TOOL = 512; //生产工具
  static QC_SCHEMA = 1024; //质检物料范式
  static QC_TOOL = 2048; //质检工具
  static QC_CONFIG = 4096; //质检信息
  static WORK_RULE = 8192; //作业细则
  // static QC_STANDARD = 16384; //验收标准
  static ATTRIBUTE = 32768; //工序属性
  static GENERATE_RATE = 65536;//任务生成频率

  /** 工序可包含的所有part标记的或 */
  part = 0;
  constructor(part = 0) {
    this.part = part;
  }

  /** 判断是否包含该part */
  hasPart = (part:number) => {
    return (this.part & part) === part;
  }

  /**是否有任务配置 */
  hasTaskCfg = () => {
    const part = GxProcedurePart.COMPLETION | GxProcedurePart.PRIORITY
      | GxProcedurePart.DATA_STORAGE | GxProcedurePart.WORKER_INHERIT
      | GxProcedurePart.WORKLOAD_INHERIT | GxProcedurePart.GENERATE_RATE;
    return (this.part & part) === 0 ? false : true;
  }
}
