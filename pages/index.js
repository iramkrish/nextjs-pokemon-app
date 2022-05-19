import {useState, useEffect} from 'react'
import PokemonView from '../components/PokemonView'
import styles from '../styles/pokemon-view-homepage.module.css';
import Head from 'next/head'
import Link from 'next/link'

export async function getStaticProps(){
  const pokemon = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}index.json`).then(data => data.json());
  return {
    props : {pokemon}
  }
}


export default function Home({pokemon}){
  // const [pokemon , setPokemon] = useState(null)
  // useEffect( () => {

  //   async function getPokemon() {
  //     const pokemondata = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}index.json`).then(data => data.json());
  //     setPokemon(pokemondata)
  //   }

  //   getPokemon()
  // },[])

  return (

    <div className={styles.gridcontainer}>
      <Head>
        <title>Pokemon List</title>
      </Head>
      { pokemon && pokemon.map(pokemondata => {
        return (
          <Link key={pokemondata.id} href={`/pokemon/${pokemondata.id}`} passHref>
            <PokemonView  pokemon={pokemondata} />
          </Link>
        )
      })
      }
    </div>
  )
}
