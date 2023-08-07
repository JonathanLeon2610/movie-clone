import { useState } from 'react';

const SelectorWrap = ({ options, onSelect }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    onSelect(option); // Llama a la función de selección pasada como prop con la opción seleccionada
  };

  return (
    <div className="selector-wrap">
      {options.map((option) => (
        <div
          key={option.id}
          className={`item ${selectedOption === option ? 'selected' : ''}`}
          onClick={() => handleOptionClick(option)}
        >
          {option.name}
        </div>
      ))}
    </div>
  );
};

export default SelectorWrap;
