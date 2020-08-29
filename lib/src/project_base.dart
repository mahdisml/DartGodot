import 'package:js/js.dart';
// ----------------------------------------

// cs will get

@JS('CS_GD__Print')
external String CS_GD__Print(Object obj);

// ----------------------------------------
// ----------------------------------------

// cs will set

@JS('enterTree')
external set _enterTree (void Function() f);

@JS('ready')
external set _ready (void Function() f);

@JS('process')
external set _process (void Function(double delta) f);

@JS('physicsProcess')
external set _physicsProcess (void Function(double hi) f);

@JS('exitTree')
external set _exitTree (void Function() f);

// ----------------------------------------

class GD {
  static void print (String text){
    CS_GD__Print(text);
  }
}
class GodotObject {}
class Node extends GodotObject {
  Node (){
    _enterTree = allowInterop(enterTree);
    _ready = allowInterop(ready);
    _process = allowInterop(process);
    _physicsProcess = allowInterop(physicsProcess);
    _exitTree = allowInterop(exitTree);
  }
  
  void enterTree (){}
  void ready (){}
  void process (double delta){}
  void physicsProcess (double delta){}
  void exitTree (){}
}