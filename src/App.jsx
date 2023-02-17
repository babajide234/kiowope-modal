import { useState } from 'react'
import reactLogo from './assets/react.svg'
import icon from './assets/icon.png'
import './App.css'
import {
  EmailInput, 
  PasswordInput,
  SelectInput
} from './components/Input/Input.jsx'
import {
  IoClose
} from 'react-icons/io5';
import {
  BsQuestionCircle
} from 'react-icons/bs';
import {
  BiDonateHeart
} from 'react-icons/bi';
import { Backbuttons, Buttons, Confirmbuttons } from './components/buttons/buttons'
import { Oval } from 'react-loader-spinner'

export const PopupForm = ({click,load,loading})=>{
  const options = [
    { label: 'Option 1', value: 'option1' },
    { label: 'Option 2', value: 'option2' },
    { label: 'Option 3', value: 'option3' },
  ];
  const handleClick = (e)=>{
    click();
  }
  return(
    <>
        <div className="flex flex-col flex-grow items-center w-full mx-auto border-b border-solid border-gray-200">
          <img src={icon} alt="" className=" w-[150px] h-[150px]" />

          <h2 className=" text-xl text-center text-[#303F9F] font-bold">Reference Code: <br/> QCKHLTH5428</h2>
          <h2 className="text-xl text-center font-bold">Amount: <br/> ₦ 45,500</h2>
        </div>
        <div className="flex flex-col flex-grow w-11/12 mx-auto pt-10">
          <EmailInput 
            label={`email`}
            name={`email`}
            holder={`input your Kiowope  email in here`}
          />
          <PasswordInput
            label={'password'}
            name={'password'}
            holder={'input your password in here'}
          />
          <SelectInput
            label={'Tenure/Repayment Spread'}
            name={'select'}
            holder={'Select Tenure of Loan'}
            options={options}
          />

        </div>
        <div className=" flex-grow  w-10/12 mx-auto">
          <Buttons type='default' click={handleClick} > PROCEED TO CHECKOUT</Buttons>
          <Buttons type='outline'>CANCEL PAYMENT</Buttons>
        </div>
    </>
  )
}

export const PopupConfirm = ({click,load,loading, back})=>{
  const [cancel, setCancel] = useState(true)

  const handleLoad =()=>{
    load();
  }
  const handleCancel =()=>{
    setCancel(false);
  }
  const handleBack =()=>{
    click();
  }
  return(
    <>
        <div className="flex flex-col flex-grow items-center w-full h-screen justify-center">
          {
            cancel && (
              <>
                <span className=" text-7xl text-[#303F9F]">
                  {
                    loading ?
                    <Oval
                      height={80}
                      width={80}
                      color="#303F9F"
                      wrapperStyle={{}}
                      wrapperClass=""
                      ariaLabel='oval-loading'
                      secondaryColor="#303F9F"
                      strokeWidth={2}
                      strokeWidthSecondary={2}
                      visible={true}
                    /> :
                  <BsQuestionCircle/>
                  }
                </span>
                <h2 className=" text-2xl text-center font-semibold mb-4">{loading ?'Processing payment': 'Are you sure you want to cancel this payment?'}</h2>
                <p className=" capitalize text-lg text-gray-500 mb-6">Please do not close this page</p>
                <div className=" flex justify-center w-3/4 mx-auto">
                  {
                    !loading && (
                      <>
                        <Confirmbuttons
                          type={'outline'}
                          click={handleLoad}
                        >Yes</Confirmbuttons>
                        <Confirmbuttons
                          type={'default'}
                          click={handleCancel}
                        >No</Confirmbuttons>
                      </>
                    )
                  }
                </div>
              </>
            )
          }

          {
            !cancel && (
              <>
                <div className="flex items-center w-full pb-7 mb-7 border-b border-solid border-gray-500">
                    <div className=" text-5xl text-gray-700 pr-5">
                        <BiDonateHeart/>
                    </div>
                    <div className=" pl-5 border-l border-solid border-gray-500">
                      <h3 className=" text-xl">To Pay</h3>
                      <h2 className=" text-[#07387C] text-5xl font-semibold">₦ 45,500</h2>
                    </div>
                </div>
                <div className="">
                  <h2 className=" text-red-500 text-3xl font-semibold mb-4">Payment Failed!</h2>
                  <p className=" text-lg text-gray-600 mb-5">Your payment could not be processed.Please try again.</p>
                  <Backbuttons
                    type={'default'}
                    click={handleBack}
                  >
                    Try Again
                  </Backbuttons>
                </div>
              </>
            )
          }
        </div>
    </>
  )
}

function App() {
  const [proceed, setProceed] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleproceed = (e)=>{
      setProceed(!proceed);
      console.log('clicked')
  }
  const handleLoading = (e)=>{
    setLoading(true)
  }
  return (
    <div className="flex flex-col h-screen py-[35px] px-6 relative">
      <span className=" text-3xl flex justify-center items-center w-14 h-14 rounded-full hover:bg-slate-50 absolute right-5 top-5 ">
        <IoClose/>
      </span>
      {
        proceed ? <PopupConfirm click={handleproceed} load={handleLoading} loading={loading}/> :<PopupForm click={handleproceed} load={handleLoading} loading={loading}/>
      }
    </div>
  )
}

export default App
