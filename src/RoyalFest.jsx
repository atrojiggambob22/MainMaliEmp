import React from "react";
import SecondNav from './SecondNav';
import './MaliEmp.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
import RoyalDecreeForm from "./RoyalDecreeForm";
export default function RoyalFest() {
     const navigate = useNavigate();
    
      const gotoFestivalDrumbeatPage = () => {
        navigate('/FestivalDrumbeat');
    }
    
     const gotoTheGoldenRoute = () => {
        navigate('/TheGoldenRoute');
    } 
    
    const gotoRoyalFest = () => {
        navigate('/RoyalFest');
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
                <h1 className='text-yellow-300 text-[25px] font-bold relative left-8'>Royal Fest
                </h1>
                <div className='flex gap-5 text-nowrap relative top-[10px] left-[-50px] '>
                    <div className='flex gap-2 relative left-[10px] w-[20%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>

                    <div className='flex gap-4 relative left-[10px] w-[20%]' onClick={gotoRoyalFest}>
                        🍯
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Fest</li>
                    </div>

                    <div className='flex gap-4 relative left-[-10px] w-[25%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-4 relative left-[-10px] w-[28%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-10px] w-[20%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>

            <div className='FirstMaliSSsub3-Sub2-Content1'>
            <h1>Royal Fest</h1>
            <div className="relative left-[40px] ">

            <p className='Firtsparolunderthecontent1 relative' >
            "Reach the Emperor's Council"
            </p>
           
            </div>
        </div>

        <div className="text-center bg-amber-100 p-30">

        <div className='my-[90px]'>
            <div className='bg-amber-600 inline-block p-[10px] px-[80px]  my-[50px] relative top-[-30px]'>
            <h3 className='text-[30px] font-bold'>SUMMON THE ROYAL SCRIBES</h3>
            </div>

            <div className='grid grid-cols-4'>

            <div className='bg-white p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>Traditoinal Drummer</h3>
            <p className='w-[70%] relative left-[50px]'></p>
            
            </div>
            <div  className='bg-white p-[20px]  py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>Palace Herald</h3>
            <p className='w-[70%] relative left-[50px]'></p>
            
            </div>
            <div  className='bg-white p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>Imperial Palace</h3>
            <p className='w-[70%] relative left-[50px]'> 123, Ikorodu street Snai riad sk fkef</p>
            
            </div>
            
             <div  className='bg-white p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>Court Hours</h3>
            <p className=' relative '>
                Monday - Friday :9am-6pm
                Saturday :10am-4pm
                Sunday:Closed
            </p>
            
            </div>

            </div>
        </div>
        
        <div>
            <RoyalDecreeForm/>
        </div>
        </div>

               <footer className='relative left-[-18px] w-[110%] '>
                          <div className='FirstMaliSSsub3-Sub1 grid grid-cols-3 my-[60px] mx-[20px]'>
                              <div className='FirstMaliSSsub3-Sub2'>
                                  <div>
                                  <h3 className='my-[20px] font-bold text-[20px]'>MALI EMPIRE FESTIVAL</h3>
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
                                 <h2 className='my-[20px] text-[20px] font-bold'>Festival Element</h2>
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
                                      <h2 className='my-[20px] text-[20px] font-bold'>Join The Caravan</h2>
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