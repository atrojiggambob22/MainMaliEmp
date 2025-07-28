import React from "react";
import SecondNav from './SecondNav';
import './MaliEmp.css';
import "./RoyalCourt.css"
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe, faClock, faPhone} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
import RoyalDecreeForm from "./RoyalDecreeForm";
export default function RoyalCourt() {
     const navigate = useNavigate();
         const goHome = () => {
    navigate('/');
}
      const gotoFestivalDrumbeatPage = () => {
        navigate('/FestivalDrumbeat');
    }
    
     const gotoTheGoldenRoute = () => {
        navigate('/TheGoldenRoute');
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
                <h1 className='text-[#ffc43c7d] text-[25px] font-bold relative left-8' onClick={goHome} >The Musa Project
                </h1>
                 <div className='flex gap-5 text-nowrap relative top-[10px] left-[28%] '>
                    {/* <div className='flex gap-2 relative left-[-6px] w-[29%]' onClick={goHome}>
                        🏡
                      
                        <li> Home</li>
                    </div> */}
                    <div className='flex gap-2 relative left-[-2px] w-[59%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                      
                        <li>Festival Drumbeat</li>
                    </div>

                    

                    <div className='flex gap-4 relative left-[-4px] w-[63%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                      
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-2 relative left-[-3px] w-[60%]' onClick={gotoDressLikeRoyalty}>
                       
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-3px] w-[60%]' onClick={gotoSecureYourSpot}>
                      
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>
            
            <div className='FirstMaliSSsub3-Sub2-Content1 topofRoyalF'>
            <h3  className=' text-[70px] font-bold text-center' >Let's Connect</h3>

               <div className="my-[10px] topofRoyalF-sub1 ">
                 <p className=" w-[58%] text-center relative left-[20%] topofRoyal" style={{fontFamily:"Crimson Text"}} >We'd love to hear from you. Whether you're planning your visit to the heart of Musa, have a story or song to share, or simply want to say hello - our doors and drums are open</p>
            </div>
            <div className="relative left-[40px] ">
            
            <p className='Firtsparolunderthecontent1 relative firstsegofheadd border-2 border-amber-800 inline-block rounded-[10px]' >
            "N ka kEns — we're well, and hope you are too."
            </p>
           
            </div>
        </div>

        <div className="text-center bg-[#fce09dae] p-30 FirstofTheRoyal">

        <div className='my-[90px]'>
            <div className='inline-block p-[10px] px-[80px]  my-[50px] relative top-[-30px] mx-[30px] firstsegofheadd-hes'>
                
            <h3 className='text-[30px] font-bold firstsegofheadd FirstofTheRoyal-subSS'>SUMMON THE ROYAL SCRIBES</h3>
            </div>

            <div className='flex FirstofTheRoyal-sub1 align-middle text-center justify-center'>

            <div className='bg-white p-[20px] py-[30px] rounded-[10px] m-[10px] w-[30%] FirstofTheRoyal-sub1-2'>
            <FontAwesomeIcon icon={faMailBulk} className="rounded-[50%] p-[20px] bg-amber-400"/>
            <h3 className='mb-[10px] font-bold text-[20px] text-red-900'>Royal Messemger</h3>
            <p style={{fontFamily:"Crimson Text", opacity:"0.9",color:"black", fontWeight:"500" }} >Email Us Directly</p>
            <p className='w-[100%] relative left-[10px] ' style={{fontFamily:"Crimson Text", fontWeight:"800", color:"gray"}} >maliempire2025@gmail.com</p>
            
            </div>

            <div  className='bg-white p-[20px]  py-[30px] rounded-[10px]  m-[10px] w-[30%] FirstofTheRoyal-sub1-2'>
            <FontAwesomeIcon icon={faPhone}  className="rounded-[50%] p-[20px] bg-red-700 text-white"/>
            <h3 className='mb-[10px]'>Palace Herald</h3>
            <p style={{fontFamily:"Crimson Text", color:'black', fontWeight:'500'}} >Whatsapp or Phone </p>
            <p className='w-[70%] relative left-[50px]' style={{fontFamily:"Crimson Text", color:"gray", fontWeight:"800"}} >+234-906-144-6848</p>
            
            </div>

          



            </div>
        </div>
        
        <div className="Royalformfo">
            <RoyalDecreeForm/>
        </div>

        </div>

         <div className=" bg-[#6a2f05] p-[40px] py-[60px] text-center">
        <h3 className="text-[30px] font-bold text-amber-500 ">Follow Our Journey</h3>
        <p className="w-[50%] relative left-[24%] my-[10px] mb-[40px] tgecourtroyalcc58577sub4444pp" style={{color:"#fdd579ae",fontFamily:"Crimson Text", fontSize:'25px'}} >Or follow along as we preapare the magic</p>
    <div className="bg-amber-500 inline-block border-2 border-amber-800">
        <h3 className="text-[20px] p-[10px] px-[30px]">"N ka kent — may joy guide your steps."</h3>
    </div>
    </div>

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