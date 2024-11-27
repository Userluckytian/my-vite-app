import GxFilter from "../../core/filter/GxFilter";

export default class GxProjectMemberFilter extends GxFilter {
    /**
     * 根据项目ID进行查询，类型为long
     */
    projectId?:number;

    /**
     * 根据任务Id进行查询可作业的成员，类型long
     */
    taskId?:number;

    /**
     * 加载项目中成员权限详情，类型为bool
     */
    loadPurview?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        if (this.isNone(this.projectId)) delete this.projectId;
        if (this.isNone(this.taskId)) delete this.taskId;
        if (this.isNone(this.loadPurview)) delete this.loadPurview;
        return this;
    }
}