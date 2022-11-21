import React from 'react'
import { useParams } from 'react-router-dom'
import ReactPlayer from 'react-player'
import useFetch from '../hooks/useFetch'


export default function ReviewDetails() {
  const { id } = useParams()
  const { loading, error, data } = useFetch('http://localhost:1337/api/videos/' + id)

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error :(</p>

  console.log(data.data.attributes)

  return (
    <div>
        <h2>{data.data.attributes.title_video}</h2>
        <p>{data.data.attributes.description_video}</p>
       <ReactPlayer url={data.data.attributes.url_video}></ReactPlayer>
        review details
    </div>
  )
}