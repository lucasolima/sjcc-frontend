import { FaRegCommentDots } from 'react-icons/fa' 

function CommentTextarea() {
  return (
    <div className="relative w-full max-w-md">
      <FaRegCommentDots className="absolute left-3 top-3 text-gray-400 pointer-events-none" />
      <textarea
        id="text-area"
        placeholder="Faça seu comentário"
        required
        rows={4}
        className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md shadow-sm
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-red-500 resize-none"
      />
    </div>
  )
}

export default CommentTextarea
