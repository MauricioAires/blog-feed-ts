import React, { ChangeEvent, FormEvent, useState } from 'react'
import { format, formatDistanceToNow } from 'date-fns'
import ptBr from 'date-fns/locale/pt-BR'

import { Avatar } from './Avatar'
import { Comment } from './Comment'

import S from './Post.module.css'

type Author = {
  name: string
  role: string
  avatarUrl: string
}

type Content = {
  type: 'paragraph' | 'link'
  content: string
}
interface PostProps {
  author: Author
  publishedAt: Date
  content: Content[]
}

export function Post({ author, publishedAt, content }: PostProps) {
  const [newCommentText, setNewCommentText] = useState('')
  const [comments, setComments] = useState(['Muito bom Di, parabéns!! 👏👏'])
  const isNewCommentEmpty = !newCommentText
  const publishedDataRelativeToNow = formatDistanceToNow(publishedAt, {
    locale: ptBr,
    addSuffix: true
  })

  const publishedDateFormatted = format(
    publishedAt,
    "d 'de' LLLL 'às' HH:mm'h'",
    {
      locale: ptBr
    }
  )

  function handleCreateNewComment(event: FormEvent) {
    event.preventDefault()

    if (newCommentText === '') {
      return
    }

    setComments([...comments, newCommentText])

    setNewCommentText('')
  }

  function handleNewCommentChange(event: ChangeEvent<HTMLTextAreaElement>) {
    setNewCommentText(event.target.value)
  }

  function deleteComment(commentToDelete: string) {
    /**
     * @description Imutabilidade -> As variáveis não sofrem mutação, nós criamos
     * um novo valor ( um novo espaço na memória)
     */
    const commentWithoutDeletedOne = comments.filter(
      (c) => c !== commentToDelete
    )

    setComments(commentWithoutDeletedOne)
  }

  return (
    <article className={S.post}>
      <header>
        <div className={S.author}>
          <Avatar src={author.avatarUrl} />
          <div className={S.authorInfo}>
            <strong>{author.name}</strong>
            <span>{author.role}</span>
          </div>
        </div>

        <time
          title={publishedDateFormatted}
          dateTime={publishedAt.toISOString()}
        >
          {publishedDataRelativeToNow}
        </time>
      </header>

      <div className={S.content}>
        {content.map((line) => {
          if (line.type === 'paragraph') {
            return <p key={line.content}>{line.content}</p>
          }

          if (line.type === 'link') {
            return (
              <p key={line.content}>
                <a href="#"> {line.content}</a>
              </p>
            )
          }
        })}
      </div>

      <form onSubmit={handleCreateNewComment} className={S.commentForm}>
        <strong> Deixe seu feedback</strong>
        <textarea
          onChange={(e) => handleNewCommentChange(e)}
          value={newCommentText}
          name="comment"
          placeholder="Deixe um comentário"
        />

        <footer>
          <button disabled={isNewCommentEmpty} type="submit">
            Publicar
          </button>
        </footer>
      </form>

      <div className={S.commentList}>
        {comments.map((comment) => (
          <Comment
            key={comment}
            content={comment}
            onDeleteComment={deleteComment}
          />
        ))}
      </div>
    </article>
  )
}

/**
 * Programação imperativa
 *
 * 'O que deve ser feito'
 *
 * Ex: Receita de bolo
 *
 * 1. Ligar o forno a 180°;
 * 2. Abrir a porta do forno;
 * 3. Colocar a massa numa forma;
 * 4. Colocar a forma com a massa dentro do forno;
 */

/**
 * Programação declarativa
 *
 * 'Quais as condições para eu ter o resultado final'
 *
 * Ex: Receita de bolo
 *
 * 1. Forno precisa estar a 180°;
 * 2. Quando o forno estiver quente, eu posso colocar a massa para assar;
 * 3. Quando a massa estiver pronta, eu posso retira-lá do forno;
 *
 */

/**
 * Key no React
 *
 * Por que única
 *
 * 1. Quando o estado altera;
 * 2. Qunaod a propriedade altera;
 * 3. Quando um componente pai renderiza novamente;
 * ---
 * Porque não posso usar o índice do array?
 *
 * const posts = [1,2,3,4,5]
 * const posts = [1,2,5,4,3]
 */
