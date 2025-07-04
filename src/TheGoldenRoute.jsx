import React from "react";
import SecondNav from './SecondNav';
import { useNavigate } from 'react-router-dom';
import './TheGoldenRoute.css';
import './MaliEmp.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
export default function TheGoldenRoute() {
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
                <h1 className='text-yellow-300 text-[20px] font-bold relative left-8'>TheGolden Route
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
            <h1>Golden Route</h1>
            <p className='Firtsparolunderthecontent1'>
            "The heartbeat of West Africa echoes through time"
            </p>
           
        </div> 
            <div className="bg-amber-100 p-[60px] py-[80px]">
            <div className="text-center font-bold text-[20px]">
                <h3>Historic trade Routes</h3>
            </div>
             <section className="section trade-routes relative left-[10%] ">
            <h2>Historic Trade Routes</h2>
            <div className="routes-content">
          <div className="left">
            <h3 className="subheading">The Trans-Saharan Network</h3>
            <p className="my-[20px] w-[50%]">
              For over a thousand years, caravans carrying gold, salt, ivory,
              and slaves traversed the vast Sahara Desert, connecting the gold
              fields of West Africa to the markets of North Africa and the
              Mediterranean.
            </p>
            <p className="w-[50%]">
              The Mali Empire controlled these crucial trade routes, collecting
              taxes and tribute that made it one of the wealthiest empires in
              the world.
            </p>
          </div>

            <div className="relative left-[-30%] bg-amber-500 w-[50%] rounded-[10px]" >
          <div className="p-[20px]" >
            <h3 className="font-bold">Key Trading Cities</h3>
            <ul className="text-nowrap mt-[20px]">
              <li className="mb-[20px]">
                <strong>Timbuktu</strong> – The Pearl of the Desert</li>
              <li className="mb-[20px]" ><strong>Djenne</strong> – The Venice of Sudan</li>
              <li className="mb-[20px]" ><strong>Gao</strong> – The Eastern Gateway</li>
              <li className="mt-[20px]" ><strong>Walata</strong> – The Northern Outpost</li>
            </ul>
          </div>

            </div>

        </div>
            </section>
            </div>

      <section className="section festival-journey">
        <h3 className="text-center font-bold text-[20px]">Your Festival Journey</h3>
        <div className="journey-cards">
          <div className="card">
            <div className="icon">🏛️</div>
            <h3>Royal Welcome</h3>
            <p>
              Begin your journey at the Grand Pavilion, where you’ll receive
              your festival passport and royal blessing.
            </p>
          </div>
          <div className="card">
            <div className="icon">🛍️</div>
            <h3>Trading Posts</h3>
            <p>
              Visit authentic market stalls recreating the bustling trade
              centers of ancient Mali.
            </p>
          </div>
          <div className="card">
            <div className="icon">👑</div>
            <h3>Royal Court</h3>
            <p>
              Conclude your journey at the Royal Court, where the emperor holds
              audience and grants honors.
            </p>
          </div>
        </div>
      </section>

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