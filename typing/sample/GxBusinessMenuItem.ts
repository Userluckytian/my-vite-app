import { cdTypeId } from "@/common/config/sysConfig";
import { ReactNode } from "react";

/** 样本库业务（类型）菜单项 */
export default class GxBusinessMenuItem {
  key: string = "";
  label?: ReactNode;
  iconType?: string;
  icon?: any;
  business?: number;
  sampleType?: number;
  des?: string;
  children: GxBusinessMenuItem[] = [];
  constructor(options?: any) {}

  static findItem(
    key: string,
    items: GxBusinessMenuItem[],
    currentItem: GxBusinessMenuItem
  ): GxBusinessMenuItem {
    if (Array.isArray(items) && items.length > 0) {
      /** 遍历所有的树 */
      for (let i = 0; i < items.length; i++) {
        /** 拿到当前树 */
        const item = items[i];
        if (item.key == key) {
          currentItem = item;
          break;
        } else {
          if (item.children) {
            currentItem = GxBusinessMenuItem.findItem(
              key,
              item.children,
              currentItem
            );
          }
        }
      }
    }
    return currentItem;
  }

   /** 判断用户选择的业务类型是不是属于变化检测范畴的（ID固定） */
   static isChangeDetection(item:GxBusinessMenuItem): boolean {
    if (item.sampleType === cdTypeId) {
      return true;
    } else {
      return false;
    }
  }
}
