import { CSSProperties, FC, useMemo } from 'react'
import { Mods, classNames } from 'shared/lib/classNames/classNames'
import './Image.scss'
import { BACKEND_API } from 'shared/const/api'

interface Props {
    src?: string
    alt?: string
    size?: number
    className?: string
}

export const Image = (props: Props) => {
    const { alt, src, size, className } = props

    const mods = useMemo<Mods>(() => ({}), [])
    const styles = useMemo<CSSProperties>(() => ({ width: size, height: size }), [])

    return (
        <img
            src={`${BACKEND_API}${src}`}
            style={styles}
            className={classNames('Image', [className], mods)}
            alt={alt}
        />
    )
}
