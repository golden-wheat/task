window.onload = function() {
	var pre= document.getElementById("pre");
    var mid = document.getElementById("mid");
    var back = document.getElementById("back");
    var node = document.getElementById("box1");
    var arr = [];
    var timer = null;

    //先序遍历
    function preOrder(node){
        if(node !=null){
            arr.push(node);
            // 若该节点下无子节点，重新调用该函数时参数node的值便默认为null，
            // 浏览器报错，所以需在头部添加一个参数非null判断。下同。
            preOrder(node.firstElementChild);
            preOrder(node.lastElementChild);
        }
    }

    //中序遍历
    function midOrder(node){
        if(node != null){
            midOrder(node.firstElementChild);
            arr.push(node);
            midOrder(node.lastElementChild);
        }
    }

    //后序遍历
    function backOrder(node){
        if(node != null){
            backOrder(node.firstElementChild);
            backOrder(node.lastElementChild);
            arr.push(node);
        }
    }

    //渲染颜色
    function render(){
        var i = 0;
        arr[i].style.backgroundColor = "blue";
        timer = setInterval(function(){
            i++;
            if(i < arr.length){
                arr[i-1].style.backgroundColor = "#fff";
                arr[i].style.backgroundColor = "blue";
            }else{
                clearInterval(timer);
                arr[arr.length-1].style.backgroundColor = "#fff";
            }
        },500);
    }


    //初始化函数
    function initialize(){
        arr = [];
        clearInterval(timer);
        var lists = document.getElementsByTagName("div");
        for(var i = 0; i < lists.length; i++){
            lists[i].style.backgroundColor = "#fff";
        }
    }
    
    eventUtil.addHandler(pre, "click", function(){
        initialize();
        preOrder(node);
        render();
    });

    eventUtil.addHandler(mid, "click", function(){
        initialize();
        midOrder(node);
        render();
    });

    eventUtil.addHandler(back, "click", function(){
        initialize();
        backOrder(node);
        render();
    })

 }