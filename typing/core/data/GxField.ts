import GxObject from "../lang/GxObject";
import GxUser from "../lang/GxUser";
import GxDomain from "./GxDomain";
import GxUIType from "./GxUIType";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/3/8 12:46
 * @Description: 字段信息
 */
export default class GxField extends GxObject {
  static GX_OBJECT = {
    key: 0,
    value: "gx_obj对象",
    uiType: [GxUIType.SELECT, GxUIType.TEXTAREA],
    domainType: [],
  }; //gx_obj对象
  static GEOMETRY = {
    key: 1,
    value: "几何对象",
    uiType: [GxUIType.TEXTAREA],
    domainType: [],
  }; //几何对象
  static INTEGER = {
    key: 2,
    value: "整型",
    uiType: [GxUIType.NUMBER],
    domainType: [GxDomain.NONE, GxDomain.CODE, GxDomain.RANGE],
  }; //整型
  static LONG = {
    key: 3,
    value: "长整型",
    uiType: [GxUIType.NUMBER],
    domainType: [GxDomain.NONE, GxDomain.CODE, GxDomain.RANGE],
  }; //长整型
  static FLOAT = {
    key: 4,
    value: "单精度浮点",
    uiType: [GxUIType.NUMBER],
    domainType: [GxDomain.NONE, GxDomain.CODE, GxDomain.RANGE],
  }; //单精度浮点
  static DOUBLE = {
    key: 5,
    value: "双精度浮点",
    uiType: [GxUIType.NUMBER],
    domainType: [GxDomain.NONE, GxDomain.CODE, GxDomain.RANGE],
  }; //双精度浮点
  static STRING = {
    key: 6,
    value: "字符",
    uiType: [GxUIType.TEXT],
    domainType: [GxDomain.NONE, GxDomain.CODE],
  }; //字符
  static TEXT = {
    key: 7,
    value: "文本",
    uiType: [GxUIType.TEXT],
    domainType: [],
  }; //文本
  static DATE = {
    key: 8,
    value: "日期",
    uiType: [GxUIType.DATE],
    domainType: [],
  }; //日期
  static BOOLEAN = {
    key: 9,
    value: "布尔",
    uiType: [GxUIType.RADIO],
    domainType: [],
  }; //布尔
  static PICTURE = {
    key: 10,
    value: "图片",
    uiType: [GxUIType.IMAGE],
    domainType: [],
  }; //图片
  static JSON = {
    key: 11,
    value: "json对象",
    uiType: [GxUIType.TEXTAREA],
    domainType: [],
  };
  static JSONB = {
    key: 12,
    value: "jsonb对象",
    uiType: [GxUIType.TEXTAREA],
    domainType: [],
  };

  /** 字段别名 */
  caption?: string;
  /** 字段长度 */
  length?: number;
  /** 数据精度 */
  precision?: number;
  /** 字段类型,上述目前13种类型 */
  fType?: any;
  /**是否不为空，默认为false */
  notNull?: boolean;
  /**是否为主键，默认false */
  primary?: boolean;
  /**值域 */
  domain: GxDomain | null = null;
  /**字段描述 */
  des?: string;
  /** 字段取值或缺省值 */
  value?: string;
  /** 字段单位 */
  unit?: string;
  /** 创建者 */
  user?: GxUser;
  /** 更新时间*/
  uTime?: Date;
  /** 创建位置 */
  pos?: any;
  constructor(options?: any) {
    super(options);
    this.fType = (options && options.fType) || "";
    this.caption = (options && options.caption) || "";
    this.length = (options && options.length) || 0;
    this.precision = (options && options.precision) || 0;
    this.notNull = (options && options.notNull) || false;
    this.primary = (options && options.primary) || false;
    if (options && options.domain) {
      this.domain = new GxDomain(options.domain);
    }
    /**字段注释 */
    this.des = (options && options.des) || "";

    /** 字段取值或缺省值 */
    this.value = options && options.value;

    /** 字段单位 */
    this.unit = (options && options.unit) || "";

    /** 创建者 */
    if (options && options.user) {
      this.user = new GxUser(options.user);
    }

    /** 更新时间*/
    if (options && options.uTime) {
      this.uTime = new Date(options.uTime);
    }

    /** 创建位置 */
    if (options && options.pos) {
      this.pos = options.pos;
    }
  }

  /**基于字段值类型的整数key值获取对应的字段值类型 */
  static getFieldByKey(key: number): any {
    let result = Object.values(GxField).filter((ft: any) => key == ft.key);
    return (result && result.length > 0) ? result[0] : undefined;
  }
  /** 获取所有的字段值类型的数组对象 */
  static getAllStaticVal() {
    return Object.values(GxField).filter(f => !(f instanceof Function));
  }
}