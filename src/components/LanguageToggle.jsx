import React, { useState } from 'react';

function LanguageToggle() {
  const [language, setLanguage] = useState('en');

  const toggleLanguage = () => {
    setLanguage(language === 'en' ? 'hi' : 'en');
  };

  return (
    <div>
      <button onClick={toggleLanguage}>
        {language === 'en' ? 'Switch to Hindi' : 'अंग्रेज़ी में बदलें'}
      </button>
      <p>{language === 'en' ? 'Machines Available for Rent' : 'किराए पर उपलब्ध मशीनें'}</p>
    </div>
  );
}

export default LanguageToggle;
