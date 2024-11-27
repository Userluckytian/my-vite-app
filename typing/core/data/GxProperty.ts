import GxDomain from "./GxDomain";
import GxField from "./GxField";
import GxUIType from "./GxUIType";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/3/8 11:08
 * @Description: 数据单个属性信息
 */
export default class GxProperty {

  name?: string;
  caption?: string;
  tag?: string;
  fType?: number;
  domain?: GxDomain;
  value?: any;
  uiType?: string;
  des?: string;
  notNull?: boolean;
  readOnly?: boolean;

  static INTEGER = 2; //整型
  static FLOAT = 4; //浮点型
  static STRING = 9; //字符型

  static staticValues = {
    [GxProperty.INTEGER]: '整型',
    [GxProperty.FLOAT]: '浮点型',
    [GxProperty.STRING]: '字符型'
  };
  /**
   * 属性信息界面样式
   */
  // uiType?: GxUIType;
  constructor(property?: any) {
    if (property) {
      this.name = property.name;
      this.caption = property.caption;
      this.tag = property.tag;
      this.fType = property.fType;
      if (property.domain) {
        this.domain = new GxDomain(property.domain);
      }
      // const array = this.checkIfArray(property.value);
      // console.log(array,property.value);
      
      // if (array) {
      //   this.value = array.join(', ');
      // } else {
        this.value = property.value;
      // }
      this.uiType = property.uiType;
      this.des = property.des;
      this.notNull = property.notNull;
      this.readOnly = property.readOnly;
    }
  }
  checkIfArray(str:string){
    try {
      str = str.replace(/'/g, '"');
      console.log(str);
      
      const parsed = JSON.parse(str);
      return Array.isArray(parsed) ? parsed : false;
    } catch (e) {
      return false;
    }
  };
}