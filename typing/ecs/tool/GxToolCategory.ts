/** 工具按执行环境分类 */
export default class GxToolCategory {
  /**
   * 代表工具使用批处理脚本（.bat）或shell脚本（.sh）研发
   */
  static COMMAND = 1;
  /**
   * 代表工具被编译器编译链接为可行的二进制程序（.exe）
   */
  static APPLICATION = 2;
  /**
   * 代表工具使用java开发并打包为jar包（.jar）
   */
  static JAVA = 3;
  /**
   * 代表工具使用python研发（.py）
   */
  static PYTHON = 4;

  /**
   * 代表工具是K8S容器进行打包运行（.yaml）
   */
  static POD = 5;

  /**
   * 代表工具是以FC的方式进行运行
   */
  static FC = 6;

  static toolCategoryArr = [
    new GxToolCategory(GxToolCategory.COMMAND, 'Command'),
    new GxToolCategory(GxToolCategory.APPLICATION, 'Application'),
    new GxToolCategory(GxToolCategory.JAVA, 'Java'),
    new GxToolCategory(GxToolCategory.PYTHON, 'Python'),
    new GxToolCategory(GxToolCategory.POD, 'Pod'),
    new GxToolCategory(GxToolCategory.FC, 'FC'),
  ];

  /** 执行环境类型值（Command|Application|Java|Python|FC|Pod） */
  category = 1;
  /** 执行环境类型名称 */
  name = 'Comand';

  constructor(category = 1, name = 'Comand') {
    this.category = category;
    this.name = name;
  }

  /**
   * 获取执行环境类型列表
   */
  static list = () => {
    this.toolCategoryArr;
  }

  /**
   * 根据标识获取执行环境类型信息
   * @param {int} category 
   */
  static get = (category: number) => {
    let _category = null;
    for (let i = 0; i < this.toolCategoryArr.length; i++) {
      if (category === this.toolCategoryArr[i].category) {
        _category = this.toolCategoryArr[i];
        break;
      }
    }
    return _category === null ? this.toolCategoryArr[0] : _category;
  }
}
