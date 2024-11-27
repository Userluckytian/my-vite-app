import GxToolX from "./GxToolX";
import GxDataStorage from "../ecs/data/GxDataStorage";

/**
 * 流程模型
 * 注意：通过其id异步获取图
 */
export default class GxFlow extends GxToolX {
    /** 
     * 数据存储地址 
     * 说明：通过系统注册的存储协议进行设置
     */
    storage?: GxDataStorage;

    constructor(options?: any) {
        super(options);
        if (options) {
            if (options.storage) this.storage = new GxDataStorage(options.storage);
        }
    }
}