/**
 * inputLeft方法
 * 点击"左侧入"，将input中输入的数字从左侧插入队列中
 */
function inputLeft() {
	var num = document.getElementById("num").value;
	if(check(num)){
		var lis = document.createElement("li");
		lis.innerHTML=num;
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
     return true;
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
 * 当点击查询时，将查询词在各个元素内容中做模糊匹配，
 * 将匹配到的内容进行特殊标识
 */
function searchBtn() {
  var list = document.getElementById("list"),
  searchText = document.getElementById("search-text");
  var reg=new RegExp(searchText.value,"g");
  for(var i=0;i<list.children.length;i++){
    list.children[i].innerHTML=list.children[i].innerHTML.
    replace(reg,"<span>"+searchText.value+"</span>");
  }
}

function init() {
    var list = document.getElementById("list"),
    inputleft = document.getElementById("input-left"),
    inputright = document.getElementById("input-right"),
    outleft = document.getElementById("out-left"),
    outright = document.getElementById("out-right"),
    searchbtn = document.getElementById("search-btn");

    eventUtil.addHandler(inputleft, 'click', inputLeft);
    eventUtil.addHandler(inputright, 'click', inputRight);
    eventUtil.addHandler(outleft, 'click', outLeft);
    eventUtil.addHandler(outright, 'click', outRight);
    eventUtil.addHandler(list,'click',removeElement);
    eventUtil.addHandler(searchbtn,'click',searchBtn);
}
init();


