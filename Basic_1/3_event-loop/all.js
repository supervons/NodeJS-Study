// 1.同步任务
console.log("script start");

// 5.宏任务-1
setTimeout(function () {
  console.log("setTimeout");
}, 0);

// 4.微任务-优先级2
Promise.resolve()
  .then(function () {
    console.log("promise1");
  })
  .then(function () {
    console.log("promise2");
  });

// 3.微任务-优先级1
process.nextTick(() => {
  console.log("I'm process!");
});

// 2.同步任务
console.log("script end");
