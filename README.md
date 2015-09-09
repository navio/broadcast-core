# broadcast-core
## Functionality
This project identify all the widgets in the specify folder and attach them to a main handler. When events happen in any of the widgets the handler ( broadcaster ) communicates the change to the rest of the widgets. 

### Widgets
Widgets are autonomus elements that communicate and react according to the programmed behaivior. There is a master widget that controls the rendering and the audio of the applications. 

### Broadcaster
Singleton that connects all the widgets in the application. It consumes messages and distribute them in one way.
Multiple Broadcaster/Dispatcher can exist.

## Functions
Comming Soon
