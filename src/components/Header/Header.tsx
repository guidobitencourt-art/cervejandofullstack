import { useState } from 'react'
import { Link } from 'react-router-dom'
import Logo from '../../assets/Logo.png'

const Header = () => {
  const [open, setOpen] = useState(false)

  return (
    <header className="bg-[#FFF5D4] flex justify-between items-center h-14 md:h-16 px-6 relative">
      <img src={Logo} alt="Cervejando logo" className="max-w-[9rem] md:max-w-[12.5rem] h-auto" />

      <button
        className="flex md:hidden flex-col gap-[4px] md:gap-[6px] bg-transparent border-0 p-0 cursor-pointer z-10"
        aria-label="Abrir menú"
        aria-expanded={open}
        onClick={() => setOpen(v => !v)}
      >
        <span className="block w-[24px] h-[2px] md:w-[30px] md:h-[3px] rounded-[4px] bg-gray-800 transition-all" />
        <span className="block w-[24px] h-[2px] md:w-[30px] md:h-[3px] rounded-[4px] bg-gray-800 transition-all" />
        <span className="block w-[24px] h-[2px] md:w-[30px] md:h-[3px] rounded-[4px] bg-gray-800 transition-all" />
      </button>

      <nav
        className={`${open ? 'flex' : 'hidden'} md:flex ${open ? 'absolute top-full left-0 w-full bg-[#FFF5D4] flex-col items-center py-3 shadow-md' : ''} md:static md:top-auto md:left-auto md:w-auto md:bg-transparent md:flex-row md:items-center md:py-0 md:shadow-none`}
      >
        <ul className={`flex ${open ? 'flex-col gap-4' : 'flex-row gap-4'} md:flex-row md:gap-8 text-sm md:text-base`}>
          <li><Link className="font-bold hover:text-[#d4a017]" to="/">Inicio</Link></li>
          <li><Link className="font-bold hover:text-[#d4a017]" to="/estilos">Estilos</Link></li>
          <li><Link className="font-bold hover:text-[#d4a017]" to="/curiosidades">Curiosidades</Link></li>
          <li><Link className="font-bold hover:text-[#d4a017]" to="/contacto">Contacto</Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header