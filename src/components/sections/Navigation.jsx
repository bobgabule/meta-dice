import Logo from '../icons/Logo';
import { navigationLinks } from '../../utils/content';
import { useModalContext } from '../../contexts/ModalContext';
import MobileMenuIcon from './MobileMenu/MobileMenuIcon';

const Navigation = () => {
  const { setActiveModal } = useModalContext();
  
  return (
    <nav className="text-primary-50 m-auto flex justify-between items-center max-w-[90rem] px-24 text-lg/8 font-light max-xl:px-16 max-xl:text-base/loose max-lg:px-8 max-md:px-6">
      <a className="flex items-center" href="#">
        <Logo className="h-10 max-md:h-5" width={5} alt="Meta Dice logo Icon" />
        <p className="text-xl font-bold max-md:text-lg/8">
          Meta
          <span className="text-primary-500">Dice</span>
        </p>
      </a>
      <ul className="flex items-center gap-x-8 max-xl:gap-x-6 max-lg:hidden">
        { navigationLinks.map( link => (
          <li key={link.id}>
            <a className="hover:text-primary-500 transition-properties" href={link.href}>{link.link}</a>
          </li>
        )) }
      </ul>
      <div className="flex items-center gap-x-3 max-lg:hidden">
        <button className="border-primary-50 transition-properties hover:bg-primary-50 hover:text-primary-1300 box-border cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal max-xl:px-6 max-xl:py-3 max-xl:text-base/loose">Login</button>
        <button
          className="bg-primary-500 border-primary-500 text-primary-1300 transition-properties hover:bg-primary-50 hover:border-primary-50 box-border cursor-pointer rounded-full border-2 px-8 py-3.5 text-lg/8 font-normal primary-glow primary-glow-hover"
          onClick={() => setActiveModal("sign-up")}
        >Connect Wallet</button>
      </div>

      <MobileMenuIcon />
    </nav>
  )
}

export default Navigation