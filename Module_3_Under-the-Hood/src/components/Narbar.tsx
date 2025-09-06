import ROUTES from '@/routes';
import { NavLink } from 'react-router-dom';

const LINKS = [
    { to: ROUTES.BINARY, label: 'Binary' },
    { to: ROUTES.LOGIC_GATES, label: 'Logic Gates' },
    { to: ROUTES.MEMORY, label: 'Memory' },
    { to: ROUTES.ARITHMETIC_LOGIC_UNIT, label: 'Arithmetic Logic Unit' },
    { to: ROUTES.CENTRAL_PROCESSING_UNIT, label: 'Central Processing Unit' },
]

export const Navbar = () => {
    return (
        <div className="flex justify-around p-4 bg-mhfd-blue text-mhfd-dark-blue text-lg font-semibold">
            {LINKS.map(({ to, label }) => <NavLink key={label} to={to} className="hover:underline">{label}</NavLink>)}
        </div>
    )
}