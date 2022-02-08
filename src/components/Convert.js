import axios from "axios";
import React from "react";

const KEY = 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM';

const Convert = ({ language, text }) => {
  const [translated, setTranslated] = React.useState('');
  const [debouncedText, setDebouncedText] = React.useState(text);

  React.useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text)
    }, 1000);

    return () => {
      clearTimeout(timerId)
    }
  },[text]);

  React.useEffect(() => {
    if (text.trim() === '') setTranslated('')
  }, [text])

  React.useEffect(() => {
    if (debouncedText.trim() === '') return

    const doTranslate = async () => {
      const { data } = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
        params: {
          q: debouncedText,
          target: language.value,
          key: KEY
        }
      });

      setTranslated(data.data.translations[0].translatedText);
    };

    doTranslate();
  }, [language, debouncedText])

  return (
    <div>
      <h1 className="ui header">{translated}</h1>
    </div>
  );
}

export default Convert