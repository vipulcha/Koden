import React,{useEffect} from 'react'
import HomeBg from '../../images/HomeBg.jpeg'
import "./HomeBody.css";
import { useGlobalContext } from '../../context';
const HomeBody = () => {
  const {result} = useGlobalContext();

  return (
    <div className='bg'>
      <div className='image'> 
      <img src={HomeBg} alt="" />
      </div>
      <div className='welcome'>
        <h1>WELCOME!</h1>
        <h3>Do you feel like switching through various programming websites is a boring and irritating task?</h3>
        <h3>If yes, don't worry, we've got you covered :)</h3>
        <h3>We have tried to create a platform that can be easily used by anyone to track their progress on any of the mentioned programming platforms</h3>
        <h3>Feel free to click on any of the programming website and monitor your progress</h3>
      </div>
    </div>
  )
}

export default HomeBody;