import {useQuery} from '@tanstack/react-query'
import axios from 'axios'

function fetchSuperHeroes(){
    return axios.get('http://localhost:4000/superheroes')
}

export const RQSuperHeroesPage = () => {
    const {isLoading, data, isError, error, isFetching} = 
    useQuery(['super-heroes'], fetchSuperHeroes,
    {
        staleTime: 30000
    })
    
    // axios.get('http://localhost:4000/superheroes')

    console.log(isLoading, isFetching)

    if (isLoading) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }

    //console.log(data)
    return (
        <>
            <h2>RQ Super Heroes</h2>
            {
                data?.data.map(hero => {
                    return <div key={hero.id}>{hero.name}</div>
                })
            }
        </>
    )
    
}

