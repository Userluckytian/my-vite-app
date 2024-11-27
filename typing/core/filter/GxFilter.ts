/**
 * 唯一标识，名称，类型筛选
 */
export default class GxFilter {
    /**
     * 根据对象标识进行检索
     * 类型为long
     */
    id ?:number;

    /**
     * 根据对象标识列表进行检索
     * 类型为Array or Set<long>
     */
    ids?:Array<number>;

    /**
     * 根据对象名称进行检索
     * 类型为string
     */
    name?:string;

    /**
     * 根据对象类型进行检索
     * 类型为int
     */
    otype?:number;

    /**
     * 根据对象审核状态进行检索
     * 类型为int
     */
    checkStatus?:number;

    /**
     * 进行分页检索（页码+页面大小）
     * 类型为int
     */
    pageNum?:number= 1;
    pageSize?:number = 20;

    /**
     * 查询结果是否要转换成极小的object对象
     * 该对象只包含id，name和type
     * 类型为bool
     */
    toObject?:boolean;

    constructor (options?: any) {
        if (options && options.id) {
            this.id = options.id;
        }
        if (options && options.ids) {
            this.ids = options.ids;
        }
        if (options && options.name) {
            this.name = options.name;
        }
        if (options && options.otype) {
            this.otype = options.otype;
        }
        if (options && options.checkStatus) {
            this.checkStatus = options.checkStatus;
        }
        if (options && options.pageNum) {
            this.pageNum = options.pageNum;
        }
        if (options && options.pageSize) {
            this.pageSize = options.pageSize;
        }
        if (options && options.toObject) {
            this.toObject = options.toObject;
        }
    }

    /**
     * 判断给定值是否为空
     * @param {Object} val 
     * @returns 
     */
    isNone(val:any) {
        return (typeof val === 'undefined' || val === null);
    }

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        if (this.isNone(this.id)) delete this.id;
        if (this.isNone(this.ids)) delete this.ids;
        if (this.isNone(this.name)) delete this.name;
        if (this.isNone(this.otype)) delete this.otype;
        if (this.isNone(this.checkStatus)) delete this.checkStatus;
        if (this.isNone(this.pageNum)) delete this.pageNum;
        if (this.isNone(this.pageSize)) delete this.pageSize;
        if (this.isNone(this.toObject)) delete this.toObject;
        return this;
    }
}