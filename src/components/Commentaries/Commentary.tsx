import { FaUser } from "react-icons/fa";
import type { Comment } from "../../types/Comment"


function Commentary({ name, content, createdAt }: Comment) {
  return (
    <div className="flex items-start gap-4 bg-white rounded-xl shadow-md p-4 border border-gray-200">
      <div className="flex-shrink-0 bg-red-100 p-2 rounded-full">
        <FaUser className="w-6 h-6 text-red-600" />
      </div>
      <div className="w-full">
        <div className="w-full flex items-center justify-between gap-2">
        <p className="font-semibold text-red-600">{name}</p>
        <p className="text-sm text-gray-500">{createdAt}</p>
        </div>
        <p className="text-gray-700">{content}</p>
      </div>
    </div>
  );
}

export default Commentary;
