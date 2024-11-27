import GxObject from "../../core/lang/GxObject";
import GxAttachment from "./GxAttachment";

/** 
 * 作业细则 (模型与GxQStandard同) 
 */
export default class GxWorkRule extends GxObject {
  /** 内容 */
  content = '';

  /** 附件 */
  options = new Array();

  constructor(options?:any) {
    super(options);
    if (options) {
      if (options.content) this.content = options.content;
      if (options.options) {
        for (let i = 0; i < options.options.length; i++) {
          this.options.push(new GxAttachment(options.options[i]));
        }
      }
    }
  }
}
