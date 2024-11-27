import GxObject from "../../core/lang/GxObject";
import GxPointPos from "./GxPointPos";
import GxVarLink from "./GxVarLink";

/** 工艺工序之间连线对象 */
export default class GxLink extends GxObject {
  /** 所属的工艺ID */
  craftId = 0;

  /** 起始工序节点 */
  source = 0;

  /**
   * 多样性（比值）,支持浮点数
   * 在生产目标工序的任务时，所需要的起始工序作业结果数据量
   */
  multiplicity = 1;

  /** 目标工序节点 */
  target = 0;

  /** 起止工序点的位置 */
  sourcePos?:number = GxPointPos.NONE;

  /** 目标工序点的位置 */
  targetPos ?:number = GxPointPos.NONE;

  /** 模型之间输入输出对应关系列表 */
  varLinks: Array<GxVarLink> = [];

  constructor(options?: any) {
    super(options);
    if (options) {
      if (options.craftId) this.craftId = options.craftId;
      if (options.source) this.source = options.source;
      if (options.multiplicity || options.multiplicity === 0) this.multiplicity = options.multiplicity;
      if (options.target) this.target = options.target;
      if (options.sourcePos) this.sourcePos = options.sourcePos;
      if (options.targetPos) this.targetPos = options.targetPos;
      if (options.varLinks) {
        for (let i = 0; i < options.varLinks.length; i++)
          this.varLinks.push(new GxVarLink(options.varLinks[i]));
      }
    }
  }

  /**
   * 从输入的link中拷贝属性
   * @param {GxLink} link 
   */
  copyAttr = (link: GxLink) => {
    this.source = link.source;
    this.multiplicity = link.multiplicity;
    this.target = link.target;
    this.sourcePos = link.sourcePos;
    this.targetPos = link.targetPos;
    for (let i = 0; i < link.varLinks.length; i++)
      this.varLinks.push(new GxVarLink(link.varLinks[i]));
  }
}
