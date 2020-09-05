// DartGodot Compiler (Dart2Godot)
// and to compiled (runnable c#)

import 'dart:io';
import 'package:process_run/process_run.dart';

Future<void> main () async {
  
  var scriptsFolder = Directory('scripts');
  var scripts = scriptsFolder.listSync();
  scripts.forEach((f) async {
    var input = f.path;
    var destination = 'compiled\\data\\${f.path.split('\\')[1].split('.')[0]}.d2g';
    await run('dart2js',['-O4','-o',destination,input], verbose: true);

    var data = await File(destination).readAsString();
    await File(destination).delete();
    await File(destination+'.deps').delete();
    await File(destination+'.map').delete();

    String replaceCharAt(String oldString, int index, String newChar) {
      return oldString.substring(0, index) + newChar + oldString.substring(index + 1);
    }
    var length = data.length;
    for ( var i = 0 ; i + 4 < length ; i++){
      if (data [i] == 's' && data [i+1] == 'e' &&
          data [i+2] == 'l' && data [i+3] == 'f' && data [i+4] == '.'){
        data = replaceCharAt (data,i,'');
        data = replaceCharAt (data,i,'');
        data = replaceCharAt (data,i,'');
        data = replaceCharAt (data,i,'');
        data = replaceCharAt (data,i,'');
      }
      length = data.length;
    }
    final file = await File(destination);
    await file.writeAsString(data);

    var csDestination = 'compiled\\${f.path.split('\\')[1].split('.')[0]}.cs';

  });

  

}