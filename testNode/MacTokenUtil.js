var crypto = require('crypto');
var MacTokenUtil = {
    strlen:function(str){
        var len = 0;
        for (var i=0; i<str.length; i++) {
            var c = str.charCodeAt(i);
            //单字节加1
            if ((c >= 0x0001 && c <= 0x007e) || (0xff60<=c && c<=0xff9f)) {
                len++;
            }
            else {
                len+=2;
            }
        }
        return len;
    },
    rd:function (n,m){
        var c = m-n+1;
        return Math.floor(Math.random() * c + n);
    },

    maxrnd:function(sum){
        var rndStr = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789"
        var slen = this.strlen(rndStr) - 1;
        var outs = "";
        for(var i=0;i<sum;i++){
            outs += rndStr.charAt(this.rd(0,slen))
        }
        return outs
    },

    hamc256:function hamc256(content,key){
        return crypto.createHmac("sha256",key).update(content).digest("base64")
    },

    getMacContent:function(host,method,path,token,macKey){
        var ts = new Date().getTime();
        var nonce = ts.toString()+":"+this.maxrnd(8);
        var content = nonce+"\n"+method.toUpperCase()+"\n"+path+"\n"+host+"\n";
        var macContent = this.hamc256(content,macKey);
        return "MAC id=\"" + token + "\",nonce=\"" + nonce + "\",mac=\""+macContent+"\""
    }
};

module.exports=MacTokenUtil;