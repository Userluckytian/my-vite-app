import GxCodedValueDomain from "./GxCodedValueDomain";
import GxTypeDomain from "./GxTypeDomain";
import GxRangeDomain from "./GxRangeDomain";
import GxUIType from "./GxUIType";

/**
 * 字段阈值定义
 */
export default class GxDomain {
  range?: GxRangeDomain;
  code?: GxCodedValueDomain;
  constructor(options: any) {
    if (options) {
      if (options.range) {
        this.range = new GxRangeDomain(options.range);
      } else if (options.code) {
        this.code = new GxCodedValueDomain(options.code);
      }
    }
  }

  /**
   * 返回域值类型
   *
   * @return
   */
  domainType() {
    if (this.range) return this.range.domainType();
    else if (this.code) return this.code.domainType();
    else return null;
    // 通过在方法中抛出错误来模拟抽象方法。这意味着任何试图直接使用GxDomain类或没有实现这些方法的子类的代码都会导致错误。
    // throw new Error('You have to implement the method domainType!');
  }

  /**
   * 克隆自己
   *
   * @return
   */
  clone() {
    // throw new Error('You have to implement the method clone!');
  }

  static getAllDomain() {
    let result = Object.values(GxDomain).filter(dm => !(dm instanceof Function));
    return result;
  }

  getData() {
    if (this.range) return this.range;
    else if (this.code) return this.code;
    // else if (this.type) return this.type;
    else return null;
  }

  //   /** 基于值域key获取对应的带UI类型的域对象  */
  static getDomainByKey(key?: string) {
    let result = Object.values(GxDomain).filter(dm => !(dm instanceof Function)).filter((dm: any) => dm.key == key);
    return (result && result.length > 0) ? result[0] :null;
  }
}
// export default class GxDomain {
//   static NONE = { key: null, name: "无", uiType: [GxUIType.TEXT] };
//   static CODE = { key: "code", name: "码值", uiType: [GxUIType.RADIO, GxUIType.CHECKBOX, GxUIType.SELECT], };
//   static RANGE = { key: "range", name: "范围值", uiType: [GxUIType.NUMBER, GxUIType.SLIDER,] };
//   /** 范围值域 */
//   range?: GxRangeDomain;
//   /** 编码值域 */
//   code?: GxCodedValueDomain;
//   /** 类型值域 */
//   type?: GxTypeDomain;

//   constructor(options?: any) {
//     if (options) {
//       if (options.range) {
//         this.range = new GxRangeDomain(options.range);
//       } else if (options.code) {
//         this.code = new GxCodedValueDomain(options.code);
//       } else if (options.type) {
//         this.type = new GxTypeDomain(options.type);
//       }
//     }
//   }

//   getData() {
//     if (this.range) return this.range;
//     else if (this.code) return this.code;
//     else if (this.type) return this.type;
//     else return null;
//   }

//   setRangeData(range: GxRangeDomain) {
//     this.range = range;
//   }

//   setCodeData(code: GxCodedValueDomain) {
//     this.code = code;
//   }

//   setTypeData(type?: GxTypeDomain) {
//     this.type = type;
//   }

//   static createDomain(key: string) {
//     if (!key) return null;
//     let domain;
//     switch (key) {
//       case "range":
//         domain = new GxDomain({ range: new GxRangeDomain() });
//         break;
//       case "code":
//         domain = new GxDomain({ code: new GxCodedValueDomain() });
//         break;
//       default:
//         domain = new GxDomain({ type: new GxTypeDomain({ value: key }) });
//         break;
//     }
//     return domain;
//   }

//   /** 基于值域key获取对应的带UI类型的域对象  */
//   static getDomainByKey(key?: string) {
//     let result = Object.values(GxDomain).filter(dm => !(dm instanceof Function)).filter((dm: any) => dm.key == key);
//     return (result && result.length > 0) ? result[0] : GxDomain.NONE;
//   }

//   static getAllDomain() {
//     let result = Object.values(GxDomain).filter(dm => !(dm instanceof Function));
//     return result;
//   }
// }
