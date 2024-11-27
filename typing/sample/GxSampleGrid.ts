import GxUser from "../core/lang/GxUser";
import GxSampleGridRule from "./GxSampleGridRule";
/**
 * @author yukun24@126.com
 * @version v1.0-beta
 * @date created on 2024/6/5:10:18
 * @desc 样本库网格
 */
export default class GxSampleGrid{
    id?:number;
    name?:string;
    business?:number;
    sampleType?:number;
    activate?:boolean = false;
    gridRules?:GxSampleGridRule[];
    desc?:string;
    user?:GxUser;
    cTime?:string;
    uTime?:string;
    constructor(options?:any){
    }
}