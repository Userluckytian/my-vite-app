/** 缺省值域 */
export default class GxTypeDomain {
    value: string = "none";
    constructor(options?: any) {
        if (options && options.value) {
            this.value = options.value;
        }
    }

    domainType(): string { return "type"; }
}