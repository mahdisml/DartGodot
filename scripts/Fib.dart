import 'package:dart_godot/dart_godot.dart';

 class Fib extends Node {
   
   double fib (double n){
     if (n <= 1){
       return n;
     }else{
       return fib(n-1)+fib(n-2);
     }
   }

  @override
  void ready() {
    super.ready();
    print(fib(10));
    print(fib(20));
    print(fib(40));
    print(fib(80));
  }

  @override
  void process(double delta) {
    super.process(delta);
    //print('the dart is on :) ${delta}');
  }
}

void main() {
  var fib = Fib();
}
