// DartGodot Compiler (Dart2Godot)
// recorrect it
// and to compiled (runnable c#)

import 'dart:io';
import 'package:process_run/process_run.dart';

Future<void> main () async {
  
  var scriptsFolder = Directory('scripts');
  var scripts = scriptsFolder.listSync();
  scripts.forEach((f) async {
    var input = f.path;
    var destination = 'compiled\\${f.path.split('\\')[1].split('.')[0]}.d2g';
    await run('dart2js',['-O4','-o',destination,input], verbose: true);
    await File(destination+'.deps').delete();
    await File(destination+'.map').delete();
  });
  

}