import GxAttributeFilter from "./GxAttributeFilter";

export default class GxSpatialFilter extends GxAttributeFilter {
  /**
   * 空间范围，geojson格式
   * 按照空间范围进行查询相交的数据
   */
  geo?: string;

  /**
   * 加载查询geo信息
   */
  loadGeo = false;
}
