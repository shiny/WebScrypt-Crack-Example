var db = require('./db.json');
var scrypt = require("scrypt");
const crypto = require('crypto');
const async = require('async');

var user = 'alice';
var pad = "00"; //几位数字
var parallel = 4; //并发数
var start = 0; //从几开始
var end = 100; //到几结束

var name = user; //用户名
var salt = new Buffer(db[name]['s_salt'], "hex"); // s_salt

var pwd = db[name]['s_hash']; //s_hash

var q = async.queue(function(i, callback) {
    var hash = crypto.createHash('sha256');
	var str = i.toString();
	if(str.length < pad.length) {
	    str = pad.substring(0, pad.length - str.length) + str;
	}
    var result = scrypt.hash(str, {"N":1048576,"r":1,"p":4}, 32, new Buffer(name)).then(function(r) {
        hash.update(Buffer.concat([r, salt]));
        var hex = hash.digest("hex");
        if(pwd==hex) {
            callback(str);
        } else {
            callback(null, str+':'+hex);
        }
    }, function(err){
        callback(err);
    });
    
}, parallel);

var ranges = [];
for(var i=start;i<end;i++) {
    ranges.push(i);
}

q.push(ranges, function (err, result) {
    if(err) {
        console.log('Result is '+err);
        q.kill();
    } else {
        console.log(result);
    }
});
