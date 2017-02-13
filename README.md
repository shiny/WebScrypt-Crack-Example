# WebScrypt Crack Example

nodejs 的 WebScrypt 暴力破解程序

针对的项目： [For WebScrypt Example](https://github.com/EtherDream/WebScrypt/tree/master/example/login)

相关帖子：[[来试试] 如果给你源码和数据，你是否能破解出密码？](https://www.v2ex.com/t/339941)

# main.js 的配置

```javascript
var user = 'alice'; // 针对的用户
var pad = "00"; // 几位数字
var parallel = 4; // 队列并发数
var start = 0; // 从几开始
var end = 100; // 到几结束
```

Alice 的密码为两位数字

最后运行结果：

```
62:71121010d64bf17ee0fdb50326156f13d25718d632a54bd42f0888f963a0bf4d
61:b163b19e5859e630bf35cf4668f2c784f57e7fbf8dbd87c81669bbd4d019f35c
63:2f2eca81eba9611a46932c07b363c8209625217639c97302b9e89fb52894b49f
64:e198d2b0cdedadc7a9705e099203b31c2d659a32ea5ea161d31f1c1dd5a6687f
Result is 66
65:e287437f8f328985712986d20aefc6cd42a2f6200bb745c2715088d40fc05e46
67:45346b2f00a64ca1dc49d7619333666f2a670cdb53d05f31e0b38d261ffabaa9
```

# 安装

```shell
git clone https://github.com/shiny/WebScrypt-Crack-Example.git
cd WebScrypt-Crack-Example
npm i
node main.js
```



# 依赖项

[node-scrypt](https://github.com/barrysteyn/node-scrypt) - Scrypt for Node

[async.js](https://github.com/caolan/async) - Async utilities for node and the browser

