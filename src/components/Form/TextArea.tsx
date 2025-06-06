import type { TextAreaInputProps } from '../../types/TextAreaInputProps'
import { FaRegCommentDots } from 'react-icons/fa' 

function CommentTextarea({value, onChange, maxLength}: TextAreaInputProps) {
  return (
    <div className="relative w-full max-w-md">
      <FaRegCommentDots className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
      <textarea
        id="text-area"
        value={value}
        onChange={onChange}
        maxLength={maxLength}
        placeholder="Faça seu comentário"
        rows={4}
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
      />
    </div>
  )
}

export default CommentTextarea
