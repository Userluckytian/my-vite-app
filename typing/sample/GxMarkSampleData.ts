import GxObjectClass from '../core/data/GxObjectClass';
import GxUser from '../core/lang/GxUser';
import GxClassificationSystem from './GxClassificationSystem';
import GxMarkSampleDataImage from './GxMarkSampleDataImage';
import GxMarkSampleDataImageTile from './GxMarkSampleDataImageTile';
import GxMarkSampleDataPhoto from './GxMarkSampleDataPhoto';
/**
 * @author yukun24@126.com
 * @version v1.0-beta
 * @date created on 2024/6/5:10:18
 * @description 解译标志库样本点数据
 */
export default class GxMarkSampleData{
    id?:number;
    /**样本编号，样本点编码规则：SP-XDM-SN。例：SP-110108-00001*/
    name?:string;
    /**一级分类体系（后台存的时候只需要存code和name，这里是副本拷贝不是id引用）*/
    firstClass?:GxClassificationSystem;
    /**二级分类体系（后台存的时候只需要存code和name，这里是副本拷贝不是id引用）*/
    secondClass?:GxClassificationSystem;
    /**三级分类体系（后台存的时候只需要存code和name，这里是副本拷贝不是id引用）*/
    thirdClass?:GxClassificationSystem;
    /**扩展分类体系（后台存的时候只需要存code和name，这里是副本拷贝不是id引用）*/
    extendClass?:GxClassificationSystem;
    /**样本类型ID，标志库没有默认就0*/
    sampleType?:GxObjectClass ;
    /**影像获取时间*/
    rasterAcquireTime?:string;
    /** 采集终端标识 */
    platform?:string;
    /**影像名称*/
    rasterName?:string;
    /**影像卫星名称*/
    rasterSatellite?:string;
    /**影像卫星传感器名称*/
    rasterSensor?:string;
    /**影像分辨率*/
    rasterResolution?:number
    /**样本几何范围，，返回到外面是geojson格式，入库是geometry，如果是采集，就将gx_o_xxx表中的要素转成geometry存储，如果是导入就从矢量图斑shp中读取*/
    geom?:string;
    /**样本关联的图斑要素的几何信息 */
    feature?:string;
    /**中心点: 经度，入库的时候不需要传，但是出去的时候一定要带上*/
    lon?:number;
    /**中心点: 纬度，入库的时候不需要传，但是出去的时候一定要带上*/
    lat?:number;;
    /**省，入库的时候从样本点shp中读取，采集的时候自动获取*/
    province?:string;
    /**市，入库的时候从样本点shp中读取，采集的时候自动获取*/
    city?:string;;
    /**县，入库的时候从样本点shp中读取，采集的时候自动获取*/
    district?:string;;
    /**行政区划代码，入库的时候从样本点shp中读取，采集的时候自动获取*/
    districtCode?:string;;
    /**查看标志样本数据详情时装载这个遥感数据实例模型*/
    dataImage?:GxMarkSampleDataImage;
    /**查看标志样本数据详情时装载这个地面照片集模型*/
    dataPhotos?:GxMarkSampleDataPhoto[];
    /**查看标志样本数据详情时装载这个遥感数据实例切集模型*/
    dataImageTiles?:GxMarkSampleDataImageTile[];
    /**对应的遥感实例与矢量图斑截图所在的路径（有些样本点数据丢失了遥感实例数据，有可能有遥感影像实例与矢量图斑的截图，这时候这个地址可以记录png的位置）*/
    path?:string;;
    storage?:number;
    user?:GxUser;
    props:any ;
    /**创建时间*/
    cTime?:string;
    constructor(options?:any){

    }
}