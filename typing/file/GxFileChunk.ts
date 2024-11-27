/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/17-11:48
 * @description 文件块
 */
export default class GxFileChunk {
  /**
   * 文件分片ID
   */
  id?: number;
  /**
   * 文件分片上传唯一标识,即分片上传需要先构建一个文件索引对象，这个id就是它的
   */
  fileId?: number;
  /**
   * 文件块对应的文件对象
   */
  file?: any;
  /**
   * 分块的md5校验信息
   */
  md5?: string;
  /**
   * 当前分块的索引，不能大于总数
   */
  index?: number;
  /**
   * 当前分块的大小，单位字节
   */
  size?: number;
  /**
   * 当前分块的开始位置，结束位置可以通过size+start计算出
   */
  start?: number;
  /**
   * 当前分块的完成状态，0 : 未完成， 1：完成
   */
  status? = 1;

  constructor(options?: any) {
    if (options && options.id) {
      this.id = options.id;
    }
    if (options && options.fileId) {
      this.fileId = options.fileId;
    }
    if (options && options.md5) {
      this.md5 = options.md5;
    }
    if (options && options.index) {
      this.index = options.index;
    }
    if (options && options.size) {
      this.size = options.size;
    }
    if (options && options.start) {
      this.start = options.start;
    }
    if (options && options.status) {
      this.status = options.status;
    }
  }
}
