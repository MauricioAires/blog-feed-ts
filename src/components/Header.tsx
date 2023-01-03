import { igniteLogo } from '../assets/images'

import S from './Header.module.css'

export function Header() {
  return (
    <header className={S.header}>
      <img src={igniteLogo} alt="Logotipo do Ignite" />
    </header>
  )
}
