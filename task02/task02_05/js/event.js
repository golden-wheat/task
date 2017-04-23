var eventUtil={
          // 添加句柄
          // 兼容性
          addHandler:function(element,type,handler){
               if(element.addEventListener){
                 element.addEventListener(type,handler,false);
               }else if(element.attachEvent){
                 element.attachEvent('on'+type,handler);
               }else{
                 element['on'+type]=handler;
               }
          },
          getEvent:function(event){
            return event?event:window.event;
          },
          getElement:function(event){
            return event.target || event.srcElement;
          }
  }