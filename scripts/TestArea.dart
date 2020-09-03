import 'package:dart_godot/dart_godot.dart';

 class Area extends Node {
   
  @override
  void ready() {
    super.ready();
    print('hello world');
  }

  @override
  void process(double delta) {
    super.process(delta);
    print('the dart is on :) ${delta}');
  }
}

void main() {
  var area = Area();
}
