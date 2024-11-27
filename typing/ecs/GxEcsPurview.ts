import GxPurview from "../core/lang/GxPurview";

export default class GxEcsPurview extends GxPurview {
  /**
   * 工艺浏览 2^8
   */
  static CRAFT_BROWSE = 256;
  /**
   * 工艺设计 2^9
   */
  static CRAFT_DESIGN = 512;
  /**
   * 工艺导入导出 2^10
   */
  static CRAFT_IMPORT_EXPORT = 1024;
  /**
   * 项目浏览2^11
   */
  static PROJECT_BROWSE = 2048;
  /**
   * 项目管理 2^12
   */
  static PROJECT_MANAGE = 4096;
  /**
   * 项目执行 2^13
   */
  static PROJECT_EXECUTE = 8192;
  /**
   * 生产作业 2^14
   */
  static TASK_WORK = 16384;
  /**
   * 生产质检 2^15
   */
  static TASK_QC = 32768;
  /**
   * 统计分析 2^16
   */
  static STA_ANALYSIS = 65536;
  /**
   * 大屏浏览 2^17
   */
  static SCREEN_BROWSE = 131072;
}
