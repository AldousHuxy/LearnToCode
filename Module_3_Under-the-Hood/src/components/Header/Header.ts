import './Header.scss';

type HeaderProps = {
  logo: string
  alt: string
  title: string
  author: string
}

const Header = ({ logo, alt, title, author }: HeaderProps) => {
  return (`
    <header>
      <div class="logo-container">
        <img src="${logo}" alt="${alt}" />
        <h1>${title}</h1>
      </div>
      <h1>with <span>${author}</span></h1>
    </header>
  `)
}

export default Header;
