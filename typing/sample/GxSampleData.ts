import GxUser from "../core/lang/GxUser";
import GxSampleDataLabel from "./GxSampleDataLabel";
import GxClassificationSystem from "./GxClassificationSystem";
/**
 * <p>样本数据</p>
 *
 * @author yukun24@126.com
 * @version v.1.0-alpha
 * @date created on 2024/5/6-21:47
 */
export default class GxSampleData {
  id?: number;
  /**样本数据集的名称自动生成： img_${id}.png*/
  name?: string;
  /**样本编号，100001,100002,100003*/
  no?: string;
  /**样本批次号，后台自动生成（填写方式为“年份”+“季，例：202001/202002/202003/202004）*/
  batchNo?: string;
  /**关联样本集*/
  sampleSet?: number;
  /**从样本采集工程中继承过来的*/
  sampleType?: number;
  /**关联在哪个存储（默认一个，内置）*/
  storage?: number;
  /**样本数据大小,单位字节*/
  size?: number;
  /**基准影像（前时像）切片路径*/
  preImgPath?: string;
  /**基准影像（前时像）样本一级分类（包含编码和名称）*/
  preFirstCls?: GxClassificationSystem;
  /**基准影像（前时像）样本二级分类（包含编码和名称）*/
  preSecondCls?: GxClassificationSystem;
  /**监测影像（后时像）切片路径*/
  postImgPath?: string;
  /**监测影像（后时像）样本一级分类（包含编码和名称）*/
  postFirstCls?: GxClassificationSystem;
  /**监测影像（后时像）样本二级分类（包含编码和名称）*/
  postSecondCls?: GxClassificationSystem;
  /**
   * 样本数据所处的绝对路径
   * 存储根路径：Y:/生态解译/
   * 一个样本数据集的相对路径：
   *  XXX数据集_/train/A
   *  XXX数据集_/train/B
   *  XXX数据集_/train/labels
   * 样本数据集目录下标准化的变化检测样本train目录如下：
   * A:
   *   img_100001.png
   *   img_100002.png
   * B:
   *   img_100001.png
   *   img_100002.png
   * label:
   *   img_100001.png
   *   img_100002.png
   *
   * 样本数据集目录下标准化的目标识别、语义分割、或其他样本train目录如下：
   * images：
   *   img_100001.png
   *   img_100002.png
   * labels
   *   img_100001.png
   *   img_100002.png
   * 唯一后续可能要变的就是，目标识别输出的labels可能是要素的xml或geojson，而语义分割就是单纯的png
   */
  labelPath?: string;
  geom?: string;
  /**样本对应的geoJson，含属性*/
  feature?: string;
  /**中心点: 经度，入库的时候不需要传，但是出去的时候一定要带上*/
  lon?: number;
  /**中心点: 纬度，入库的时候不需要传，但是出去的时候一定要带上*/
  lat?: number;
  /**属性信息（省啊、市啊、县啊、采集人啊、其他分类编码啊这些信息统统放到props里面）*/
  props?: any;
  /**样本的正负号，0表示正样本，1表示负样本*/
  sign?: number;
  /**标签，数据库存json*/
  labels?: GxSampleDataLabel[];
  user?: GxUser;
  cTime?: string;
  constructor(options?: any) {}

  /** 获取基准影像一级分类名称 */
  static getPreFirstClsName(sampleData: GxSampleData) {
    if (sampleData && sampleData.preFirstCls) {
      return sampleData.preFirstCls.name;
    }else if(sampleData && sampleData.props && sampleData.props.YJFLMC_Q){
      return sampleData.props.YJFLMC_Q;
    }else{
      return "";
    }
  }
  /** 获取基准影像二级分类名称 */
  static getPreSecondClsName(sampleData: GxSampleData) {
    if (sampleData && sampleData.preSecondCls) {
      return sampleData.preSecondCls.name;
    }else if(sampleData && sampleData.props && sampleData.props.EJFLMC_Q){
      return sampleData.props.EJFLMC_Q;
    }else{
      return "";
    }
  }

  /** 获取监测影像一级分类名称 */
  static getPostFirstClsName(sampleData: GxSampleData) {
    if (sampleData && sampleData.postFirstCls) {
      return sampleData.postFirstCls.name;
    }else if(sampleData && sampleData.props && sampleData.props.YJFLMC_H){
      return sampleData.props.YJFLMC_H;
    }else{
      return "";
    }
  }
  /** 获取监测影像二级分类名称 */
  static getPostSecondClsName(sampleData: GxSampleData) {
    if (sampleData && sampleData.postSecondCls) {
      return sampleData.postSecondCls.name;
    }else if(sampleData && sampleData.props && sampleData.props.EJFLMC_H){
      return sampleData.props.EJFLMC_H;
    }else{
      return "";
    }
  }

  /** 获取行政区划 */
  static getAllDistrict(sampleData: GxSampleData){
    if(sampleData && sampleData.props){
      let props = sampleData.props;
      let province = props.SHENG;
      let city = props.SHI;
      let district = props.XIAN;
      if(province && city && district){
       return province+"/"+city+"/"+district;
      }else if(province && city){
        return province+"/"+city;
      }else if(city && district){
        return city+"/"+district;
      }else if(province){
        return province;
      }else if(city){
        return city;
      }else if(district){
        return district;
      }else{
        return ""
      }
    }
    return "";
  }

   /** 获取行政区划(省) */
   static getProvince(sampleData: GxSampleData){
    if(sampleData && sampleData.props){
      let props = sampleData.props;
      let province = props.SHENG;
      if(province){
       return province;
      }else{
        return "";
      }
    }
    return "";
  }
  /** 获取行政区划(市) */
  static getCity(sampleData: GxSampleData){
    if(sampleData && sampleData.props){
      let props = sampleData.props;
      let city = props.SHI;
      if(city){
       return city;
      }else{
        return "";
      }
    }
    return "";
  }

  /** 获取行政区划(县) */
  static getDistrict(sampleData: GxSampleData){
    if(sampleData && sampleData.props){
      let props = sampleData.props;
      let district = props.XIAN;
      if(district){
       return district;
      }else{
        return "";
      }
    }
    return "";
  }

  /** 获取编号 */
  static getSampleNo(sampleData: GxSampleData){
    if(sampleData && sampleData.no && sampleData.batchNo){
      return `SP-${sampleData.batchNo}-${sampleData.no}`;
    }else if(sampleData && sampleData.batchNo){
      return `SP-${sampleData.batchNo}`;
    }else {
      return `SP-${sampleData.id}`;
    }  
  }

  /** 获取备注信息 */
  static getNote(sampleData: GxSampleData){
    if(sampleData && sampleData.props && sampleData.props.BZ){
       return sampleData.props.BZ;
    }  
    return "";
  }

   /** 获取正负样本信息 */
   static getSign(sampleData: GxSampleData){
    if(sampleData){
       return sampleData.sign === 0 ? "正" : sampleData.sign === 1 ? "负" : "";
    }  
    return "";
  }

}
