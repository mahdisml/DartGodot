using System;
using System.IO;

namespace Godot
{
    public class DartConnector
    {
        private readonly Jint.Engine engine;
        /* you must add this inside < Project > tag in your .csproj file
        <ItemGroup>
            <PackageReference Include="Jint" Version="3.0.0-beta-1828"/>
        </ItemGroup>
        */
        public DartConnector(string sourcePath)
        {
            engine = new Jint.Engine();
            engine.SetValue("CS_GD__Print", new Action<object>(o => GD.Print(o)));
            engine.SetValue("print", new Action<object>(o => GD.Print(o)));
            engine.SetValue("self","this");
            engine.Execute(new StreamReader(sourcePath).ReadToEnd());
        }

        public void EnterTree()
        {
            try
            {
                engine.Invoke("enterTree");
            }
            catch (Exception e)
            {
                GD.Print(e);
            }
        }
        public void Ready()
        {
            try
            {
                engine.Invoke("ready");
            }
            catch (Exception e)
            {
                GD.Print(e);
            }
        }
        public void Process(float delta)
        {
            try
            {
                engine.Invoke("process",(double)(decimal)delta);
            }
            catch (Exception e)
            {
                GD.Print(e);
            }
        }
        public void PhysicsProcess(float delta)
        {
            try
            {
                engine.Invoke("physicsProcess",(double)(decimal)delta);
            }
            catch (Exception e)
            {
                GD.Print(e);
            }
        }
        public void ExitTree()
        {
            try
            {
                engine.Invoke("exitTree");
            }
            catch (Exception e)
            {
                GD.Print(e);
            }
        }
    }
}