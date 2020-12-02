import './App.css';
import Header from './components/Header';
import WeatherContainer from './components/weather/WeatherContainer';

const App = () => {

  return (
    <div className="app" data-test="appComponent">
      <Header />
      <WeatherContainer />
    </div>
  );
}

export default App;
