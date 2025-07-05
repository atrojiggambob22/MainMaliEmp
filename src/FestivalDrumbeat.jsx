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
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8'>
                    Mali Empire
                </h1>
                <div className='flex gap-5 text-nowrap relative top-[10px] left-[-50px] '>
                    <div className='flex gap-2 relative left-[1px] w-[29%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>

                    <div className='flex gap-4 relative left-[-5px] w-[20%]' onClick={gotoRoyalFest}>
                        🍯
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Fest</li>
                    </div>

                    <div className='flex gap-4 relative left-[-10px] w-[28%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-4 relative left-[-10px] w-[28%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-10px] w-[28%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>


        <div className='FirstMaliSSsub3-Sub2-Content1'>
            <h3 className='text-[#E6C157] text-[50px] font-bold text-center'>Festival Drumbeat</h3>
            <p className='Firtsparolunderthecontent1 firstsegofheadd'>
            "The heartbeat of West Africa echoes through time"
            </p>
           
        </div>

        <div className='justify-center text-center '>

        <div className='bg-[#fce09dae] p-30  Perfomanceoftheroayal'>
            <div className=' inline-block p-[10px] px-[80px]  my-[50px] relative top-[-30px]'>
            <h3 className='text-[30px] font-bold firstsegofheadd'>ROYAL PERFOMANCES</h3>
            </div>

            <div className='grid grid-cols-3'>

            <div className='bg-[#ffe3a3fb] hover:bg-[#f8d37cfb] p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
                <div className='p-[20px] rounded-[50%] bg-yellow-800 inline-block '>
                🥁

                </div>
            <h3 className='mb-[10px] font-bold text-[20px]'>TRADITIONAL DRUMMING</h3>
            <p className='w-[70%] relative left-[50px]'>Experience the powerful rhythms of djembe, dundun, and talking drums that once guided caravans across the sahara</p>
            
            </div>
            <div  className='bg-[#ffe3a3fb] hover:bg-[#f8d37cfb] p-[20px]  py-[80px] rounded-[10px] mx-[10px] transition duration-600 ease-in-out'>
                <div className='p-[20px] rounded-[50%] bg-red-800 inline-block '>

                💃
                </div>
            

            <h3 className='mb-[10px] font-bold text-[20px]'>ROYAL COURT DANCES</h3>
            <p className='w-[70%] relative left-[50px]'>Witness the elegant movements that once graced the place  of Mansa Musa, perfomed by master dancers</p>
            
            </div>
            <div  className='bg-[#ffe3a3fb]  hover:bg-[#f8d37cfb] p-[20px] py-[80px] rounded-[10px] mx-[10px]'>
                <div className='p-[20px] rounded-[50%] bg-gray-800 inline-block '>
            🎵

                </div>
            <h3 className='mb-[10px] font-bold text-[20px]'>GRIOT STORYTELLING</h3>
            <p className='w-[70%] relative left-[50px]'>Listen to ancient tales and geneologies passed down through generations by West Africa's master storytellers.</p>
            
            </div>
            
            </div>
        </div>

        <div className='bg-[#fdd579ae] py-[80px] secondphaseofthedrum'>
            <div><h3 className='text-[25px] font-bold firstsegofheadd'>PERFORMANCE SCHEDULE</h3></div>
            
            <div className='relative left-[30%]'>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div className='text-left px-[10px]'>
                <h3 className='text-red-800 font-bold '>OPENING CEREMONY</h3>
                <p>Traditional  and royal procession</p>
            
            </div>

            <p>
            10:00 AM
            </p>

            </div>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div  className='text-left'>
            <h3 className='text-red-800 font-bold '>MASTER DRUMMERS CIRCLE</h3>
            <p>Interacuve arumming experience</p>
            
            </div>

             <p>
            12:00 PM
            </p>

            </div>

            <div className='flex justify-between my-[30px]  bg-amber-50 w-[40%] px-[10px] py-[20px] rounded-[10px]'>

            <div  className='text-left'>
                <h3 className='text-red-800 font-bold '>ROYAL COURT PERFORMANCE</h3>
                <p>Grand finale with full esemble</p>
            
            </div>

             <p>
            4:00 AM
            </p>

            </div>
            
            </div>

        </div>


        <div className='p-[40px] bg-[#6a2f05]'>
        <div>
        <h3 className='text-[30px] font-bold my-[30px]'>Join The Celebration</h3></div>
        <p  className='text-[#fdd579ae]' >Don't miss the chance to be part of this extraordinary  cultural <br />
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
                                 <h3 className='my-[20px] text-[20px] font-bold text-[#D4A437]'>Festival Element</h3>
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
                                      <h3 className='my-[20px] text-[20px] font-bold text-[#D4A437]'>Join The Caravan</h3>
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