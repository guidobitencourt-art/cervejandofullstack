

import Logo from '../../assets/Logo.png'

const Footer = () =>  {
  return (
    <footer className="bg-[#FFF5D4] flex flex-col md:flex-row justify-between items-center py-4 px-6">
      <img src={Logo} alt="Cervejando logo" className="max-w-[12.5rem] h-auto mb-4 md:mb-0" />

      <nav>
        <ul className="flex flex-col md:flex-row gap-4">
          <li>
            <a className="text-[clamp(0.7rem,1.2vw,0.9rem)] whitespace-nowrap transition-colors hover:text-[#d4a017]" href="#">Aviso legal</a>
          </li>
          <li>
            <a className="text-[clamp(0.7rem,1.2vw,0.9rem)] whitespace-nowrap transition-colors hover:text-[#d4a017]" href="#">Política de privacidad</a>
          </li>
          <li>
            <a className="text-[clamp(0.7rem,1.2vw,0.9rem)] whitespace-nowrap transition-colors hover:text-[#d4a017]" href="#">Política de cookies</a>
          </li>
        </ul>
      </nav>
    </footer>
  )
}

export default Footer
