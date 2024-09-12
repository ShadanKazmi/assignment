import './App.css';
import Gallery from './components/Gallery';
import InfoCard from './components/InfoCard';

function App() {
  return (
    <div className="h-screen flex">
      <div className="hidden md:block md:w-1/2"></div>
      <div className="relative md:w-1/2 w-full">
        <InfoCard/>
        <Gallery/>
      </div>
    </div>
  );
}

export default App;
