import React from 'react'
import photo from '../../assets/foto.png'
import github from '../../assets/github.png'
import tiktok from '../../assets/tiktok.png'
import podcast from '../../assets/podcast.png'
import youtube from '../../assets/yt.png'
import { Card } from '../../components/Card'

export function Home(){

  const link = [
    {
      img: github,
      title:'Github',
      description: 'Link do meu perfil do github. @alexiakattah',
      url: 'https://github.com/alexiakattah'
    },
    {
      img: tiktok,
      title:'TikTok',
      description: 'Link do meu perfil do TikTok. @alexiakattah',
      url: 'https://tiktok.com/alexiakattah'
    },
    {
      img: podcast,
      title:'Podcast',
      description: 'Criei uma playlist no Spotify com os podcasts de tecnologia!',
      url: ''
    },
    {
      img: youtube,
      title:'YouTube',
      description: 'Meu perfil do Youtube para vocês seguirem!',
      url: 'https://www.youtube.com/channel/UCOEbxH89cnNGEXHPwGkUPqA'
    },
  ]
  return (
    <>
    <div className='container d-flex p-4 align-items-center'>
      <img src={photo} alt="" width={'100px'} className='px-2'/>
      <div>
        <h5>Alexia Kattah</h5>
        <p>@alexiakattah</p>
      </div>
    </div>
    <div className='container p-4'>
      {link.map(link=>{
        return (
          <Card links={link}/>
        )
      })}
      
    </div>
    <div className='text-center mt-4'>
      <p>Feito com 💓 por Alexia Kattah</p>
    </div>
    </>
  )
}