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
    String replaceString(String oldData,String oldString,String newString){
      var length = oldData.length;
      for ( var i = 0 ; i + oldString.length < length ; i++){
        var isIt = true;
        for (var j = 0 ; j < oldString.length; j++){
          if (oldData[i+j] != oldString[j]){
            isIt = false;
            break;
          }
        }
        if (isIt){
          for (var j = 0 ; j < oldString.length; j++){
            if(j == oldString.length - 1){
              oldData = replaceCharAt (oldData,i,newString);
            }else{
              oldData = replaceCharAt (oldData,i,'');
            }
            length = oldData.length;
          }
          length = oldData.length;
        }
        length = oldData.length;
      }
      return oldData;
    }
    bool have(String oldData,String oldString){
      var length = oldData.length;
      var isItAtAll = false;
      for ( var i = 0 ; i + oldString.length < length ; i++){
        var isIt = true;
        for (var j = 0 ; j < oldString.length; j++){
          if (oldData[i+j] != oldString[j]){
            isIt = false;
            break;
          }
        }
        if (isIt == true) {
          isItAtAll = true;
        }
      }
      return isItAtAll;
    }
    String pathFixer(String path){
      return path.replaceAll(r'\', r'\\');
    }
    data = data.replaceAll('self.','');
    final file = await File(destination);
    await file.writeAsString(data);

    var csDestination = 'compiled\\${f.path.split('\\')[1].split('.')[0]}.cs';
    var ourFile = await File(f.path).readAsString();
  
    if (have(ourFile, 'extends Node')){
      var ourCsData = await File('cs\\Node.cs').readAsString();
      ourCsData = ourCsData.replaceAll('DARTGODOTFILEPATHJS', pathFixer(destination.replaceAll(r'compiled\', '')));
      final fileCs = await File(csDestination);
      await fileCs.writeAsString(ourCsData);
    }
    
    File('cs\\DartConnector.cs').copySync('compiled\\data\\DartConnector.cs');

  });

  

}