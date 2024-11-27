/**
 * 工艺的状态信息
 */
export default class GxCraftStatus {
    /** 未激活*/
    static INACTIVATED = 1;
    /** 已激活*/
    static ACTIVATED = 2;
    /** 设计中*/
    static DESIGNING = 4;
    /** 调试中*/
    static DEBUGGING = 8;

    static statusArr = [
        new GxCraftStatus(GxCraftStatus.INACTIVATED, '草稿', 'Draft', '#CCCCCC'),
        new GxCraftStatus(GxCraftStatus.ACTIVATED, '正式', 'Formal', '#ED7824'),
        new GxCraftStatus(GxCraftStatus.DESIGNING, '设计中', 'Designing', '#2E6BE6'),
        new GxCraftStatus(GxCraftStatus.DEBUGGING, '调试中', 'Debugging', '#47B784'),
    ];

    /** 状态值 */
    status = 1;

    /** 状态名称 */
    name = '草稿';

    /** 状态样式名称 */
    classname = 'Draft';

    /** 状态背景颜色 */
    bgcolor = '#CCCCCC'

    constructor(status:number, name:string, classname:string, bgcolor:string) {
        this.status = status;
        this.name = name;
        this.classname = classname;
        this.bgcolor = bgcolor;
    }

    /**
     * 获取工艺状态数据的列表
     * @returns 
     */
    static list = () => {
        return this.statusArr;
    }

    /**
     * 根据状态值，获取状态信息
     * @param {int} status 
     */
    static get = (status:number):GxCraftStatus => {
        let _status = null;
        for (let i = 0; i < this.statusArr.length; i++) {
            if ((status & this.statusArr[i].status) === this.statusArr[i].status) {
                _status = this.statusArr[i];
                break;
            }
        }
        return _status === null ? this.statusArr[0] : _status;
    }

    /**
     * 判断是否设计中
     * @param {int} status 
     * @returns 
     */
    static isDesigning = (status:number) => {
        return (GxCraftStatus.DESIGNING & status) === GxCraftStatus.DESIGNING;
    }

    /**
     * 判断是否调试中
     * @param {int} status 
     * @returns 
     */
    static isDebugging = (status:number) => {
        return (GxCraftStatus.DEBUGGING & status) === GxCraftStatus.DEBUGGING;
    }

    /**
     * 判断是否正式激活
     * @param {int} status 
     * @returns 
     */
    static isFormal = (status:number) => {
        return (GxCraftStatus.ACTIVATED & status) === GxCraftStatus.ACTIVATED;
    }
}