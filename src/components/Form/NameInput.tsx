import type { NameInputProps } from '../../types/NameInputProps';
import { FaUser } from 'react-icons/fa';

function NameInput({value, onChange}:NameInputProps) {
  return (
    <div className="relative w-full max-w-md">
      <FaUser className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
      <input
        id="name-input"
        type="text"
        value={value}
        onChange={onChange}
        placeholder="Digite seu nome"
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500"
      />
    </div>
  )
}

export default NameInput;