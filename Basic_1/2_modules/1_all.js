/**
 * @desc 本文档用于介绍记录一些学习modules相关的知识
 * @author YS.Feng
 * @date 2021/04/08
 */

/*
    全局安装和本地安装的区别？

    1. 本地的软件包 安装在运行 npm install <package-name> 的目录中，并且放置在此目录下的 node_modules 文件夹中。

    2. 全局的软件包 放在系统中的单独位置（确切的位置取决于设置），无论在何处运行 npm install -g <package-name>。
  */

/*
    查看全局安装模块：npm list -g --depth 0
 */

/*
    版本号控制规则：
    所有的版本都有 3 个数字：x.y.z。
    第一个数字是主版本。
    第二个数字是次版本。
    第三个数字是补丁版本。

    遵循以下规则：
    当进行不兼容的 API 更改时，则升级主版本。
    当以向后兼容的方式添加功能时，则升级次版本。
    当进行向后兼容的缺陷修复时，则升级补丁版本。
 */
