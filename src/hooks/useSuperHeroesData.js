import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

// Create a brand new component which uses our custom
// useSuperHeroesData hook
// Ensure data is fetched when the component mounts on
// RQSuperHeroes page 
// In the new page data is fetched when you press a button

function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

export const useSuperHeroesData = (onSuccess, onError) => {
    return useQuery(['super-heroes'], fetchSuperHeroes,
    {
        onSuccess: onSuccess,
        onError: onError,
        select: data => {
            const superHeroNames = data.data.map( hero => hero.name)
            return superHeroNames
            //console.log(superHeroNames)
            //console.log(data)
        }
    })
}