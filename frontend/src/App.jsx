import './App.css';
import { Routes, Route } from 'react-router-dom';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Home from './pages/Home';
import Hero from './components/Hero';

function App() {
    return (
        <>
            <Hero />
            <Routes>
                <Route path="/about" element={<About />} />
                <Route path="/sign-up" element={<SignUp />} />
                <Route path="/" element={<Home />} />
            </Routes>
        </>
    );
}

export default App;
