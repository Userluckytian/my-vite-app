/** 属性字段对应UI表单类型 */
export default class GxUIType {
    code: string;
    name: string;
    constructor(code: string, name: string) {
        this.code = code
        this.name = name
    }
    static NUMBER = new GxUIType("Number", "数字类型");
    static TEXT = new GxUIType("Text", "单行文本");
    // static TEXTAREA = new GxUIType("Textarea", "多行文本");
    // static DATE = new GxUIType("Date", "日期类型");
    static SELECT = new GxUIType("Select", "下拉选择框");
    static RADIO = new GxUIType("Radio", "单选按钮");
    static CHECKBOX = new GxUIType("Checkbox", "复选框");
    static TEXT_FOLDER= new GxUIType("TextFolder","单行文本文件夹" );
    static TEXT_FOLDER_LIST= new GxUIType("TextFolderList", "单行文本文件夹列表");
    static TEXT_FILE= new GxUIType("TextFile", "单行文本文件");
    static TEXT_FILE_LIST= new GxUIType("TextFileList", "单行文本文件列表" );
    // static SLIDER = new GxUIType("Slider", "滑块");
    // static IMAGE = new GxUIType("Image", "图片");
    // static TABLE = new GxUIType("Table", "表格");

    static getAllUIType(): Array<GxUIType> {
        return Object.values(GxUIType).filter(u => u instanceof GxUIType)
    }
    /** 获取所有的UI类型值 */
    static getAllStaticVal() {
        let result = Object.values(GxUIType).filter(u => u instanceof GxUIType).map((type: GxUIType) => type.name);
        return result
    }

    /** 基于编码获取对应的UI类型 */
    static getUITypebyCode(code: string): Array<GxUIType> {
        let uiType: any = Object.values(GxUIType).filter(u => u instanceof GxUIType).filter((type: GxUIType) => type.code == code);
        return uiType;
    }
}
