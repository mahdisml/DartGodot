// DartGodot Compiler (Dart2Godot)
// it must find all dart files in script folder +
// and compile it
// and recorrect it
// and to compiled (runnable c#)

import 'dart:io';

void main (){
  
  var scriptsFolder = Directory('scripts');
  List scripts = scriptsFolder.listSync();
  scripts.forEach((f) {
    print(f);
  });

}