import GxCodedValue from './GxCodedValue';

/** 码域，注意：码域的值一定是字符串 */
export default class GxCodedValueDomain {
  multiple?: boolean;
  codes?: Array<GxCodedValue> = [];
  /**
   * 编码值域列表
   */
  constructor(option:any) {
    this.multiple = false;
    if(option){
        this.codes = option.codes;
        this.multiple = option.multiple;
    }
      
  }

  domainType() {
      return "code";
  }

  /**
   * 克隆自身
   *
   * @return
   */
  clone() {
      // let codes = this.codes.map(v => new GxCodedValue(v.getCode(), v.getName()));
      // return new GxCodedValueDomain(codes, this.multiple);
  }

  // getCodes() {
  //     return this.codes;
  // }

  // setCodes(codes) {
  //     this.codes = codes;
  // }

  // isMultiple() {
  //     return this.multiple;
  // }

  // setMultiple(multiple) {
  //     this.multiple = multiple;
  // }
}
// export default class GxCodedValueDomain {
//   /** 码值集合 */
//   codes?: Array<GxCodedValue> = [];
//   /** 编码值或字典键值结果多选标记 默认单选 */
//   multiple = false;
//   constructor(options?: any) {
//     if (options) {
//       if (options.multiple) this.multiple = options.multiple;
//       if (options.codes) {
//         options.codes.forEach((v: GxCodedValue) => {
//           this.codes.push(new GxCodedValue({ code: v.code, name: v.name }))
//         })
//       }
//     }
//   }
//   /** 默认码值域 */
//   domainType(): string {
//     return "code";
//   }

//   /** 获取所有码值 */
//   getAllName(): Array<string> {
//     return this.codes
//       ? this.codes.map((item) => (item.name ? item.name : ""))
//       : [];
//   }
//   /** 获取所有码值别名 */
//   getAllCode(): Array<string> {
//     return this.codes
//       ? this.codes.map((item) => (item.code ? item.code : ""))
//       : [];
//   }

//   /**
//    * 在码域中增加缺省码值对象（保证其唯一性）
//    * 返回增加的缺省码值对象
//    */
//   addDefaultCodedValue() {
//     let tempCode = "";
//     let codedValue: GxCodedValue = null;
//     if (this.codes) {
//       this.codes.forEach((codedValue: GxCodedValue) => {
//         if (codedValue.code) {
//           if (codedValue.code.length > tempCode.length) {
//             tempCode = codedValue.code;
//           }
//         }
//       });
//       tempCode += this.codes.length;
//       let codedValue = new GxCodedValue({ code: tempCode, name: tempCode });
//       this.codes.push(codedValue);
//     } else {
//       codedValue = new GxCodedValue({ code: "", name: "=" });
//     }
//     return codedValue;
//   }

//   /**
//    * 在码域中增加码值对象，成功返回true，否则false
//    * @param {} codedValue
//    * @returns
//    */
//   addCodedValue(codedValue: GxCodedValue) {
//     if (!this.hasCodedValue(codedValue)) {
//       this.codes!.push(codedValue);
//       return true;
//     } else return false;
//   }

//   /**
//    * 判断在码域中是否包含该码值对象，包含返回true，否则false
//    * @param {*} codedValue
//    * @returns
//    */
//   hasCodedValue(codedValue: GxCodedValue) {
//     return this.codes!.some((cv) => {
//       return cv.code === codedValue.code;
//     });
//   }
// }
