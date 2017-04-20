/**
 * inputLeft方法
 * 点击"左侧入"，将input中输入的数字从左侧插入队列中
 */
function inputLeft() {
	var num = document.getElementById("num").value;
	if(check(num)){
		var lis = document.createElement("li");
		lis.innerHTML=num;
		list.insertBefore(lis,list.firstChild);
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
		lis.innerHTML=num;
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
 * 输入只能是整数并且不能为空
 */
function check(num) {
      reg=/^[-+]?\d*$/; 
      if(num == "") {
          alert("输入不能为空！");
          return false;
      }else if(!reg.test(num)) {
          alert("只能输入整数！");
          return false;
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

function init() {
    var list = document.getElementById("list"),
    inputleft = document.getElementById("input-left"),
    inputright = document.getElementById("input-right"),
    outleft = document.getElementById("out-left"),
    outright = document.getElementById("out-right");

    eventUtil.addHandler(inputleft, 'click', inputLeft);
    eventUtil.addHandler(inputright, 'click', inputRight);
    eventUtil.addHandler(outleft, 'click', outLeft);
    eventUtil.addHandler(outright, 'click', outRight);
    eventUtil.addHandler(list,'click',removeElement);
}
init();


