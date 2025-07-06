import React from "react";
import './MaliEmp.css';
// import "./RoyalCourt.css"
import { useNavigate } from 'react-router-dom';
import SecondNav from "./SecondNav"
import "./RoyalFest.css"
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

            <nav className='flex gap-10  text-nowrap w-full py-[10px] px-[14px] cursor-pointer '>
                <h1 className='text-[#D4A437] text-[25px] font-bold relative left-8'>
                    The Musa Project
                </h1>
                <div className='flex gap-2 text-nowrap relative top-[10px] left-[10%] '>
                    <div className='flex gap-4 relative left-[-3px] w-[41%]' onClick={gotoTheMusaProject}>
                        🌟
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>The Musa Project</li>
                    </div>
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
                        📜
                        {/* <FontAwesomeIcon icon={faOptinMonster}/> */}
                        <li>Royal Coutr</li>
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
            <h3 className='text-[#E6C157] text-[60px] font-bold text-center'>Explore the festival</h3>
            <p className='Firtsparolunderthecontent1 firstsegofheadd'>
            "Where the past and future of Africa meet"
            </p>
           
        </div>
        <div className="text-center ">
            <div className=" py-[90px]">
            <div className="firstsegofheadd mb-[40px] rounded-[10px]"><h3 className="font-bold  text-[40px] ">A living city</h3></div>
            <div className="flex gap-[30px] relative left-[20%]">
            <p className="w-[30%] text-left text-[20px]" style={{fontFamily:"Crimson Text"}}>
                At the heart of our festival lies a grand central plaza, inspired by the great gathering spaces of acient Mali. Here, visitors from all works of life coverage, just as merchants, schorlas and pilgrims once did in golden cities of West Africa.
                <br />
                <br />
                Streets radiats outwards,lined with magnificent mudbrick achetecture that echo's the granduer of Timbuktu. Our main amphitheather, remnincent if the legendary Djinguereber Mosque, Serves as the beating heart where the most spectacular perfomrances unfold
            </p>
            <div className=" bg-amber-700 px-[80px] py-[20px] rounded-[20px] h-[10%] relative top-[60px]">
                <div className="text-[50px] ">
                🏛️

                </div>
                <div className="p-[20px]">
                    <h3 className="text-[30px] font-[500]">Grand Central PLaza</h3>
                    <div className="flex gap-[80px]">
                    <div className="text-[30px]">🕌</div>
                    <div className="text-[30px]">🏪</div>
                    <div className="text-[30px]">🎭</div>

                    </div>
                </div>
            </div>

            </div>
            </div>

            <div className="py-[50px]">
                <div className="firstsegofheadd my-[40px]"><h3 className="text-[50px]">Walk through history</h3></div>
                <div className="grid grid-cols-4 firstsetofthefeatsfest">
                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">⚔️</div>
                        <div>
                            <h3>Military</h3>
                            <p>Warriors quaters with training grounds and armor displays</p>
                        </div>
                    </div>

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">📚</div>
                        <div>
                            <h3>Education</h3>
                            <p>Hall of echoing acient Timbuktu's scholarship</p>
                        </div>
                    </div>

                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">🏪</div>
                        <div>
                            <h3>Trade</h3>
                            <p>Bursting Marketplaces for salt and gold marchants</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub1">
                        <div className="icon">🕌</div>
                        <div>
                            <h3>Spiritual life</h3>
                            <p>Sacred Spaces where ancestors speak through mask</p>
                        </div>
                    </div>
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
                    <div className="firstsetofthefeatsfestsub2">
                        <div>🔨</div>
                        <div>
                            <h3>Blacksmiths</h3>
                            <p>Black/Gold Armband</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">👑</div>
                        <div>
                            <h3>Royalty</h3>
                            <p>Purple Sash</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🎭</div>
                        <div>
                            <h3>Spiritualist</h3>
                            <p>Sacred Tattoo</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">📜</div>
                        <div>
                            <h3>Scholars</h3>
                            <p>Wisdom Token</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🐪</div>
                        <div>
                            <h3>Tuareg Traders</h3>
                            <p>Gold Chain</p>
                        </div>
                    </div>
                    <div className="firstsetofthefeatsfestsub2">
                        <div className="icon">🌾</div>
                        <div>
                            <h3>Common People</h3>
                            <p>Yellow Band</p>
                        </div>
                    </div>
                </div>

                <div className="py-[14%] bg-amber-200 ">
                    <div><h3>Unluck Hidden Worlds</h3></div>
                    <div className="firstsetofthefeatsfestSub33">

                    <div className="firstsetofthefeatsfestSub33-Sub1">
                        <p>General admission grants you a <span className="text-yellow-400">yellow band </span> and access to the wonders of Mali. But seek out our actors throughout the festival -- they hold special key's that unluck depper, more intimate experiences</p>
                    </div>
                    <div className="text-left grid grid-cols-3 gap-[30px]">
                         <div className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🔨</div>
                        <div>
                            <h3>Blacksmiths</h3>
                            <p>Black/Gold Armband</p>
                        </div>
                    </div>

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">👑</div>
                        <div>
                            <h3>Royalty</h3>
                            <p>Purple Sash</p>
                        </div>
                    </div>

                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🎭</div>
                        <div>
                            <h3>Spiritualist</h3>
                            <p>Sacred Tattoo</p>
                        </div>
                    </div>
                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">📜</div>
                        <div>
                            <h3>Scholars</h3>
                            <p>Wisdom Token</p>
                        </div>
                    </div>
                    <div  className="firstsetofthefeatsfestSub33-Sub2">
                        <div className="icon">🐪</div>
                        <div>
                            <h3>Tuareg Traders</h3>
                            <p>Gold Chain</p>
                        </div>
                    </div>
                    </div>

                    </div>
                </div>

                <div className="firstsetofthefeatsfestSub44">
                    <div><h3>Expect the extra odinary</h3></div>
                    <div className="grid grid-cols-3">
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎵</div>
                            <h3>Groit Storytellers</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎭</div>
                            <h3>Masquerades</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>👑</div>
                            <h3>Musa's Royal Return</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🏪</div>
                            <h3>Market Stalls</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🍽️</div>
                            <h3>Culinary Tastings</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎲</div>
                            <h3>Game and Division</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🌿</div>
                            <h3>Herbalist</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🥁</div>
                            <h3>Music & Dance</h3>
                        </div>
                        <div className="firstsetofthefeatsfestSub44-Sub1">
                            <div>🎨</div>
                            <h3>Face Painting</h3>
                        </div>
                    </div>
                </div>

                <div className="text-left">
                    <div>
                        <h3>Watch out for S.I.A.M</h3>

                    </div>
                    <p className="w-[70%]"><strong>Suprising Interactive Audience Moments</strong> that pull you into the story. You might find yourself chosen to join a royal procession witness a sacred ritual, or become part of an acient tale</p>
                </div>

                  <div className=" bg-[#6a2f05] p-[40px] py-[60px] text-center">
                        <h3 className="text-[30px] font-bold text-amber-500 ">Follow Our Journey</h3>
                        <p className="w-[50%] relative left-[24%] my-[10px] mb-[40px] tgecourtroyalcc58577sub4444pp" style={{color:"#fdd579ae",fontFamily:"Crimson Text", fontSize:'25px'}} >Or follow along as we preapare the magic</p>
                    <div className="bg-amber-500 inline-block border-2 border-amber-800">
                        <h3 className="text-[20px] p-[10px] px-[30px]">"N ka kent — may joy guide your steps."</h3>
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
                        <h3 className='my-[20px] text-[20px] font-bold  firstsegofheadd'>Festival Element</h3>
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
                            <h3 className='my-[20px] text-[20px] font-bold firstsegofheadd'>Join The Caravan</h3>
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
        </div>
    )
}