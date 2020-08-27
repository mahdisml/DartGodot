import 'package:dart_godot/dart_godot.dart';

class Homepage extends GodotScript {

  @override
  void ready() {
    super.ready();
    print('hello world');
  }

  @override
  void process(double delta) {
    super.process(delta);
    print('the dart is on :)');
  }

}
void main() {
  var homePage = Homepage();
}
