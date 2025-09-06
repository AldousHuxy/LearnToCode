import mhfdLogo from '@/assets/images/MHFD-Logo.png';
import { NavLink } from 'react-router-dom';
import ROUTE from '@/routes';

export const Header = () => {
  return (
    <header className="flex justify-between items-center bg-mhfd-dark-blue text-white p-4">
      <nav className="flex items-center gap-4">
        <NavLink to={ROUTE.HOME}>
          <img src={mhfdLogo} alt="MHFD Logo" className="h-[50px]" />
        </NavLink>
        <h3 className="text-lg font-bold">Under the Hood</h3>
      </nav>
      <h1 className="text-lg font-bold">with <span className="text-xl text-bright-yellow">Justin Howard</span></h1>
    </header>
  )
}
