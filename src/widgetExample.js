import Broadcast, {Widget} from "broadcastjs";

let playDispatch = new Broadcast();

let widget1 = new Widget("one",playDispatch);
let widget2 = new Widget("two",playDispatch);
let widget3 = new Widget("three",playDispatch);

widget1.subscribeWidget();
widget2.subscribeWidget();
widget3.subscribeWidget();


//console.log(playDispatch._showSubscribers().length)

playDispatch.pushMessage("hola");
