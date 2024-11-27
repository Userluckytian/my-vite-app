/**
 * @author yukun24@126.com
 * @version v1.0-beta
 * @date created on 2024/6/5:10:18
 * @desc 样本库网格规则
 */
export default class GxSampleGridRule{
    key?:string;
    id?:number;
    name?:string;
    /**公里数（基于不同层级和精准边界规则生产对应的格网数据）*/
    km?:number;
    /**最小地图缩放层级 */
    minZoom?:number;
    /**最大地图缩放层级 */
    maxZoom?:number;
    /**精准边界（通过上传shp文件，后端服务解析后返回一个geojson字符串给前端）*/
    extend?:string;
    /** 生成状态： 0：创建中，1：已创建 2：创建失败 */
    status?:number;
    /** 生成失败时的错误消息 */
    errMsg?:string;
    /** 关联的格网ID */
    grid?:number;
    /**
     * 格网的geojson数据，基于公里数和精准边界算出来的，里面会不定期的更新properties的属性值，
     * 属性值是样本数据在当前范围中的大小
     * 存到数据库最好是压缩格式的，出来再还原*/
    data?:string;
    /** 创建时间 */
    cTime?:string;
    /**更新时间*/
    uTime?:string;
    constructor(options?:any){
        
    }
    /**
     * 计算比例，得到不同程度的颜色值
     * @param dataCount 数据量
     * @param total 总量 默认10000
     */
    static calcColorByPercent(dataCount: number, total = 10000): string {
        const percent = dataCount / total;
        // 根据百分比，定义颜色级别，深度根据值调整
        return percent > 1
        ? "rgba(0,100,0,0.9)" // 深绿色
        : percent > 0.9
        ? "rgba(34,139,34,0.8)" // 森林绿
        : percent > 0.8
        ? "rgba(50,205,50,0.7)" // 酸橙绿
        : percent > 0.7
        ? "rgba(144,238,144,0.6)" // 淡绿色
        : percent > 0.6
        ? "rgba(152,251,152,0.5)" // 苍白绿色
        : percent > 0.5
        ? "rgba(173,255,47,0.4)" // 黄绿色
        : percent > 0.4
        ? "rgba(127,255,0,0.3)" // 草绿色
        : percent > 0.3
        ? "rgba(0,255,0,0.2)" // 绿色
        : percent > 0.2
        ? "rgba(0,250,154,0.1)" // 适中的春绿色
        : percent > 0.1
        ? "rgba(0,206,123,0.1)" // 深青色
        : "rgba(0,191,99,0.1)"; // 天蓝色
    }
}