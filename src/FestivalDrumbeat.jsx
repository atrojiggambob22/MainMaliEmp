import React from 'react';
import SecondNav from './SecondNav';
import './MaliEmp.css';
import FadeInSection from "./FadeInSection";
import BounceIn from './BounceIn';
import { useNavigate } from 'react-router-dom';
import "./FestivalDrum.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
export default function FestivalDrumbeat() {

     const navigate = useNavigate();
 const goHome = () => {
    navigate('/');
}
//   const gotoFestivalDrumbeatPage = () => {
//     navigate('/FestivalDrumbeat');
// }

 const gotoTheGoldenRoute = () => {
    navigate('/TheGoldenRoute');
} 

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
        <body className='FirstMaliSSsub3-Sub2'>
        <SecondNav />


         <nav className='flex gap-[80px]  text-nowrap w-full py-[10px] px-[14px] cursor-pointer  '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8' onClick={goHome}>
                   The Musa Project
                </h1>
                <div className='flex gap-5 text-nowrap relative top-[10px] left-[30%] '>
                   
                    

                    <div className='flex gap-4 relative left-[-3px] w-[50%]' onClick={gotoRoyalFest}>
                        📜
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Court</li>
                    </div>

                    <div className='flex gap-4 relative left-[-4px] w-[60%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-2 relative left-[-3px] w-[60%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-3px] w-[60%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>


        <div className='FirstMaliSSsub3-Sub2-Content1 FDrum1'>
            <FadeInSection duration={0.8} direction='top'>

            <h3 className='text-[#E6C157] text-[50px] font-bold text-center'>Festival Drumbeat</h3>
            </FadeInSection>
             <FadeInSection duration={0.8} direction='bottom'>

            <p className='Firtsparolunderthecontent1 firstsegofheadd'>
            "The heartbeat of West Africa echoes through time"
            </p>
             </FadeInSection>

           
        </div>

        <div className=' text-center '>

        <div className='bg-[#fce09dae] p-30  Perfomanceoftheroayal'>
            <div className=' p-[10px] px-[80px]  my-[10px] relative top-[-30px] Perfomanceoftheroayalmin'>
                 <FadeInSection duration={0.8} direction='top'>

            <h3 className='text-[20px] font-bold '>ROYAL PERFOMANCES</h3>
                 </FadeInSection>

            </div>

            <div className='grid grid-cols-3 FDrum1-subseb1 overflow-hidden'>
             <FadeInSection duration={0.4} direction='left'>

            <div className='bg-[#ffe3a3fb] hover:bg-[#f8d37cfb] p-[20px] py-[80px] rounded-[10px] mx-[10px] FDrum1-subseb1-2'>
                <div className='p-[20px] rounded-[50%] bg-yellow-800 inline-block '>
                🥁

                </div>
                 <FadeInSection duration={0.6} direction='bottom'>
            <h3 className='mb-[10px] font-bold text-[20px]'>TRADITIONAL DRUMMING</h3>

                 </FadeInSection>
             <FadeInSection duration={0.8} direction='left'>

            <p className='w-[70%] relative left-[50px]'>Experience the powerful rhythms of djembe, dundun, and talking drums that once guided caravans across the sahara</p>
            
             </FadeInSection>

            </div>
             </FadeInSection>

            <FadeInSection duration={0.6} direction='top'>

            <div  className='bg-[#ffe3a3fb] hover:bg-[#f8d37cfb] p-[20px]  py-[80px] rounded-[10px] mx-[10px] transition duration-600 ease-in-out FDrum1-subseb1-2'>
                <div className='p-[20px] rounded-[50%] bg-red-800 inline-block '>

                💃
                </div>
            

            <h3 className='mb-[10px] font-bold text-[20px]'>ROYAL COURT DANCES</h3>
            <p className='w-[70%] relative left-[50px]'>Witness the elegant movements that once graced the place  of Mansa Musa, perfomed by master dancers</p>
            
            </div>
            </FadeInSection>

            <FadeInSection duration={0.8} direction='bottom'>
                
            <div  className='bg-[#ffe3a3fb]  hover:bg-[#f8d37cfb] p-[20px] py-[80px] rounded-[10px] mx-[10px] FDrum1-subseb1-2'>
                <div className='p-[20px] rounded-[50%] bg-gray-800 inline-block '>
            🎵

                </div>
            <h3 className='mb-[10px] font-bold text-[20px]'>GRIOT STORYTELLING</h3>
            <p className='w-[70%] relative left-[50px]'>Listen to ancient tales and geneologies passed down through generations by West Africa's master storytellers.</p>
            
            </div>
            </FadeInSection>
            
            </div>
        </div>

        <div className='bg-[#fdd579ae] py-[80px] secondphaseofthedrum'>

                <FadeInSection duration={0.4} direction='left'>

                <div className='babafirstsegofheadd chillperrom' >
                <h3 className='text-[20px] font-bold firstsegofheadd'>PERFORMANCE SCHEDULE</h3></div>
                </FadeInSection>
            
            <div className='relative left-[30%] FDrum1-subseb1-3-cheife'>

            <FadeInSection duration={0.4} direction='top'>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px] FDrum1-subseb1-3'>

            <div className='text-left px-[10px] FDrum1-subseb1-3-1'>
                <h3 className='text-red-800 font-bold '>OPENING CEREMONY</h3>
                <p>Traditional  and royal procession</p>
            
            </div>

            <p>
            10:00 AM
            </p>

            </div>
            </FadeInSection>

            <FadeInSection duration={0.4} direction='right'>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px] FDrum1-subseb1-3'>

            <div  className='text-left FDrum1-subseb1-3-1'>
            <h3 className='text-red-800 font-bold '>MASTER DRUMMERS CIRCLE</h3>
            <p>Interacuve arumming experience</p>
            
            </div>

             <p>
            12:00 PM
            </p>

            </div>
            </FadeInSection>

            <FadeInSection duration={0.4} direction='bottom'>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px] FDrum1-subseb1-3'>

            <div  className='text-left FDrum1-subseb1-3-1'>
                <h3 className='text-red-800 font-bold '>ROYAL COURT PERFORMANCE</h3>
                <p>Grand finale with full esemble</p>
            
            </div>

             <p>
            4:00 AM
            </p>

            </div>
            </FadeInSection>
            
             </div>

        </div>


        <div className='p-[40px] bg-[#6a2f05] closetothefootofDruZ '>
        <div>
        <h3 className='text-[30px] font-bold my-[30px]'>Join The Celebration</h3></div>
        <p  className='text-[#fdd579ae] text-center'  style={{color:"black"}}>Don't miss the chance to be part of this extraordinary  cultural <br />
experience</p>

                <div className='my-[40px] bg-yellow-400 inline-block px-[40px] py-[10px]'>
                <h3>Reserve Your Experience</h3>
                </div>
        </div>
        
        </div>

        <footer className='relative left-[-18px] w-[110%] '>
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'  >The Musa Project</h3>
                    <div className='w-[80%]'>

                    <p className='m-[10px]  text-[30px]' style={{fontFamily:"Crimson Text"}}>The Musa Project is more than a festival  it’s a living tribute to the legacy of the Mali Empire and the golden age of West Africa. Through storytelling, traditional music, fashion, food, and architecture, we bring history to life and reconnect communities with the greatness that once defined an empire. From the epic of Sundiata to the rhythm of the drums and the spices of the royal feast, every detail is crafted to honor our roots and inspire a new generation. Join the journey. Remember the empire. Celebrate the spirit.</p>
                    </div>
                </div>
                          <div className='grid grid-cols-2 m-[15px] seondphase0ffoot'>
                            <div className='footerMiddlesec'>
                            <h3 className='text-[40px] font-bold m-[20px]'>Location</h3>
                            <p className='w-[50%] m-[20px]  text-[20px]'>Centre Culturel Kôrè de Ségou
Rue 12, Quartier Sido Sonikoura
BP 62, Ségou, Mali</p>

                            </div>
                            <div>
                                <h3 className='font-bold text-[40px]'>Let's Connect</h3>
                                <div className='m-[15px]'>
                                   <p className='m-[10px] font-bold  text-[20px]'> <span className='mx-[10px]'>📞</span>  +234 906 144 6848</p>
                                   <p className='m-[10px] font-bold text-nowrap text-[13px]' style={{fontSize:"13px"}}> <span className='mx-[10px]'>✉️ </span> mathiasonyebuchi13@gmail.com</p>
                                </div>
                            </div>
                          </div>
          </footer>
        </body>
    );
}