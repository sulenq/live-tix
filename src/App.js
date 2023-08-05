import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { myTheme } from './AppTheme';
import LandingPage from './Pages/LandingPage';

function App() {
  return (
    <ChakraProvider theme={myTheme}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </BrowserRouter>
    </ChakraProvider>
  );
}

export default App;
