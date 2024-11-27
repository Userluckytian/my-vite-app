import GxProperties from "../../core/data/GxProperties";
import GxObject from "../../core/lang/GxObject";
import GxUser from "../../core/lang/GxUser";
import GxDataStorage from "../data/GxDataStorage";
import GxDataType from "../data/GxDataType";
import GxCraftStatus from "./GxCraftStatus";
import GxDag from "./GxDag";

/** 工艺对象 */
export default class GxCraft extends GxObject {
  /**工艺的图标 */
  logo = "";

  /**工艺的状态，默认为未激活状态 */
  status = GxCraftStatus.INACTIVATED;

  /** 工艺标签 */
  tags?: Array<any> = [];

  /** 工艺描述 */
  description = "";

  /** 是否是流式的，默认非流式 */
  flow = false;

  /**记录工艺被修改的状态 */
  bEdit = false;
  /** 所属位置对象 */
  pos?: GxObject;
  /** 工艺设计者 */
  author?: GxUser;
  /** 工艺创建时间 */
  createTime?: String;
  /** 工艺更新时间 */
  updateTime?: String;
  /** 数据存储地址 */
  storage?: GxDataStorage;
  /** 该工艺所要生产数据产品类型 */
  dataType?: GxDataType;
  /** 工艺图 */
  dag?: GxDag;
  /** 工艺属性 */
  properties?:GxProperties;
  /**模型类别 */
  classification?:number
  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.logo) this.logo = options.logo;
      if (options.status) this.status = options.status;
      if (options.tags) this.tags = new Array(...options.tags);
      if (options.description) this.description = options.description;
      if (options.flow) this.flow = options.flow;
      if (options.pos) this.pos = new GxObject(options.pos);
      if (options.author) this.author = new GxUser(options.author);
      // if (options.createTime) this.createTime = options.createTime;
      // if (options.updateTime) this.updateTime = options.updateTime;
      if (options.storage) this.storage = new GxDataStorage(options.storage);
      if (options.dataType) this.dataType = new GxDataType(options.dataType);
      if (options.dag) this.dag = new GxDag(options.dag);
      if (options.properties) this.properties = new GxProperties(options.properties);
      if(options.classification) this.classification = options.classification;
    }
  }
}
