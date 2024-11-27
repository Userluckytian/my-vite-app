import GxSortFilter from './GxSortFilter';
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/9/25 16:46
 * @Description:属性查询过滤条件
 */
export default class GxAttributeFilter extends GxSortFilter{
    /**
     * 所属类别的唯一标识
     */
    classID?:number;
     /**
     * 查询哪些字段信息，有先后顺序
     */
    fNames?:Array<string>;
    /**
     * 所属类别的唯一标识
     */
    where?:string; 
    /**
    * 是否加载属性信息
    */
    loadAttr = false;
      /**
     * 是否加载属于的类别信息
     */
    loadClass = false;

}