//提示框
function $toast() {
    this.show=function (str,time,callback) {
        var body=document.getElementsByTagName('body');
        var newNode = document.createElement("div");
        newNode.id="zhezhao";
        newNode.innerHTML='<div style="width: 100%;height: 100vh;position: fixed;top: 0;left: 0; display: flex; justify-content: center;align-items: center;z-index: 99999999999999999999999;font-size:14px;">'+
            '<div style="padding: 10px 15px;border-radius: 4px; max-width:80%; background: rgba(0,0,0,0.8);color: #fff;">'+str+'</div>'+
            '</div>';
        body[0].appendChild(newNode);
        var timer=setTimeout(function () {
            var child=document.getElementById("zhezhao");
            body[0].removeChild(child);
            if(callback){
                callback()
            }
            clearTimeout(timer);
        // },time);
        }, 1500);

    }
}
window.$toast=new $toast();

