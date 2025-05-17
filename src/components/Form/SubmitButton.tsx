function SubmitButton() {
    return (
      <div>
        <input
          type="submit"
          value="Enviar"
          className="
            w-full
            bg-red-600
            text-white
            font-medium
            tracking-wide
            py-3
            px-6
            rounded-xl
            shadow-md
            hover:bg-gradient-to-r
            hover:from-red-500
            hover:to-red-700
            transition
            duration-300
            ease-in-out
            transform
            hover:scale-105
            focus:outline-none
            focus:ring-2
            focus:ring-red-300
            cursor-pointer
          "
        />
      </div>
    );
  }
  
  export default SubmitButton;
  