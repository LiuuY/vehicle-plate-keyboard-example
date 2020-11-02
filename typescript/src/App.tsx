import React, { useState } from 'react';
import LicenseKeyboard from 'vehicle-plate-keyboard';
import 'vehicle-plate-keyboard/dist/main.css';
import './App.css';

function App() {
  const [showKeyboard, setShowKeyboard] = useState(false);
  const [value, setValue] = useState('');

  return (
    <div>
      <button
        onClick={() =>
          setShowKeyboard(!showKeyboard)
        }
      >
        {'键盘⌨️'}
      </button>

      <p>{value}</p>

      <LicenseKeyboard
        visible={showKeyboard}
        done={() => setShowKeyboard(false)}
        onChange={(value: any) => setValue(value)}
        value={value}
      />
		</div>
  );
}

export default App;
