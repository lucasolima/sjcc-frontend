import Label from './Label'
import NameInput from './NameInput'
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'

function CommentForm() {

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <form
        className="bg-white p-6 rounded-xl shadow-lg w-full max-w-md flex flex-col gap-4"
      >
        <div>
          <Label htmlFor="name-input">Nome</Label>
          <NameInput/>
        </div>

        <div>
          <Label htmlFor="text-area">Comentário</Label>
          <TextArea />
        </div>

        <SubmitButton />
      </form>
    </div>
  )
}

export default CommentForm
