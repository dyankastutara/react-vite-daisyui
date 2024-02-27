import "./index.css";

function App() {
  return (
    <div className="grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-4">
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <button class="btn btn-primary">Primary</button>
    </div>
  );
}

export default App;
