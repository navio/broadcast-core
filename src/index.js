import widgetloader from "./widgetloader";
import Broadcast from "broadcastjs";

const playDispatch = new Broadcast();
const widgetPath = "./widgets";

function boot(dispatcher,path){
  let widgetsToStart = widgetloader(path).widgetsInit;
  let widgets = [];
  let i = 0, max = widgetsToStart.length;
      for(;i<max;i++){
        widgets.push(require(widgetsToStart[i])(dispatcher));
      }
  return widgets;
}

function subscribeWidgets(widgets){
  widgets.forEach(widget => widget.subscribeWidget());
}

function sendBeat(dispatcher,message){
    dispatcher.pushMessage(message);
}
