import React from 'react';
import SecondNav from './SecondNav';
import './MaliEmp.css';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
export default function FestivalDrumbeat() {

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
        <div className='FirstMaliSSsub3-Sub2'>
        <SecondNav />


         <nav className='flex gap-100  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-yellow-300 text-[20px] font-bold relative left-8'>Festival Drumbeat
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
            <h1>Festival Drumbeat</h1>
            <p className='Firtsparolunderthecontent1'>
            "The heartbeat of West Africa echoes through time"
            </p>
           
        </div>

        <div className='justify-center text-center '>

        <div className='bg-amber-100 p-30'>
            <div className='bg-amber-600 inline-block p-[10px] px-[80px]  my-[50px] relative top-[-30px]'>
            <h3 className='text-[30px] font-bold'>ROYAL PERFOMANCES</h3>
            </div>

            <div className='grid grid-cols-3'>

            <div className='bg-white p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>TRADITIONAL DRUMMING</h3>
            <p className='w-[70%] relative left-[50px]'>Experience the powerful rhythms of djembe, dundun, and talking drums that once guided caravans across the sahara</p>
            
            </div>
            <div  className='bg-white p-[20px]  py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>ROYAL COURT DANCES</h3>
            <p className='w-[70%] relative left-[50px]'>Witness the elegant movements that once graced the place  of Mansa Musa, perfomed by master dancers</p>
            
            </div>
            <div  className='bg-white p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
            
            <h3 className='mb-[10px]'>GRIOT STORYTELLING</h3>
            <p className='w-[70%] relative left-[50px]'>Listen to ancient tales and geneologies passed down through generations by West Africa's master storytellers.</p>
            
            </div>
            
            </div>
        </div>

        <div className='bg-amber-500 py-[80px]'>
            <div><h3 className='text-[25px] font-bold'>PERFORMANCE SCHEDULE</h3></div>
            
            <div className='relative left-[30%]'>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div className='text-left px-[10px]'>
                <h4 className=''>OPENING CEREMONN</h4>
                <p>Traditional  and royal procession</p>
            
            </div>

            <div>
            10:00 AM
            </div>

            </div>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div  className='text-left'>
            <h4>MASTER DRUMMERS CIRCLE</h4>
            <p>Interacuve arumming experience</p>
            
            </div>

             <div>
            12:00 PM
            </div>

            </div>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div  className='text-left'>
                <h4>ROYAL COURT PERFORMANCE</h4>
                <p>Grand finale with full esemble</p>
            
            </div>

             <div>
            4:00 AM
            </div>

            </div>
            
            </div>

        </div>

        <div className='p-[40px] bg-amber-900'>
        <div>
        <h3 className='text-[30px] font-bold my-[30px]'>Join The Celebration</h3></div>
        <p >Don't miss the chance to be part of this extraordinary  cultural <br />
experience</p>

<div className='my-[40px] bg-yellow-400 inline-block px-[40px] py-[10px]'>
<h3>Reserve Your Experience</h3>
</div>
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