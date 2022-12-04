import React,{useState} from 'react'
import logo from './Assets/logo.svg'
import femaleImg from './Assets/femaleImg.png'
import { AiOutlineHome } from "react-icons/ai";
import { VscTools } from "react-icons/vsc";
import { MdOutlineNotifications } from "react-icons/md";
import { BsThreeDotsVertical } from "react-icons/bs";
import { AiOutlineMenu } from "react-icons/ai";

const NavBar = () => {
    
    const [margin, setMargin] = useState("ml-[-180px]")
    const handleClick = ()=>{
        if(margin==="ml-[-180px]"){
            setMargin("ml-0")
        }
        else{
            setMargin("ml-[-180px]")
        }
    }
  return (
    <div >
        <nav className='bg-[#FFFF] items-center flex h-[90px]'>
            <div className='ml-[80px]'>
              <img src={logo} alt=""  />
            </div>

            <div className='ml-auto mr-5 flex'>
                <AiOutlineHome className='bg-blue-500 rounded-full font-bold py-2 px-1 mx-4' color='white' size={35}/>
                <VscTools className='bg-blue-500 rounded-full font-bold py-2 px-1 mx-4' color='white' size={35}/>
                <MdOutlineNotifications className='bg-blue-500 rounded-full font-bold py-2 px-1 mx-4' color='white' size={35}/>
                <img src={femaleImg} alt="" className='mx-4'/>
                <BsThreeDotsVertical className='mx-4 mt-2' color='blue' size={25}/>

            </div>
        </nav>

        <div className={`journey-board absolute w-[260px] h-[814px] shadow-2xl top-[205px] ${margin} duration-300`}>
            <div>
                <nav className='bg-black flex text-white p-2 rounded-tr-xl'>
                <h1 className=' text-white   ml-2 font-bold text-xl'>journey Board </h1>
                <AiOutlineMenu size={25} className=" ml-auto cursor-pointer" onClick={handleClick}/>
                </nav>
                <h1 className='my-4 font-bold text-lg ml-3'>1.demo task</h1>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
                <li className='ml-12 my-3 border-b-2  '>task heading 1</li>
            </div>

        </div>
    </div>
  )
}

export default NavBar