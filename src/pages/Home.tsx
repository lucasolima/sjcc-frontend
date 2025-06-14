import { useState } from "react";
import CommentariesList from "../components/Commentaries/CommentariesList";
import CommentForm from "../components/Form/CommentForm";

function Home() {
  const [refreshFlag, setRefreshFlag] = useState(false);

  function triggerRefresh() {
    setRefreshFlag((prev) => !prev);
  }

  return (
    <div className="flex flex-col md:flex-row h-screen">
      <div className="w-full md:w-2/5 border-b md:border-b-0 md:border-r border-gray-200 flex flex-col">
        <div className="p-6 sticky top-0 z-10">
          <h2 className="text-2xl font-bold text-red-700">Comentários</h2>
        </div>
        <div className="flex-grow overflow-y-auto px-6 pb-6">
          <CommentariesList refreshTrigger={refreshFlag} />
        </div>
      </div>

      <div className="w-full md:w-3/5 flex items-center justify-center bg-white">
          <CommentForm onCommentPosted={triggerRefresh} />
      </div>
    </div>
  );
}

export default Home;
