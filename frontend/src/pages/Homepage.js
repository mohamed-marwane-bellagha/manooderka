import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/videos?populate=*')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>
  console.log(data.data[0].attributes.image.data.attributes.url)

  return (
    <div>
      {data.data.map(video => (
        
        <div key={video.id} className="review-card">
          <h2>{video.attributes.title_video}</h2>
          <p>{video.attributes.description_video}</p>
          <img src={'http://localhost:1337'+video.attributes.image.data.attributes.url}></img>
          <small>console list</small>
          <Link to={`/details/${video.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}