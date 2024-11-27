/**
 * @author yukun24@126.com
 * @version v1.0.0
 * @date created on 2024/6/5:11:01
 * @description 标志数据对应的地面照片
 */
export default class GxMarkSampleDataPhoto {
  id?: number;
  /**
   * PH-SN-NF-NM，例：PH-SP-110108-00001-N-001。
   * PH：地面照片标识符
   * SN：样本点编码。
   * NF：近远景标识，近景为N，远景为F。
   * NM：顺序号，三位数字，从001开始。
   */
  name?: string;
  /**图片上传后路径（固定位置），返回前端时给png的url*/
  path?: string;
  /**文件存储标识*/
  storage?: number;
  /**拍照时间*/
  photoTime?: string;
  /**关联的样本点ID*/
  markSampleId?: number;
  /**关联的样本点编号*/
  markSampleName?: string;
  /**拍摄点经度*/
  lon?: number;
  /**拍摄点纬度*/
  lat?: number;
  /**拍摄人员 采集人员填写 根据实际拍摄人员填写。*/
  photoUser?: string;
  /**备注	采集人员填写	记录实地环境、特殊影响因素等*/
  desc?: string;
  /**所属部门	采集人员填写	拍摄人员所在中心二级部门或三级直管部门*/
  department?: string;
  /**备注	采集人员填写	记录实地环境、特殊影响因素等*/
  note?: string;
  constructor(options?: any) {}
}
