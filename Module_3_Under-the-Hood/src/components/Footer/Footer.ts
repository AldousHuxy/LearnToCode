import './Footer.scss';

type FooterProps = {
  year: number
  organization: string
}

export const Footer = ({ year, organization }: FooterProps) => {
  return (`
    <footer>
      <p>&copy; ${year} ${organization}. All rights reserved.</p>
    </footer>
  `)
}
