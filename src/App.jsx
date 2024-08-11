import "./App.css";
import Header from "./components/navbar/Header";
import WeatherBoard from "./components/weather/WeatherBoard";

function App() {
  return (
    <div className="grid items-center h-screen">
      <Header></Header>
      <main>
        <section>
          <WeatherBoard></WeatherBoard>
        </section>
      </main>
    </div>
  );
}

export default App;
