import { ThumbsUp, Trash } from 'phosphor-react'
import { useState } from 'react'
import { Avatar } from './Avatar'

import S from './Comment.module.css'

interface CommentProps {
  content: string
  onDeleteComment: (comment: string) => void
}

export function Comment({ content, onDeleteComment }: CommentProps) {
  const [likeCount, setLikeCount] = useState(0)

  function handleDeleteComment() {
    onDeleteComment(content)
  }

  function handleLikeComment() {
    setLikeCount((currentCount) => currentCount + 1)
  }

  return (
    <div className={S.comment}>
      <Avatar
        hasBorder={false}
        src="https://github.com/lauragrassig.png"
        alt="Avatar Laura Grassi"
      />

      <div className={S.commentBox}>
        <div className={S.commentContent}>
          <header>
            <div className={S.authorAndTime}>
              <strong>Laura Grassi</strong>
              <time title="11 de Maio às 08:13h" dateTime="2022-05-11 08:13:30">
                Cerca de 1h atrás
              </time>
            </div>

            <button onClick={handleDeleteComment} title="Excluir">
              <Trash size={24} />
            </button>
          </header>
          <p>{content}</p>
        </div>

        <footer>
          <button onClick={handleLikeComment}>
            <ThumbsUp />
            Vamos aplaudir <span>{likeCount}</span>
          </button>
        </footer>
      </div>
    </div>
  )
}

/**
 * Closures no React
 *
 * Sempre que for atualizar uma informação e essa informação
 * depende do valor que ela tinha alteriormente, utilizar o padão de função
 */
