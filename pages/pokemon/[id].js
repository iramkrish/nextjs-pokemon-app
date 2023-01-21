import { useRouter } from 'next/router'
import {useState, useEffect} from 'react'
import Head from 'next/head'
import PokemonInfromation from '../../components/PokemonInfromation'

export async function getStaticPaths(){
    let pokemon = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}index.json`).then(data => data.json());
    pokemon = pokemon.slice(0, 100);

    return {
      paths : pokemon.map(path => {
        return {params : {id:path.id.toString()}}
      }),
      fallback : 'blocking',
    }
  }

export async function getStaticProps({params}){
    const pokemon = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}pokemon/${params.id}.json`).then(data => data.json());
    return {
      props: {pokemon},
      revalidate:1000
    }
}

export default function Pokemondata({pokemon}){

    const router = useRouter()

    if (router.isFallback) {
      return <div>Loading data here...</div>
    }
    // const router = useRouter()

    // const [pokemon , setPokemon] = useState(null)
    // useEffect( () => {

    //     async function getPokemon() {
    //     const pokemondata = await fetch(`${process.env.NEXT_PUBLIC_API_END_POINT}pokemon/${router.query.id}.json`).then(data => data.json());
    //     setPokemon(pokemondata)
    //     }

    //     getPokemon()
    // },[router.query.id])

    return (
      <div>
        <Head>
          <title>Pokemon Information - {pokemon.name}</title>
        </Head>
        { pokemon && <PokemonInfromation pokemondata={pokemon}  /> }
      </div>
    )

}
