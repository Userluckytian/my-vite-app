/** 范围值域 */
export default class GxRangeDomain{
    minValue?: number;
    maxValue?: number;
    /**
     * 最小值
     */
    constructor(option:any) {
      if(option){
          this.minValue = option.minValue?option.minValue:0;
          /**
           * 最大值
           */
          this.maxValue = option.maxValue?option.maxValue:0;
      }   
    }
  
    domainType() {
        return "range";
    }
  
    /**
     * 克隆自身
     *
     * @return
     */
    clone() {
        // return new GxRangeDomain(this.minValue, this.maxValue);
    }
  
    // getMinValue() {
    //     return this.minValue;
    // }
  
    // setMinValue(minValue) {
    //     this.minValue = minValue;
    // }
  
    // getMaxValue() {
    //     return this.maxValue;
    // }
  
    // setMaxValue(maxValue) {
    //     this.maxValue = maxValue;
    // }
  }
// export default class GxRangeDomain {
//     minValue?: number;
//     maxValue?: number;
//     constructor(options?: any) {
//         /** 最小值 */
//         if (options && options.minValue) {
//             this.minValue = options.minValue;
//         }
//         /** 最大值 */
//         if (options && options.maxValue) {
//             this.maxValue = options.maxValue;
//         }
//     }

//     domainType() { return "range"; }
// }