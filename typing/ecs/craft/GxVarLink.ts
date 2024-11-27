export default class GxVarLink {
    /** 前置模型输出数据的key值 */
    outKey: string = "";

    /** 后置模型输入数据的key值 */
    inKey: string = "";

    constructor(options?: any) {
        if (options) {
            if (options.outKey) this.outKey = options.outKey;
            if (options.inKey) this.inKey = options.inKey;
        }
    }
}