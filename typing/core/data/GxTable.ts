import GxObject from "../lang/GxObject";
import GxOType from "../lang/GxOType";
import GxUser from "../lang/GxUser";
import GxDataOType from "./GxDataOType";
import GxField from "./GxField";
import GxFieldIndex from "./GxFieldIndex";
/**
 * @Author: zhangyajun
 * @Version: V1.6.0
 * @note: 创建于 2023/3/8 19:54
 * @Description: 通用表结构数据，表示同一类行记录的集合
 * 通过T表来创建，即表名为“T_"+Table.iD;
 * 例如：csv，excel等二维表结构的数据，都可以用该对象进行描述
 */
export default class GxTable extends GxObject {
  static readonly CODE = 2; //表的编码部分
  static readonly DESCRIPTION = 4; //表的字段部分
  static readonly FIELDS = 8; //表的字段部分
  static readonly INDEXS = 16; //表的索引部分
  static readonly TAGS = 32; //表的标签
  /**
   * 该类信息的编码
   * 说明：在类别中具有唯一性
   */
  code?: string;
  /**
   * 该类信息的描述
   */
  des?: string;
  /**
   * 字段集合
   */
  fields?: Array<GxField> = [];
  /**
   * 字段集中索引信息
   */
  indexs?: Array<GxFieldIndex> = [];
  /**
   * 数据标签
   */
  tags?: Array<string> = [];
  /**
   * 谁创建的
   **/
  user?: GxUser;
  /**
   * 创建位置
   **/
  pos?: GxObject;
  /**
   * 创建时间
   */
  cTime?: Date;
  /**
   * 更新时间
   **/
  uTime?: Date;
  constructor(options?:any){
    super(options);
    if (options && options.code) {
        this.code = options.code;
    }
    if (options && options.des) {
        this.des = options.des;
    }
    if (options && options.fields) {
        this.fields = options.fields;
    }
    if (options && options.indexs) {
        this.indexs = options.indexs;
    }
    if (options && options.tags) {
        this.tags = options.tags;
    }
    if (options && options.user) {
        this.user = new GxUser(options.user);
    }
    if (options && options.pos) {
        this.pos = new GxObject(options.pos);
    }
    if (options && options.cTime) {
        this.cTime = new Date(options.cTime)
    }
    if (options && options.uTime) {
        this.uTime = new Date(options.uTime);
    }
    this.setOType(new GxOType({otid:GxDataOType.TABLE,name:""}));
  }
}
