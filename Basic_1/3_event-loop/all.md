### 事件循环机制的理解

**事件循环**是了解 Node.js 最重要的方面之一。

为什么这么重要？ 因为它阐明了 Node.js 如何做到异步且具有非阻塞的 I/O，所以它基本上阐明了 Node.js 的“杀手级应用”，正是这一点使它成功了。

### 执行机制
> JS 是单线程的，处理 JS 任务（程序）只能一个一个顺序执行，所以 JS 中就把任务分为了同步任务和异步任务。同步的进入主线程先执行，异步的进入Event Table并注册函数，当指定的事情完成时，Event Table会将这个函数移入事件队列Event Queue，等待主线程内的任务执行完毕，然后就会从事件队列 Event Queue 中读取对应的函数，进入主线程执行。
>

除了广义的同步任务和异步任务，JS 对任务还有更精细的定义：

- macro-task(宏任务)：包括整体代码script，setTimeout，setInterval
- micro-task(微任务)：Promise，process.nextTick

微任务先于宏任务执行（除了一开始的整体代码 script）。执行过程中，不同类型的任务会进入对应的事件队列Event Queue，比如setTimeout和setInterval会进入相同的Event Queue。

#### 优先级

- 同步代码执行顺序优先级高于异步代码执行顺序优先级
- process.nextTick() > Promise.then() > setTimeout > setImmediate

（注意：process.nextTick 是 node 中的方法，而在浏览器中执行时（比如在vue项目中），会退化成setTimeout，所以在浏览器中 process.nextTick 会比 Promise.then() 慢）
