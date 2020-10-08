import 'package:dart_godot/dart_godot.dart';

 class Fib extends Node {
   
   var firstTime = 0;
   var fibNumber = 10;
   
  @override
  void ready() {
    super.ready();
  }

  @override
  void process(double delta) {
    super.process(delta);
    if (firstTime > 2){
      print(fib(fibNumber));
      fibNumber++;
      firstTime = 0;
    }
    firstTime ++;
  }

  int fib (int n){
     if (n <= 1){
       return n;
     }else{
       return fib(n-1)+fib(n-2);
     }
   }
}

void main() {
  var fib = Fib();
}
