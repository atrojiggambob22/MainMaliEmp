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
    navigate('/RoyalCourt');
} 



const gotoSecureYourSpot = () => {
    navigate('/SecureYourSpot');
}
  return (
    <div>
         <div className="FirstMaliSSsub3-Sub2">
          <SecondNav />
           
          <nav className='flex gap-[80px]  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#ffc43c7d] text-[20px] font-bold relative left-8' onClick={goHome}>The Musa Project
                </h1>
                  <div  className='grid grid-cols-7  gap-4 text-nowrap relative top-[10px] left-[30%] '>
                   
                    <div className='flex relative' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                       
                        <li>Festival Drumbeat</li>
                    </div>

                    <div className='flex relative left-[20px]' onClick={gotoRoyalFest}>
                        🍯
                      
                        <li>Royal Fest</li>
                    </div>

                    <div className='flex relative ' onClick={gotoTheGoldenRoute}>
                        🏛️
                       
                        <li>The Golden Route</li>
                    </div>

                   
                    <div className='flex relative left-[50px]' onClick={gotoSecureYourSpot}>
                      
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
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'  >The Musa Project</h3>
                    <div className='w-[80%]'>

                    <p className='m-[10px] ' style={{fontFamily:"Crimson Text"}}>The Musa Project is more than a festival  it’s a living tribute to the legacy of the Mali Empire and the golden age of West Africa. Through storytelling, traditional music, fashion, food, and architecture, we bring history to life and reconnect communities with the greatness that once defined an empire. From the epic of Sundiata to the rhythm of the drums and the spices of the royal feast, every detail is crafted to honor our roots and inspire a new generation. Join the journey. Remember the empire. Celebrate the spirit.</p>
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
    </div>
   
  );
}