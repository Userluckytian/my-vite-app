/** 
 * 数据中心（存储） 
 */
export default class GxDataStorage {
  /** 存储标识 */
  // id = 0;

  /** 存储协议 */
  protocol = 'file://';

  /** 主机IP地址 */
  host = '';

  /** 端口号 */
  port = 0;

  /** 存储服务地址 */
  uri = '';

  constructor(options?:any) {
    if (options) {
      if (options.protocol) {
        this.protocol = options.protocol;
      }
      if (options.uri) {
          this.uri = options.uri;
      }
      if (options.port) {
        this.port = options.port;
    }
      this.host = this.toHost(options.host, options.port, options.uri);
    }
  }

  /**转换成拼接后的host，用于界面显示 */
  toHost(host:string, port:number, uri:string) {
    const _host = host ? host : '';
    const _port = (port && port > 0) ? (':' + port) : '';
    const _uri = uri ? uri : '';
    return _host + _port + _uri;
  }
}
