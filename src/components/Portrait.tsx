type PortraitProps = {
  src: string
  alt: string
  className?: string
}

export function Portrait({ src, alt, className = '' }: PortraitProps) {
  return (
    <figure className={`portrait-frame overflow-hidden ${className}`}>
      <img
        src={src}
        alt={alt}
        width={320}
        height={400}
        className="portrait-crop h-full w-full bg-[var(--color-surface)]"
      />
    </figure>
  )
}
