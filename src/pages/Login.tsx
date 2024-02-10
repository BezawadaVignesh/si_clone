import { useState } from "react";
import './index.css';


function InputField({ inpID, labelName, inpType }: { inpID: string, labelName: string, inpType: string }) {
    const [inpErr, setInpErr] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [inpValue, setInputValue] = useState("");
    return (
        <>
            <div className="input-container">
                <label htmlFor={inpID}
                    className={'input-label ' + (isFocused || inpValue ? 'input-label-focused' : '') +
                        (inpErr ? 'input-label-error' : '')}>
                        {labelName} </label>

                <input type={inpType} className={"input-field " + (inpErr ? 'input-error' : '')} id={inpID}
                    onFocus={() => setIsFocused(true)} onBlur={() => setIsFocused(false)} 
                    onChange={(e) => setInputValue(e.target.value) } onBlurCapture={() => setInpErr(true)} required />
            </div>
        </>
    )



}


function NavBar() {
    return (
        <nav className="bg-[#fda300] px-[32px] py-[16px] box-border ">
            <div className="flex box-border w-[100%]  mx-auto h-6 items-center justify-between">       
                <div className="text-[28px] tracking-[1px] font-['Verdana'] font-[700]">
                    THE HIVE <sup className=' text-[10px] top-0 font-sans tracking-[1px] font-bold  align-super '>BETA</sup>  
                </div>
                <a href='#' className='text-right font-bold underline text-[1rem]'>Login</a>
            </div>
        </nav>
    )
}


function LoginForm() {
    return (
        <form className="flex-col box-border flex mt-0 mb-0 gap-[40px]">
            <InputField labelName="Username" inpID="uname" inpType="text"/>
            <InputField labelName="Password" inpID="pass" inpType="password" />
            <div>

            <div className="text-center pb-3">
                (Please use Smart Interviews credentials)
            </div>
            <button className="w-full">Login</button>
            </div>
            <a href="#" >Forgot Username/Password?</a>
        </form>
    )
}

export default function Login() {
    return (
        <>
            <NavBar/>
            <div className="bg-[#ffffff] text-[#244466] flex flex-row flex-wrap justify-center mt-[50px]">
                <div className="flex-col box-border flex rounded-[5px] border border-solid border-[#D3D3D3]  w-[400px]">
                    <nav className="flex-row box-border border-b-[1px] border-solid border-[#0000001f] overflow-hidden relative w-full  h-[48px] inline-flex items-center">
                        <div className="items-center relative justify-center px-[182px] text-[14px] w-full font-[700] text-[#000000de] opacity-[.6]">Login</div> 
                    </nav>      
                    <div className=" block relative p-[16px] flex-[0_0_auto] rounded justify-center min-w-[300px] max-w-[420px] items-center">
                        <LoginForm/>
                    </div>
                </div>
            </div>
        
        </>
        
    );
}
