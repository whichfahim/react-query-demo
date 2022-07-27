import { useState, useEffect } from 'react'
import axios from 'axios'

export const SuperHeroesPage = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [superHeroesData, setSuperHeroesData] = useState([])
  const [error, setError] = useState('')

  useEffect(() => {
    
    // fetch('http://localhost:4000/superheroes')
    //     .then(response => response.json())
    //     .then(data => setData(response.data))
    // fetch('http://localhost:4000/superheroes')
    //     .then(res => res.json())
    //     .then(data => {
    //         setSuperHeroesData(data)
    //         setIsLoading(false)
    //     })
    axios.get('http://localhost:4000/superheroes')
        .then(res => {
            setSuperHeroesData(res.data)
            setIsLoading(false)
        })
        .catch(error => {
        setError(error.message)
        setIsLoading(false)
      })
  }, [])

  console.log(superHeroesData)

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  if (error) {
    return <h2>{error}</h2>
  }

  return (
    <>
      <h2>Super Heroes Page</h2>
      {/* <div>{superHeroesData.name}</div> */}
      {superHeroesData.map(hero => {
        return <div key={hero.name}>{hero.name}</div>
      })}
    </>
  )
}