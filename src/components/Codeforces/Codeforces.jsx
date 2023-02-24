<<<<<<< HEAD
import React,{useEffect} from 'react'
import './Codeforces.css'
import { useGlobalContext } from '../../context';
import NavBar from '../Navbar/Navbar.jsx'
const Codeforces=()=>{
  const {result} = useGlobalContext();
  return (
    <div className='cf'>
    <NavBar/>
    <div className="table">
    <div className='cfUpcomingTableHeading'>RECENT CODEFORCES CONTESTS</div>
      {result.slice(0,5).map((curPost) =>{
        const { id, name } = curPost;
        const contestLink = `https://codeforces.com/contest/${curPost.id}`;
        return (
          <div className='contests'>
          <h2 className='cheading'>{name}</h2>
          <a href={contestLink} >{contestLink}</a>
          </div>
          
          )
      })}     
    </div>
    </div>
  )
}

export default Codeforces;
=======
import React from 'react'

export default function Codeforces() {
  return (
    <div>
      cp crow
    </div>
  )
}
>>>>>>> refs/remotes/origin/main
