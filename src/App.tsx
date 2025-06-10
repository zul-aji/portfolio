import Dither from './blocks/Backgrounds/Dither/Dither'
import './App.css'
import TextPressure from './blocks/TextAnimations/TextPressure/TextPressure';

function App() {

  return (
    <div className="relative min-h-screen min-w-screen overflow-hidden">
      {/* Dither background - full screen */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Dither
          waveColor={[0.5, 0.8, 0.7]}
          disableAnimation={false}
          enableMouseInteraction={true}
          mouseRadius={0.2}
          colorNum={8}
          waveAmplitude={0.04}
          waveFrequency={0.5}
          waveSpeed={0.06}
        />
      </div>
      
      {/* Main content with sidebar and TextPressure */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:block bg-black/20 backdrop-blur-sm md:w-1/4 h-screen mr-8"></div>
        {/* TextPressure centered */}
        <TextPressure
          text="zulu"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={36}
        />
      </div>
    </div>
  );
}

export default App;