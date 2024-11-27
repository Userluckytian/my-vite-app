import GxTrainImage from "./GxTrainImage";
export default class GxTrainImageFile{
    /** 准确率*/
    static readonly Accuracy = "accuracy.png";
    /** 查准率（精确率）*/
    static readonly Precision = "precision.png";
    /** F1分数*/
    static readonly F1 = "F1.png";
    /** 平均交并比*/
    static readonly MIoU = "miou.png";
    /** 损失值*/
    static readonly Loss = "loss.png";
    /** 查全率（召回率）*/
    static readonly Recall = "recall.png";

    static buildTrainImage(name:string,url:string):GxTrainImage | undefined{
        if (name == GxTrainImageFile.Accuracy){
            return new GxTrainImage(name,"准确率",url)
        }else if(name == GxTrainImageFile.F1){
            return new GxTrainImage(name,"F1分数",url)
        }else if(name == GxTrainImageFile.Precision){
            return new GxTrainImage(name,"查准率（精确率）",url)
        }else if(name == GxTrainImageFile.Recall){
            return new GxTrainImage(name,"查全率(召回率)",url)
        }else if(name == GxTrainImageFile.Loss){
            return new GxTrainImage(name,"损失值",url)
        }else if(name == GxTrainImageFile.MIoU){
            return new GxTrainImage(name,"平均交并比",url)
        }else{
            return undefined;
        }
    }
} 