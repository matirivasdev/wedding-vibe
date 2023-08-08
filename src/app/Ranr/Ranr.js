import React from 'react';
import { Button, Divider, Fab, Typography } from '@mui/material';
import Sound from 'react-sound';

import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from '@mui/lab';
import { Image } from 'common/images';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import PauseIcon from '@mui/icons-material/Pause';

import CHURCH from 'assets/ranr/church2.png';
import CONFETI from 'assets/ranr/confetti.png';
import WHATSAPP from 'assets/ranr/whatsapp.png';
import REGALO from 'assets/ranr/gift-box.png';
import cantHelp from 'assets/ranr/cant-help.mp3';
import dosmilonce from 'assets/ranr/2011.jpeg';
import pedido from 'assets/ranr/pedido.jpeg';
import dosmilveinte from 'assets/ranr/2020.jpeg';
import HOJA from 'assets/ranr/Hoja.png';
import CDERECHA from 'assets/ranr/cizquierda.png';
import eucalipto from 'assets/ranr/eucalipto.png';
import dosmildiecinueve from 'assets/ranr/2019.jpeg';
import elegante from 'assets/ranr/elegante.png';

const Ranr = () => {
  const [mostrarCuentaBancaria, setMostrarCuentaBancaria] = React.useState(false);
  const [playStatus, setPlayStatus] = React.useState(Sound.status.STOPPED);

  const ceremoniaURL = 'https://goo.gl/maps/UnbH85szwp83cNn26';
  const fiestaURL = 'https://goo.gl/maps/mQ55rV3BpS1hn53YA';
  const encodedText = 'Buenas%21+%F0%9F%91%8B%F0%9F%8F%BB+Quer%C3%ADa+confirmarte+mi+asistencia+a+la+boda+de+%2ARUTH+%26+NICO%2A+%F0%9F%91%B0%F0%9F%8F%BB%F0%9F%A4%B5%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%2C+mi+nombre+es';
  const confirmacionURL = `https://wa.me/595981906642?text=${encodedText}`;
  const gonzalezGimenez = 'https://www.gonzalezgimenez.com.py/lista-bodas/ver/1224';

  const handlePlayMusic = () => {
    setPlayStatus(Sound.status.PLAYING);
  }

  const handleStopMusic = () => {
    setPlayStatus(Sound.status.PAUSED);
  }

  return (
    <div className='wrapper'>
      <div className='home-container'>
        <div className='names-container'>
          <Typography
            variant="h1"
            color="secondary"
            className="name"
            gutterBottom
          >
            Ruth Amarilla & Nicolás Rivas
          </Typography>
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
            y queremos celebrarlo contigo
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
              16 Septiembre
            </Typography>
          </div>
          <Divider className='full-line'/>
        </div>
        <div className="item">
          <div className="polaroid">
            <img src={dosmilonce} alt='nico&ruth'/>
            <div className="caption">2011</div>
          </div>
        </div>
        <div className='frases-container'>
          <Typography 
            className='frase'>
            El matrimonio le da un nuevo significado a nuestra historia de amor y once años después, con el corazón lleno de ilusión y felicidad, Dios y la Virgen nos dan la gracia de permanecer juntos en su amor.
          </Typography>
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
                  Parroquia Virgen del Carmen 
                </Typography>
                <Typography
                  variant="subtitle1"
                >
                  A las 15:00 Hs
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
                  Terrazas del Bosque
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
        <div className="item">
          <div className="polaroid">
            <img src={dosmildiecinueve} alt='nico&ruth'/>
            <div className="caption">2019</div>
          </div>
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
            Hemos reservado un espacio para vos, favor confirmanos tu asistencia antes del 8 de septiembre!
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
            <img src={dosmilveinte} alt='nico&ruth'/>
            <div className="caption">2020</div>
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
            onClick={() => window.open(gonzalezGimenez)}
          >
            González Giménez
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
                Banco GNB Paraguay S.A.
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
              >
                CTA. 12017841002
              </Typography>
              <Typography
                color="primary"
                variant="subtitle1"
              >
                NICOLAS RIVAS
              </Typography>

              <Typography
                color="primary"
                variant="subtitle1"
              >
                CI 4703945
              </Typography>
            </div>
          }
        </div>
        <div className="item">
          <div className="polaroid">
            <img src={pedido} alt='nico&ruth'/>
            <div className="caption">2022</div>
          </div>
        </div>
        <div className='frases-container'>
          <Typography
            className="frase"
            variant='subtitle1'
          >
            Tres cosas duraran para siempre: la fé, la esperanza y el amor.
            Pero la mayor de todas es el AMOR.
            1 corintios 18:13
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
          url={cantHelp}
          playStatus={playStatus}
          autoLoad={true}
        />
        <Image
          className='hoja-top'
          source={HOJA}
          height="165px"
        />
        <Image
          className='corona-derecha'
          source={CDERECHA}
          height="400px"
        />
        <Image
          className='hoja-bottom'
          source={eucalipto}
          height="150px"
        />
      </div>
    </div>
  );
};

export default Ranr;