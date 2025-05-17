interface LabelProps {
    htmlFor: string
    children: React.ReactNode
  }
  
  function Label({ htmlFor, children }: LabelProps) {
    return (
      <label
        htmlFor={htmlFor}
        className="block mb-1 font-medium text-xl text-gray-500 cursor-pointer"
      >
        {children}
      </label>
    )
  }
  
  export default Label