import React from "react";
import './MaliEmp.css';
// import "./RoyalCourt.css"
import { useNavigate } from 'react-router-dom';
import SecondNav from "./SecondNav"
import "./RoyalFest.css"
import BounceIn from './BounceIn';
import FadeInSection from "./FadeInSection";
import SlideIn from './SlideIn';
export default function RoyalFest(){
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
             <div className='seconnav'>
           

            <SecondNav />

            </div>
            <div>

            <nav className='flex gap-[40px]  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8' onClick={goHome}>
                    The Musa Project
                </h1>
                <div className='flex gap-5 text-nowrap relative top-[10px] left-[10%] '>
                    <div className='flex gap-4 relative left-[-3px] w-[68%]' onClick={gotoTheMusaProject}>
                        🌟
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>The Musa Project</li>
                    </div>
                  
                    <div className='flex gap-2 relative left-[-2px] w-[65%]' onClick={gotoFestivalDrumbeatPage}>
                        🥁
                        {/* <FontAwesomeIcon icon={faDrum}/> */}
                        <li>Festival Drumbeat</li>
                    </div>
                    
                     

                    <div className='flex gap-4 relative left-[-3px] w-[52%]' onClick={gotoRoyalFest}>
                        📜
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Court</li>
                    </div>

                    <div className='flex gap-4 relative left-[-4px] w-[70%]' onClick={gotoTheGoldenRoute}>
                        🏛️
                        {/* <FontAwesomeIcon icon={faBuilding}/> */}
                        <li>The Golden Route</li>
                    </div>

                    <div className='flex gap-2 relative left-[-3px] w-[66%]' onClick={gotoDressLikeRoyalty}>
                        {/* <FontAwesomeIcon icon={faCrown} style={{color:'gold'}}/> */}
                        👑
                        <li>Dress Like Royalty</li>
                    </div>
                    <div className='flex gap-4 relative left-[-3px] w-[65%]' onClick={gotoSecureYourSpot}>
                        {/* <FontAwesomeIcon icon={faTicket}/> */}
                        🎫
                        <li>Secure Your Spot</li>
                    </div>
                </div>
             </nav>

               

             <div className='FirstMaliSSsub3-Sub2-Content1 FDrum1'>
                 <FadeInSection direction="top">
            <h3 className='text-[#E6C157] text-[60px] font-bold text-center'>Explore the festival</h3>
            <p className='Firtsparolunderthecontent1 firstsegofheadd'>
            "Where the past and future of Africa meet"
            </p>
             </FadeInSection>
            </div>
              
         <div className="text-center ">
            <div className=" py-[90px] bg-[#b5760069]">
                <BounceIn delay={0.8}>

            <div className="firstsegofheadd mb-[40px] rounded-[10px]"><h3 className="font-bold  text-[40px] ">A living city</h3></div>
                </BounceIn>

            <div className="flex gap-[30px] relative left-[20%] THefirstoftjefesrtivaldjfjf">
               
            <p className="w-[30%] text-left text-[20px]" style={{fontFamily:"Crimson Text"}}>
                At the heart of our festival lies a grand central plaza, inspired by the great gathering spaces of acient Mali. Here, visitors from all works of life coverage, just as merchants, schorlas and pilgrims once did in golden cities of West Africa.
                <br />
                <br />
                Streets radiats outwards,lined with magnificent mudbrick achetecture that echo's the granduer of Timbuktu. Our main amphitheather, remnincent if the legendary Djinguereber Mosque, Serves as the beating heart where the most spectacular perfomrances unfold
            </p>
            
            <div className=" bg-amber-600 px-[80px] py-[20px] rounded-[20px] h-[10%] relative top-[60px] granddcentral">
                <div className="text-[50px] granddcentral1 ">
                🏛️

                </div>
                <div className="p-[20px]">
                    <h3 className="text-[30px] font-[500]">Grand Central PLaza</h3>
                    <div className="flex gap-[80px] granddcentral2">
                    <div className="text-[30px]">🕌</div>
                    <div className="text-[30px]">🏪</div>
                    <div className="text-[30px]">🎭</div>

                    </div>
                </div>
            </div>

            </div>
            </div>
        <div className="bg-[#b07c1ab3]">

            <div className="py-[50px]">
                <div className="firstsegofheadd my-[40px] firstsegofheaddwalk"><h3 className="text-[50px]">Walk through history</h3></div>
                <div className="grid grid-cols-4 firstsetofthefeatsfest">
                    <FadeInSection direction="right" duration={0.2} >

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">⚔️</div>
                        <div>
                            <h3>Military</h3>
                            <p>Warriors quaters with training grounds and armor displays</p>
                        </div>
                    </div>
                    </FadeInSection>

                 <FadeInSection direction="left" duration={0.4} >

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">📚</div>
                        <div>
                            <h3>Education</h3>
                            <p>Hall of echoing acient Timbuktu's scholarship</p>
                        </div>
                    </div>
                 </FadeInSection>

                 <FadeInSection direction="top" duration={0.6} >

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">🏪</div>
                        <div>
                            <h3>Trade</h3>
                            <p>Bursting Marketplaces for salt and gold marchants</p>
                        </div>
                    </div>
                 </FadeInSection>
                     <FadeInSection direction="bottom" duration={0.8} >

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">🕌</div>
                        <div>
                            <h3>Spiritual life</h3>
                            <p>Sacred Spaces where ancestors speak through mask</p>
                        </div>
                    </div>
                     </FadeInSection>
                </div>
            </div>
                <div className="flex gap-5 justify-center py-[40px]">
                    <div>⭐️</div>
                    <div className="goldenLine"></div>
                    <div>🥁</div>
                    <div className="goldenLine"></div>
                    <div>⭐️</div>
                </div>


                <div className="grid grid-cols-3 gap-[30px] firstsetofthefeatsfestsub2cheife">
                     <FadeInSection direction="bottom" duration={0.4} >

                    <div className="firstsetofthefeatsfestsub2">
                        <div>🔨</div>
                        <div>
                            <h3>Blacksmiths</h3>
                            <p>Black/Gold Armband</p>
                        </div>
                    </div>
                     </FadeInSection>

                     <FadeInSection direction="right" duration={0.6} >

                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">👑</div>
                        <div>
                            <h3>Royalty</h3>
                            <p>Purple Sash</p>
                        </div>
                    </div>
                     </FadeInSection>
                     <FadeInSection duration={0.5} direction="left">

                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🎭</div>
                        <div>
                            <h3>Spiritualist</h3>
                            <p>Sacred Tattoo</p>
                        </div>
                    </div>
                     </FadeInSection>
                      <FadeInSection direction="top" duration={0.2} >

                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">📜</div>
                        <div>
                            <h3>Scholars</h3>
                            <p>Wisdom Token</p>
                        </div>
                    </div>
                      </FadeInSection>
                       <FadeInSection direction="right" duration={0.2} >

                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🐪</div>
                        <div>
                            <h3>Tuareg Traders</h3>
                            <p>Gold Chain</p>
                        </div>
                    </div>
                       </FadeInSection>
                        <FadeInSection direction="left" duration={0.2} >

                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🌾</div>
                        <div>
                            <h3>Common People</h3>
                            <p>Yellow Band</p>
                        </div>
                    </div>
                        </FadeInSection>
                </div>
        </div>

                <div className="py-[14%] bg-amber-100 ">
                    <SlideIn duration={0.5} direction="bottom">

                    <div className="firstofthemh3333"><h3 className="font-bold text-[30px]">Unluck Hidden Worlds</h3></div>
                    </SlideIn>
                    <div className="firstsetofthefeatsfestSub33">

                    <div className="firstsetofthefeatsfestSub33-Sub1">
                        <p>General admission grants you a <span className="text-yellow-400">yellow band </span> and access to the wonders of Mali. But seek out our actors throughout the festival -- they hold special key's that unluck depper, more intimate experiences</p>
                    </div>
                    <div className="text-left grid grid-cols-3 gap-[30px] firstsegofheaddGEneral">
                        <FadeInSection duration={0.7} direction="right">

                         <div className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🔨</div>
                        <div>
                            <h3>Blacksmiths</h3>
                            <p>Black/Gold Armband</p>
                        </div>
                    </div>
                        </FadeInSection>

                    <FadeInSection duration={0.8} direction="bottom">

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">👑</div>
                        <div>
                            <h3>Royalty</h3>
                            <p>Purple Sash</p>
                        </div>
                    </div>

                    </FadeInSection>

                    <FadeInSection duration={0.5} direction="left">

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🎭</div>
                        <div>
                            <h3>Spiritualist</h3>
                            <p>Sacred Tattoo</p>
                        </div>
                    </div>
                    </FadeInSection>
                    <FadeInSection duration={0.5} direction="top">

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">📜</div>
                        <div>
                            <h3>Scholars</h3>
                            <p>Wisdom Token</p>
                        </div>
                    </div>
                    </FadeInSection>

                     <FadeInSection duration={0.5} direction="right">

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🐪</div>
                        <div>
                            <h3>Tuareg Traders</h3>
                            <p>Gold Chain</p>
                        </div>
                    </div>
                     </FadeInSection>
                    </div>

                    </div>
                </div>

                <div className="bg-[#facf7edc]">

                <div className="firstsetofthefeatsfestSub44">
                     <FadeInSection duration={0.5} direction="top">

                    <div className="firstofthemh3333"><h3 className="text-[30px] font-bold">Expect the Extraodinary</h3></div>
                     </FadeInSection>

                    <div className="grid grid-cols-3 thridphaseofthemsections">
                         <FadeInSection duration={0.5} direction="left">

                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎵</div>
                            <h3>Groit Storytellers</h3>
                        </div>
                         </FadeInSection>
                          <FadeInSection duration={0.5} direction="right">

                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎭</div>
                            <h3>Masquerades</h3>
                        </div>

                          </FadeInSection>

                           <FadeInSection duration={0.5} direction="bottom">

                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>👑</div>
                            <h3>Musa's Royal Return</h3>
                        </div>
                           </FadeInSection>

                            <FadeInSection duration={0.5} direction="top">


                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🏪</div>
                            <h3>Market Stalls</h3>
                        </div>
                            </FadeInSection>

                             <FadeInSection duration={0.5} direction="left">


                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🍽️</div>
                            <h3>Culinary Tastings</h3>
                        </div>
                             </FadeInSection>


                              <FadeInSection duration={0.5} direction="right">

                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎲</div>
                            <h3>Game and Division</h3>
                        </div>
                              </FadeInSection>

                               <FadeInSection duration={0.5} direction="bottom">


                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🌿</div>
                            <h3>Herbalist</h3>
                        </div>
                               </FadeInSection>

                              <FadeInSection duration={0.5} direction="left">
                                
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🥁</div>
                            <h3>Music & Dance</h3>
                        </div>
                                </FadeInSection>  

                                 <FadeInSection duration={0.5} direction="top">


                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎨</div>
                            <h3>Face Painting</h3>
                        </div>
                                 </FadeInSection>
                    </div>
                </div>

                <div className="text-left p-[20px] bg-amber-100 w-[70%] rounded-[15px] relative top-[-130px] left-[220px] subsecunderthesub44">
                    <div className="m-[10px]">
                         <FadeInSection duration={0.5} direction="left">
                             <h3 className="text-red-600 font-bold text-[22px]">Watch out for S.I.A.M</h3>
                         </FadeInSection>
                       

                    </div>
                     <FadeInSection duration={0.5} direction="right">

                    <p className="w-[90%] "><strong>Suprising Interactive Audience Moments</strong> that pull you into the story. You might find yourself chosen to join a royal procession witness a sacred ritual, or become part of an acient tale</p>
                     </FadeInSection>
                </div>
                </div>

                <div className="text-center align-middle p-[50px] bg-amber-950">
                    <div className="my-[10px]">
                        <h3 className="text-[30px] firstsegofheadd font-bold">Spirit In All Things</h3>
                    </div>
                    <div className="my-[10px] text-amber-200  relative left-[28%] tgecourtroyalcc58577sub4444pp667 ">
                        <p className="w-[600px] tgecourtroyalcc58577sub4444pp6677">"In Musa, life pulses through every drum, mask, every street Magic is a given not a question"</p>
                    </div>
                    <div className="flex justify-center gap-[20px] my-[30px]">
                        <p className="text-[30px]">⭐️</p>
                        <p className="text-[30px]">🌟</p>
                        <p className="text-[30px]">✨</p>
                        <p className="text-[30px]">⭐️</p>
                        <p className="text-[30px]">🌟</p>
                    </div>
                </div>
                  <div className=" bg-[#6a2f05] p-[40px] py-[60px] text-center">
                        <h3 className="text-[30px] font-bold text-amber-500 ">Join The Caravan</h3>
                        <p className="w-[50%] relative left-[24%] my-[10px] mb-[40px] tgecourtroyalcc58577sub4444pp tgecourtroyalcc58577sub4444pp66776" style={{color:"#fdd579ae",fontFamily:"Crimson Text", fontSize:'25px'}} >Sign Up to receive festival updates and begin your journey into the golden age of West Africa</p>
                    <div className="bg-amber-500 inline-block border-2 border-amber-800">
                        <h3 className="text-[20px] p-[10px] px-[30px] font-bold">Join The Caravan</h3>
                    </div>
                    <p className="my-[20px] text-amber-200">Begin your Journey into the wonders of the mali empire</p>
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

            </div>
        </div>
    )
}