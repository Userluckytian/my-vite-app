import GxTagFilter from "../core/filter/GxTagFilter";
/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/24-13:40
 * @description 文件存储查询过滤器
 */
export default class GxStorageFilter extends GxTagFilter {
  /**
   * 基于协议名称查询
   */
  schema?: string;
  trim() {
    super.trim();
    if (this.isNone(this.schema)) delete this.schema;
    return this;
  }
}
