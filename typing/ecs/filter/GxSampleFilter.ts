import GxSortFilter from "../../core/filter/GxSortFilter";

/**
 * 标签筛选
 */
export default class GxSampleFilter extends GxSortFilter {
    /**
     * 根据行政区划ID进行检索
     */
    regionId?: number;
    /**
     * 查询范围
     */
    geom?: string;
    sampleDataSet?:number
    /**
     * 根据状态进行检索
     * 类型为Array or Set<string>
     */
    status?:number;
    /**
     * 根据样本集分类进行检索
     */
    sampleType?:number;
    type?:number;
    /**
     * 根据业务类型进行检索
     */
    business?:string;
    /** 默认查询正样本 */
    sign?:number;

    constructor (options?: any) {
        super(options);
        if (options && options.regionId) {
            this.regionId = options.regionId;
        }
        if (options && options.geom) {
            this.geom = options.geom;
        }
        if (options && options.sampleDataSet) {
            this.sampleDataSet = options.sampleDataSet;
        }
        if (options && options.status) {
            this.status = options.status;
        }
        if (options && options.sampleType) {
            this.sampleType = options.sampleType;
        }
        if (options && options.type) {
            this.type = options.type;
        }
        if (options && options.business) {
            this.business = options.business;
        }
        if (options && options.sign) {
            this.sign = options.sign;
        }
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.status)) delete this.status;
        return this;
    }
}