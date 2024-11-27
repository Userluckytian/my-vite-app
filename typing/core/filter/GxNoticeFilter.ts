import GxObject from "../lang/GxObject";
import GxDFilter from "./GxDFilter";

export default class GxNoticeFilter extends GxDFilter {
    /**
     * 只过滤发送的信息
     * 类型为bool
     */
    send?:boolean;
    /**
     * 发送的消息中（action）被操作的对象
     * 类型为GxObject
     */
    obj?:GxObject;
    /**
     * 发送消息是否加载接收者情况
     * 类型为bool
     */
    loadReceiver?:boolean;

    /**
     * 是否已读，类型为bool
     */
    bRead?:boolean;

    /**
     * 是否为自己收到的消息
     * 类型为bool
     */
    bMine?:boolean;

    /**
     * 消息接收者
     * 类型为long
     */
    receiverId?:number;
    /**
     * 消息的动作类型
     * 类型为Array or Set<int>
     */
    actionTypes?:Array<any> = [];
    /**
     * 位置对象
     * 类型为GxObject
     */
    pos ?: GxObject;
    /**
     * 是否加载消息位置对象详情
     * 类型为bool
     */
    loadPos?:boolean;

    /**
     * 去除所有未定义或空值属性
     */
    trim() {
        super.trim();
        if (this.isNone(this.send)) delete this.send;
        if (this.isNone(this.obj)) delete this.obj;
        if (this.isNone(this.loadReceiver)) delete this.loadReceiver;
        if (this.isNone(this.bRead)) delete this.bRead;
        if (this.isNone(this.bMine)) delete this.bMine;
        if (this.isNone(this.receiverId)) delete this.receiverId;
        if (this.isNone(this.actionTypes)) delete this.actionTypes;
        if (this.isNone(this.pos)) delete this.pos;
        if (this.isNone(this.loadPos)) delete this.loadPos;
        return this;
    }
}