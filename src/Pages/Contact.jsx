
import "../Style/Contact.css"
import { BsEnvelope } from "react-icons/bs";
import { IoPhonePortraitOutline } from "react-icons/io5";
const Contact = () => {
  return (
    <div className="contact text-gray-200">
        <div className="">
          <h1 className="text-[20rem] text-center px-6">Contact</h1>
          <div className="flex space-x-3 items-center text-xl justify-center text-gray-300">
            <span><BsEnvelope/></span>
            <p>akashkumar26858@gmail.com</p>
          </div>
          <div className="flex space-x-3 items-center text-xl justify-center text-gray-300">
            <span><IoPhonePortraitOutline/></span>
            <p>9871849243</p>
          </div>
        </div>
    </div>
  )
}

export default Contact