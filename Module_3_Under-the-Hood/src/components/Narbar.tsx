import ROUTES from '@/routes';
import { NavLink, useLocation } from 'react-router-dom';

const LINKS = [
    { to: ROUTES.BINARY, label: 'Binary' },
    { to: ROUTES.MEMORY, label: 'Memory' },
    { to: ROUTES.LOGIC_GATES, label: 'Logic Gates' }
]

export const Navbar = () => {
    const { pathname } = useLocation()
    
    return (
        <div className="flex justify-start gap-6 p-4 bg-mhfd-blue text-mhfd-dark-blue text-lg font-semibold">
            {LINKS.map(({ to, label }) => <NavLink key={label} to={to} className={`${pathname === to ? 'text-bright-yellow text-xl' : ''}`}>{label}</NavLink>)}
        </div>
    )
}