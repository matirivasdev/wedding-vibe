import React, { useRef } from 'react';
import { Button, Divider, Fab, Typography } from '@mui/material';
import Sound from 'react-sound';

import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Image } from 'common/images';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import CHURCH from 'assets/mtmr/church2.png';
import CONFETI from 'assets/mtmr/confetti.png';
import WHATSAPP from 'assets/mtmr/whatsapp.png';
import REGALO from 'assets/mtmr/gift-box.png';
import amoSoltantoTe from 'assets/mtmr/amo-soltanto-te.mp3';
import boda from 'assets/mtmr/boda.jpeg';
import rio from 'assets/mtmr/rio.jpeg';
import HOJA from 'assets/mtmr/hoja.png';
import HOJA2 from 'assets/mtmr/hoja2.png';
import ESTRELLA from 'assets/mtmr/estrellas.png';
import foto2 from 'assets/mtmr/foto2.JPG';
import elegante from 'assets/mtmr/elegante.png';


const Mtmr = () => {
  const [mostrarCuentaBancaria, setMostrarCuentaBancaria] = React.useState(false);
  const [playStatus, setPlayStatus] = React.useState(Sound.status.STOPPED);

  const ceremoniaURL = 'https://maps.app.goo.gl/YKGuje4Gr4awAJVj7';
  const fiestaURL = 'https://maps.app.goo.gl/G8rF3bTBksWJ7HE47';
  const encodedText = 'Buenas%21+%F0%9F%91%8B%F0%9F%8F%BB+Quer%C3%ADa+confirmarte+mi+asistencia+a+la+boda+de+%2AMARCIA+%26+MATI%2A+%F0%9F%91%B0%F0%9F%8F%BB%F0%9F%A4%B5%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%2C+mi+nombre+es';
  const confirmacionURL = `https://wa.me/595981906642?text=${encodedText}`;
  const pilar = 'https://www.pilar.com.py/pilar_listas/lista-de-boda-marcia-beatriz-traverzzi-godoy/';
  const olier = 'https://www.olier.com.py/lista-bodas/ver/256';
  const componentRef = useRef();


  const handlePlayMusic = () => {
    setPlayStatus(Sound.status.PLAYING);
  }

  const handleStopMusic = () => {
    setPlayStatus(Sound.status.PAUSED);
  }

  return (
    <>
      <div ref={componentRef} className='wrapper'>
        <div className='home-container'>
          <div className='marcia-mati-container'>
            <div className='names-container'>
              <Typography
                variant="h1"
                color="secondary"
                className="name"
                gutterBottom
              >
                Marcia Traverzzi & Matias Rivas
              </Typography>
            </div>
          </div>
          <div className='header-container'>
            <Typography 
              color="primary"
              variant="h4"
              className='frase3'>
              ¡ Nos Casamos !
            </Typography>
            <Typography 
              color="primary"
              variant="h6">
              Con la bendición de Dios y el amor de nuestros padres, nos preparamos para el día más importante de nuestras vidas. Sería un honor contar con su presencia en nuestra boda.
            </Typography>
          </div>
          <div className='dates-container'>
            <div className='dia'>
              <Divider className='line'/>
              <Typography
                color="primary"
                variant="h4"
                className='frase3'
              >
                  Sábado
              </Typography>
              <Divider className='line'/>
            </div>
            <div className='fecha'>
              <Typography
                color="primary"
                variant="h4"
              >
                9 de Diciembre
              </Typography>
            </div>
            <Divider className='full-line'/>
          </div>
          <div className="item">
            <div className="polaroid">
              <img src={foto2} alt='mati&marcia'/>
              <div className="caption"></div>
            </div>
          </div>
          <div className='timeline-container'>
          <Timeline position='alternate'>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <Image 
                    source={CHURCH}
                    height="96px"
                  />
                  <Typography
                    color="secondary"
                    variant="h5"
                  >
                    Ceremonia
                  </Typography>
                  <Typography
                    color="primary"
                    variant="h4"
                  >
                    Vicaria Castrense 
                  </Typography>
                  <Typography
                    variant="subtitle1"
                  >
                    A las 17:00 Hs
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => window.open(ceremoniaURL)}  
                  >
                    Ver Ubicación
                  </Button>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineSeparator>
                <TimelineDot />
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent>
                  <Image 
                    source={CONFETI}
                    height="96px"
                  />
                  <Typography
                    color="secondary"
                    variant="h5"
                  >
                    Recepción
                  </Typography>
                  <Typography
                    color="primary"
                    variant="h4"
                  >
                    Club Internacional de Tenis (CIT)
                  </Typography>
                  <Typography
                    variant="subtitle1"
                  >
                    Al termino de la ceremonia
                  </Typography>
                  <Button
                    variant="outlined"
                    onClick={() => window.open(fiestaURL)}  
                  >
                    Ver Ubicación
                  </Button>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
          </div>
          <div className='frases-container'>
            <Image 
              source={elegante}
              height="120px"
            />
            <Typography
              color="secondary"
              variant="h4"
            >
              Tenida
            </Typography>
            <Typography 
              color="primary"
              variant="h5"
              sx={{ textAlign: 'center', marginBottom: '1rem' }}
            >
              Elegante
            </Typography>
          </div>
          <div className='frases-container'>
            <Image 
              source={WHATSAPP}
              height="96px"
            />
            <Typography
              color="secondary"
              variant="h4"
            >
              RSVP
            </Typography>
            <Typography 
              color="primary"
              variant="h5"
              sx={{ textAlign: 'center', marginBottom: '1rem' }}
            >
              Hemos reservado un espacio para vos, favor confirmanos tu asistencia antes del 1 de diciembre!
            </Typography>
            <Button
              variant="contained"
              onClick={() => window.open(confirmacionURL)}
            >
              Confirmar Asistencia
            </Button>
          </div>
          <div className="item">
            <div className="polaroid">
              <img src={rio} alt='mati&marcia'/>
              <div className="caption"></div>
            </div>
          </div>
          <div className='frases-container'>
            <Image 
              source={REGALO}
              height="96px"
            />
            <Typography
              color="secondary"
              variant="h4"
            >
              Lista de Bodas
            </Typography>
            <Typography 
              color="primary"
              variant="h5"
              sx={{ textAlign: 'center', marginBottom: '1rem' }}>
              Algunos nos han preguntado sobre nuestros deseos de regalos, y aunque su presencia es lo más valioso para nosotros, si desean obsequiarnos algo, lo apreciaríamos mucho. 
            </Typography>
            <Button
              variant="contained"
              onClick={() => window.open(olier)}
            >
              OLIER
            </Button>
            <Button
              variant="contained"
              onClick={() => window.open(pilar)}
            >
              PILAR
            </Button>
            <Button
              variant="contained"
              onClick={() => setMostrarCuentaBancaria(!mostrarCuentaBancaria)}
            >
              Cuenta Bancaria 
            </Button>
            {mostrarCuentaBancaria &&
              <div className='center'>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  Banco Itau S.A.
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  CTA. 820007697
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  MATIAS RIVAS O MARCIA TRAVERZZI
                </Typography>

                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  CI 4716567
                </Typography>
              </div>
            }
                        {mostrarCuentaBancaria &&
              <div className='center'>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  Banco Itau S.A.
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  CTA. USD. 810000185
                </Typography>
                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  MATIAS RIVAS
                </Typography>

                <Typography
                  color="primary"
                  variant="subtitle1"
                >
                  CI 4716567
                </Typography>
              </div>
            }
          </div>
          <div className="item">
            <div className="polaroid">
              <img src={boda} alt='mati&marcia'/>
              <div className="caption"></div>
            </div>
          </div>
          <div className='frases-container'>
            <Typography
              className="frase"
              variant='subtitle1'
            >
              “No hay nada mejor que el amor, nada más grande que el amor, nada más hermoso que el amor” - PJK
            </Typography>
          </div>
          {playStatus === Sound.status.PLAYING &&
          <Fab color="primary" aria-label="add" onClick={handleStopMusic} sx={{ position: "absolute", bottom: 16, right: 16 }}>
            <PauseIcon />
          </Fab>}
          {(playStatus === Sound.status.PAUSED || 
            playStatus === Sound.status.STOPPED ) &&
            <Fab color="primary" aria-label="add" onClick={handlePlayMusic}
              sx={{ position: "absolute", bottom: 16, right: 16 }}
            >
              <PlayArrowIcon />
            </Fab>}
          <Sound
            url={amoSoltantoTe}
            playStatus={playStatus}
            autoLoad={true}
          />
          <Image
            className='hoja-top'
            source={HOJA}
            height="165px"
          />
          <Image
            className='estrella'
            source={ESTRELLA}
            height="400px"
          />
          <Image
            className='hoja-bottom'
            source={HOJA2}
            height="150px"
          />
        </div>
      </div>
    </>
  );
};

export default Mtmr;