/** 
 * 工序在Graph中的位置
 * */
export default class GxPoint {
  /** 平面x坐标点 */
  x ?:number = 0;

  /** 平面y坐标点 */
  y ?:number = 0;

  constructor(options?:any) {
    if (options) {
      if (options.x) this.x = options.x;
      if (options.y) this.y = options.y;
    }
  }
}
