import logo from './logo.svg';
import './App.css';
import Header from './components/Search';
import CurrentWeather from './components/CurrentWeather';
import ForecastWeather from './components/ForecastWeather';
import Search from './components/Search';
import background from './assets/Clouds-1000s-1711px.svg'

function App() {

  // const svgString = encodeURIComponent(renderToStaticMarkup(<BackgroundSVG />));

  return (
    <div className="app" >
      <Header />
      <CurrentWeather />
      <ForecastWeather />
    </div>
  );
}

export default App;
