import React from "react";
import SecondNav from './SecondNav';
import { useNavigate } from 'react-router-dom';
import './TheGoldenRoute.css';
import './MaliEmp.css';
import GRoute from "../public/images/GRoute.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
export default function TheGoldenRoute() {
     const navigate = useNavigate();
const goHome = () => {
    navigate('/');
}
  const gotoFestivalDrumbeatPage = () => {
    navigate('/FestivalDrumbeat');
}

//  const gotoTheGoldenRoute = () => {
//     navigate('/TheGoldenRoute');
// } 

const gotoRoyalFest = () => {
    navigate('/RoyalCourt');
} 

const gotoDressLikeRoyalty = () => {
    navigate('/DressLikeRoyalty');
}

const gotoSecureYourSpot = () => {
    navigate('/SecureYourSpot');
}
    return (
        <body className="FirstMaliSSsub3-Sub2">
              <SecondNav />

                <nav className='flex gap-[80px]  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[20px] font-bold relative left-8' onClick={goHome}>The Musa Project
                </h1>
                 <div className='flex gap-5 text-nowrap relative top-[10px] left-[35%] '>
                   
                    <div className='flex gap-2 relative left-[-2px] w-[62%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>

                    <div className='flex gap-4 relative left-[-3px] w-[50%]' onClick={gotoRoyalFest}>
                        📜
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Court</li>
                    </div>

                   

                    <div className='flex gap-2 relative left-[-3px] w-[63%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-3px] w-[63%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>


             <div className='FirstMaliSSsub3-Sub2-Content1 ghROute'>
            {/* <h3 className='text-[#ff5900] text-[50px] font-bold text-center' style={{color:"black"}}>Golden Route</h3>
            <p className='Firtsparolunderthecontent1 firstsegofheadd FirstofRouteGOdle'>
            "The heartbeat of West Africa echoes through time"
            </p> */}
           
        </div> 
            <div className="bg-amber-100 p-[60px] py-[80px] FirstofRouteGOdleSub1">
            <div className="text-center font-bold text-[20px]">
                <h3>Time and Location</h3>
            </div>
             <section className="section trade-routes relative left-[10%] ">
          
            <div className="routes-content">
          <div className="left">
            <h3 className="subheading text-[40px]">Caution</h3>
            <p className="my-[20px] w-[50%]"  style={{fontFamily:"Crimson Text"}}>
            Festival gates close strictly at 7pm daily. Please arrive early to fully enjoy the experience. Traditional performances and guided tours follow a fixed schedule and may not be repeated.
            </p>
            
          </div>

            <div className="relative left-[-30%] bg-[#fdd579ae] w-[50%] rounded-[10px] FirstofRouteGOdleSub1-sub1 "  >
          <div className="p-[20px] FirstofRouteGOdleSub1-sub1-butt" >
            <h3 className="font-bold">2025</h3>
            
            <div className="p-[20px]">
              <div >

              <li className="m-[10px]">10am to 2pm </li>
              <div className="flex gap-2 m-[10px]">
                <div>📅</div>
                <p>August 29 - October 21</p>
              </div>
              </div>
            </div>
          </div>

            </div>

        </div>
            </section>
            </div>

     <div className="text-center p-[20px] bg-[#d4a53753] py-[80px]">
      <div>
        <h3 className="text-[40px] font-bold">Guided Tour</h3>
        <div className="m-[20px] max-w-[60%] relative left-[18%]" style={{lineHeight:'40px'}}>
          <p>Our guided tours are curated by local historians, performers, and griots — storytellers of West African oral tradition. Each tour lasts 30–45 minutes and moves through key exhibition areas:

The Rise of Sundiata

Timbuktu Market Life & Trade Routes

Sudano-Sahelian Architecture

The Royal Court Experience


📝 Tour Regulations

Tours start on the hour from 11am to 5pm

Arrive at least 15 minutes early to check in

Late arrivals may forfeit their tour slot

Children under 12 must be accompanied by an adult

No flash photography or disruptive behavior

Tours are in English and French; local dialect sessions may be announced</p>
        </div>
        <div className="flex justify-center gap-[20px]">
          <div>
            <button>Join the Caravan </button>
          </div>
          <div>
            <button>Send a Request</button>
          </div>
        </div>
      </div>
     </div>
      <div className="p-10"> 
        <div className="text-center">
          <h3>Local Accomodation</h3>
        </div>
        <div>
          {/* <div><img src="" alt="" /></div> */}
          <div>
            <div>
              <div></div>
              <div>
                <p></p>
              </div>
            </div>
            <div></div>
          </div>
        </div>
      </div>
      {/* <div className="text-center bg-[#6a2f05] p-[20px] py-[50px]">
        <h3 className="font-bold text-[30px] text-[#E6C157] my-[30px]">Chart your course</h3>
        <p  style={{fontFamily:"Crimson Text", color:"yellow", fontSize:"20px" }} className="mb-[20px]">Embark on your own golden route through the wonders of Mali Empire</p>
        <div className="bg-amber-400 p-[20px] inline-block">
          <h3 className="font-bold text-[20px]">Plan Your Journey</h3>
        </div>
      </div> */}



             <footer className='relative left-[-18px] w-[110%] '>
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'  >The Musa Project</h3>
                    <div className='w-[80%]'>

                    <p className='m-[10px] ' style={{fontFamily:"Crimson Text"}}>The Musa Project is more than a festival  it’s a living tribute to the legacy of the Mali Empire and the golden age of West Africa. Through storytelling, traditional music, fashion, food, and architecture, we bring history to life and reconnect communities with the greatness that once defined an empire. From the epic of Sundiata to the rhythm of the drums and the spices of the royal feast, every detail is crafted to honor our roots and inspire a new generation. Join the journey. Remember the empire. Celebrate the spirit.</p>
                    </div>
                </div>
                          <div className='grid grid-cols-2 m-[20px]'>
                            <div>
                            <h3 className='text-[40px] font-bold m-[20px]'>Location</h3>
                            <p className='w-[50%] m-[20px]'>Centre Culturel Kôrè de Ségou
Rue 12, Quartier Sido Sonikoura
BP 62, Ségou, Mali</p>

                            </div>
                            <div>
                                <h3 className='font-bold text-[40px]'>Let's Connect</h3>
                                <div className='m-[20px]'>
                                   <p className='m-[10px] font-bold'> <span className='mx-[10px]'>📞</span>  +234 906 144 6848</p>
                                   <p className='m-[10px] font-bold'> <span className='mx-[10px]'>✉️ </span> mathiasonyebuchi13@gmail.com</p>
                                </div>
                            </div>
                          </div>
          </footer>
        </body>
    );
}