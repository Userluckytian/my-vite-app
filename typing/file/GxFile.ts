import GxDObject from "../core/data/GxDObject";
import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
import GxFileChunk from "./GxFileChunk";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/9/25 14:37
 * @update: appleyk更新于 2024/5/16 10:57
 * @Description: 通用文件存储对象模型
 * 在数据库中
 */
export default class GxFile extends GxDObject {
  /** 数据类型：影像数据 */
  static readonly DT_RASTER = "Raster";
  /** 数据类型：矢量数据 */
  static readonly DT_VECTOR = "Vector";
  /** 数据类型：数字高程 */
  static readonly DT_DEM = "DEM";
  /** 数据类型：服务类型 */
  static readonly DT_SERVICE = "Service";
  /** 数据类型：其他数据类型，比如文档 */
  static readonly DT_OTHER = "Other";
  /**
   * 文件扩展名
   * 例如：doc,png,jpeg,tif，tiff,shp等
   */
  ext?: string;
  /**
   * 文件数据类型
   * 例如：Raster:影像，Vector：矢量，Service:服务，DEM：高程，Other：其他
   */
  dataType?: string;
  /**
   * 文件额外的属性
   */
  props?: any;
  /**
   * 文件的URL地址（如果是云存储的话，url格式为： bucketName/../../objectName）
   */
  url?: string;
  /**
   * 文件大小，单位字节
   */
  size?: number;
  /**
   * 文件字符编码
   */
  encode?: string;
  /**
   * 目录层级（‘/’开头）
   * 形如：/我的数据/矢量文件
   */
  catalog?: string;
  /**
   * 父目录的ID,文件上传完，前端要传递给后端
   */
  catalogId?: number;
  /**
   * 文件md5
   */
  md5?: string | unknown;

  /**
   * 标签
   */
  tags?: Array<string> = [];
  /**
   * 隶属什么位置对象
   */
  pos?: GxObject;
  /**
   * 文件存储标识（系统内置好的，用户上传数据时，选择一个即可）
   */
  storage?: number;
  /**
   * 创建的人
   */
  user?: GxUser;
  /**
   * 创建时间
   */
  cTime?: Date;
  /**
   * 更新时间
   */
  uTime?: Date;
  /**
   * 采集时间
   */
  acquireTime?: string;
  /**
   * 卫星
   */
  satellite?: string;
  /**
   * 构造函数
   * @param options
   */
  constructor(options?: any) {
    super(options);
    this.ext = options && options.ext ? options.ext : "";
    this.dataType = options && options.dataType ? options.dataType : "";
    this.props = options && options.props ? options.props : {};
    this.url = options && options.url ? options.url : "";
    this.size = options && options.size ? options.size : 0;
    this.encode = options && options.encode ? options.encode : "";
    this.catalog = options && options.catalog ? options.catalog : "";
    this.catalogId = options && options.catalogId ? options.catalogId : 0;
    this.tags = options && options.tags ? options.tags : [];
    if (options && options.md5) {
      this.md5 = options.md5;
    }
    if (options && options.pos) {
      this.pos = new GxObject(options.pos);
    }
    this.storage = options && options.storage ? options.storage : 0;
    if (options && options.user) {
      this.user = new GxUser(options.user);
    }
    if (options && options.cTime) {
      this.cTime = new Date(options.cTime);
    }
    if (options && options.uTime) {
      this.cTime = new Date(options.uTime);
    }
    if (options && options.acquireTime) {
      this.acquireTime = options.acquireTime;
    }
    if (options && options.satellite) {
      this.satellite = options.satellite;
    }
  }
  /**
   * 获取文件的扩展名
   * @param fileName 文件名
   * @returns string
   */
  static getFileExt(fileName: string) {
    if (fileName.lastIndexOf(".") != -1) {
      return fileName.substring(fileName.lastIndexOf(".")).toLowerCase();
    }
    return "";
  }

  /**
   * 获取不带后缀的文件名
   * @param fileName 文件名
   * @returns string
   */
  static getFileName(fileName: string) {
    if (fileName.lastIndexOf(".") != -1) {
      return fileName.substring(0, fileName.lastIndexOf("."));
    }
    return fileName;
  }

  /**
   * 文件大小（字节）转相应的容量字符串
   */
  static size2Str(size: number, fixed = 2) {
    let data = "";
    if (size < 1 * 1024) {
      // 如果小于1KB转化成B
      data = size.toFixed(fixed) + "B";
    } else if (size < 1 * 1024 * 1024) {
      // 如果小于1MB转化成KB
      data = (size / 1024).toFixed(fixed) + "KB";
    } else if (size < 1 * 1024 * 1024 * 1024) {
      // 如果小于1GB转化成MB
      data = (size / (1024 * 1024)).toFixed(fixed) + "MB";
    } else if (size < 1 * 1024 * 1024 * 1024 * 1024) {
      // 如果小于1TB转换成GB
      data = (size / (1024 * 1024 * 1024)).toFixed(fixed) + "GB";
    } else if (size < 1 * 1024 * 1024 * 1024 * 1024 * 1024) {
      // 如果小于1PB转换成TB
      data = (size / (1024 * 1024 * 1024 * 1024)).toFixed(fixed) + "TB";
    } else if (size < 1 * 1024 * 1024 * 1024 * 1024 * 1024 * 1024) {
      // 如果小于1EB转换成PB
      data = (size / (1024 * 1024 * 1024 * 1024 * 1024)).toFixed(fixed) + "PB";
    }
    let sizestr = data + "";
    let len = sizestr.indexOf(".");
    let dec = sizestr.substring(len + 1, 2);
    if (dec == "00") {
      //当小数点后为00时 去掉小数部分
      return sizestr.substring(0, len) + sizestr.substring(len + 3, 2);
    }
    return sizestr;
  }

  /**
   *
   * @param file 文件对象 （切割成文件块后是一个blob对象）
   * @param chunkSize 文件块的大小（单位字节），比如10M分一块，20M分一块等
   * @param fileId 关联的文件索引对象ID，分块时，需要先创建文件索引，然后每个块的fileId指向它
   * @returns Array<GxFileChunk>
   */
  static getChunkFiles(
    file: any,
    chunkSize: number,
    fileId: number = -1
  ): Array<GxFileChunk> {
    /** 如果文件的大小小于文件块的索引，那就无需分片了 */
    if (file.size <= chunkSize) {
      return [];
    }
    /** 总块数 */
    const chunks = Math.ceil(file.size / chunkSize);
    /** 块列表 */
    const chunksList: Array<GxFileChunk> = [];
    /** 块索引 */
    let chunkIndex = 0;
    /** 循环构建块 */
    while (chunkIndex < chunks) {
      /** 块的起始偏移量 */
      const start = chunkIndex * chunkSize;
      /** 块的截取偏移量 */
      const end = Math.min(file.size, start + chunkSize);
      /** 按照start和end对大文件file对象进行分割得到新的Blob对象 */
      const chunkFile = file.slice
        ? file.slice(start, end)
        : file.webkitSlice(start, end);
      /** 构建文件块对象 */
      let fileChunk = new GxFileChunk();
      /** 设置偏移量*/
      fileChunk.start = start;
      /** 获取文件块的实际大小*/
      fileChunk.size = chunkFile.size;
      /** 设置当前块的索引（编号之所以从1开始，是因为s3的块最小值就是1）*/
      fileChunk.index = chunkIndex + 1;
      /** 设置文件块的文件对象 */
      fileChunk.file = chunkFile;
      /** 关联块的文件索引对象的ID */
      fileChunk.fileId = fileId;
      /** 存入列表 */
      chunksList.push(fileChunk); // 将分片添加到列表中
      /** 文件块索引累加 */
      chunkIndex++;
    }
    /** 返回构建的块数组 */
    return chunksList;
  }
}
