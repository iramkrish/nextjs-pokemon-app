import styles from '../styles/pokemon-view-homepage.module.css';
import React from 'react';

export default function PokemonInfromation({pokemondata}){
    const img = `${process.env.NEXT_PUBLIC_API_END_POINT}${pokemondata.image}`

    return (
        <div className={styles.girdCenter}>
            <img className={styles.image} src={img} />
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
