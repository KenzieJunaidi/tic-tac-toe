import { useEffect, useState } from 'react'
import './App.css'
import { Background } from './components/Background';
import { Hero } from './components/Hero';
import { Game } from './components/Game';

function App() {

  const [isLoaded, setIsLoaded] = useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  return (
    <div className={isLoaded ? "app loaded" : "app"}>
      <Background handleLoad={handleLoad}/>
      <Hero />
      <Game />
    </div>
  );
}

export default App
