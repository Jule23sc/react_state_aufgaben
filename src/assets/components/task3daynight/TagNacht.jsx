import { useState } from 'react';

const TagNacht = () => {
    // Zustand (state) für den Hintergrundstatus und den Buttontext
    const [isNightMode, setIsNightMode] = useState(false);
  
    // Funktion, die aufgerufen wird, wenn der Button geklickt wird
    const handleButtonClick = () => {
      setIsNightMode(!isNightMode); // Den Hintergrundstatus umkehren
    };
  
    // Dynamische Styling-Objekte für den Hintergrund
    const backgroundStyle = {
      backgroundColor: isNightMode ? 'black' : 'white',
      color: isNightMode ? 'white' : 'black',
      minHeight: '100vh', // Höhe des Hintergrunds, um die gesamte Seite zu füllen
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    };
  
    return (
      <div style={backgroundStyle}>
        <button onClick={handleButtonClick}>
          {isNightMode ? 'Tag' : 'Nacht'}
        </button>
      </div>
    );
  };
export default TagNacht