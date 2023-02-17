import React,{ useState } from 'react'
import {
    FaEye,
    FaEyeSlash
} from 'react-icons/fa';
import {
    TiArrowSortedDown,
    TiArrowSortedUp
} from 'react-icons/ti';
export const  EmailInput = ({label,name,holder,type}) => {
  return (
    <>
    <div className=" flex flex-col w-full mb-5">
        <label htmlFor={name} className=" mb-1 capitalize font-semibold text-xl pl-5">{label}</label>
        <div className=" w-full border border-solid border-[#07387C] rounded-lg overflow-hidden">
            <input type="email" name={name} className=" w-full px-6 py-4 border-none outline-none" placeholder={holder} />
        </div>
    </div>
    </>
  )
}

export const PasswordInput = ({label,name,holder}) => {
    const [show, setShow] = useState(false)
    return (
      <div className=" flex flex-col w-full mb-5">
          <label htmlFor={name} className=" mb-1 capitalize font-semibold text-xl pl-5">{label}</label>
          <div className=" flex items-center px-6 py-4 w-full border border-solid border-[#07387C] rounded-lg overflow-hidden">
              <input type={ show ? 'text':'password'} name={name} className=" w-full  border-none outline-none" placeholder={holder} />
              <span className=" text-2xl text-[#0C3B7B] " onClick={(e) => setShow(!show)}>
                {show ? <FaEye/> : <FaEyeSlash/>}
              </span> 
          </div>
      </div>
    )
}
  

export const SelectInput =({name,holder,label,options})=>{
    const [dropdown, setDropdown] = useState(false);
    const [selected, setSelected] = useState('');

    const selectoption = (e) =>{
        console.log(e);
        setSelected(e);
        setDropdown(false);
    }
    return(
        <div className=" flex flex-col w-full mb-5 relative">
            <label htmlFor={name} className=" mb-1 capitalize font-semibold text-xl  pl-5">{label}</label>
            <div className=" flex items-center px-6 py-4 w-full border border-solid border-[#07387C] rounded-lg overflow-hidden">
                {/* <input type={ dropdown ? 'text':'password'} name={name} className=" w-full  border-none outline-none" placeholder={holder} /> */}
                <div className={`w-full capitalize ${selected != '' ? 'text-[#07387C] text-xl':'text-gray-400' } `}>
                    { selected != '' ? selected : holder}
                </div>
                <span className=" text-2xl py text-[#0C3B7B] " onClick={(e) => setDropdown(!dropdown)}>
                    {dropdown ? <TiArrowSortedUp/> : <TiArrowSortedDown/>}
                </span> 
            </div>
            <div className={`w-full min:h-20 border flex flex-col border-solid border-gray-300 rounded-lg absolute transition-all ease-in-out bg-white top-24 z-50 ${dropdown ? '':' h-0 hidden'}`}>
                {
                    options.map(item => (
                        <>
                            <span 
                                key={item.value}
                                className=" block w-full px-2 py-3 hover:bg-slate-50 text-[#0C3B7B] font-semibold" 
                                onClick={()=> selectoption(item.value)}
                            >
                                {item.label}
                            </span>
                        </>
                    ))
                }
            </div>
        </div>
    )
}