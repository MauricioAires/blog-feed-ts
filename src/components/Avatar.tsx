import S from './Avatar.module.css'

interface AvatarProps {
  hasBorder?: boolean
  src: string
  alt?: string
}

export function Avatar({ hasBorder = true, src, alt }: AvatarProps) {
  return (
    <img
      className={hasBorder ? S.avatarWithBorder : S.avatar}
      src={src}
      alt={alt}
    />
  )
}
