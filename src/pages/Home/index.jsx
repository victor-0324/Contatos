import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import photo from '../../assets/foto.png';
import github from '../../assets/github.png';
// import tiktok from '../../assets/tiktok.png';
import email from '../../assets/email.png';
// import youtube from '../../assets/yt.png';
import linkedin from '../../assets/linkedin.png';
import instagram from '../../assets/instagram.png';

import { ReactComponent as Instagram } from '../../assets/instagram.svg';
import { ReactComponent as Github } from '../../assets/github.svg';

// import { ReactComponent as Youtube } from '../../assets/youtube.svg';

import { Card } from '../../components/Card';

export function Home() {
  useEffect(() => {
    AOS.init({
      once: true,
    });
  }, []);
  const link = [
    {
      img: github,
      title: 'Github',
      description: 'Link do meu perfil do github com meus repositorios. @victor-0324',
      url: 'https://github.com/victor-0324',
    },
    // {
    //   img: tiktok,
    //   title: 'TikTok',
    //   description: 'Link do meu perfil do TikTok. @__vitor__lima',
    //   url: 'https://www.tiktok.com/@__vitor__lima',
    // },
    {
      img: email,
      title: 'Email',
      description:
        'Caso tenha interesse em parcerias, fique a vontade para entrar em contato comigo! contato@victorlima.com.br',
      url: 'mailto:vitor.f.l.uzll@gmail.com',
    },
    // {
    //   img: youtube,
    //   title: 'YouTube',
    //   description: 'Meu perfil do Youtube para vocês seguirem!',
    //   url: 'https://www.youtube.com/channel/UCOEbxH89cnNGEXHPwGkUPqA',
    // },
    {
      img: linkedin,
      title: 'Linkedin',
      description: 'Meu perfil do Linkedin para vocês me acompanharem por lá!',
      url: 'https://www.linkedin.com/in/vitor-lima-a951bb1b7/',
    },
    {
      img: instagram,
      title: 'Instagram',
      description: 'Meu perfil do Instagram para vocês da aquela moral',
      url: 'https://www.instagram.com/__vitor__lima/',
    },
  ];
  return (
    <>
      <div className="container p-4 align-items-center text-center ">
        <img src={photo} alt="" width={'100px'} className="px-2" />

        <h5>Vitor Lima</h5>
        <p className="m-0">@__vitor__lima</p>

        <div className="d-flex justify-content-center">
          <a href="http://instagram.com/__vitor__lima" rel="noopener noreferrer">
            <div className="px-2">
              <Instagram width="20px" fill="#ffff" />
            </div>
          </a>
          <a href="http://github.com/victor-0324" rel="noopener noreferrer">
            <div className="px-2">
              <Github width="20px" fill="#ffff" />
            </div>
          </a>
          {/* <a
            href="https://www.youtube.com/channel/UCOEbxH89cnNGEXHPwGkUPqA"
            rel="noopener noreferrer"
          >
            <div className="px-2">
              <Youtube width="20px" fill="#ffff" />
            </div>
          </a> */}
        </div>
      </div>
      {/* <div
        className="video-container container col-12 col-md-5 m-auto"
        data-aos="fade-up"
      >
        <iframe
          src="https://www.youtube.com/embed/9t0zd-7dbUs?controls=0"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
        ></iframe>
      </div> */}
      <div className="container p-4 col-12 row m-auto">
        {link.map((link) => {
          return <Card links={link} />;
        })}
      </div>
      {/* <div
        className="container p-4 "
        data-aos="zoom-in"
        data-aos-duration="2000"
      >
        <Form />
      </div> */}
      <div className="text-center mt-4">
        <p>Feito por Vitor Lima.  &#128526;</p>
      </div>
    </>
  );
}
