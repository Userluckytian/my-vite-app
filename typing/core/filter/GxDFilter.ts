import GxFilter from "./GxFilter";

export default class GxDFilter extends GxFilter {
    /**
     * 根据数据的开始时间和结束时间进行检索
     * 类型string
     * 格式：yyyy-MM-dd HH:mm:ss
     */
    bTime?:Date;
    eTime?:Date;

    /**
     * 根据数据创建的用户ID进行检索
     * 类型为long
     */
    uid?:number;

    constructor (options?: any) {
        super(options);
        if (options && options.bTime) {
            this.bTime = options.bTime;
        }
        if (options && options.eTime) {
            this.eTime = options.eTime;
        }
        if (options && options.uid) {
            this.uid = options.uid;
        }
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.bTime)) delete this.bTime;
        if (this.isNone(this.eTime)) delete this.eTime;
        if (this.isNone(this.uid)) delete this.uid;
        return this;
    }
}