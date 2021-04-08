// 引入 cowsay 模块，需先通过 npm install cowsay 安装
const cowsay = require("cowsay");
// 调用
console.log(
  cowsay.say({
    text: "I'm a moooodule",
    e: "- -",
  })
);
