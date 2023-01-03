import { PencilLine } from 'phosphor-react'
import { Avatar } from './Avatar'

import S from './Sidebar.module.css'

export function Sidebar() {
  return (
    <aside className={S.sidebar}>
      <img
        className={S.cover}
        src="https://images.unsplash.com/photo-1635830625698-3b9bd74671ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80"
        alt="User cover"
      />

      <div className={S.profile}>
        <Avatar src="https://github.com/MauricioAires.png" />
        <strong>Mauricio Aires</strong>
        <span>Frontend PL</span>
      </div>

      <footer>
        <a href="#">
          <PencilLine size={20} /> Editar seu perfil
        </a>
      </footer>
    </aside>
  )
}
