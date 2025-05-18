import CommentariesList from "../components/Commentaries/CommentariesList";
import CommentForm from "../components/Form/CommentForm";

function Home() {
  return (
    <div className="flex h-screen">
      <div className="w-2/5 border-r border-gray-200 bg-gray-50 flex flex-col">
        <div className="p-6 sticky top-0 bg-gray-50 z-10">
            <h2 className="text-2xl font-bold text-red-700">Comentários</h2>
        </div>
        <div className="flex-grow overflow-y-auto px-6 pb-6">
            <CommentariesList />
        </div>
      </div>

      <div className="w-3/5 flex items-center justify-center bg-white">
        <CommentForm />
      </div>
    </div>
  );
}

export default Home;
