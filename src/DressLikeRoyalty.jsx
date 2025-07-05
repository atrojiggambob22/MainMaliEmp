import React from "react";
import './MaliEmp.css';
import SecondNav from "./SecondNav";
import { useNavigate } from 'react-router-dom';
import "./DressLikeRoyal.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
export default function RoyalFest() {

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



const gotoSecureYourSpot = () => {
    navigate('/SecureYourSpot');
}
  return (
    <div>
         <div className="FirstMaliSSsub3-Sub2">
          <SecondNav />
           
          <nav className='flex gap-100  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-yellow-300 text-[20px] font-bold relative left-8'>Dress Like Royalty
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

                   
                    <div className='flex gap-4 relative left-[-3px] w-[60%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
                </nav>

       <div className="FirstMaliSSsub3-Sub2-Content1 text-center FirstofDresRoyal">
         <h3 className="font-bold text-[50px] my-[10px]">Dress Like Royalty</h3>
         <p className="my-[20px] p-[15px] px-[40px] firstsegofheadd">
         " Adorn Your self in the splender of acient Mali "
         </p>
        
      </div>
      
     </div>

        <div className="text-center p-[50px] py-[80px]  bg-[#fcdf9d6f] ">

        <div className="mt-[30px] ">
        <div className=" inline-block p-[10px] mb-[40px]">
            <h3 className="text-[35px] font-bold firstsegofheadd">Royal Waredrope</h3>
        </div>

            <div className="flex relative left-[10%] FirstofDresRoyalSub1 ">
                <div>
                    <h3 className="text-start font-bold text-[25px]  mb-[20px] text-red-700" >For the Emperors</h3>
                    <div className="text-start">
                        <div className="mb-[30px] bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold mb-[15px]">GRAND BOUBOU</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Flowing robes of rich brocade. embroidered with gold thread and adorned wwith precious stones</p>
                        </div>

                        <div className="mb-[30px] bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold  mb-[15px]">ROYAL KENTE</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Handwoven cloth of gold and silk, each pattern telling stories
                            of power and prestige.</p>
                        </div>

                        <div className="mb-[30px] bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold  mb-[15px]">GOLDEN REGALIA</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Crowns, scepters, and jewelry crafted from the finest gold from Bambuk mines</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h3 className="text-start font-bold text-[25px] mb-[20px] text-red-700" >For the Empresses</h3>
                    <div className="text-start">
                        <div className="mb-[30px]  bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold  mb-[15px]">ELEGANT WRAPPER</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Luxurious fabrics draded in traditional styles. showcasing the finest textiles from accross the empire</p>
                        </div>
                        <div className="mb-[30px] bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold  mb-[15px]">ROYAL HEADWRAP</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Elaborate gele and headwraps adorned with gold accessories
                            and precious beads</p>
                        </div>
                        <div className="mb-[30px]  bg-[#fce09dae] px-[40px] p-[10px] w-[70%] rounded-[10px]">
                            <h3 className="font-bold  mb-[15px]" >IMPERIAL JEWELRY</h3>
                            <p className="w-[100%]" style={{fontFamily:"Crimson Text"}}>Necklaces, bracelets, and earrings of gold, coral, and precious stones from distant lands</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>



        </div>

            <div className=" text-center  bg-[#ffc43c7d] p-[20px] ">
                    <div className="mb-[50px]">
                        <h3 className="font-bold text-[30px]">
                            Royal Cosutume Rental
                    </h3>
                    
                    </div>

                    <div className="grid grid-cols-3 mb-[90px] SecondPhaseofcontainer">
                        <div>
                            <div className="bg-yellow-500 inline-block p-[20px] rounded-[50%]">
                                👑
                            </div>
                            <h3 className="font-bold m-[10px]">EMPEROR PACKACE</h3>
                            <p className=" w-[60%]  relative left-[90px]" >Complete your royal ensemble including robes and crown, and accessories</p>

                            <p className="text-[25px] font-[600]">$75/day</p>
                        </div>
                        <div>
                            <div className="bg-red-700 inline-block p-[20px] rounded-[50%]">
                                👸
                            </div>
                            <h3 className="font-bold m-[10px]">EMDRECC PACKAGE</h3>
                            <p className=" w-[60%]  relative left-[90px]">Elegant traditional attire with jewelry and headwrap</p>
                             <p className="text-[25px] font-[600]">$75/day</p>
                        </div>
                        <div>
                            <div className="bg-gray-800 inline-block p-[20px] rounded-[50%]">
                                🏰
                            </div>
                            <h3 className="font-bold m-[10px]">COURT NORIE</h3>
                            <p className=" w-[60%] relative left-[90px]">Sophisticated traditional wear suitable for court member</p>
                             <p className="text-[25px] font-[600]">$45/day</p>
                        </div>
                    </div>


                    <div>
                        <div>
                            <h3 className="font-bold text-[30px] text-red-800">Costume GuidLines</h3>
                        </div>
    
                        <div className="grid grid-cols-2 text-start relative left-[20%] my-[60px] bg-amber-100 p-[50px] w-[70%] rounded-[20px] SecondPhaseofcontainer-889d">
                            <div>
                                <h3 className="font-bold text-[20px]" >Whats included:</h3>
                                <div>
                                    <li  className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Authentic traditional garments</li>
                                    <li className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Matchind acceccories and iowelry</li>
                                    <li className="my-[10px]"v style={{fontFamily:"Crimson Text"}}>Professional Fitting service</li>
                                    <li className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Care and cleaning instructions</li>
                                </div>
                            </div>
                            <div>
                                <h3 className="font-bold text-[20px]">Reservation Info:</h3>
                                <li  className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Advance bookins recommended</li>
                                <li  className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Size Consultation available</li>
                                <li  className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Group discounts for 10+ people</li>
                                <li  className="my-[10px]" style={{fontFamily:"Crimson Text"}}>Photography package add-on</li>
                            </div>
                        </div>
                    </div>
            </div>


            <div className="bg-amber-950 p-[50px] text-center closetothefootofhtedress">
                <h3 className="text-[30px] font-bold text-amber-400 my-[20px]">TRANSFORM INTO ROYALTY</h3>
                <p className="text-[20px] w-[40%] relative left-[30%] text-amber-200 my-[20px]" >Step into the shoes of ancient Mali nobility and experience the festival in authentic style</p>

                <div className="bg-yellow-600 inline-block p-[10px] px-[40px]">
                    <h3>Reserve your costume</h3>
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