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
        <div className="FirstMaliSSsub3-Sub2">
             <SecondNav />

              <nav className='flex gap-100  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#ffc43c7d] text-[25px] font-bold relative left-8'>The Musa Project
                </h1>
                 <div className='flex gap-5 text-nowrap relative top-[10px] left-[-5px] '>
                    <div className='flex gap-2 relative left-[-6px] w-[29%]' onClick={goHome}>
                        🏡
                      
                        <li> Home</li>
                    </div>
                    <div className='flex gap-2 relative left-[-2px] w-[59%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                      
                        <li>Festival Drumbeat</li>
                    </div>

                    

                    <div className='flex gap-4 relative left-[-4px] w-[60%]' onClick={gotoTheGoldenRoute}>
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
                <div className='FirstMaliSSsub3-Sub1 grid grid-cols-3 my-[60px] mx-[20px]'>
                    <div className='FirstMaliSSsub3-Sub2'>
                        <div>
                        <h3 className='my-[20px] font-bold text-[20px] text-[#D4A437]'>MALI EMPIRE FESTIVAL</h3>
                        <p className='w-[70%]'>Join us for an authentic celenration of our West African heritage, culture, traditions. Experience the golden age of the mali empire through music, food, and community</p>

                        </div>
                        <div className='flex gap-10 my-[20px]'>
                            <div>
                                {/* <FontAwesomeIcon icon={faMailBulk}/> */}
                                📧
                            </div>
                            <div>
                            📱
                                {/* <FontAwesomeIcon icon={faMobile}/> */}

                            </div>
                            <div>
                            🌐
                                {/* <FontAwesomeIcon icon={faGlobe}/> */}

                            </div>
                        </div>
                    </div>

                    <div className='FirstMaliSSsub3-Sub3'>
                    <div>
                        <h3 className='my-[20px] text-[20px] font-bold  firstsegofheadd'>Festival Element</h3>
                    </div>
                    <div className='mb-[15px] flex gap-5'>
                        <div>
                        🥁
                            {/* <FontAwesomeIcon icon={faDrum}/> */}
                        </div>
                        <div>
                            <h3>Tradition Music and Dance</h3>
                        </div>
                    </div>

                    <div className='mb-[15px] flex gap-5'>
                    🍯
                        {/* <FontAwesomeIcon icon={faPanorama}/> */}
                        <div>
                            <h3>Authentic West African Cuisine</h3>
                        </div>
                    </div>

                    <div className='mb-[15px] flex gap-5'>
                    🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <div>
                            <h3>Historical Exibitions</h3>
                        </div>
                    </div>

                    <div className='mb-[15px] flex gap-5'>
                    👑
                        {/* <FontAwesomeIcon icon={faCrown}/> */}
                        <div>
                            <h3>Traditional Fasion & Craft</h3>
                        </div>
                    </div>

                    <div className='mb-[15px] flex  gap-5'>
                    📚
                        {/* <FontAwesomeIcon icon={faBook}/> */}
                        <div>
                            <h3>Culture Education</h3>
                        </div>
                    </div>
                    </div>

                    <div className='Secontolastfott'>
                        <div>
                            <h3 className='my-[20px] text-[20px] font-bold firstsegofheadd'>Join The Caravan</h3>
                        </div>
                        <div>
                            <div className='mb-[15px] flex gap-5'>
                                <div>
                                📍
                                    {/* <FontAwesomeIcon icon={faLocationArrow}/> */}
                                </div>
                                <div>
                                <h3 className='text-yellow-600'>Festival Grounds</h3>
                                <p className='font-light text-[13px] text-amber-300'>Historic Culture Center</p>
                                </div>
                                
                            </div>

                            <div className='mb-[15px] flex gap-5'>
                                <div>
                                📆
                                    {/* <FontAwesomeIcon icon={faCalendar}/> */}
                                </div>
                                <div>
                                    <h3 className='text-yellow-600'>Festiv Dates</h3>
                                <p className='text-amber-300'>Summer 2025</p>
                                </div>
                                
                            </div> 
                            
                            <div className='mb-[15px] flex gap-5'>
                                <div>
                                🎫
                                    {/* <FontAwesomeIcon icon={faTicket}/> */}
                                </div>

                                <div>
                                    <h3 className='text-yellow-600'>Tickets Avalaible</h3>
                                <p className='text-amber-300'>Early Bird Pricing</p>
                                </div>
                            
                            </div>
                        </div>
                    </div>
                </div>
                          <hr className='h-[2px] bg-amber-800 w-[80%] relative left-[80px] ' />
                          <br />
                          <br />
                          <br />
                          <div className='flex mx-[80px] gap-[600px] mb-[40px] lastofthemall'>
                              <div>
                                  © 2024 Mali Empire Festival. Celebrating West African Heritage.
                              </div>
                              <div className='flex gap-[20px]'>
                                  <li>Privacy</li>
                                  <li>Terms</li>
                                  <li>Contact</li>
                              </div>
                          </div>
                </footer>


        </div>
    );
}