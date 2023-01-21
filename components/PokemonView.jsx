import styles from '../styles/pokemon-view-homepage.module.css';
import React from 'react';
import Image from 'next/image'
const PokemonView = React.forwardRef(({ onClick, href, pokemon }, ref) => {
    const img = `${process.env.NEXT_PUBLIC_API_END_POINT}${pokemon.image}`

    return (
        <a className={styles.girdCenter} href={href} onClick={onClick} ref={ref} >
            <h1 className={styles.textcenter}>{pokemon.id}</h1>
            <div>
                <Image className={styles.image} src={img} alt={img} layout="responsive" width="200" height="200"></Image>
            </div>
            <h1 className={styles.textcenter}>{pokemon.name}</h1>
        </a>
    )
})

PokemonView.displayName = 'PokemonView';
export default PokemonView
