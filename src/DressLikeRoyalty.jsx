import React from "react";
import './MaliEmp.css';
import SecondNav from "./SecondNav";
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
    <div>
         <div className="FirstMaliSSsub3-Sub2">
          <SecondNav />
           
         <nav className='flex gap-100  text-nowrap mb-5 w-full py-[10px] px-[14px] cursor-pointer'>
                        <h1 className='text-yellow-300 text-[30px] font-bold relative left-8'>Dress Like Royalty
        
                        </h1>
                        <div className='flex gap-5 text-nowrap relative top-[10px] left-[50px]'>
                            <div className='flex gap-4' onClick={gotoFestivalDrumbeatPage}>
                                <FontAwesomeIcon icon={faDrum}/>
                                <li>Festival Drumbeat</li>
                            </div>
                            <div className='flex gap-4' onClick={gotoRoyalFest}>
                                <FontAwesomeIcon icon={faOptinMonster}/>
                                <li>Royal Fest</li>
                            </div>
                            <div className='flex gap-4' onClick={gotoTheGoldenRoute}>
                                <FontAwesomeIcon icon={faBuilding}/>
                                <li>The Golden Route</li>
                            </div>
                            <div className='flex gap-4' onClick={gotoDressLikeRoyalty}>
                                <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/>
                                <li>Dress Like Royalty</li>
                            </div>
                            <div className='flex gap-4' onClick={gotoSecureYourSpot}>
                                <FontAwesomeIcon icon={faTicket}/>
                                <li>Secure Your Spot</li>
                            </div>
                        </div>
                 </nav>

       <div className="FirstMaliSSsub3-Sub2-Content">
         <h1>Royal Fest</h1>
         <p>
           Join us for the Royal Fest, a celebration of the grandeur and
           splendor of the Mali Empire. This event showcases the rich cultural
           heritage, art, and traditions that defined the royal courts of Mali.
         </p>
         <p>
           Experience royal performances, traditional music, and exquisite
           crafts that reflect the opulence of the empire's history.
         </p>
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
                                           <FontAwesomeIcon icon={faMailBulk}/>
      
                                      </div>
                                      <div>
                                           <FontAwesomeIcon icon={faMobile}/>
      
                                      </div>
                                      <div>
                                           <FontAwesomeIcon icon={faGlobe}/>
      
                                      </div>
                                  </div>
                              </div>
      
                              <div className='FirstMaliSSsub3-Sub3'>
                              <div>
                                 <h2 className='my-[20px] text-[20px] font-bold'>Festival Element</h2>
                              </div>
                              <div className='mb-[15px] flex gap-5'>
                                  <div>
                                      <FontAwesomeIcon icon={faDrum}/>
                                  </div>
                                  <div>
                                      <h3>Tradition Music and Dance</h3>
                                  </div>
                              </div>
      
                              <div className='mb-[15px] flex gap-5'>
                                  <FontAwesomeIcon icon={faPanorama}/>
                                  <div>
                                      <h3>Authentic West African Cuisine</h3>
                                  </div>
                              </div>
      
                              <div className='mb-[15px] flex gap-5'>
                                   <FontAwesomeIcon icon={faBuilding}/>
                                  <div>
                                      <h3>Historical Exibitions</h3>
                                  </div>
                              </div>
      
                              <div className='mb-[15px] flex gap-5'>
                                  <FontAwesomeIcon icon={faCrown}/>
                                  <div>
                                      <h3>Traditional Fasion & Craft</h3>
                                  </div>
                              </div>
      
                              <div className='mb-[15px] flex  gap-5'>
                                 <FontAwesomeIcon icon={faBook}/>
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
                                             <FontAwesomeIcon icon={faLocationArrow}/>
                                          </div>
                                          <div>
                                          <h3 className='text-yellow-600'>Festival Grounds</h3>
                                          <p className='font-light text-[13px] text-amber-300'>Historic Culture Center</p>
                                          </div>
                                         
                                      </div>
      
                                      <div className='mb-[15px] flex gap-5'>
                                          <div>
                                             <FontAwesomeIcon icon={faCalendar}/>
                                          </div>
                                          <div>
                                              <h3 className='text-yellow-600'>Festiv Dates</h3>
                                          <p className='text-amber-300'>Summer 2025</p>
                                          </div>
                                          
                                      </div> 
                                      
                                      <div className='mb-[15px] flex gap-5'>
                                          <div>
                                              <FontAwesomeIcon icon={faTicket}/>
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