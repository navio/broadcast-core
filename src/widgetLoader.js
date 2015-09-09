import fs from "fs";
import path from "path";


function getDirectories(dirPath) {
  return fs.readdirSync(dirPath).filter(function(file) {
    return fs.statSync(path.resolve(dirPath, file)).isDirectory();
  });
}

function validateWidget(widgetPath){
    try{
      return
            fs.statSync(path.resolve(widgetPath, 'package.json')).isFile();
    } catch(err){
       return false;
    }
}

function retriveStartingPoint(widgetPath){
  try{
      json = JSON.parse(fs.readFileSync(path.resolve(widgetPath, 'package.json'), 'utf8'))
     }catch(error){
      return error
    }finally{
      return json.main || false;
    }
}

function getWidgets(path){
    let widgets = getDirectories(path);
    let widgetsInit =
      widgets.forEach(widget =>  validateWidget(widget) ? retriveStartingPoint(widget) : false );
    return {
      widgetsPath: widgets,
      widgetsInit: widgetsInit
    }
}

export default getWidgets;
