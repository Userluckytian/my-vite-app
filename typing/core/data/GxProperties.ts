import GxProperty from "./GxProperty";

export default class GxProperties {
  /**
   * 属性集合名称
   */
  name?: string;
  caption?: string;

  /**
   * 属性信息列表
   */
  props?: Array<GxProperty> = [];
  /**
   * 属性分组信息
   */
  groups?: Array<GxProperties> = [];

  constructor(options?: any) {
    if (options && options.name) {
      this.name = options.name;
    }
    if (options && options.caption) {
      this.caption = options.caption;
    }
    if (options && options.props) {
      options.props.forEach((property: any) => {
        this.props?.push(new GxProperty(property));
      });
    }
    if (options && options.groups) {
      options.groups.forEach((property: any) => {
        this.groups?.push(new GxProperties(property));
      });
    }
  }

  /**
   * 递归生成最大深度的props列表
   * @returns props列表
   */
  allGroupsProps() {
    let result = [] as GxProperty[];
    if (this.props) {
      this.props.forEach((p: GxProperty) => {
        result.push(new GxProperty(p));
      });
    }
    if (this.groups && this.groups.length > 0) {
      this.deepGroupsProps(result, this.groups);
    }
    return result;
  }

  /**
   * 最大深度props列表的最小子问题
   */
  deepGroupsProps(result: any, groups: Array<GxProperties>) {
    groups.forEach((element: GxProperties) => {
      element.props &&Array.prototype.push.apply(result, element.props);
      if (element.groups && element.groups.length > 0) {
        this.deepGroupsProps(result, element.groups);
      }
    });
  }
  /**
   * 递归生成最大深度的groups列表
   * @returns groups列表
   */
  allGroup() {
    let result = [] as GxProperties[];
    if (this.groups && this.groups.length > 0) {
      this.groups.forEach((p: GxProperties) => {
        result.push(new GxProperties(p));
      });
      this.deepGroup(result, this.groups);
    }
    return result;
  }
  /**
   * 最大深度groups列表的最小子问题
   */
  deepGroup(result: any, groups: Array<GxProperties>) {
    groups.forEach((element: GxProperties) => {
      if (element.groups &&element.groups.length > 0) {
        result.concat(element.groups);
        this.deepGroup(result, element.groups);
      }
    });
  }

  /**
   * 判断根目录下是否存在相同名称的group，编辑时排除当前操作的类目
   * @param {*} oldGroup 新增时oldGroup为null
   * @param {*} newGroupName
   * @returns
   */
  hasSameGroup(oldGroup: GxProperties, newGroupName: string) {
    let result = this.allGroup();
    let res = result.filter((group) => {
      return group.name !== oldGroup?.name;
    });
    for (let index = 0; index < res.length; index++) {
      if (newGroupName == res[index].name) {
        return true;
      }
    }
    return false;
  }
  /**
   * 判断根目录下是否存在相同名称的prop，编辑时排除当前操作的类目
   * @param {*} oldProp 新增时oldProp为null
   * @param {*} newProp
   * @returns
   */
  hasSameProp(oldProp: GxProperty, newProp: GxProperty) {
    let result = this.allGroupsProps();
    let res = result.filter((prop) => {
      return prop.name !== oldProp?.name;
    });
    for (let index = 0; index < res.length; index++) {
      if (newProp.name == res[index].name) {
        return true;
      }
    }
    return false;
  }

  /**
   * 编辑页面修改属性
   * @param {*} oldProp 原属性值
   * @param {*} newProp 修改后属性值
   */
  updateProps(oldProp:GxProperty, newProp:GxProperty) {
    let keyList = this.props && Object.keys(this.props);
    if (keyList && keyList.length > 0) {
      keyList.forEach((item,i) => {
        if (this.props && this.props[i].name === oldProp.name) {
          this.props[i] =new GxProperty({ ...newProp });
        }
      });
    }
  }

  updateGroupsProps(key:string,value:any) {
    let result = "";
    if (this.props) {
      this.props.forEach((p: GxProperty) => {
        if (p.name == key) {
          if (typeof value !== "string") {
            p.value = value.join(',');
          } else {
            p.value =value;
          }
        }
        return p.name;
        // result.push(new GxProperty(p));
      });
    }
    if (this.groups && this.groups.length > 0) {
      this.updateDeepGroupsProps(key,value,result, this.groups);
    }
    return result;
  }
  updateDeepGroupsProps(key:string,value:any, result: any, groups: Array<GxProperties>) {
    groups.forEach((element: GxProperties) => {
      element.props?.forEach((p: GxProperty) => {
        if(p.name == key){
          if (typeof value !== "string" && Array.isArray(value)) {
            p.value = value.join(',');
          } else {
            p.value =value;
          }
        }
        return p.name
      })
      // element.props &&Array.prototype.push.apply(result, element.props);
      if (element.groups && element.groups.length > 0) {
        this.updateDeepGroupsProps(key,value,result, element.groups);
      }
    });
  }

  /**
   * 根据key获取属性值
   * @param key 
   * @returns 
   */
  getGroupProps(key:string) {
    let result:GxProperty = new GxProperty({});
    return this.allGroupsProps().filter((prop) => {
      return prop.name == key;
    })[0];
    return result;
  }
}
