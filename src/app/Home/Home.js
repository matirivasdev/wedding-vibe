import React from 'react';

import { Image } from 'common/images';

import VIBE from 'assets/vibe.png';


const Home = () => {

  return (
    <div className='home-container'>
      <Image 
        source={VIBE}
        width='200px'
      />
    </div>
  );
};

export default Home;