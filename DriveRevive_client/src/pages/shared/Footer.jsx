import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg'
import { FaGoogle } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { CiInstagram, CiLinkedin } from 'react-icons/ci';
const Footer = () => {
  return (
    <main className='bg-black'>
      <div className="container mx-auto py-20">
      <footer className="footer p-10 text-white">
        <aside className='space-y-4'>
          <Link to='/' className="text-xl flex flex-col items-center justify-center">
                <img className="w-3/4 items-center border bg-transparent border-none" src={logo} alt={logo} />
                <p className="font-extrabold text-sm">Drive Revive</p>
          </Link>
          <p className='w-2/3'>Edwin Diaz is a software and web technologies engineer, a life coach trainer who is also a serial .</p>

          <ul className='flex items-center space-x-4'>
            <li className='bg-gray-500 p-3 rounded-full'>
                <Link><FaGoogle size={20}/></Link>
            </li>
            <li className='bg-gray-500 p-3 rounded-full'>
                <Link><FaXTwitter  size={20} /></Link>
            </li>
            <li className='bg-gray-500 p-3 rounded-full'>
                <Link><CiInstagram  size={20} /></Link>
            </li>
            <li className='bg-gray-500 p-3 rounded-full'>
                <Link><CiLinkedin  size={20} /></Link>
            </li>
          </ul>

        </aside>
        <nav>
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav>
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Why us</a>
         
        </nav>
        <nav>
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </footer>
      </div>
    </main>
  );
}

export default Footer;
