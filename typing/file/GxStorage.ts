import GxObject from "../core/lang/GxObject";
import GxUser from "../core/lang/GxUser";
/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/16-15:29
 * @description 实体文件存储（配置），文件管理模块支持多种文件协议对应的不同存储访问配置
 *              每一种文件协议背后都对应着一个文件读写操作的业务Service实现
 */
export default class GxStorage extends GxObject {
  /**
   * 标签
   */
  tags?: Array<string>;
  /**
   * 描述
   */
  des?: string;
  /**
   * 存储访问对应的文件协议(内容参考GxStorageProtocol里定义的值)
   */
  protocol?: string;

  /**
   * 存储访问地址（磁盘位置 | 网络协议 | 主机IP | 主机端口）
   */
  address?: string;
  /**
     * 存储服务的api地址，如：http://10.17.17.58:63772,用来通过标准API获取存储服务的信息，比如容量
     */
  apiUrl?:string;
  /**
   * 访问key，某些协议下可以充当userName，比如ftp、nas或smb，local协议值为空
   */
  key?: string;
  /**
   * 访问key对应的秘钥，某些协议下可以充当password，比如ftp、nas或smb，local协议值为空
   */
  secret?: string;
  /**
   * 存储根路径：当协议为local、smb时，必须指定值
   */
  root?: string;
  /**
   * 是否是默认存储，如果是默认存储的话，前端用户上传数据时无需选取存储
   */
  def?: boolean = false;
  /**
   * 创建用户
   */
  user?: GxUser;
  /**
   * 用途：数据存储、生产存储、样本存储、其他存储等
   */
  usage:number = 0;
  /**
   * 位置对象
   */
  pos?: GxObject;
  /**
   * 注册时间
   */
  cTime?: string;
  /**
   * 更新时间
   */
  uTime?: string;

  /** 剩余存储容量,单位字节 */
  freeSpace?: number;

  /** 总存储容量 */
  totalSpace?: number;

  constructor(options?: any) {
    super(options);
    if (options && options.address) {
      this.address = options.address;
    }
    if (options && options.apiUrl) {
      this.apiUrl = options.apiUrl;
    }
    if (options && options.tags) {
      this.tags = options.tags;
    }
    if (options && options.des) {
      this.des = options.des;
    }
    if (options && options.protocol) {
      this.protocol = options.protocol;
    }
    if (options && options.key) {
      this.key = options.key;
    }
    if (options && options.key) {
      this.key = options.key;
    }
    if (options && options.secret) {
      this.secret = options.secret;
    }
    if (options && options.root) {
      this.root = options.root;
    }
    if (options && options.def) {
      this.def = options.def;
    }
    if (options && options.user) {
      this.user = new GxUser(options.user);
    }
    if (options && options.usage) {
      this.usage = options.usage;
    }
    if (options && options.pos) {
      this.pos = new GxObject(options.pos);
    }
    if (options && options.cTime) {
      this.cTime = options.cTime;
    }
    if (options && options.uTime) {
      this.uTime = options.uTime;
    }
    if (options && options.freeSpace) {
      this.freeSpace = options.freeSpace;
    }
    if (options && options.totalSpace) {
      this.totalSpace = options.totalSpace;
    }
  }

  /** 获取存储用途的名称 */
  static getUsageName(usageCode: number): string {
    if(usageCode == 0){
      return "数据存储";
    }else if(usageCode == 1){
      return "生产存储";
    }else if(usageCode == 2){
      return "样本存储";
    }else{
      return "其他存储"
    }
  }
}
