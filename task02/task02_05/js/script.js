/**
 * inputLeft方法
 * 点击"左侧入"，将input中输入的数字从左侧插入队列中
 */
function inputLeft() {
	var num = document.getElementById("num").value;
	if(check(num)){
		var lis = document.createElement("li");
		lis.style.height=num +'px';
		list.insertBefore(lis,list.children[0]);
	}
}

/**
 * inputRight方法
 * 点击"右侧入"，将input中输入的数字从右侧插入队列中
 */
function inputRight() {
	var num = document.getElementById("num").value;
	if(check(num)){
		var lis = document.createElement("li");
		lis.style.height=num +'px';
		list.appendChild(lis);
	}
}
/**
 * outLeft方法
 * 点击"左侧出"，读取并删除队列左侧第一个元素，并弹窗显示元素中数值
 */
function outLeft() {
	alert(list.firstChild.innerHTML);
	list.removeChild(list.firstChild);
}
/**
 * outRight方法
 * 点击"右侧出"，读取并删除队列右侧第一个元素，并弹窗显示元素中数值
 */
function outRight() {
	alert(list.lastChild.innerHTML);
	list.removeChild(list.lastChild);
}
/**
 * check函数
 * 输入只能是整数并且不能为空，范围在10-100之间
 * 队列元素数量最多限制为60个，当超过60个时，
 * 添加元素时alert出提示
 */
function check(num) {
      reg=/^[-+]?\d*$/; 
      var list = document.getElementById("list");
      if(num == "") {
          alert("输入不能为空！");
      }
      else if((!reg.test(num)) || num <10 || num > 100) {
          alert("请输入10-100之间的整数！"); 
      }
      else if(list.children.length > 59) {
        alert("队列元素数量超过60个了");
      }
      else return true;
   }

/**
 * [removeElement description]
 *点击队列中任何一个元素，则该元素会被从队列中删除
 */
 function removeElement(){
     var element = eventUtil.getElement(event);
     if(element.nodeName.toLowerCase()=="li"){
     	list.removeChild(element);
     }
 }

/**
 * 排序
 */
function numSort(){
  setInterval(bubbleSort,2000);
  function bubbleSort()
  {
    var list=document.getElementById('list');
    var data=new Array();
    for(var i=0;i<list.children.length;i++)
    {
        data.push(list.children[i].style.height);
        data[i]=parseInt(data[i]);
    }
      var len = data.length;
      for (var i = 0; i < len; i++) {
          for (var j = 0; j < len-i; j++) {
              if (data[j] > data[j+1]) {        //相邻元素两两对比
                  var temp = data[j+1];        //元素交换
                  data[j+1] = data[j];
                  data[j] = temp;
              for(var i=0;i<list.children.length;i++){
               list.children[i].style.height=data[i]+'px';
              }
             }
          }
      }
   }
}

function init() {
    var list = document.getElementById("list"),
    inputleft = document.getElementById("input-left"),
    inputright = document.getElementById("input-right"),
    outleft = document.getElementById("out-left"),
    outright = document.getElementById("out-right"),
    sortRange = document.getElementById("sort");

    eventUtil.addHandler(inputleft, 'click', inputLeft);
    eventUtil.addHandler(inputright, 'click', inputRight);
    eventUtil.addHandler(outleft, 'click', outLeft);
    eventUtil.addHandler(outright, 'click', outRight);
    eventUtil.addHandler(list,'click',removeElement);
    eventUtil.addHandler(sortRange,'click',numSort);
}
init();


