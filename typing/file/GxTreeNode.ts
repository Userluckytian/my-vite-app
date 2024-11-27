import GxObject from "../core/lang/GxObject";
import GxFile from "./GxFile";

type Key = string | number | bigint;
/**
 * @author yukun24@126.com
 * @version v.1.0.0
 * @date created on 2023/10/25-15:34
 * @description 树节点对象，后台返回的树结构对象统一到这个业务模型上
 */
export default class GxTreeNode {
  /**
   * 存储类型
   */
  static readonly TYPE_STORAGE = "storage";
  /**
   * 文件夹目录类型
   */
  static readonly TYPE_FOLDER = "catalog";
  /**
   * 文件节点类型
   */
  static readonly TYPE_FILE = "node";

  /**
   * 不同的data可能key取值不一样，只要后端返回的能保证唯一就行
   */
  key: Key = "";
  /**
   * 这个适配antd的TreeSelect组件
   */
  value: Key = "";
  /**
   * 要展示的dom标题
   */
  title: any;
  /**
   * 目录名称
   */
  name: string = "目录";
  /**
   * 是否是叶子节点，如果是叶子节点，data一定有值！！！
   */
  isLeaf: boolean = false;
  /**
   * 子节点
   */
  children: GxTreeNode[] = [];
  /**
   * 仅当叶子节点时，后端才会返回data，前端拿到data可以做很多事情
   */
  data?: GxFile;
  /**
   * 图标，这里可以基于isLeaf的值设置默认的图标，也可以外部指定
   */
  icon?: any;
  /**
   * 属性信息
   */
  props?: any;
  /**
   * 创建人
   */
  user?: string;
  /**
   * 修改时间
   */
  uTime?: string;
  /**
   * 目录类型是存储和文件时的大小（描述信息）
   */
  size?: string;
  /**
   * 节点的数据类型
   */
  dataType?: string;
  /**
   * 是否可选
   */
  selectable?: boolean = true;
  constructor(options?: any) {
    if (options && options.key) {
      this.key = options.key;
    }
    if (options && options.key) {
      this.value = options.value;
    }
    if (options && options.title) {
      this.title = options.title;
    }
    if (options && options.isLeaf) {
      this.isLeaf = options.isLeaf;
    }
    if (options && options.name) {
      this.name = options.name;
    }
    if (options && options.children && options.children.length > 0) {
      options.children.forEach((child: any) => {
        this.children.push(new GxTreeNode(child));
      });
    }
    if (options && options.data && options.data.type && options.data.type.otid) {
      this.data = options.data;
    }
    if (options && options.icon) {
      this.icon = options.icon;
    }
    if (options && options.uTime) {
      this.uTime = options.uTime;
    }
    if (options && options.user) {
      this.user = options.user;
    }
    if (options && options.size) {
      this.size = options.size;
    }
    if (options && options.dataType) {
      this.dataType = options.dataType;
    }
    if (options && options.props) {
      this.props = options.props;
    }
    if (options && options.selectable) {
      this.selectable = options.selectable;
    }
  }
  /**
   * 从一颗树上遍历指定key对应的节点
   * @param key 节点key
   * @param tree 整个树
   * @param treeNode 查不到就把当前树返回出去，默认返回的是第一颗树
   * @returns GxTreeNode
   */
  static getTreeNode = (
    key: Key,
    tree: GxTreeNode[],
    treeNode: GxTreeNode = tree[0]
  ): GxTreeNode => {
    /** 遍历所有的树 */
    for (let i = 0; i < tree.length; i++) {
      /** 拿到当前树 */
      const currentTree = tree[i];
      /** 如果当前key正好是当前树的key,直接treeNode就是当前整颗树 */
      if (key == currentTree.key) {
        treeNode = currentTree;
        break;
      } else {
        /** 否则，递归遍历子节点查找 */
        if (currentTree.children) {
          /** 找到的treeNode一定要带过去 */
          treeNode = GxTreeNode.getTreeNode(
            key,
            currentTree.children,
            treeNode
          );
        }
      }
    }
    /**最后把找到的节点返回出去 */
    return treeNode;
  };

  /**
   * 获取当前节点的父节点的key
   * @param key 当前节点
   * @param tree 树对象
   * @returns 父节点的key
   */
  static getParentKey = (key: Key, tree: GxTreeNode[]): Key => {
    let parentKey: Key;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentKey = node.key;
        } else if (GxTreeNode.getParentKey(key, node.children)) {
          parentKey = GxTreeNode.getParentKey(key, node.children);
        }
      }
    }
    return parentKey!;
  };

  /**
   * 获取当前节点key对应的父节点对象
   * @param key 当前节点key
   * @param tree 树对象
   * @returns 父节点对象
   */
  static getParentNode = (key: Key, tree: GxTreeNode[]): GxTreeNode => {
    let parentNode: GxTreeNode;
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.children) {
        if (node.children.some((item) => item.key === key)) {
          parentNode = node;
        } else if (GxTreeNode.getParentNode(key, node.children)) {
          parentNode = GxTreeNode.getParentNode(key, node.children);
        }
      }
    }
    return parentNode!;
  };

  /**
   * 将树中指定key的节点从它的父节点中移除
   * @param key 当前节点key
   * @param treeData 当前要移除节点所在的树对象
   */
  static removeNode = (key: Key, treeData: GxTreeNode) => {
    let parentNode = GxTreeNode.getParentNode(key, [treeData]);
    if (parentNode && parentNode.children && parentNode.children.length > 0) {
      parentNode.children = parentNode.children.filter(
        (item) => item.key != key
      );
    }
  };

  /**
   * 获取父节点链对象
   * @param key 当前节点
   * @param tree 树结构
   * @param parentNodes 返回值
   * @returns 父节点链顺序数组
   */
  static getParentKeyNodes(
    key: Key,
    tree: GxTreeNode[],
    parentNodes: GxTreeNode[] = []
  ): GxTreeNode[] {
    let parentNode = GxTreeNode.getParentNode(key, tree);
    if (!parentNode) return [];
    parentNodes.push(parentNode);
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.key == parentNode.key && node.children) {
      } else {
        GxTreeNode.getParentKeyNodes(parentNode.key, tree, parentNodes);
      }
    }
    return parentNodes;
  }

  /**
   * 递归获取当前节点key对应的父节点的key数组（往上找父的父）
   * @param key 当前节点
   * @param tree 树对象
   * @param parentKeys 父节点key数组（直到找到最后一个父），默认[]
   * @returns 父节点key数组（如：['/c/d/e', '/c/d', '/c', '']）
   */
  static getParentKeys(
    key: Key,
    tree: GxTreeNode[],
    parentKeys: Key[] = []
  ): Key[] {
    let parentKey = GxTreeNode.getParentKey(key, tree);
    parentKeys.push(parentKey);
    for (let i = 0; i < tree.length; i++) {
      const node = tree[i];
      if (node.key == parentKey && node.children) {
      } else {
        GxTreeNode.getParentKeys(parentKey, tree, parentKeys);
      }
    }
    return parentKeys;
  }

  /**
   * 获取当前节点key对应的父节点数组
   * @param key 当前节点的key
   * @param treedata 树对象
   * @param reverse 是否翻转数组，默认翻转，从上至下获得父节点数组
   * @returns GxTreeNode[]
   */
  static getParentPath(
    key: Key,
    treedata: GxTreeNode[],
    reverse: boolean = true
  ): GxTreeNode[] {
    let result = GxTreeNode.getParentKeyNodes(key, treedata);
    return reverse ? result.reverse() : result;
  }

  /** 在当前给定的nodes数组中，找到选中key的nodes链条（数组） */
  static findSelectedNodes(
    key: Key,
    nodes: GxTreeNode[],
    reverse: boolean = false
  ): GxTreeNode[] {
    let result: GxTreeNode[] = [];
    if (nodes && nodes.length > 0) {
      for (let i = 0; i < nodes.length; i++) {
        const node = nodes[i];
        result.push(node);
        if (key == node.key) {
          break;
        }
      }
    }
    return reverse ? result.reverse() : result;
  }

  /** 初始化树根 */
  static initTreeRoot(name: string, icon?: any) {
    return new GxTreeNode({
      key: name,
      title: name,
      value:name,
      name: name,
      children: [],
      icon: icon,
    });
  }
  /** 获取初始化目录树的默认展开keys */
  static getDefaultExpandedKeys(tree: GxTreeNode, keys: Array<Key>) {
    let key = tree.key;
    keys.push(key);
    if (tree.children && tree.children.length > 0) {
      tree.children.forEach((child) => {
        if (!child.props.has("isDistrict"))
          this.getDefaultExpandedKeys(child, keys);
      });
    }
    return;
  }

  /** 递归遍历，将children设置到指定从catalog目录上 */
  static setChildren(tree: GxTreeNode, children: any, key: string) {
    if (tree.key == key) {
      tree.children = children;
      return;
    }
    tree.children.forEach((child) => {
      this.setChildren(child, children, key);
    });
  }

  /** 递归遍历，将当前catalog设置到指定从catalog目录上 */
  static replaceCatalog(
    tree: GxTreeNode,
    catalog: GxTreeNode,
    onRenderTreeNode: (node: any) => void
  ) {
    if (tree.key == catalog.key) {
      tree.name = catalog.name;
      tree.props = catalog.props;
      tree.uTime = catalog.uTime;
      onRenderTreeNode(tree);
      return;
    }
    tree.children.forEach((child) => {
      this.replaceCatalog(child, catalog, onRenderTreeNode);
    });
  }
  /** 如果parentNode的类型是存储的话，就只查旗下的子目录，否则连叶子节点也查 */
  static getLoadLeaf(parentNode: GxTreeNode): boolean {
    return parentNode.props && parentNode.props.type == "storage"
      ? false
      : true;
  }
  /** 从节点的属性中提取文件存储ID */
  static getStorageId(node:any):number{
      if(node && node.props && node.props.storage){
        return node.props.storage as number;
      }
      return 0;
  }
  /** 从节点的属性中提取虚拟路径 */
  static getCatalogPath(node:any):string{
    if(node && node.props && node.props.path){
      return node.props.path as string;
    }
    return "";
  }
  /** 从节点的属性中提取存储地址 */
  static getCatalogAddress(node:any):string{
    if(node && node.props && node.props.address){
      return node.props.address as string;
    }
    return "";
  }
}
