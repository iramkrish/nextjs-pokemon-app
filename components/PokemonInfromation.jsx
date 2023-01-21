import styles from '../styles/pokemon-view-homepage.module.css';
import React from 'react';
import Image from 'next/image'

export default function PokemonInfromation({pokemondata}){
    const img = `${process.env.NEXT_PUBLIC_API_END_POINT}${pokemondata.image}`

    return (
        <div className={styles.girdCenter}>
            <Image className={styles.image} src={img} alt={img} layout="intrinsic" width="200px" height="300px"  />
            <h1 className={styles.textcenter}>{pokemondata.name}</h1>
            <p><b>TYPE </b>:
            {
                pokemondata.type.map( type =>
                    <span className={styles.paddinglr5} key={type}>{type}</span>
                )
            }
            </p>
            <p><b>STATS</b></p>
            {
                pokemondata.stats.map( stats =>
                    <span key={stats.name}>{stats.name} : {stats.value}</span>
                )
            }
        </div>
    )

}
