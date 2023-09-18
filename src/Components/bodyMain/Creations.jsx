import React from 'react'
import '../../sass/bodyMain/creations.scss'
import earth_desktop from '../../assets/images/desktop/image-deep-earth.jpg'
import earth_mobile from '../../assets/images/mobile/image-deep-earth.jpg'
import maquina_desktop from '../../assets/images/desktop/image-night-arcade.jpg'
import maquina_mobile from '../../assets/images/mobile/image-night-arcade.jpg'
import soccer_desktop from '../../assets/images/desktop/image-soccer-team.jpg'
import soccer_mobile from '../../assets/images/mobile/image-soccer-team.jpg'
import grid_desktop from '../../assets/images/desktop/image-grid.jpg'
import grid_mobile from '../../assets/images/mobile/image-grid.jpg'
import above_desktop from '../../assets/images/desktop/image-from-above.jpg'
import above_mobile from '../../assets/images/mobile/image-from-above.jpg'
import pocket_desktop from '../../assets/images/desktop/image-pocket-borealis.jpg'
import pocket_mobile from '../../assets/images/mobile/image-pocket-borealis.jpg'
import curiosity_desktop from '../../assets/images/desktop/image-curiosity.jpg'
import curiosity_mobile from '../../assets/images/mobile/image-curiosity.jpg'
import fisheye_desktop from '../../assets/images/desktop/image-fisheye.jpg'
import fisheye_mobile from '../../assets/images/mobile/image-fisheye.jpg'



function Creations() {
  return (
    <div className='creations__cont'>
        <div className='creations__title'>
            <div className='creations__title_title'>
                <h1>OUR CREATIONS</h1>
            </div>
            <div className='creations_title_button'>
                <button>SEE ALL </button>
            </div>
        </div>
        <div className='creations__images'>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={earth_desktop} />
              <img className='mobile-image' src={earth_mobile} />
              <p>DEEP EARTH</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={maquina_desktop} />
              <img className='mobile-image' src={maquina_mobile} />
              <p>NIGH ARCADE</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={soccer_desktop} />
              <img className='mobile-image' src={soccer_mobile} />
              <p>SOCCER TEAM VR</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={grid_desktop} />
              <img className='mobile-image' src={grid_mobile} />
              <p>THE GRID</p>
            </div>
            <div className ='creations__images_item' >
              <img className='desktop-image' src={above_desktop} />
              <img className='mobile-image' src={above_mobile} />
              <p>FROM UP ABOVE VR</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={pocket_desktop} />
              <img className='mobile-image' src={pocket_mobile} />
              <p>POCKET BOREALIS</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={curiosity_desktop} />
              <img className='mobile-image' src={curiosity_mobile} />
              <p>THE CURIOSITY</p>
            </div>
            <div className ='creations__images_item'>
              <img className='desktop-image' src={fisheye_desktop} />
              <img className='mobile-image' src={fisheye_mobile} />
              <p>MAKE IT FISHEYE</p>
            </div>
        </div>  
    </div>
  )
}

export default Creations