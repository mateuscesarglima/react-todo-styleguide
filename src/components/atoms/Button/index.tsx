import { HtmlHTMLAttributes } from 'react';
import { Plus, PlusCircle } from 'react-feather';

type ButtonType = HtmlHTMLAttributes<HTMLButtonElement>

const Button = ({ ...rest }: ButtonType) => {
  return (
    <button className='h-full bg-blue-dark text-gray-100 flex items-center gap-2 rounded-lg px-3 hover:bg-blue' {...rest} >
      Criar
      <PlusCircle className='text-gray-100' size={20} />
    </button>
  );
}

export default Button;