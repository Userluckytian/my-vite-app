/** 
 * 字段值域中的码值对象
 */
export default class GxCodedValue {
    code?: string;
    name?: string;
    constructor(code:string, name:string) {
        this.code = code || '';
        this.name = name || this.code;
    }
  
    // getCode() {
    //     return this.code;
    // }
  
    // setCode(code) {
    //     this.code = code;
    // }
  
    // /**
    //  * 码值别名是空的用码值作为别名
    //  *
    //  * @return
    //  */
    // getName() {
    //     return this.name ? this.name : this.code;
    // }
  
    // setName(name) {
    //     this.name = name;
    // }
  }
// export default class GxCodedValue {
//     /** 码值 */
//     code?: string;
//     /** 码值别名 */
//     name?: string;
//     constructor(options?: any) {
//         this.code = options!.code
//         this.name = options!.name
//     }
// }