using Godot;

public class Node : Godot.Node
{
	private DartConnector _dartConnector;
	
	public override void _EnterTree()
	{
		base._EnterTree();
		_dartConnector = new DartConnector("test.js");
		_dartConnector.EnterTree();
	}
	public override void _Ready()
	{
		_dartConnector.Ready();
	}
	public override void _Process(float delta) 
	{ 
		_dartConnector.Process(delta);
	}
	public override void _PhysicsProcess(float delta) 
	{ 
		base._PhysicsProcess(delta); 
		_dartConnector.PhysicsProcess(delta);
	}
	public override void _ExitTree() 
	{ 
		base._ExitTree(); 
		_dartConnector.ExitTree();
	}
}
