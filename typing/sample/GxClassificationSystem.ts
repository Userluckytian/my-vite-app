import GxUser from "../core/lang/GxUser";

/**
 * XXX样本库分类体系
 */
export default class GxClassificationSystem {
  /**分类体系唯一ID*/
  id?: number;
  /**分类体系唯一ID(DOM专有的)*/
  key?: any;
  /**分类体系名称*/
  name?: string;
  title?: any;
  /**分类体系编码*/
  code?: string;
  /**级别（一级、二级、三级...etc,基于数的层级进行判断）*/
  level: number = 0;
  /**分类体系描述*/
  desc?: string;
  /**分类体系对应的参考图片，多个逗号隔开*/
  images?:string;
  /**父分类体系的ID*/
  parent?: number;
  /**子分类体系集*/
  children?: GxClassificationSystem[];
  /**隶属于哪个业务（库）*/
  business?: number;
  /**隶属于哪个模板（如果仅是隶属于业务库，那这个值就是0，如果不为0就是隶属于模板的）*/
  sampleType?: number;
  /**创建用户*/
  user?: GxUser;
  /**更新时间*/
  uTime?: string;
  constructor(options?: any) {
    if (options && options.id) {
      this.id = options.id;
    }
    if (options && options.key) {
      this.key = options.key;
    }
    if (options && options.name) {
      this.name = options.name;
    }
    if (options && options.title) {
      this.title = options.title;
    }
    if (options && options.code) {
      this.code = options.code;
    }
    if (options && options.level) {
      this.level = options.level;
    }
    if (options && options.desc) {
      this.desc = options.desc;
    }
    if (options && options.images) {
      this.images = options.images;
    }
    if (options && options.parent) {
      this.parent = options.parent;
    }
    if (options && options.children) {
      this.children = options.children;
    }
    if (options && options.business) {
      this.business = options.business;
    }
    if (options && options.sampleType) {
      this.sampleType = options.sampleType;
    }
    if (options && options.user) {
      this.user = options.user;
    }
    if (options && options.uTime) {
      this.uTime = options.uTime;
    }
  }

  /** 基于level拿到对应层级名称 */
  static getLevelName(level: number) {
    return level === 0
      ? "一级分类"
      : level === 1
      ? "二级分类"
      : level === 2
      ? "三级分类"
      : level === 3
      ? "四级分类"
      : level === 4
      ? "五级分类"
      : level === 5
      ? "六级分类"
      : level === 6
      ? "七级分类"
      : "扩展分类";
  }

  /** 基于层级名称拿到对应level */
  static getLevel(levelName: string) {
    return levelName === "一级分类"
      ? 0
      : levelName === "二级分类"
      ? 1
      : levelName === "三级分类"
      ? 2
      : levelName === "四级分类"
      ? 3
      : levelName === "五级分类"
      ? 4
      : levelName === "六级分类"
      ? 5
      : levelName === "七级分类"
      ? 6
      : 7;
  }
  
  /** 获取父类的keys */
  static getParentKeys(systems:GxClassificationSystem[],result:string[]){
      if(Array.isArray(systems) && systems.length > 0){
          for(let i = 0; i<systems.length;i++){
            let system = systems[i];
            if (system.children && system.children.length > 0){
              system.key && result.push(system.key);
              GxClassificationSystem.getParentKeys(system.children,result);
            }
          }
      }
  }

  /** 获取第一张图片的ID */
  static getFirstImage(system:GxClassificationSystem):string{
    if(system.images != "" && system.images != undefined){
      let imageIds = system.images.split(",")
      return imageIds[0];
    }
    return "";
  }


  /** 根据传递的数据转换为树结构（name => title） */
  static getClassificationTreeData(data: GxClassificationSystem[] | undefined) {
    let treeData: GxClassificationSystem[] = [];
    if (Array.isArray(data) && data.length > 0) {
      for (let i = 0; i < data.length; i++) {
        let system = data[i];
        let children = system.children;
        let treeItem = {
          ...system,
          title: system.name,
          children: GxClassificationSystem.getClassificationTreeData(children),
        };
        treeData.push(treeItem);
      }
    }
    return treeData;
  }
}
