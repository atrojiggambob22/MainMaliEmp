import React, { useState, useEffect } from 'react';
import "./MaliEmp.css";
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SecondNav from "./SecondNav"
import Fight from "../public/images/fight.JPG";
import Family from "../public/images/family.JPG";
import Dress from "../public/images/dressroyal.JPG";
import onefamily from "../public/images/onefamily.JPG";
import CountdownTimer from './CountdownTimer';
import Mountains from "../public/images/mountains.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
import FadeIn from './FadeIn';
import BounceIn from './BounceIn';
import SlideIn from './SlideIn';
import FadeInSection from "./FadeInSection";

import ScrollIndicator from './ScrollIndicator';
export default function MaliEmpMain() {

    

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

const gotoRoyalCourt = () => {
    navigate('/RoyalCourt');
} 

const gotoDressLikeRoyalty = () => {
    navigate('/DressLikeRoyalty');
}

const gotoSecureYourSpot = () => {
    navigate('/SecureYourSpot');
}
const gotoTheMusaProject = () => {
    navigate ('/TheMusaProject')
}
const gotoRoyalFest = () => {
    navigate ('/RoyalFest')
}

    return (
        <>
            <ScrollIndicator/>
            <body>

            <div className='seconnav'>
           

            <SecondNav />

            </div>

             <div className='themchiefeofthenbud'>
            <div>
            <nav className='flex gap-10  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8' onClick={goHome}>
                    The Musa Project
                </h1>
                <div className='grid grid-cols-7  gap-4 text-nowrap relative top-[10px] left-[20px] '>

                    <div className='flex relative' onClick={gotoTheMusaProject}>
                        🌟
                       
                        <li>The Musa Project</li>
                    </div>


                    <div className='flex relative' onClick={gotoRoyalFest}>
                        🍯
                        
                        <li>Royal Fest</li>
                    </div>
                    {/* <div className='flex gap-2 relative left-[-6px] w-[29%]' onClick={goHome}>
                        🏡
                        
                        <li> Home</li>
                    </div> */}
                    <div className='flex relative' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                       
                        <li>Festival Drumbeat</li>
                    </div>
                    
                     

                    <div className='flex relative' onClick={gotoRoyalCourt}>
                        📜
                       
                        <li>Royal Court</li>
                    </div>

                    <div className='flex relative'onClick={gotoTheGoldenRoute}>
                        🏛️
                       
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex relative' onClick={gotoDressLikeRoyalty}>
                       
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex relative' onClick={gotoSecureYourSpot}>
                      
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>

            

            </div>
            
            <div className='FirstMali text-center my-[100px] '>
                <FadeInSection delay={0.4}>

                <h1 className='text-center text-[90px] font-bold text-[#fac941] overflow-y-hidden'>Experience the <span className='text-black'>Golden</span>  Age <br /> 
               </h1>
                <p className='text-[40px] my-[20px] font-bold text-[#f1cc65] SecondgenofFirst'>August 25th - Oct 20th | 10am - 2pm</p>
                </FadeInSection>
                
                <FadeInSection direction="top" delay={0.5}>


                <div className='FirstMaliSub1 my-5 bg-amber-600 w-[30%] relative left-[35%] p-5'>
                    <h3 className='text-[20px] heris'>A Celebration of West African Heritage</h3>
                </div>
                </FadeInSection>
                <FadeInSection direction="bottom" delay={0.6}>

                <div>
                    <CountdownTimer />
                </div>
                </FadeInSection>
                <div className='FirstMaliSub2'>
                   

                    <div className='FirstMaliSub3 bg-[#D4A437] w-[20%] relative left-[40%] my-[30px] p-[10px]'>
                        <h3>JOIN THE CARAVAN</h3>
                    </div>
                </div>
                <div>

                    {/* animation */}
                </div>

            </div>
                </div>

                <div className='FirstMaliSSsub1 py-[50px]'>
                     <p className='w-[80%] relative left-[11%] my-[30px] text-black text-[30px] font-light text-center FirstMaliSSsub1ppd'>Journey through the golden age of the Mali Empire.Experience authentic West African Culture, music, cusine and tradition in an immersive festival celebrating our rich heritage</p>
                    <div className='text-center mainsubfofSSubdu '>
                    <h3 className='text-[30px] font-bold my-[15px] firstofthemh3333'>FESTIVAL HIGHLIGHTS</h3>
                    {/* <p className='w-[40%] relative left-[30%]'>Immerse yourself in the rich tapestry of West African culture through our carefully curated experiences</p> */}

                    </div>
                    <div className='FirstMaliSSsub1-Sub1 relative left-[90px]'>
                        <div className='FirstMaliSSsub1-Sub1-min1 flex justify-center'>
                            <FadeInSection direction="right" delay={0.2}>

                                <div>
                                <img src={Family} alt=""  className='rounded-[20px] w-[90%]'/>
                                
                                </div>
                            </FadeInSection>

                            <div>
                                <FadeInSection direction="left" delay={0.3}>

                                <div className='mb-[20px] firstsegofheadd'>
                                   
                                    <h3 className='text-[30px] font-bold '>Epic of <br />Sundiata</h3>

                                    
                                    <p className='font-light text-amber-900'>Music & Perfomance</p>
                                </div>
                                </FadeInSection>
                                <FadeInSection direction="right" delay={0.4}>

                                
                                <p className='w-[60%]'>
                                  A dramatic retelling of the founding story of the Mali Empire  experience live performances that trace the journey of Sundiata Keita from a disabled child to the first great emperor of Mali.
                                </p>
                                <div className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Live Djembe Circles</li>
                                    <li>Traditional Dance</li>
                                    <li>Griot Storytelling</li>
                                    <li>Kora Performances</li>
                                </div>

                                <div className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'>
                                     <a onClick={gotoTheMusaProject}>
                                    <h3  className='relative left-[10px]'>Learn More</h3>
                                    </a>
                                </div>

                    </FadeInSection>
                            </div>
                        </div>

                        <div className='FirstMaliSSsub1-Sub1-min1  flex justify-center'>
                           
                            <div>
                                <FadeInSection direction="right" delay={0.4}>

                                <div className='mb-[20px] firstsegofheadd'>
                                    <h3  className='text-[30px] font-bold'>Royal Feast</h3>
                                    <p className='font-light text-amber-900'>Cuisine & Flavours</p>
                                </div>
                                </FadeInSection>
                                <FadeInSection direction="top" delay={0.7}>

                                <p className='w-[60%]'>Enjoy a curated spread of traditional Malian cuisine from jollof rice to tô and peanut stew — served with local drinks and prepared using ancient recipes passed down through generations.</p>
                                <div  className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Traditional Jollof</li>
                                    <li>Baobab Refreshments</li>
                                    <li>Plantain Delicacies</li>
                                    <li>Royal Spice Blends</li>
                                </div>
                                <div  className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'>
                                    <a onClick={gotoRoyalFest}>

                                    <h3  className='relative left-[13px]'>Learn More</h3>
                                    </a>

                                </div>
                                </FadeInSection>

                            </div>
                            <FadeInSection direction="right" delay={0.6}>

                             <div><img src={Fight} alt="" className='rounded-[20px] w-[70%]' /></div>
                            </FadeInSection>
                        </div>

                        <div className='FirstMaliSSsub1-Sub1-min1  flex justify-center'>
                            <FadeInSection direction="bottom" delay={0.5}>

                            <div><img src={onefamily} alt=""  className='rounded-[20px] w-[90%]'/></div>
                            </FadeInSection>

                            <div>
                                <FadeInSection direction="left" delay={0.6}>

                                <div  className='mb-[20px] firstsegofheadd'>
                                    <h3 className='text-[30px] font-bold'>The Golden <br />Route</h3>
                                    <p className='font-light text-amber-900'>History & Culture</p>
                                </div>
                                </FadeInSection>

                                <FadeInSection direction="top" delay={0.8}>

                                <p className='w-[60%]'>Walk the paths of ancient merchants and discover the cultural treasures of the Mali Empire. Explore exhibits showcasing gold trade, Islamic scholarship, and architectural marvels.</p>
                                <div  className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Historical Exhibits</li>
                                    <li>Cultural Artifacts</li>
                                    <li>Gold Trade Stories</li>
                                    <li>Interactive Displays</li>
                                </div>
                                <div className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'
                                >
                                    <a onClick={gotoTheGoldenRoute}>

                                    <h3 className='relative left-[15px]'>Learn More</h3>

                                    </a>
                                </div>
                                </FadeInSection>

                            </div>
                        </div>

                      

                    </div>
                </div>
            <footer className='relative left-[-18px] w-[110%] '>
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'  >The Musa Project</h3>
                    <div className='w-[80%]'>

                    <p className='m-[10px]  text-[20px]' style={{fontFamily:"Crimson Text"}}>The Musa Project is more than a festival  it’s a living tribute to the legacy of the Mali Empire and the golden age of West Africa. Through storytelling, traditional music, fashion, food, and architecture, we bring history to life and reconnect communities with the greatness that once defined an empire. From the epic of Sundiata to the rhythm of the drums and the spices of the royal feast, every detail is crafted to honor our roots and inspire a new generation. Join the journey. Remember the empire. Celebrate the spirit.</p>
                    </div>
                </div>
                          <div className='grid grid-cols-2 m-[15px] seondphase0ffoot'>
                            <div>
                            <h3 className='text-[40px] font-bold m-[20px]'>Location</h3>
                            <p className='w-[50%] m-[20px]  text-[20px]'>Centre Culturel Kôrè de Ségou
Rue 12, Quartier Sido Sonikoura
BP 62, Ségou, Mali</p>

                            </div>
                            <div>
                                <h3 className='font-bold text-[40px]'>Let's Connect</h3>
                                <div className='m-[15px]'>
                                   <p className='m-[10px] font-bold  text-[20px]'> <span className='mx-[10px]'>📞</span>  +234 906 144 6848</p>
                                   <p className='m-[10px] font-bold text-nowrap text-[20px]'> <span className='mx-[10px]'>✉️ </span> mathiasonyebuchi13@gmail.com</p>
                                </div>
                            </div>
                          </div>
          </footer>
            </body>
        </>
        
    );
}