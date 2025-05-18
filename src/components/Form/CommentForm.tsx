import Label from './Label'
import NameInput from './NameInput'
import TextArea from './TextArea'
import SubmitButton from './SubmitButton'
import FormTitle from './FormTitle'

function CommentForm() {
  return (
    <div className="w-full h-full flex items-center justify-center bg-gray-100 px-4">
      <form className="w-2/3 h-2/3 bg-white rounded-xl shadow-lg flex flex-col justify-center gap-4">
        <FormTitle />
        <div className='flex flex-col items-center'>
          <Label htmlFor="name-input">Nome</Label>
          <NameInput />
        </div>

        <div className="flex flex-col items-center">
          <Label htmlFor="text-area">Comentário</Label>
          <TextArea />
        </div>

        <div className="flex justify-center">
          <SubmitButton />
        </div>
      </form>
    </div>
  )
}

export default CommentForm
