import GxOType from "../core/lang/GxOType";

export default class GxEcsOType extends GxOType {
  /** 工艺相关*/
  static DATATYPE = 2001; //数据类型（物料）
  static CRAFT = 2004; //工艺
  static PROCEDURE = 2005; //工序
  static LINK = 2006; //连接
  static TOOL = 2007; //工具
  static COMBO = 2008; //分组
  static WORK_RULE = 2009; //作业细则
  static PROC_FEEDER = 2010; //投料口
  static PROC_COLLECTOR = 2011; //收集器
  static PROC_SORTER = 2012; //分拣器
  static PROC_OR = 2013; //OR流转器
  static PROC_FILTER = 2014; //过滤器
  static PROC_CARRIER = 2015; //搬运器

  /** 任务相关*/
  static PROJECT = 2201; //项目
  static TASK = 2202; //任务
  static PROJECT_MEMBER = 2203; //项目成员
  static ACHIEVEMENT = 2204; //作业成果
  static DATA = 2205; //数据
  static TASK_BURN = 2206; //工时
  static REGION = 2207; //区域
  static REGION_LAYER = 2208; //区域层
  static REGION_PROC = 2209; //区域工序
}
