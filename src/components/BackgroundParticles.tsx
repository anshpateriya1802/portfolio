import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { Engine } from 'tsparticles-engine';
import { loadSlim } from 'tsparticles-slim';
import { useTheme } from '../context/ThemeContext';

const BackgroundParticles: React.FC = () => {
  const { theme } = useTheme();
  
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const lightOptions = {
    particles: {
      number: {
        value: 30,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: "#6C63FF",
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#000000",
        },
      },
      opacity: {
        value: 0.2,
        random: true,
      },
      size: {
        value: 4,
        random: true,
      },
      line_linked: {
        enable: true,
        distance: 150,
        color: "#6C63FF",
        opacity: 0.1,
        width: 1,
      },
      move: {
        enable: true,
        speed: 1,
        direction: "none",
        random: true,
        straight: false,
        out_mode: "out",
        bounce: false,
      },
    },
    interactivity: {
      detect_on: "canvas",
      events: {
        onhover: {
          enable: true,
          mode: "grab",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
        resize: true,
      },
      modes: {
        grab: {
          distance: 140,
          line_linked: {
            opacity: 0.4,
          },
        },
        push: {
          particles_nb: 3,
        },
      },
    },
    retina_detect: true,
  };

  const darkOptions = {
    ...lightOptions,
    particles: {
      ...lightOptions.particles,
      color: {
        value: "#6C63FF",
      },
      line_linked: {
        ...lightOptions.particles.line_linked,
        color: "#6C63FF",
      },
    },
  };

  return (
    <Particles
      id="tsparticles"
      className="absolute inset-0 -z-10"
      init={particlesInit}
      options={theme === 'dark' ? darkOptions : lightOptions}
    />
  );
};

export default BackgroundParticles;