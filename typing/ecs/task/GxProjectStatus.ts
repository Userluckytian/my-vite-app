/** 项目状态 */
export default class GxProjectStatus {
  // 未开始
  static NEW = 1;

  // 进行中
  static DOING = 2;

  // 已暂停
  static BIDING = 4;

  /**已完成 */
  static DONE = 8;

  // 已归档
  static FINISHED = 32;

  static statusArr = [
    new GxProjectStatus(
      GxProjectStatus.NEW,
      "未开始",
      "default",
      "#d9d9d9",
      "UnStart"
    ),
    new GxProjectStatus(
      GxProjectStatus.DOING,
      "进行中",
      "processing",
      "#2E6BE6",
      "Projecting"
    ),
    new GxProjectStatus(
      GxProjectStatus.BIDING,
      "已暂停",
      "warning",
      "#faad14",
      "Suspend"
    ),
    new GxProjectStatus(
      GxProjectStatus.DONE,
      "已完成",
      "success",
      "#52c41a",
      "Complated"
    ),
    new GxProjectStatus(
      GxProjectStatus.FINISHED,
      "已归档",
      "deep",
      "#000000",
      "Finished"
    ),
  ];

  /** 状态值 */
  status = 0;

  /** 状态名称 */
  name = "";

  /** 前景色 */
  fcolor = "";

  /** 背景色 */
  bgcolor = "";

  /** 样式名称 */
  classname = "";

  constructor(
    status: number,
    name: string,
    fcolor: string,
    bgcolor: string,
    classname: string
  ) {
    this.status = status;
    this.name = name;
    this.fcolor = fcolor;
    this.bgcolor = bgcolor;
    this.classname = classname;
  }

  /**
   * 获取项目状态数据的列表
   */
  static list = () => {
    this.statusArr;
  };

  /**
   * 转换成antd中Table组件表头过滤数据
   * @returns
   */
  static toTableFilter = () => {
    return this.statusArr.map((el) => ({ text: el.name, value: el.status }));
  };

  /**
   * 根据状态值，获取状态信息
   * @param {int} status
   */
  static get = (status: number) => {
    let _status = null;
    for (let i = 0; i < this.statusArr.length; i++) {
      if (status === this.statusArr[i].status) {
        _status = this.statusArr[i];
        break;
      }
    }
    return _status === null ? this.statusArr[0] : _status;
  };

  /**
   * 判断状态是否可编辑
   */
  static canEdit = (status: number) => {
    return ((GxProjectStatus.NEW | GxProjectStatus.BIDING) & status) === status;
  };

  /**
   * 判断状态是否可以进行启动暂停操作
   */
  static canStartOrStop = (status: number) => {
    return (
      ((GxProjectStatus.NEW | GxProjectStatus.DOING | GxProjectStatus.BIDING) &
        status) ===
      status
    );
  };

  /**
   * 判断状态是否可以重置
   */
  static canReset = (status: number) => {
    return (
      ((GxProjectStatus.FINISHED | GxProjectStatus.NEW) & status) !== status
    );
  };

  /**
   * 判断状态是否可归档
   */
  static canFinish = (status: number) => {
    return (
      ((GxProjectStatus.FINISHED | GxProjectStatus.DOING) & status) !== status
    );
  };

  /**
   * 判断状态是否可删除
   */
  static canDelete = (status: number) => {
    return GxProjectStatus.DOING !== status;
  };

    /**
   * 判断状态是否完成
   */
    static canDownload = (status: number) => {
      return (
        ((GxProjectStatus.DONE | GxProjectStatus.FINISHED) &
          status) ===
        status
      );
    };
}
