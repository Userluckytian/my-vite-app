import GxTask from "./GxTask";

/** 任务状态 */
export default class GxTaskStatus {
  static NULL = 0;
  /**
   * 待生产（16 | 1 = 17）
   */
  static WORK = GxTask.WORK | GxTask.CLAIM;
  /**
   * 生产中（16 | 2 = 18）
   */
  static WORKING = GxTask.WORK | GxTask.HANDLE;
  /**
   * 生产中异常（16 | 2 | 4= 22）
   */
  static WORKING_ABNORMAL = GxTask.WORK | GxTask.HANDLE | GxTask.ABNORMAL;
  /**
   * 待质检（32 | 1 = 33）
   */
  static CHECK = GxTask.CHECK | GxTask.CLAIM;
  /**
   * 质检中（32 | 2 = 34）
   */
  static CHECKING = GxTask.CHECK | GxTask.HANDLE;
  /**
   * 质检中异常（32 | 2 | 4= 38）
   */
  static CHECKING_ABNORMAL = GxTask.CHECK | GxTask.HANDLE | GxTask.ABNORMAL;
  /**
   * 待修订（64 | 1 = 65）
   */
  static REVISE = GxTask.REVISE | GxTask.CLAIM;
  /**
   * 修订中（64 | 2 = 66）
   */
  static REVISING = GxTask.REVISE | GxTask.HANDLE;
  /**
   * 修订中异常（64 | 2 | 4= 70）
   */
  static REVISING_ABNORMAL = GxTask.REVISE | GxTask.HANDLE | GxTask.ABNORMAL;
  /**
   * 已完成（512）
   */
  static FINISHED = GxTask.FINISH;

  static statusArr = [
    new GxTaskStatus(
      GxTask.ABNORMAL,
      "异常",
      [
        GxTaskStatus.WORKING_ABNORMAL,
        GxTaskStatus.CHECKING_ABNORMAL,
        GxTaskStatus.REVISING_ABNORMAL,
      ],
      "#ED3524",
      "rgba(237,53,36,0.15)",
      "Error"
    ),
    new GxTaskStatus(
      GxTaskStatus.WORK,
      "待生产",
      [GxTaskStatus.WORK],
      "#B3B3B3",
      "rgba(202,202,202,0.15)",
      "UnStart"
    ),
    new GxTaskStatus(
      GxTaskStatus.WORKING,
      "生产中",
      [GxTaskStatus.WORKING],
      "#2E6BE6",
      "rgba(46,107,230,0.15)",
      "Producing"
    ),
    new GxTaskStatus(
      GxTaskStatus.CHECK,
      "待质检",
      [GxTaskStatus.CHECK],
      "#ED7824",
      "rgba(237,120,36,0.15)",
      "PendingQc"
    ),
    new GxTaskStatus(
      GxTaskStatus.CHECKING,
      "质检中",
      [GxTaskStatus.CHECKING],
      "#ECD146",
      "rgba(236,209,70,0.15)",
      "Qcing"
    ),
    new GxTaskStatus(
      GxTaskStatus.REVISE,
      "待修订",
      [GxTaskStatus.REVISE],
      "#B27ACC",
      "rgba(178,122,204,0.15)",
      "PendingRevise"
    ),
    new GxTaskStatus(
      GxTaskStatus.REVISING,
      "修订中",
      [GxTaskStatus.REVISING],
      "#CC5299",
      "rgba(204,82,153,0.15)",
      "Revising"
    ),
    new GxTaskStatus(
      GxTaskStatus.FINISHED,
      "已完成",
      [GxTaskStatus.FINISHED],
      "#46B683",
      "rgba(70,182,131,0.15)",
      "Complated"
    ),
  ];

  /** UI上的值 */
  value = 0;

  /** 状态名称 */
  text = "未知";

  /** 状态值 */
  status : Array<number>;

  /** 状态前景颜色 */
  fcolor = "";

  /** 状态背景颜色 */
  bkcolor = "";

  /** 样式名称 */
  classname = "";

  constructor(
    value: number,
    text: string,
    status: Array<number>,
    fcolor: string,
    bkcolor: string,
    classname: string
  ) {
    this.value = value;
    this.text = text;
    this.status = status;
    this.fcolor = fcolor;
    this.bkcolor = bkcolor;
    this.classname = classname;
  }

  /**
   * 获取状态数据的列表
   * @returns
   */
  static list = () => {
    return this.statusArr;
  };

  /**
   * 根据状态值，获取状态信息
   * @param {int} status
   */
  static get = (value:number) => {
    let _status = null;
    for (let i = 0; i < this.statusArr.length; i++) {
      if (value === this.statusArr[i].value) {
        _status = this.statusArr[i];
        break;
      }
    }
    return _status === null ? this.statusArr[0] : _status;
  };
}
