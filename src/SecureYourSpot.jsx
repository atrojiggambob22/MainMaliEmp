import React from "react";
import './MaliEmp.css';
import SecondNav from './SecondNav';
import { useNavigate } from 'react-router-dom';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
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
                <h1 className='text-yellow-300 text-[20px] font-bold relative left-8'>Secure Your Spot
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


    <div className="FirstMaliSSsub3-Sub2-Content1 text-center">
         <h3 className="font-bold text-[50px] my-[10px]">Secure Your Spot</h3>
         <p className="my-[20px] p-[15px] px-[40px]">
         Join the royal caravan to acient Mali
         </p>
        
      </div>

    <div className="text-center">

    <div>
        <div>
            <h3 className="font-bold text-[50px]">Festival Passes</h3>
        </div>
        <div className="grid grid-cols-3 my-[10%] relative left-[55px]">
            <div className="border-3 border-gray-400 rounded-[10px] w-[80%] p-[40px]">
                <div className="bg-yellow-600 inline-block p-[25px]  rounded-[50%]">🎫</div>
                <h3 className="text-[30px] font-bold">caravan member</h3>
                <p>$35<span className="opacity-[0.5]">/day</span></p>
                <div className="text-start ">
                    <li className="my-[30px]">Festival ground access</li>
                    <li className="my-[30px]">All performance and demonstration</li>
                    <li className="my-[30px]">Market and Vendor Access</li>
                    <li className="my-[30px]">Festival Programme and mao</li>
                </div>
                <div  className="bg-yellow-600 py-[20px]">
                    <h3 className="">Join the caraven</h3>
                </div>
            </div>
            <div>
                 <div className="relative left-[-40px] bg-orange-950 inline-block p-[10px] rounded-[20px]  top-[30px]">
                    <h3 className="text-amber-200">MOst popular</h3>
                </div>
            <div  className="border-3 border-orange-800 rounded-[10px] w-[80%] p-[40px]">
               
                <div className="bg-orange-800 inline-block p-[25px]  rounded-[50%]">👑</div>
                <h3 className="text-[30px] font-bold">Royal Court</h3>
                <p>$75<span className="opacity-[0.5]">/day</span></p>
                <div className="text-start ">
                    <li className="my-[30px]">All Caravan Member benefits</li>
                    <li className="my-[30px]">VIP seaung at all perrormances</li>
                    <li className="my-[30px]">Royal feast dilig experience</li>
                    <li className="my-[30px]">Meet & greet with performers</li>
                    <li className="my-[30px]">comphmentary costume rental</li>
                </div>
                <div className="bg-orange-800  py-[20px]">
                    <h3 className="text-amber-200">Join the caraven</h3>
                </div>
            </div>

            </div>

            <div className="border-3 border-gray-400 rounded-[10px] w-[80%] p-[40px]" >
                <div className="bg-amber-950 inline-block p-[25px]  rounded-[50%]">⚜️</div>
                <h3 className="text-[30px] font-bold">Imperial Circle</h3>
                <p>$150<span className="opacity-[0.5]">/day</span></p>
                <div className="text-start ">
                    <li className="my-[30px]">All Royal Court Benefit</li>
                    <li className="my-[30px]">Private audience with mansa musa</li>
                    <li className="my-[30px]">Exclusive imperial dining tent</li>
                    <li className="my-[30px]">Premuim Costume collection</li>
                    <li className="my-[30px]">Personal griot storyteller</li>
                </div>
                <div className="bg-amber-950 py-[20px]">
                    <h3 className="text-amber-200" >Join the caraven</h3>
                </div>
            </div>
        </div>
    </div>

    <div>
        <h3 className="text-[40px] font-bold">Festival Information</h3>
        <div>
            <div className="flex gap-[50px] my-[5%] text-start relative left-[22%]">
                <div className="bg-amber-100 p-[20px] rounded-[20px]" >
                    <h3 className="text-red-800 font-bold text-[20px]">WHEN & WHERE</h3>
                    <p className="my-[20px]"> <strong>Dates:</strong> August 15-17. 2024
                    </p>
                    <p className="my-[20px]">
                       <strong> Time:</strong> 9:00 AM - 8:00 PM Daily
                  
                    </p>
                    <p className="my-[20px]"> <strong>Location:</strong>  Heritage Park Grounds</p>
                    <p className="my-[20px]"><strong>Address:</strong>1234 Golden Route Ave, Festival City</p>
                </div>
                <div className="bg-amber-100 p-[20px] rounded-[20px]" >
                    <h3 className="text-red-800 font-bold text-[20px]">IMPORTANT NOTES</h3>
                    <div>
                        <li className="my-[20px]">Children Under 12 receive 12% Discount</li>
                        <li className="my-[20px]">Group rates available for 15+ people</li>
                        <li className="my-[20px]">Free parking available on-site</li>
                        <li className="my-[20px]">Rain or Shine Event</li>
                    </div>
                </div>
            </div>
            <div className="my-[40px] bg-amber-100 inline-block p-[40px] mb-[10%] ">
                <h3  className="text-red-800 font-bold text-[30px]">EARLY BIRD SPECIAL</h3>
                <p className="m-[20px]">Purchase your tickets before July 1st and save 20% on all pass types. Limited time offer!</p>
                <div className="bg-amber-400 inline-block  my-[5px] mt-[20px]">
                    <h3 className="text-[20px] p-[10px] px-[30px]">Claim early bird pricing</h3>
                </div>
            </div>
        </div>
    </div>

    <div className="mt-[10%] bg-amber-800 p-[40px] py-[60px]">
        <h3 className="text-[30px] font-bold text-amber-200 ">DON'T MISS THIS HISTORIC JOURNEY</h3>
        <p className="w-[50%] relative left-[24%] my-[40px]">Secure your place in the greatest celebration of West African heritage.
Limited capacity ensures an Intimate experience.</p>
<div className="bg-amber-500 inline-block">
    <h3 className="text-[20px] p-[10px] px-[30px]">Purchase ticket now</h3>
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