import GxArgument from "./GxArgument";
import GxTool from "./GxTool";

/**
 *  工序工具配置
 */
export default class GxProcToolConfig {
  /**工具的唯一标识,4.1.1之后不需要*/
  // id = 0;

  /** 工具执行参数 */
  arguments = new Array();

  /** 成果收集路径模板 */
  collectPattern = "";

  /** 成果收集路径 */
  collectDir = "";

  /** 输入数据是否本地化 */
  inputDataLocalize = false;

  /** 输入数据本地化路径 */
  inputDataLocalDir = "";

  /** 输出成果是否迁移 */
  outputTransfer = false;

  /** 输出成果是否迁移 */
  outputTransferDir = "";

  /** 过程数据是否删除 */
  processDataDel = false;

  /** 过程数据删除路径 */
  processDataDelDir = "";
  /** 关联的工具 */
  tool?: GxTool;

  constructor(options?: any) {
    if (options) {
      if (options.arguments) {
        for (let i = 0; i < options.arguments.length; i++) {
          this.arguments.push(new GxArgument(options.arguments[i]));
        }
      }
      if (options.collectPattern) this.collectPattern = options.collectPattern;
      if (options.collectDir) this.collectDir = options.collectDir;
      if (options.inputDataLocalize)
        this.inputDataLocalize = options.inputDataLocalize;
      if (options.inputDataLocalDir)
        this.inputDataLocalDir = options.inputDataLocalDir;
      if (options.outputTransfer) this.outputTransfer = options.outputTransfer;
      if (options.outputTransferDir)
        this.outputTransferDir = options.outputTransferDir;
      if (options.processDataDel) this.processDataDel = options.processDataDel;
      if (options.processDataDelDir)
        this.processDataDelDir = options.processDataDelDir;
      if (options.tool) this.tool = new GxTool(options.tool);
    }
  }
}
