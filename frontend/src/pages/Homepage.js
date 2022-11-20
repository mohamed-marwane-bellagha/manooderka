import React from 'react'
import useFetch from '../hooks/useFetch'
import { Link } from 'react-router-dom'

export default function Homepage() {
  const { loading, error, data } = useFetch('http://localhost:1337/api/videos')

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data.data[0].attributes.title_video)
  data.data.map(video => (console.log(video)))

  return (
    <div>
      {data.data.map(video => (
        <div key={video.id} className="review-card">
          <h2>{video.attributes.title_video}</h2>
          <p>{video.attributes.description_video}</p>
          <small>console list</small>
          <Link to={`/details/${video.id}`}>Read more</Link>
        </div>
      ))}
    </div>
  )
}