
import {useState} from 'react'
import { useSuperHeroesData } from '../hooks/useSuperHeroesData'

export const NewSuperHeroesPage = () => {

    const [interval, setInterval] = useState(3000)
    
    const {
        isLoading, 
        data, 
        isError, 
        error, 
        isFetching, 
        refetch} = useSuperHeroesData(onSuccess, onError)
    

    function onSuccess(data) {
        setInterval(0)
        //console.log("data fetched successfully", data)
    }

    function onError(error) {
        console.log("encountered error while fetching data", error)
        setInterval(0)
    }
    
    if (isLoading || isFetching) {
        return <h2>Loading...</h2>
    }

    if(isError) {
        return <h2>{error.message}</h2>
    }
    // axios.get('http://localhost:4000/superheroes')

    //console.log(isLoading, isFetching)

    //console.log(data)
    return (
        <>
            <h2>New Super Heroes</h2>
            <button className='btn-refetch' onClick={refetch}>Fetch Heroes</button>
            {
                // data?.data.map(hero => {
                //     return <div key={hero.id}>{hero.name}</div>
                // })
                data.map(hero => {
                    return <div key={hero}>{hero}</div>
                })
            }
        </>
    )

    
    
}

