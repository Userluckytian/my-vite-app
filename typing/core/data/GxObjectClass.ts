import { Field } from "@/common/components/select-objectClass/select-ObjectClass";

/**
 * @Description: 对象类
 */
export default class GxObjectClass{
    id?:number;
    name?:string;
    /** 字段数据类型 */
    static readonly FIELD_DT_SHORT = 1;
    static readonly FIELD_DT_INTEGER = 2;
    static readonly FIELD_DT_LONG = 3;
    static readonly FIELD_DT_FLOAT = 4;
    static readonly FIELD_DT_DOUBLE = 5;
    static readonly FIELD_DT_TEXT = 6;
    static readonly FIELD_DT_DATE = 7;
    static readonly FIELD_DT_BOOLEAN = 8;
    static readonly FIELD_DT_STRING = 9;
    static readonly FIELD_DT_PICTURE = 10;


    constructor(options?:any){
        if (options && options.id){
            this.id = options.id;
        }
        if (options && options.name){
            this.name = options.name;
        }
    }


    /**
     * 数据样例：
     * [
     *  {
     *    "name":"serviceType",
     *    "caption":"服务类型",
     *    "dtype" : 1
     *  }
     * ]
     * @param fields 字段数组
     * @param name 字段name
     * @returns 基于字段name从字段数组中匹配到具体的value
     */
    static getFieldCaption(fields:Field[],name:string):string{
        let result = name;
        if (Array.isArray(fields) && fields.length > 0){
            let field = fields.find(item => item.name == name)
            if(field){
                result = field.caption;
            }
        }
        return result;
    }

    /**
     * 
     * @param fields 字段数组
     * @param name 字段name
     * @returns 基于字段name从字段数组中匹配到具体的dtype
     */
    static getFieldDtype(fields:Field[],name:string):number{
        if (Array.isArray(fields) && fields.length > 0){
            let field = fields.find(item => item.name == name);
            if(field){
                return field.dtype;
            }
        }
        return GxObjectClass.FIELD_DT_STRING;
    }

}