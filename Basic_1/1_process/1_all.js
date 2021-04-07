/**
 * @desc
 * process 对象是一个全局变量，提供了有关当前 Node.js 进程的信息并对其进行控制。
 * 作为全局变量，它始终可供 Node.js 应用程序使用，无需使用 require()。
 * 它也可以使用 require() 显式地访问：
 * const process = require('process');
 * @author YS.Feng
 * @date 2021/04/07
 */
// process 对象是 EventEmitter 的实例。
const EventEmitter = require("events");
const bool = process instanceof EventEmitter;
console.log("process是EventEmitter的实例:", bool);

/*
    属性返回一个 Object，其中包含用于编译当前 Node.js 可执行文件的配置选项的 JavaScript 表示形式。
    这与运行 ./configure 脚本时生成的 config.gypi 文件相同。
*/
console.log(process.config);
