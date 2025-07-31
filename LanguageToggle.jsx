import React, { useState } from 'react';

const LanguageToggle = () => {
  const [lang, setLang] = useState('en');
  return (
    <div>
      <button onClick={() => setLang('en')}>English</button>
      <button onClick={() => setLang('hi')}>हिन्दी</button>
      <p>{lang === 'en' ? 'Welcome to Vaishnavi Earthmovers!' : 'वैष्णवी अर्थमूवर्स में आपका स्वागत है!'}</p>
    </div>
  );
};

export default LanguageToggle;
