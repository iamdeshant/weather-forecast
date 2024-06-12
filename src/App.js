import { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import TopButtons from './components/TopButtons'
import Inputs from './components/Inputs'
import TimeAndLocation from './components/TimeAndLocation'
import TemperatureAndDetails from './components/TemperatureAndDetails'
import getFormattedWeatherData from './services/weatherService';

function App() {
  const [query, setQuery] = useState({q: 'delhi'});
  const [weather, setWeather] = useState(null);

  useEffect(()=>{
    fetchWeather()
  },[query])

  const fetchWeather = async() =>{
    try{
      const data = await getFormattedWeatherData(query);
      setWeather(data)
    }catch(e){
      toast('Incorrect City');
      console.log(e)
    }
  }
  
  return (
    <div className="mx-auto max-w-screen-md mt-4 py-5 px-32 bg-gradient-to-br from-cyan-700 to-blue-700 h-fit shadow-xl">
      <TopButtons setQuery={setQuery}/>
      <Inputs  setQuery={setQuery}/>
      {weather && 
        <>
          <TimeAndLocation weather={weather}/>
          <TemperatureAndDetails weather={weather}/>
        </>
      }
      <ToastContainer />
    </div>
  );
}

export default App;
