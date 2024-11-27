import GxTagFilter from "../core/filter/GxTagFilter";
/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/24-13:40
 * @description 文件索引查询过滤器
 */
export default class GxFileFilter extends GxTagFilter{
    /**
     * 基于扩展名查询
     */
    ext?:string;
    /**
     * 基于虚拟目录树查询
     */
    catalog?:string;
    trim() {
        super.trim();
        if (this.isNone(this.ext)) delete this.ext;
        if (this.isNone(this.catalog)) delete this.catalog;
        return this;
    }
}