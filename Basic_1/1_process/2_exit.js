/**
 * @desc 如何从 Node.js 程序退出？
 * @author YS.Feng
 * @date 2021/04/07
 * 有很多种方法可以终止 Node.js 应用程序。

 * 当在控制台中运行程序时，可以使用 ctrl-C 将其关闭，但是这里要讨论的是以编程的方式退出。

 * process 核心模块提供了一种便利的方法，可以以编程的方式退出 Node.js 程序：process.exit()。

 * 当 Node.js 运行此行代码时，进程会被立即强制终止。

 * 这意味着任何待处理的回调、仍在发送中的任何网络请求、任何文件系统访问、或正在写入 stdout 或 stderr 的进程，所有这些都会被立即非正常地终止。
 */

const process = require("process");
console.log("hello");
// 当退出时，监听！
process.on("exit", (code) => {
  console.log("进程 exit 事件的退出码: ", code);
});
process.exit(1);
console.log("world");

// 输出：hello
/*
退出码的信息
当没有异步的操作在等待处理时，则 Node.js 会以状态码 0 正常地退出。 其他情况下，会用如下的状态码:

1 未捕获的致命异常：有未捕获的异常，并且没被域或 'uncaughtException' 事件句柄处理。
2：未被使用（被 Bash 预留用于内置的误用）。
3 内部的 JavaScript 解析错误：Node.js 引导进程内部中的 JavaScript 源代码造成的解析错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
4 内部的 JavaScript 执行失败：Node.js 引导进程内部中的 JavaScript 源代码在执行时返回函数值失败。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
5 致命的错误：在 V8 中有致命的错误。 通常会以 FATAL ERROR 为前缀打印消息到 stderr。
6 非函数的内部异常句柄：有未捕获的异常，但是内部的致命异常句柄被设置为非函数且不能被调用。
7 内部异常句柄运行时失败：有未捕获的异常，且内部的致命异常句柄函数在试图处理异常时本身抛出了错误。 这是可能发生的，比如，'uncaughtException' 或者 domain.on('error') 句柄抛出错误。
8：未被使用。在之前的 Node.js 版本中，退出码 8 有时候表示未被捕获的异常。
9 无效的参数：指定了未知的选项，或者没给必需要的选项提供值。
10 内部的 JavaScript 运行时失败：当引导函数被调用时，Node.js 引导进程内部中的 JavaScript 源代码抛出错误。 这是非常少见的, 一般只会在开发 Node.js 本身的时候出现。
12 无效的调试参数：--inspect 和/或 --inspect-brk 选项已设置，但选择的端口号无效或不可用。
13 未完成的顶层等待: await 被用于顶层代码中的函数之外，但是传递的 Promise 从未被解决。
>128 信号退出：如果 Node.js 接收到致命信号, 比如 SIGKILL 或 SIGHUP，则其退出码会是 128 加上信号码的值。 这是标准 POSIX 的实践，因为退出码被定义为 7 位整数，并且信号退出设置了高位，然后包含信号码的值。 例如，信号 SIGABRT 的值为 6，因此期望的退出码会是 128 + 6 或 134。
*/
