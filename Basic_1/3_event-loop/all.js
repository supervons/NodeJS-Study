// 1.同步任务
console.log("script start");

// 6.宏任务-1
setTimeout(function () {
  console.log("setTimeout");
}, 0);

new Promise((resolve) => {
  // 2.Promise中同步任务
  console.log("我是主任务！哈哈哈");
  resolve();
})
  // 5.微任务-优先级2
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

// 4.微任务-优先级最高
process.nextTick(() => {
  console.log("I'm process!");
});

// 3.同步任务
console.log("script end");
