import React from "react";
import './MaliEmp.css';
import SecondNav from './SecondNav';
import { useNavigate } from 'react-router-dom';
import "./SecureYourSpot.css"
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
        
        const gotoDressLikeRoyalty = () => {
            navigate('/DressLikeRoyalty');
        }
        
       
  return (
    <body className="FirstMaliSSsub3-Sub2">
         <SecondNav />

             <nav className='flex gap-[80px]  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#ffc43c7d] text-[20px] font-bold relative left-8' onClick={goHome}>The Musa Project
                </h1>
                 <div className='flex gap-5 text-nowrap relative top-[10px] left-[35%] '>
                   
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

                    <div className='flex gap-4 relative left-[-4px] w-[63%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-2 relative left-[-3px] w-[60%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    
                </div>
                </nav>


    <div className="FirstMaliSSsub3-Sub2-Content1 text-center">
         <h3 className="font-bold text-[50px] my-[10px]"> The Musa Project</h3>
         <p className="my-[20px] p-[15px] px-[40px] firstsegofheadd" style={{fontFamily:"Crimson Text"}}>
         "Join the royal caravan to acient Mali"
         </p>
        
      </div>

    <div className="text-center bg-[#ffe3a3fb]">

    <div className="bg-[#fad37785]">
        <div>
            <h3 className="font-bold text-[50px] firstsegofheadd mt-[50px]">Festival Passes</h3>
        </div>
        <div className="grid grid-cols-3 my-[10%] relative left-[55px] tgecourtroyalcc tgecourtroyalcc58577">
            <div className="border-3 border-gray-400 rounded-[10px] w-[80%] p-[40px] bg-white">
                <div className="bg-yellow-900 inline-block p-[25px]  rounded-[50%]">🎫</div>
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

            <div >
                 <div className="relative left-[-40px] bg-orange-950 inline-block p-[10px] rounded-[20px]  top-[30px]  ">
                    <h3 className="text-amber-200">MOst popular</h3>
                </div>
            <div  className="border-3 border-orange-800 rounded-[10px] w-[80%] p-[40px] bg-white">
               
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

            <div className="border-3 border-gray-400 rounded-[10px] w-[80%] p-[40px] bg-white" >
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

    <div className="">
        <h3 className="text-[40px] font-bold firstsegofheadd my-[50px]">Festival Information</h3>
        <div className="tgecourtroyalcc tgecourtroyalcc1">
            <div className="flex gap-[50px] my-[5%] text-start relative left-[22%] tgecourtroyalcc58577sub4444">
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

    <div className="mt-[10%] bg-[#6a2f05] p-[40px] py-[60px]">
        <h3 className="text-[30px] font-bold text-amber-200 ">DON'T MISS THIS HISTORIC JOURNEY</h3>
        <p className="w-[50%] relative left-[24%] my-[40px] tgecourtroyalcc58577sub4444pp" style={{color:"yellow"}}>Secure your place in the greatest celebration of West African heritage.
Limited capacity ensures an Intimate experience.</p>
<div className="bg-amber-500 inline-block">
    <h3 className="text-[20px] p-[10px] px-[30px]">Purchase ticket now</h3>
</div>
    </div>

    </div>



     <footer className='relative left-[-18px] w-[110%] '>
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'  >The Musa Project</h3>
                    <div className='w-[80%]'>

                    <p className='m-[10px]  text-[30px]' style={{fontFamily:"Crimson Text"}}>The Musa Project is more than a festival  it’s a living tribute to the legacy of the Mali Empire and the golden age of West Africa. Through storytelling, traditional music, fashion, food, and architecture, we bring history to life and reconnect communities with the greatness that once defined an empire. From the epic of Sundiata to the rhythm of the drums and the spices of the royal feast, every detail is crafted to honor our roots and inspire a new generation. Join the journey. Remember the empire. Celebrate the spirit.</p>
                    </div>
                </div>
                          <div className='grid grid-cols-2 m-[15px] seondphase0ffoot'>
                            <div className='footerMiddlesec'>
                            <h3 className='text-[40px] font-bold m-[20px]'>Location</h3>
                            <p className='w-[50%] m-[20px]  text-[20px]'>Centre Culturel Kôrè de Ségou
Rue 12, Quartier Sido Sonikoura
BP 62, Ségou, Mali</p>

                            </div>
                            <div>
                                <h3 className='font-bold text-[40px]'>Let's Connect</h3>
                                <div className='m-[15px]'>
                                   <p className='m-[10px] font-bold  text-[20px]'> <span className='mx-[10px]'>📞</span>  +234 906 144 6848</p>
                                   <p className='m-[10px] font-bold text-nowrap text-[13px]' style={{fontSize:"13px"}}> <span className='mx-[10px]'>✉️ </span> mathiasonyebuchi13@gmail.com</p>
                                </div>
                            </div>
                          </div>
          </footer>
    </body>
  );
}