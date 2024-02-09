// import { useState } from "react";
import './index.css';
export default function Login() {
//   const [tsize, setTsize] = useState("text-6xl");
  return (
    <>
        <nav className="bg-[#fda300] px-8 py-4">
            <div className="relative flex h-6 items-center justify-between">
                <h1>
                    <b>
                        <div className="text-[28px] tracking-[.0625em] font-['Verdana'] font-[700]">

                            THE HIVE 
                            

                        </div>
                        {/* <sup className="text-[10px] inline-block align-[6px] font-[700]"> BETA</sup> */}
                    </b>



                </h1>
                <a href='#' className='text-right font-bold underline text-[1rem]'>Login</a>

            </div>
        </nav>
        <div className="bg-[#ffffff] text-[#244466] flex flex-row flex-wrap justify-center mt-[50px]">
            <div className="flex-col box-border flex rounded-[5px] border border-solid border-[#D3D3D3] min-w-[400px]">
                
                <nav className="flex-row box-border border-b-[1px] border-solid border-[#0000001f] overflow-hidden relative   h-[48px] inline-flex items-center">
                    <div className="items-center justify-center px-[200px] text-[14px] font-[700] text-[#000000de] opacity-[.6]">Login</div> 
                </nav>      
                
    
                <div className="box-border  block relative p-[16px] rounded justify-center items-center">
                    <form className="flex-col box-border flex mt-0 mb-0 gap-[40px]">
                        <div className='entryarea'>
                            <label htmlFor="uname" className='labelline'> Username </label>
                            <input type="text" id='uname' required />      
                        </div>  
                        <div className='entryarea'>
                            <label htmlFor="pass" className='labelline'> Password </label>
                            <input type="password" id='pass' required />      
                        </div> 
                          
                        <div className='text-center'>
                            (Please use Smart Interviews credentials)      
                        </div>
                          
                          <button>Login</button>  
                          <a href="#">Forgot Username/Password?</a>
                    </form>

                </div>
            </div>
        </div>
      
    </>

        // <div className="flex justify-center items-center w-full h-screen bg-gradient-to-r /*from-teal-200 to-teal-500*/">
        //     <div className=" text-black">
        //     <h1 className={tsize + " font-mono"} onMouseOver={() => setTsize("text-9xl")} onMouseOut={() => setTsize("text-6xl")}>Hello Vignesh!</h1>
        //     </div>
        // </div>
                
        
    
  );
}
