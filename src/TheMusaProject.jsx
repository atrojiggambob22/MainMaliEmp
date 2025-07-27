import React from "react";
import "./TheMusaProject.css"
import './MaliEmp.css';
import { useNavigate } from 'react-router-dom';
import SecondNav from "./SecondNav"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faBars, faXmark, faDrum, faBuilding, faCrown, faTicket, faPanorama, faBookAtlas, faBook, faLocation, faLocationArrow, faCalendar, faMobile, faMailBulk, faWebAwesome, faGlobe} from '@fortawesome/free-solid-svg-icons';
import { faFacebook } from '@fortawesome/free-brands-svg-icons';
import { faOptinMonster } from '@fortawesome/free-brands-svg-icons/faOptinMonster';
import SlideIn from './SlideIn';
import FadeInSection from "./FadeInSection";
export default function TheMusaProject(){
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

const gotoSecureYourSpot = () => {
    navigate('/SecureYourSpot');
}
const gotoTheMusaProject = () => {
    navigate ('/TheMusaProject')
}
    return(
       <div>
         <SecondNav />
           <nav className='flex gap-20  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8' onClick={goHome}>
                   The Musa Project
                </h1>
                <div className='flex gap-[50px] text-nowrap relative top-[10px] left-[-5px] '>
                    <div className='flex gap-4 relative left-[-3px] w-[50%]' onClick={gotoTheMusaProject}>
                        🌟
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>The Musa Project</li>
                    </div>
                
                    <div className='flex gap-2 relative left-[-2px] w-[59%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>
                    
                     

                   <div className='flex gap-4 relative left-[-3px] w-[41%]' onClick={gotoRoyalFest}>
                        📜
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Court</li>
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

            <div className='FirstMaliSSsub3-Sub2-Content1 FDrum1'>

            <FadeInSection direction="top" delay={0.4}>

            <h3 className='text-[#E6C157] text-[50px] font-bold text-center'>The Musa Project</h3>
            </FadeInSection>
            <FadeInSection direction="bottom" delay={0.4}>

            <p className='Firtsparolunderthecontent1 firstppogthhmusa firstsegofheadd'>
            "Celebration is a stratejy. Joy is Political"
            </p>
            </FadeInSection>
           
        </div>

        <div className="text-center bg-[#facd659c] w-full ">

            <div className="flex flex-col relative left-[25%] mt-[50px] thefisrtsideofmusa">

            <div className="firstofthemh3333 my-[70px] inline-block w-[40%] relative left-[50px]">
                <SlideIn direction="top" delay={0.8}>

                <h3 className="inline-block text-[30px] font-bold  relative left-[20px]">Rooted in Our Rythyms</h3>
                </SlideIn>

                </div>
        <FadeInSection direction="left" delay={0.9}>

            <p className="w-[50%] font-light ">The Musa Project is rooted in a longing to reconnect African cities- especially in West Africa-to their ancestral rhythms and cultural integrity. In a world where globalization often dilutes local traditions, we believe that celebrating our heritage is not just an act of remembrance, but a powerful strategy for cultural resilience and community building.</p>
        </FadeInSection>

            </div>
            
            <div className="flex text-left gap-[30px] relative left-[10%] my-[10px] mb-[10%] mx-[60px]  py-[90px] firstofthemh3333causi">
                <FadeInSection direction="left" delay={0.8}>

                <div className="bg-[#facd659c] inline-block p-[30px]  w-[50%] rounded-[20px] firstofthemh3333causi-sub1" >
                    <h3 className="my-[10px] text-red-900 font-bold text-[20px] ">CULTURAL RESILIENCE</h3>
                    <p className="w-[90%]" >Our festivals serve as living libraries,
                        preserving ancient wisdom while creating space for contemporary  expression and innovation </p>
                </div>
                </FadeInSection>
                <FadeInSection direction="right" delay={0.9}>

                <div className="bg-[#facd659c] inline-block p-[30px]  w-[50%] rounded-[20px] firstofthemh3333causi-sub1">
                    <h3 className="my-[10px]  text-red-900 font-bold text-[20px] ">COMMUNITY BUILDING</h3>
                    <p className="w-[90%]">Through shared celebration, we strengthen the bomd that connect's us accross the generation, creating unity in our diversity</p>
                </div>
                </FadeInSection>


            </div>


        </div>

            <div className=" py-[50px]  bg-[#d2960b9c] text-center ">
                <FadeInSection direction="top" delay={0.5}>

                <div className="firstsegofheadd firstsegofheaddh33head"><h3 className="text-[40px] font-bold">Our Vision</h3></div>

                </FadeInSection>

                <div className="grid grid-cols-3 my-[90px] thefisrtsideofmusa-minicos ">
                    <FadeInSection direction="left" delay={0.4}>

                    <div>
                        <div className="icon rounded-[50%] bg-yellow-600 inline-block p-[20px] px-[25px]"  >🏛️</div>
                        <h3 className="font-bold text-[20px]">PRESERVE HERITAGE</h3>
                        <p className="w-[70%] relative left-[20%] my-[20px]"> Safeguarding the rich cultural traditions of the Mali Empire for future generations
                        through immersive experiences. </p>
                    </div>

                    </FadeInSection>
                    <FadeInSection direction="right" delay={0.6}>

                    <div>
                        <div  className="icon rounded-[50%] bg-red-800 inline-block p-[20px] px-[25px]">🌍</div>
                        <h3 className="font-bold text-[20px]">CONNECT COMMUNITIES</h3>
                        <p className="w-[70%] relative left-[20%] my-[20px]">Bullding briages between Alrican diaspora communues worawide through shared cultural celebration</p>
                    </div>
                    </FadeInSection>
                    <FadeInSection direction="bottom" delay={0.4}>

                    <div>
                        <div  className="icon rounded-[50%] bg-gray-800 inline-block p-[20px] px-[25px]">✨</div>
                        <h3 className="font-bold text-[20px]">INSPIRE INNOVATION</h3>
                        <p className="w-[70%] relative left-[20%] my-[20px]">Blending ancient wisdom with Arroruturist
vision to credle lew torts or cultural expression</p>
                    </div>
                    </FadeInSection>
                </div>
            </div>



    <div className='p-[40px] bg-[#6a2f05] closetothefootofDruZ text-center '>
        <div>
        <h3 className='text-[30px] font-bold my-[30px]'>Join The Movement</h3></div>
        <p  className='text-[#fdd579ae]' >Be part of a cultural renaissance that honors our past while shaping our future. Together, we celebrate the enduring legacy of the Mali Empire. <br />
        experience</p>

                <div className='my-[40px] bg-yellow-400 inline-block px-[40px] py-[10px]'>
                <h3>Experience The Festival</h3>
                </div>
        </div>

         <footer className='relative left-[-18px] w-[110%] '>
                <div className='TheFirstSonofFooter'>
                    <h3 className='m-[10px] text-[40px] font-bold'>The Musa Project</h3>
                </div>
                          <div className='grid grid-cols-2 m-[20px]'>
                            <div>
                            <h3 className='text-[40px] font-bold m-[20px]'>Location</h3>
                            <p></p>

                            </div>
                            <div>
                                <h3 className='font-bold text-[40px]'>Let's Connect</h3>
                                <div className='m-[20px]'>
                                   <p className='m-[10px] font-bold'> <span className='mx-[10px]'>📞</span>  +234 906 144 6848</p>
                                   <p className='m-[10px] font-bold'> <span className='mx-[10px]'>✉️ </span> mathiasonyebuchi13@gmail.com</p>
                                </div>
                            </div>
                          </div>
          </footer>
       </div>
    )
}