import GxMember from "../core/lang/GxMember";

/**
 * 团队的成员对象扩展
 */
export default class GxMemberx extends GxMember {
    /**成员的IP地址 */
    ipAddr = '';

    /**机器人状态依次为：离线-3、在线-1、运行-0、暂停-2 */
    status;

    /**进行中任务数量 */
    handlingTasks = 0;

    /** 参与的项目数量 */
    joinedProjects = 0;

    /** CPU使用率*/
    cpuRate = 0;
    /** 内存使用率 */
    memoryRate = 0;
    /** 磁盘使用率 */
    diskRate = 0;

    constructor(options?:any) {
        super(options);
        if (options) {
            if (options.ipAddr) this.ipAddr = options.ipAddr;
            if (options.status||options.status==0) this.status = options.status;
            if (options.handlingTasks) this.handlingTasks = options.handlingTasks;
            if (options.joinedProjects) this.joinedProjects = options.joinedProjects;
            if (options.cpuRate) this.cpuRate = options.cpuRate;
            if (options.memoryRate) this.memoryRate = options.memoryRate;
            if (options.diskRate) this.diskRate = options.diskRate;
        }
    }

    /**
     * 获取状态名称
     * 机器人状态依次为：运行-0、未开始-1、已暂停-2、离线-3
     */
    statusName = () => {
        switch (this.status) {
            case 0: return '运行';
            case 1: return '开始';
            case 2: return '暂停';
            case 3: return '离线';
        }
    }
}
