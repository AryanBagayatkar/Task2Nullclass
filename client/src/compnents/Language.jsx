import React, { useState }  from 'react'
import { useTranslation } from 'react-i18next'
import "../i18n.js";

const Language = () => {
    const { t, i18n } = useTranslation();
    const [backgroundColor, setBackgroundColor] = useState('white');
    const [color, setColor] = useState('black');

    const handleLanguageChange = (event) => {
      const selectedLanguage = event.target.value;
      i18n.changeLanguage(selectedLanguage);

      switch (selectedLanguage) {
        case 'hi':
          setBackgroundColor('blue');
          setColor('white')
          break;
        case 'zh':
          setBackgroundColor('green');
          setColor('white')
          break;
        case 'fr':
          setBackgroundColor('yellow');
          setColor('green')
          break;
        default:
          setBackgroundColor('white');
          setColor('black')
          break;
      }
    };
  return (
    <div style={{ backgroundColor: backgroundColor,color:color, height: '100vh' }}>
      <select onChange={handleLanguageChange}>
        <option value="en">English</option>
        <option value="es">Spanish</option>
        <option value="hi">Hindi</option>
        <option value="pt">Portuguese</option>
        <option value="zh">Chinese</option>
        <option value="fr">French</option>
      </select>
      <hr />
      <h1>{t('welcome')}</h1>
    </div>
  )
}

export default Language
