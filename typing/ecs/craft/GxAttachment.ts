/** 
 * 附件 
 */
export default class GxAttachment {
  /** 附件名*/
  name = '';

  /** 附件地址*/
  url = '';
  constructor(options?:any) {
    if (options) {
      if (options.name) this.name = options.name;
      if (options.url) this.url = options.url;
    }
  }
}
