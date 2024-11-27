import GxEcsOType from "../GxEcsOType";
import GxProcCarrier from "../procedurex/GxProcCarrier";
import GxProcCollector from "../procedurex/GxProcCollector";
import GxProcFeeder from "../procedurex/GxProcFeeder";
import GxProcFilter from "../procedurex/GxProcFilter";
import GxProcOR from "../procedurex/GxProcOR";
import GxProcSorter from "../procedurex/GxProcSorter";
import GxLink from "./GxLink";
import GxProcedure from "./GxProcedure";


/** 工艺图 */
export default class GxDag {
  /** 连接关系 */
  links:Array<GxLink> = [];

  /** 工序节点 */
  nodes:Array<GxProcedure> = [];

  constructor(options?:any) {
    if (options) {
      if (options.links) {
        for (let i = 0; i < options.links.length; i++) {
          this.links.push(new GxLink(options.links[i]));
        }
      }
      if (options.nodes) {
        for (let i = 0; i < options.nodes.length; i++) {
          const proc = options.nodes[i];
          let procedure = null;
          switch (proc.type.otid) {
            case GxEcsOType.PROC_FEEDER:
              procedure = new GxProcFeeder(proc);
              break;
            case GxEcsOType.PROC_COLLECTOR:
              procedure = new GxProcCollector(proc);
              break;
            case GxEcsOType.PROC_SORTER:
              procedure = new GxProcSorter(proc);
              break;
            case GxEcsOType.PROC_OR:
              procedure = new GxProcOR(proc);
              break;
            case GxEcsOType.PROC_FILTER:
              procedure = new GxProcFilter(proc);
              break;
            case GxEcsOType.PROC_CARRIER:
              procedure = new GxProcCarrier(proc);
              break;
            default:
              procedure = new GxProcedure(proc);
              break;
          }
          this.nodes.push(procedure);
        }
      }
    }
  }

  /**
   * 向图中增加工序对象
   * @param {GxProcedure} procedure 
   */
  addProcedure(procedure:GxProcedure) {
    this.nodes.push(procedure);
  }

  /**
   * 根据对象类型获取根工序列表
   * 注意：如果otype为null，则获取全部根节点
   */
  rootProcedures(otype = null) {
    let precedureIds = new Set();
    for (let i = 0; i < this.links.length; i++) {
      const link = this.links[i];
      precedureIds.add(link.target);
    }
    let result = new Array();
    for (let i = 0; i < this.nodes.length; i++) {
      const node = this.nodes[i];
      if (!precedureIds.has(node.id)) {
        if (otype === null || node.isOType(otype))
          result.push(node);
      }
    }
    return result;
  }

  /**
   * 获取工序ID前置工序
   * @param {long} id 
   * @param {bool} deep 
   */
  frontProcedures(id:any, deep = false) {
    let curGraphNode = null;
    let mapNodes = new Map();
    for (let i = 0; i < this.nodes.length; i++) {
      var graphNode = { node: this.nodes[i], fronts: [], behinds: [] };
      mapNodes.set(this.nodes[i].id, graphNode);
      if (id == this.nodes[i].id) curGraphNode = graphNode;
    }
    if (curGraphNode === null) return [];
    // 构建图
    for (let i = 0; i < this.links.length; i++) {
      const link = this.links[i];
      const sourceNode = mapNodes.get(link.source);
      const targetNode = mapNodes.get(link.target);
      sourceNode.behinds.push(targetNode);
      targetNode.fronts.push(sourceNode);
    }
    //查找前置
    let results = new Set();
    if (deep) { //深度查找
      this.deepFrontProcedures(curGraphNode, results);
    } else { //浅度查找
      const frontGraphNodes:any = curGraphNode.fronts;
      for (let i = 0; i < frontGraphNodes.length; i++) {
        results.add(frontGraphNodes[i].node);
      }
    }
    return Array.from(results);
  }
  deepFrontProcedures(graphNode:any, results:any) {
    const frontGraphNodes = graphNode.fronts;
    for (let i = 0; i < frontGraphNodes.length; i++) {
      results.add(frontGraphNodes[i].node);
      this.deepFrontProcedures(frontGraphNodes[i], results);
    }
  }

  /**
   * 根据ID获取工序对象
   * @param {long} id 
   * @returns 
   */
  getProcedure(id:any) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (id === this.nodes[i].id) {
        return this.nodes[i];
      }
    }
    return null;
  }

  /**
   * 从图中移除标识为ID的工序对象
   * @param {long} id 
   * @returns 
   */
  removeProcedure(id:any) {
    for (let i = 0; i < this.nodes.length; i++) {
      if (id === this.nodes[i].id) {
        this.nodes.splice(i, 1);
        return true;
      }
    }
    return false;
  }

  /**
   * 向图中增加连接对象
   * @param {GxLink} link 
   */
  addLink(link:GxLink) {
    this.links.push(link);
  }

  /**
   * 根据ID获取连接对象
   * @param {long} id 
   * @returns 
   */
  getLink(id:any) {
    for (let i = 0; i < this.links.length; i++) {
      if (id === this.links[i].id) {
        return this.links[i];
      }
    }
    return null;
  }

  /**
   * 获取ids中的连接对象，返回Array集合
   * @param {Set} ids 
   */
  getLinks(ids:any) {
    let links = new Array();
    for (let i = 0; i < this.links.length; i++) {
      if (ids.has(this.links[i].id)) {
        links.push(this.links[i]);
      }
    }
    return links;
  }

  /**
   * 从图中移除标识为ID的连接对象
   * @param {long} id 
   * @returns 
   */
  removeLink(id:any) {
    for (let i = 0; i < this.links.length; i++) {
      if (id === this.links[i].id) {
        this.links.splice(i, 1);
        return true;
      }
    }
    return false;
  }
}
