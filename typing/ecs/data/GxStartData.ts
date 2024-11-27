
/**
 * 项目启动投料的数据
 */
export default class GxStartData {
  /** 项目ID*/
  projectId: number = 0;

  /** 序列号 */
  sn = 0;

  /**
   * 每个工序提交的数据列表，map中每个元素格式如下
   * [procedureId,[GxData,GxData,...]]
   */
  dataMap: any;

  /**
   * @param {项目ID} projectId
   * @param {序列号} sn
   * @param {工序数组} procedures
   */
  constructor(projectId: number, sn: number, procedures: any) {
    this.projectId = projectId;
    this.sn = sn;
    const dataMap = new Map();
    for (let i = 0; i < procedures.length; i++) {
      const datas = new Array();
      dataMap.set(procedures[i].id, datas);
    }
    if (dataMap.size > 0) this.dataMap = dataMap;
  }

  /**
   *
   * @param {long} procedureId
   * @param {[GxData,...]} datas
   */
  setProcedureDatas = (procedureId: string | number, datas: any) => {
    this.dataMap?.set(procedureId, datas);
  };

  /**
   * 根据工序标识获取数据集合
   * @param {*} procedureId
   * @returns
   */
  getProcedureDatas = (procedureId: string | number) => {
    if (!this.dataMap) this.dataMap = new Map();
    let datas = this.dataMap.get(procedureId);
    if (!datas) {
      datas = new Array();
      this.dataMap.set(procedureId, datas);
    }
    return datas;
  };

  /**
   * 判断该对象里数据是否有效
   */
  isValidate = () => {
    if (!this.dataMap || this.dataMap.size === 0) return false;
    const values = this.dataMap.values();
    for (const datas of values) {
      if (datas.length === 0) return false;
      for (let i = 0; i < datas.length; i++) {
        const data = datas[i];
        if (!data.isValidate()) return false;
      }
    }
    return true;
  };

  /**
   * 返回JSON对象
   */
  toJsonObject = () => {
    return {
      projectId: this.projectId,
      sn: this.sn,
      dataMap: Object.fromEntries(this.dataMap),
    };
  };
}
