import GxCheckStatus from './GxCheckStatus';
import GxOType from './GxOType';

export default class GxObject {
  /** 对象的唯一标识*/
  id?: number = -1;

  /**对象名称 */
  name?: string = '';

  /** 对象类类型 */
  type?: GxOType;

  /** 对象审核状态 */
  checkStatus?: GxCheckStatus = GxCheckStatus.PENGING;

  /**
   * @param {Object} options 
   * @param {bool} bclone 是否拷贝全部属性
   */
  constructor(options?: any, bclone?: boolean) {
    if (options) {
      if (options.id >= 0)
        this.id = options.id;

      if (options.name)
        this.name = options.name;

      /**对象类型 */
      if (options.type)
        this.type = new GxOType(options.type);

      /** 当前对象所处的审核状态*/
      if (!(typeof (options.checkStatus) === 'undefined'))
        this.checkStatus = options.checkStatus;
    }
    if (bclone)
      Object.assign(this, options);
  }

  /**
   * 判断该对象是否为otid类型
   * 是返回true，不是返回false
   * @param {long} otid 
   */
  isOType(otid: number | string) {
    return this.type ? otid === this.type.otid : false;
  }

  /**
   * 设置对象类型
   * @param {GxOType} otype 
   */
  setOType(otype: GxOType) {
    this.type = otype;
  }

  /**
   * 返回当前对象状态
   */
  checkState() {
    return this.checkStatus;
  }

  /**
   * 判断对象是否有效
   */
  isValidate() {
    return this.id && this.id >= 0;
  }

  /** 转化为简单对象 */
  toObject() {
    return new GxObject(this);
  }
}
