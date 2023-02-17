import React from 'react'

export const Buttons = ({
    type,
    click,
    children
}) => {

  const handleClick = (e)=>{
    e.preventDefault();
    click()
  }
  return (
    <>
        <a href="" className={`
            flex
            justify-center
            items-center
            py-5
            px-2
            rounded-lg
            mb-5
            font-semibold
            ${type == 'default' && ' bg-[#09397C] text-white ' }
            ${type == 'outline' && ' border border-solid border-[#09397C] text-[#09397C]' }
        `} onClick={handleClick}>{children}</a>
    </>
  )
}



export const Confirmbuttons = ({children,type,click}) => {
  const handleClick = (e)=>{
    e.preventDefault()
    click();
  }
  return (
    <a href="#" className={`
        flex justify-center items-center py-4 px-5 rounded-lg mb-5 text-xl font-semibold last-of-type:mr-0 mr-10
        ${type == 'default' && ' bg-[#FCE444] text-black ' }
        ${type == 'outline' && ' border border-solid border-[#09397C] text-[#09397C]' }
    `} onClick={handleClick}>{children}</a>
  )
}
export const Backbuttons = ({children,type,click}) => {
  const handleClick = (e)=>{
    e.preventDefault()
    click();
  }
  return (
    <a href="#" className={`
        flex justify-center items-center w-full py-4 px-5 rounded-lg mb-5 text-xl font-semibold last-of-type:mr-0 mr-10
        ${type == 'default' && ' bg-[#FCE444] text-black ' }
        ${type == 'outline' && ' border border-solid border-[#09397C] text-[#09397C]' }
    `} onClick={handleClick}>{children}</a>
  )
}

