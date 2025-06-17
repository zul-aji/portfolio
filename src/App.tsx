import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import MainPage from './pages/Home';
import SplashScreen from './pages/SplashScreen';

function App() {
  const [loading, setLoading] = useState(true);

  const handleLoadingComplete = () => {
    setLoading(false);
  };

  return (
    <div className="fixed inset-0 bg-black">
      <AnimatePresence mode="wait">
        {loading ? (
          <SplashScreen onLoadingComplete={handleLoadingComplete} />
        ) : (
          <MainPage />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;