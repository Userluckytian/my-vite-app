import GxObjectClass from "../core/data/GxObjectClass";
import GxUser from "../core/lang/GxUser";
import GxSampleDataLabel from "./GxSampleDataLabel";

/**
 * <p>样本数据集</p>
 *
 * @author yukun24@126.com
 * @version v.1.0-alpha
 * @date created on 2024/5/6-21:47
 */
export default class GxSampleDataSet {
  /**普通样本集格式（无切片的），如果是这个格式，则原封不动的输出tif和shp就行了*/
  static readonly NORMAL_FORMAT = 0;
  /**切片样本集格式（切片的），这个格式需要选择瓦片大小和格式（tif、png还是jpg）*/
  static readonly TILED_FORMAT = 1;
  id?: number;
  /**名称*/
  name?: string;
  /**英文字段 */
  enName?: string;
  /**描述*/
  des?: string;
  /**样本集类型*/
  type?: GxObjectClass;
  /**样本集用途（1：训练集，2：验证集，3：测试集） */
  usage = 1;
  /**样本（图片）的数量，每次更新下*/
  imageCount?: number;
  /**样本集大小 */
  imageSize?: string;
  format = GxSampleDataSet.TILED_FORMAT;
  /** 基准影像切片URL */
  preImgPath?: string;
  /** 检测影像切片URL */
  postImgPath?: string;
  /** 样本切片URL */
  labelPath?: string;
  tileFormat = "tif";
  /**样本集中数据规定的的行的像素大小*/
  rowSize = 256;
  /**样样本集中数据规定的的列的像素大小*/
  colSize = 256;
  /**版权所属，比如哪个公司，哪个测绘单位吗，哪个测绘院校等*/
  copyright?: string;
  /**波段数（通道数）*/
  bands?: number;
  /**分辨率*/
  imgGSD?: number;
  /**卫星*/
  satellite?: string;
  /**样本数据集构建用户*/
  user?: GxUser;
  /**其他属性，如：构建单位、版权、合作单位、email、地址、联系方式、卫星、分辨率等，*/
  props?: any;
  uTime?: string;
  /**是否公开 0：不公开  1：公开 */
  bPublic?: number;
  /**样本集公布时间，相对于公开样本数据集来说是有明确的时间的，如果是系统的则为当天创建时间 */
  publicDate?: string;
  /**样本数据集标签（多个逗号隔开，主要用于检索），如：水体,道路*/
  tags?: string[];
  /**=====================以下规则适用于公开样本数据集的导入=============================*/
  /**标注文件的后缀格式 */
  labelFormat = "shp";
  /**基准影像以以什么格式结尾，比如：images.png 或者 VH.png(VH 水平)*/
  preTileFileRule?: string;
  /**监测影像以以什么格式结尾，比如：images.png 或者 VV.png（VV 垂直）*/
  postTileFileRule?: string;
  /**标注文件以什么格式结尾，比如：labels.png 或 labels.tif*/
  labelFileRule?: string;
  /** 标样标签数组 */
  labels?: GxSampleDataLabel[];
  /**=====================以上规则适用于公开样本数据集的导入=============================*/

  constructor(options?: any) {
    if (options && options.id) {
      this.id = options.id;
    }
    if (options && options.name) {
      this.name = options.name;
    }
    if (options && options.enName) {
      this.enName = options.enName;
    }
    if (options && options.des) {
      this.des = options.des;
    }
    if (options && options.satellite) {
      this.satellite = options.satellite;
    }
    if (options && options.type) {
      this.type = new GxObjectClass(options.type);
    }
    if (options && options.imageCount) {
      this.imageCount = options.imageCount;
    }
    if (options && options.format) {
      this.format = options.format;
    }
    if (options && options.tileFormat) {
      this.tileFormat = options.tileFormat;
    }
    if (options && options.rowSize) {
      this.rowSize = options.rowSize;
    }
    if (options && options.colSize) {
      this.colSize = options.colSize;
    }
    if (options && options.preImgPath) {
      this.preImgPath = options.preImgPath;
    }
    if (options && options.postImgPath) {
      this.postImgPath = options.postImgPath;
    }
    if (options && options.labelPath) {
      this.labelPath = options.labelPath;
    }
    if (options && options.imageSize) {
      this.imageSize = options.imageSize;
    }
    if(options && options.labels){
      this.labels = options.labels.map((label: any) => new GxSampleDataLabel(label));
    }
    if (options && options.bands) {
      this.bands = options.bands;
    }
    if (options && options.imgGSD) {
      this.imgGSD = options.imgGSD;
    }
    if (options && options.usage) {
      this.usage = options.usage;
    }
    if (options && options.copyright) {
      this.copyright = options.copyright;
    }
    if (options && options.user) {
      this.user = new GxUser(options.user);
    }
    if (options && options.props) {
      this.props = options.props;
    }
    if (options && options.uTime) {
      this.uTime = options.uTime;
    }
    if (options && options.bPublic) {
      this.bPublic = options.bPublic;
    }
    if (options && options.publicDate) {
      this.publicDate = options.publicDate;
    }
    if (options && options.tags) {
      this.tags = options.tags;
    }
    if (options && options.labelFormat) {
      this.labelFormat = options.labelFormat;
    }
    if (options && options.preTileFileRule) {
      this.preTileFileRule = options.preTileFileRule;
    }
    if (options && options.postTileFileRule) {
      this.postTileFileRule = options.postTileFileRule;
    }
    if (options && options.labelFileRule) {
      this.labelFileRule = options.labelFileRule;
    }
  }

  // 返回切片格式下拉框的选项
  static getTileFormatOptions() {
    return [
      { label: "tif", value: "tif" },
      { label: "jpg", value: "jpg" },
      { label: "png", value: "png" },
      { label: "shp", value: "shp" },
    ];
  }

  // 返回样本集格式下拉框的选项
  static getFormatOptions() {
    return [
      { label: "普通数据集", value: GxSampleDataSet.NORMAL_FORMAT },
      { label: "切片数据集", value: GxSampleDataSet.TILED_FORMAT },
    ];
  }

  // 返回样本集用途下拉框的选项
  static getUsageOptions() {
    return [
      { label: "训练集", value: 1 },
      { label: "验证集", value: 2 },
      { label: "测试集", value: 3 },
    ];
  }

  static getUsageName(code: number) {
    if (code == 1) {
      return "训练集";
    } else if (2 == code) {
      return "验证集";
    } else if (3 == code) {
      return "测试集";
    } else {
      return "";
    }
  }

  // 根据样本集格式返回样本集格式的名称
  static getFormatName(format: number) {
    if (format === GxSampleDataSet.NORMAL_FORMAT) {
      return "普通样本集";
    } else if (format === GxSampleDataSet.TILED_FORMAT) {
      return "切片样本集";
    }
    return "";
  }
}
