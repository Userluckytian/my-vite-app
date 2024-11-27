import GxObject from "./GxObject";
import GxUser from "./GxUser";

/** 
 * 组织/团队 
 */
export default class GxGroup extends GxObject {
  /** 用户组图标 */
  icon = '';

  /** 用户组描述信息*/
  des = '';

  /** 标签 */
  tags:Array<string> = [];

  pos = new GxObject({
     id:0,
     name:"系统",
     type:{
      otid:0,
      name:"系统"
     }
  });
  uTime:any;
  user:GxUser | null = null;
  obj:GxObject | null = null;
  filteredPurview : number = 0;
  addedPurview :number = 0;
  closed:boolean = false;
  constructor(options?:any) {
    super(options);
    if (options) {
      if (options.icon) this.icon = options.icon;
      if (options.des) this.des = options.des;

      /** 用户组更新时间*/
      if (options.uTime) this.uTime = options.uTime;

      /** 隶属什么位置对象*/
      if (options.pos) this.pos = new GxObject(options.pos);

      /** 用户组创建的人*/
      if (options.user) this.user = new GxUser(options.user);

      /** 用户组所关联对象*/
      if (options.obj) this.obj = new GxObject(options.obj, true);

      /** 过滤的权限值*/
      if (options.filteredPurview) this.filteredPurview = options.filteredPurview;

      /** 增加的权限值 */
      if (options.addedPurview) this.addedPurview = options.addedPurview;

      /** 组织是否被关闭*/
      if (options.closed) this.closed = options.closed;

      if (options.tags) this.tags = new Array(...options.tags);
    }
  }
}
