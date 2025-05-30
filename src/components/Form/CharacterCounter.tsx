import type { CharacterCounterProps } from "../../types/CharacterCounterProps";
  
  function CharacterCounter({ currentLength, maxLength }: CharacterCounterProps) {
    return (
      <p className="text-sm text-gray-500 mt-1">
        {currentLength}/{maxLength} caracteres
      </p>
    );
  }
  
  export default CharacterCounter;  