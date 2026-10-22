import { useState } from 'react';

function App() {
  const [homework, setHomework] = useState('false');
  return (
    <div>
      <h2 style={{ textDecoration: homework ? 'line-through' : 'none' }}>
        Uy vazifasini bajarish
      </h2>
      <button onClick={() => setHomework(!homework)}>Completed</button>
    </div>
  );
}

export default App;

import { useState } from 'react';
import { HiOutlineStatusOnline, HiOutlineStatusOffline } from 'react-icons/hi';
import './index.css';

function App() {
  const [online, setOnline] = useState(false);

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '48px', marginBottom: '20px' }}>
        {online ? (
          <HiOutlineStatusOnline
            className="online"
            style={{ color: 'green' }}
          />
        ) : (
          <HiOutlineStatusOffline
            className="offline"
            style={{ color: 'red' }}
          />
        )}
      </div>

      <button
        className="b-online"
        onClick={() => setOnline(true)}
        style={{ marginRight: '10px' }}
      >
        Online qilish
      </button>
      <button className="b-ofline" onClick={() => setOnline(false)}>
        Offline qilish
      </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const [fontSize, setFontSize] = useState(20);

  const handleIncrease = () => {
    setFontSize(fontSize + 5);
  };

  const handleDecrease = () => {
    if (fontSize > 10) {
      setFontSize(fontSize - 5);
    }
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <p style={{ fontSize: `${fontSize}px` }}>React</p>

      <button
        onClick={handleIncrease}
        style={{ marginRight: '10px', padding: '8px 16px', width: '120px' }}
      >
        Kattalashtirish
      </button>
      <button
        onClick={handleDecrease}
        style={{ padding: '8px 16px', width: '120px' }}
      >
        Kichraytirish
      </button>
    </div>
  );
}

export default App;

import React, { useState } from 'react';

function App() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_OBdDzWFtGtyrCo7s2zd93nLTmhtf-GUwHW8UJwmCHg&s=10w=400',
    'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=400',
    'https://images.unsplash.com/photo-1518791841217-8f162f1e1131?w=400',
  ];

  const [imageIndex, setImageIndex] = useState(0);

  const pic = () => {
    setImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ marginBottom: '15px' }}>
        <img
          src={images[imageIndex]}
          alt="error"
          style={{
            width: '300px',
            height: '200px',
            objectFit: 'cover',
            borderRadius: '8px',
          }}
        />
      </div>

      <button
        onClick={pic}
        style={{ padding: '8px 16px', cursor: 'pointer', height: '50px' }}
      >
        Keyingi rasm
      </button>
    </div>
  );
}

export default App;

import { useState } from 'react';

function App() {
  const emojis = ['😀', '😎', '🥳', '😍'];

  const [emojiIndex, setEmojiIndex] = useState(0);

  const emojilar = () => {
    setEmojiIndex((prevIndex) => (prevIndex + 1) % emojis.length);
  };

  return (
    <div style={{ padding: '20px', textAlign: 'center' }}>
      <div style={{ fontSize: '64px', marginBottom: '20px' }}>
        {emojis[emojiIndex]}
      </div>

      <button
        onClick={emojilar}
        style={{ padding: '8px 16px', cursor: 'pointer' }}
      >
        O`zgartirish
      </button>
    </div>
  );
}

export default App;
