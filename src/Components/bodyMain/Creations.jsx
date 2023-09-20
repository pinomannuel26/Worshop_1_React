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

  const images_our_creations_desktop = [
    [earth_desktop,earth_mobile,'OUR CREATIONS'],
    [maquina_desktop,maquina_mobile,'DEEP EARTH'],
    [soccer_desktop,soccer_mobile,'NIGHT ARCADE'],
    [grid_desktop,grid_mobile,'SOCCER TEAM VR'],
    [above_desktop,above_mobile,'THE GRID'],
    [pocket_desktop,pocket_mobile,'FROM UP ABOVE VR'],
    [curiosity_desktop,curiosity_mobile,'POCKET BOREALIS'],
    [fisheye_desktop,fisheye_mobile,'THE CURIOSITY'],
]

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
        {images_our_creations_desktop.map((imagen,index)=>{
          return (
                    <div key={index} className ='creations__images_item'>
                    <img className='desktop-image' value={imagen[0]} src={imagen[0]} />
                    <img className='mobile-image' value={imagen[1]} src={imagen[1]} />
                    <p>{imagen[2]}</p>
                    </div>)
                })
        }
        </div>  
        <button className='creations__cont-boton'>SEE ALL </button>
    </div>
  )
}

export default Creations