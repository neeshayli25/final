import React, { useState, useEffect } from 'react';

const TrafficLightSimulator = () => {
  const [activeLight, setActiveLight] = useState('red');

  useEffect(() => {
    const cycle = setInterval(() => {
      setActiveLight((prev) =>
        prev === 'red' ? 'yellow' : prev === 'yellow' ? 'green' : 'red'
      );
    }, 3000);

    return () => clearInterval(cycle);
  }, []);

  return (
    <div style={styles.trafficLight}>
      <div
        style={{
          ...styles.light,
          ...styles.red,
          ...(activeLight === 'red' ? styles.activeRed : {}),
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          ...styles.yellow,
          ...(activeLight === 'yellow' ? styles.activeYellow : {}),
        }}
      ></div>
      <div
        style={{
          ...styles.light,
          ...styles.green,
          ...(activeLight === 'green' ? styles.activeGreen : {}),
        }}
      ></div>
    </div>
  );
};

const baseLight = {
  width: '60px',
  height: '60px',
  borderRadius: '50%',
  backgroundColor: '#555',
  opacity: 0.2,
  transition: 'opacity 0.5s, box-shadow 0.5s',
};

const styles = {
  trafficLight: {
    width: '100px',
    backgroundColor: '#222',
    padding: '10px',
    borderRadius: '20px',
    margin: '100px auto',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '15px',
    boxShadow: '0 0 15px rgba(0,0,0,0.6)',
  },
  light: {
    ...baseLight,
  },
  red: {
    backgroundColor: 'red',
  },
  yellow: {
    backgroundColor: 'yellow',
  },
  green: {
    backgroundColor: 'green',
  },
  activeRed: {
    opacity: 1,
    boxShadow: '0 0 20px red',
  },
  activeYellow: {
    opacity: 1,
    boxShadow: '0 0 20px yellow',
  },
  activeGreen: {
    opacity: 1,
    boxShadow: '0 0 20px green',
  },
};

export default TrafficLightSimulator;
