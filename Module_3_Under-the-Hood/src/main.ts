import App from './App';
import { Footer } from './components/Footer/Footer';
import Header from './components/Header/Header';
import mhfdLogo from './assets/images/MHFD-Logo.png'
import './style.css';

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    <div class="container">
        ${Header({
            logo: mhfdLogo,
            alt: 'MHFD Logo',
            title: 'Under the Hood',
            author: 'Justin Howard'
        })}
        ${App()}
        ${Footer({
            year: new Date().getFullYear(),
            organization: 'Mile High Flood District'
        })}
    </div>
`

