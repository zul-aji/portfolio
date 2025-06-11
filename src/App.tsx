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
          enableMouseInteraction={false}
          mouseRadius={0.2}
          colorNum={8}
          waveAmplitude={0.04}
          waveFrequency={0.5}
          waveSpeed={0.06}
        />
      </div>
      
      {/* Main content with sidebar and TextPressure */}
      <div className="relative z-10 flex items-center min-h-screen">
        {/* Sidebar */}
        <div className="hidden md:flex flex-col justify-between bg-black/50 backdrop-blur-sm md:w-1/3 h-screen mr-8 py-8 px-6">
          {/* Top Section */}
          <div>
            <h1 className="text-white font-bold text-2xl tracking-tight">Zulfiqar R. Aji</h1>
            <p className="text-gray-300 italic font-extralight mt-1">Software Developer</p>
          </div>

          {/* Middle Section */}
          <nav className="flex flex-col gap-4 mt-12">
            {['About', 'Education', 'Experience', 'Projects'].map((item, idx) => (
              <button
                key={item}
                className={`
                  text-left text-lg transition-all
                  ${idx === 0 
                    ? 'italic font-bold text-white' 
                    : 'font-light text-gray-300'}
                  hover:italic hover:font-bold hover:text-white
                  focus:outline-none
                `}
                // Replace with state logic for active item if needed
              >
                {item}
              </button>
            ))}
          </nav>

          {/* Bottom Section */}
          <div className="flex gap-6 items-center">
            {['Email', 'LinkedIn', 'GitHub'].map((item) => (
              <a
                key={item}
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-base"
                tabIndex={0}
              >
                {item}
              </a>
            ))}
          </div>
        </div>
        {/* <TextPressure
          text="zulu"
          flex={true}
          alpha={false}
          stroke={false}
          width={true}
          weight={true}
          italic={true}
          textColor="#ffffff"
          strokeColor="#ff0000"
          minFontSize={10}
        /> */}
      </div>
    </div>
  );
}

export default App;