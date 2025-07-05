import React from 'react';
import "./MaliEmp.css";
import { useNavigate } from 'react-router-dom';

// import { Link } from 'react-router-dom';

import SecondNav from "./SecondNav"
import Anthelope from "../public/images/anthelope.jpg";
import Camel from "../public/images/Camel.jpg";
import Mountains from "../public/images/mountains.jpg";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';

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
        <>
        
            <body>

            <div className='seconnav'>
           

            <SecondNav />

            </div>

             <div className='themchiefeofthenbud'>
            <div>
            <nav className='flex gap-100  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8'>
                    Mali Empire
                </h1>
                <div className='flex gap-5 text-nowrap relative top-[10px] left-[-5px] '>
                    <div className='flex gap-2 relative left-[-6px] w-[29%]' onClick={goHome}>
                        🏡
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li> Home</li>
                    </div>
                    <div className='flex gap-2 relative left-[-2px] w-[59%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>

                    <div className='flex gap-4 relative left-[-3px] w-[41%]' onClick={gotoRoyalFest}>
                        🍯
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Fest</li>
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

            

            </div>
            <div className='FirstMali text-center my-[100px] '>
                <h1 className='text-center text-[90px] font-bold text-[#E6C157]'>MALI EMPIRE <br /> <span className='text-[#f1ab06]'>FESTIVAL</span></h1>

                <div className='FirstMaliSub1 my-5 bg-amber-600 w-[30%] relative left-[35%] p-5'>
                    <h3 className='text-[20px]'>A Celebration of West African Heritage</h3>
                </div>

                <div className='FirstMaliSub2'>
                    <p className='w-[40%] relative left-[30%] my-[30px] text-[#ff9b3e] font-bold'>Journey through the golden age of the Mali Empire.Experience authentic West African Culture, music, cusine and tradition in an immersive festival celebrating our rich heritage</p>

                    <div className='FirstMaliSub3 bg-[#D4A437] w-[20%] relative left-[40%] my-[30px] p-[10px]'>
                        <h3>JOIN THE CARAVAN</h3>
                    </div>
                </div>
                <div>
                    {/* animation */}
                </div>

            </div>
                </div>

                <div className='FirstMaliSSsub1 py-[50px]  '>
                    <div className='text-center mainsubfofSSubdu '>
                    <h3 className='text-[40px] font-bold my-[15px] firstofthemh3333'>FESTIVAL HIGHLIGHTS</h3>
                    <p className='w-[40%] relative left-[30%]'>Immerse yourself in the rich tapestry of West African culture through our carefully curated experiences</p>

                    </div>
                    <div className='FirstMaliSSsub1-Sub1 relative left-[90px]'>
                        <div className='FirstMaliSSsub1-Sub1-min1 flex justify-center'>
                            <div><img src={Anthelope} alt=""  className='rounded-[20px] w-[90%]'/></div>
                            <div>
                                <div className='mb-[20px] firstsegofheadd'>
                                    <h3 className='text-[30px] font-bold'>Festival Drumbeat</h3>
                                    <p className='font-light text-amber-900'>Music & Perfomance</p>
                                </div>
                                <p className='w-[60%]'>
                                   Experience the heartbeat of West Africa through traditional djembe circles, kora melodies, and griot storytelling. Dance to the rhythms that have echoed through centuries.
                                </p>
                                <div className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Live Djembe Circles</li>
                                    <li>Traditional Dance</li>
                                    <li>Griot Storytelling</li>
                                    <li>Kora Performances</li>
                                </div>
                                <div className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'>
                                    <h3  className='relative left-[10px]'>Learn More</h3>
                                </div>
                            </div>
                        </div>

                        <div className='FirstMaliSSsub1-Sub1-min1  flex justify-center'>
                           
                            <div>
                                <div className='mb-[20px] firstsegofheadd'>
                                    <h3  className='text-[30px] font-bold'>Royal Feast</h3>
                                    <p className='font-light text-amber-900'>Cuisine & Flavours</p>
                                </div>
                                <p className='w-[60%]'>Savor the royal flavors of the Mali Empire with authentic West African cuisine. From jollof rice to plantain dishes, taste the heritage of ancient trade routes.</p>
                                <div  className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Traditional Jollof</li>
                                    <li>Baobab Refreshments</li>
                                    <li>Plantain Delicacies</li>
                                    <li>Royal Spice Blends</li>
                                </div>
                                <div  className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'>
                                    <h3  className='relative left-[13px]'>Learn More</h3>
                                </div>
                            </div>
                             <div><img src={Camel} alt="" className='rounded-[20px] w-[90%]' /></div>
                        </div>

                        <div className='FirstMaliSSsub1-Sub1-min1  flex justify-center'>
                            <div><img src={Mountains} alt=""  className='rounded-[20px] w-[90%]'/></div>
                            <div>
                                <div  className='mb-[20px] firstsegofheadd'>
                                    <h3 className='text-[30px] font-bold'>The Golden Route</h3>
                                    <p className='font-light text-amber-900'>History & Culture</p>
                                </div>
                                <p className='w-[60%]'>Walk the paths of ancient merchants and discover the cultural treasures of the Mali Empire. Explore exhibits showcasing gold trade, Islamic scholarship, and architectural marvels.</p>
                                <div  className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Historical Exhibits</li>
                                    <li>Cultural Artifacts</li>
                                    <li>Gold Trade Stories</li>
                                    <li>Interactive Displays</li>
                                </div>
                                <div className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'
                                >
                                    <h3 className='relative left-[15px]'>Learn More</h3>
                                </div>
                            </div>
                        </div>

                        <div className='FirstMaliSSsub1-Sub1-min1  flex justify-center'>
                            
                            <div>
                                <div  className='mb-[20px] firstsegofheadd'>
                                    <h3 className='text-[30px] font-bold'>Dress Like Royalty</h3>
                                    <p className='font-light text-amber-900'>Fashion & Style</p>
                                </div>
                                <p className='w-[60%]'>Adorn yourself in the magnificent textiles of West Africa. From vibrant ankara prints to elegant boubous, dress in the splendor of Mali Empire nobility.</p>
                                <div  className='grid grid-cols-2 gap-4 my-5 w-[70%] papdivsdddd'>
                                    <li>Ankara Fashion</li>
                                    <li>Traditional Jewelry</li>
                                    <li>Royal Boubous</li>
                                    <li>Headwrap Styling</li>
                                </div>
                                <div  className='bg-white w-[20%] p-[10px] text-nowrap rounded-[10px] border-2 border-amber-800 hover:bg-amber-700 hover:text-white papdivsddddbtn'>
                                    <h3  className='relative left-[15px]'>Learn More</h3>
                                </div>
                            </div>
                            <div><img src={Anthelope} alt="" className='rounded-[20px] w-[90%]' /></div>
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
            </body>
        </>
        
    );
}