import React, { useState } from 'react';
import News from './News';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (event) => {
    const value = event.target.value;
    if (value.trim() === '') {
      setSearchTerm('');
    } else {
      setSearchTerm(value);
    }
  };

  const handleBlur = () => {
    if (searchTerm.trim() === '') {
      setSearchTerm('');
    }
  };

  return (
    <div>
      <h1>Últimas notícias</h1>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearch}
        onBlur={handleBlur}
        placeholder="Digite o nome do fã"
      />
      <News searchTerm={searchTerm} />
    </div>
  );
};

export default App;
