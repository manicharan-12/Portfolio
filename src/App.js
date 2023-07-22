import Particles from "react-particles";
import { loadFull } from "tsparticles";
import { useCallback } from "react";
import './App.css'
import Home from './components/Home'
import About from './components/About'
import Header from './components/Header'
import SmallDevices from './components/SmallDevices'
import NotFound from './components/NotFound'
import Projects from "./components/Projects"
import Contact from './components/Contact'
import {Routes, Route} from 'react-router-dom'
const App = () => {
  const options = {
    particles: {
      number: {
        value: 100,
        density: {
          enable: true,
          area: 800
        }
      },
      color: {
        value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: { min: 1, max: 8 }
      },
      links: {
        enable: true,
        distance: 150,
        color: "#808080",
        opacity: 0.8,
        width: 1
      },
      move: {
        enable: true,
        speed: 4,
        direction: "none",
        random: false,
        straight: false,
        outModes: "out"
      }
    },
    interactivity: {
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "none"
        }
      },
      modes: {
        grab: {
          distance: 140,
          links: {
            opacity: 1
          }
        },
        push: {
          quantity: 4
        }
      }
    }
  };

  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="App">
      <SmallDevices/>
      <div className="lg-device">
      <Header/>
        <Home/>
        <About/>
        <Projects/>
        <Contact/>
        </div>
        <Particles options={options} init={particlesInit} />
      </div>
  );
};

export default App
