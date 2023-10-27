import logo from '../../../assets/logo.png'
import { Input } from '../../atoms';
import { Form } from '../../molecules';

const Header = () => {
  return (
    <div className='relative bg-gray-700 flex justify-center items-center flex-col h-56'>
      <img src={logo} />
      <Form />
    </div>
  );
}

export default Header;