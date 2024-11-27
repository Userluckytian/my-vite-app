/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/3/8 17:39
 * @Description: 字段索引信息
 */
export default class GxFieldIndex {
  static BTREE = 1; //b树索引
  static GIST = 2; //几何空间索引
  static GIN = 3; //json对应索引
  /**
   * 索引名称
   */
  name?: string;
  /**
   * 索引字段名称
   */
  fnames?: Array<string> = [];
  /**
   * 索引方法，默认BTREE
   */
  iType = GxFieldIndex.BTREE;
  constructor(options?:any){
    if (options && options.name) {
        this.name = options.name;
    }
    if (options && options.iType) {
        this.iType = options.iType;
    }
    if (options && options.fnames) {
        this.fnames = options.fnames;
    }
  }
}
