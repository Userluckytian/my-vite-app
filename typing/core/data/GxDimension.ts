/**
 * 表示数据的维度
 * 说明：维度是从几何特征进行定义的
 */
export default class GxDimension {
    /**
     * 零维，说明数据无法用数轴表达
     */
    static ZERO_D = 0;

    /**
     * 1维，说明数据用一个数轴表达
     */
    static ONE_D = 1;

    /**
     * 2维，说明数据用二维数轴表达
     */
    static TWO_D = 2;

    /**
     * 3维，说明数据用三维数轴表达
     */
    static THREE_D = 3;

    static dimensionArr = [
        new GxDimension(GxDimension.ZERO_D, '零维'),
        new GxDimension(GxDimension.ONE_D, '一维'),
        new GxDimension(GxDimension.TWO_D, '二维'),
        new GxDimension(GxDimension.THREE_D, '三维'),
    ];

    /** 维度标识 */
    dim = 0;

    /** 维度名称 */
    name = '零维';

    constructor(dim = 0, name = '零维') {
        this.dim = dim;
        this.name = name;
    }

    /**
     * 获取维度列表
     * @returns 
     */
    static list = () => {
        return this.dimensionArr;
    }

    /**
     * 根据维度值，获取维度信息
     * @param {int} dim 
     */
    static get = (dim:number) => {
        let _dimension = null;
        for (let i = 0; i < this.dimensionArr.length; i++) {
            if (dim === this.dimensionArr[i].dim) {
                _dimension = this.dimensionArr[i];
                break;
            }
        }
        return _dimension === null ? this.dimensionArr[0] : _dimension;
    }
}