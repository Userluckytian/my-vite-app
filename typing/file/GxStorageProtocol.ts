/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/16-16:57
 * @description 文件存储协议
 */
export default class GxStorageProtocol {
  code: number;
  schema: string;
  desc: string;
  constructor(code: number,schema:string,desc: string) {
    this.code = code;
    this.schema = schema;
    this.desc = desc;
  }

  static LOCAL = new GxStorageProtocol(0, "file", "本地文件传输协议");
  static FTP = new GxStorageProtocol(1, "ftp", "网络文件传输协议");
  static SMB = new GxStorageProtocol(2, "smb", "网络文件共享协议");
  static NAS = new GxStorageProtocol(3, "nas", "网络附属存储协议");
  static MINIO = new GxStorageProtocol(4, "minio", "高性能开源对象存储服务");
  static OSS = new GxStorageProtocol(5, "oss", "阿里云对象存储服务");
  static OBS = new GxStorageProtocol(6, "obs", "华为云对象存储服务");
  static COS = new GxStorageProtocol(7, "cos", "腾讯云对象存储服务");
  static AWS_S3 = new GxStorageProtocol(8,"s3","Amazon S3对象存储服务");

  /** 获取所有的文件存储协议型值 */
  static getAllProtocol():Array<GxStorageProtocol> {
    return Object.values(GxStorageProtocol).filter(
      (p) => p instanceof GxStorageProtocol
    );
  }

  /** 基于编码获取对应的协议类型 */
  static getTypebyCode(code: number):Array<GxStorageProtocol> {
    let protocol: any = Object.values(GxStorageProtocol).filter(p => p instanceof GxStorageProtocol).filter(
      (protocol: GxStorageProtocol) => protocol.code == code
    );
    return protocol;
  }
}
