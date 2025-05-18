import logo from '../../assets/logo.svg' 

function FormTitle(){
    return(
        <div className='flex flex-col items-center gap-5'>
            <img
            src={logo} 
            className='w-[25%]'
            />
            <h1 className='text-3xl text-red-500'>Deixe o seu comentário:</h1>
        </div>
        
    )
}

export default FormTitle;