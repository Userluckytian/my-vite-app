import GxFile from "./GxFile";
import GxFileChunk from "./GxFileChunk";
import GxObject from "../core/lang/GxObject";
/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/17-14:12
 * @description 文件索引：主要用于文件的简单上传，断点续传及大文件分片上传
 */
export default class GxFileIndex extends GxFile {
  /**
   * 文件对象
   */
  file?: any;
  /**
  /**
   * 文件块总大小，> 0 说明上传需要分片
   */
  chunks?: number;
  /**
   * s3协议独有的文件分片上传全局唯一ID
   */
  uploadId?: string;
  /**
   * 如果 chunks > 0 ，则文件块对象必须指定
   */
  fileChunk?: GxFileChunk;
  /**
   * 关联哪个对象（即文件自身入库后，要资产化，资产化可以是元信息，也可以是样本数据）
   * 顺序：文件上传=》创建文件索引=》资产化 or 样本数据标准化入库 =》创建资产元信息 or 创建样本数据 =》更新文件索引的object信息
   */
  object?: GxObject;
  /***
   * 样本库唯一标识
   */
  business?: number;
  /***
   * 样本类型唯一标识
   */
  sampleType?: number;
  /***
   * 样本库样本集唯一标识
   */
  dataSetId?: number;
  constructor(options?: any) {
    super(options);
    if (options && options.chunks) {
      this.chunks = options.chunks;
    }
    if (options && options.uploadId) {
      this.uploadId = options.uploadId;
    }
    if (options && options.business) {
      this.business = options.business;
    }
    if (options && options.sampleType) {
      this.sampleType = options.sampleType;
    }
    if (options && options.dataSetId) {
      this.dataSetId = options.dataSetId;
    }
    if (options && options.fileChunk) {
      this.fileChunk = new GxFileChunk(options.fileChunk);
    }
    if (options && options.object) {
      this.object = new GxObject(options.object);
    }
  }
  /**
   * 转换成单一小文件索引对应的表单对象
   */
  toFileFormData() {
    const formData = new FormData();
    formData.append("file", this.file);
    formData.append("name", `${this.name}`);
    formData.append("ext", `${this.ext}`);
    formData.append("dataType", `${this.dataType}`);
    formData.append("storage", `${this.storage}`);
    formData.append("encode", `${this.encode}`);
    formData.append("catalog", `${this.catalog}`);
    formData.append("business", `${this.business}`);
    formData.append("sampleType", `${this.sampleType}`);
    formData.append("dataSetId", `${this.dataSetId}`);
    formData.append("catalogId", `${this.catalogId}`);
    formData.append("md5", `${this.md5}`);
    formData.append("size", `${this.size}`);
    formData.append("chunks", `0`);
    return formData;
  }

  /**
   * 转换成带文件块的文件索引表单对象
   */
  toChunkFormData() {
    let formData = new FormData();
    formData.append("file", this.fileChunk?.file);
    formData.append("name", `${this.name}`);
    formData.append("ext", `${this.ext}`);
    formData.append("dataType", `${this.dataType}`);
    formData.append("storage", `${this.storage}`);
    formData.append("encode", `${this.encode}`);
    formData.append("catalog", `${this.catalog}`);
    formData.append("catalogId", `${this.catalogId}`);
    formData.append("md5", this.md5 ? `${this.md5}` : "");
    formData.append("size", `${this.size}`);
    formData.append("chunks", `${this.chunks}`);
    if (this.isValidate()) {
      formData.append("fileId", `${this.id}`);
    } else if (
      this.fileChunk &&
      this.fileChunk.fileId &&
      this.fileChunk.fileId > 0
    ) {
      formData.append("fileId", `${this.fileChunk.fileId}`);
    }
    formData.append("uploadId", `${this.uploadId}`);
    formData.append("chunkIndex", `${this.fileChunk?.index}`);
    formData.append("chunkMd5", `${this.fileChunk?.md5}`);
    formData.append("chunkSize", `${this.fileChunk?.size}`);
    formData.append("chunkStart", `${this.fileChunk?.start}`);
    return formData;
  }
}
