import { useState } from "react";
import logo from "../assets/Dog img/viktor-forgacs-MGVLBuXS6Ic-unsplash.jpg";
import dog from "../assets/Dog img/anoir-chafik-2_3c4dIFYFU-unsplash.jpg";
import dog1 from "../assets/Dog img/matthew-henry-2Ts5HnA67k8-unsplash.jpg";
import dog2 from "../assets/Dog img/caleb-fisher-pgUbpDLJh3E-unsplash.jpg";
import dog3 from "../assets/Dog img/mike-burke-gxyfJQg7Lno-unsplash.jpg";
import dog4 from "../assets/Dog img/andrew-pons-oH9AuO20kbk-unsplash.jpg";
import PropTypes from 'prop-types';

export default function Dog ({
    email,
    onChangeEmail,
    onSubmitEmail,
}) {
    const [error, setError] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;/^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    }

    const submitEmail = (e) => {
        e.preventDefault();
        if (!email || !validateEmail(email)) {setError(`Provide a valid email`);
        return
        };


        setError(null);
        onSubmitEmail();

    }

    
    return(
        <div className="min-h-screen bg-white">
           <header className="flex justify-between items-center py-3 px-4 bg-indigo-500">
                <div>
                    <img className="w-12 h-12" src={logo} alt="" />
                </div>

                <ul className="hidden md:flex space-x-10 items-center">
                    <li><a className="head-mark" href="#">Home</a></li>
                    <li><a className="head-mark" href="#">About</a></li>
                    <li><a className="head-mark" href="#">Contact</a></li>
                    <li><a className="head-mark" href="#">Address</a></li>
                </ul>

                <ol className="hidden md:flex space-x-8 items-center">
                    <li><button type="button" className="text-blue-200 text-lg font-semibold">Login</button></li>
                    <li><button type="button" className="text-blue-200 hover:text-blue-100 text-lg font-semibold bg-violet-700 hover:bg-slate-400 py-1 px-6 rounded-md">Sign Up</button></li>
                </ol>

           </header>

           <main>
               <section className="bg-indigo-400 flex space-x-10 items-center px-16 py-8">
                    <div className="w-1/2 space-y-4">
                        <h3 className="text-5xl text-violet-100 font-bold capitalize tracking-wider">We sell the best human friend</h3>
                        <p className="text-blue-200 text-lg font-medium">You can get any kind of Dog of your liking</p>
                        <button type="button" className="bg-blue-300 text-green-50 text-lg uppercase px-7 py-2 rounded-sm">
                            Get a friend now
                        </button>
                    </div>
                    <div className="w-1/2">
                        <img src={dog} alt="dog" />
                    </div>
               </section>

               <section className="bg-indigo-500 flex justify-between space-x-8 text-center items-center px-20 py-9 ">
                    <div className="border-solid border-2 border-blue-200 bg-indigo-300">
                        <div><img className="" src={dog1} alt="" /></div>
                        <p className="dog-name">Dog cozy</p>
                    </div>
                    <div className="border-solid border-2 border-blue-200 bg-indigo-300">
                        <div><img className="w-full" src={dog2} alt="" /></div>
                        <p className="dog-name">Dog U.S.A</p>
                    </div>
                    <div className="border-solid border-2 border-blue-200 bg-indigo-300">
                        <div><img className="w-full" src={dog3} alt="" /></div>
                        <p className="dog-name">Dog pitbull</p>
                    </div>
                    <div className="border-solid border-2 border-blue-200 bg-indigo-300">
                        <div><img className="w-full" src={dog4} alt="" /></div>
                        <p className="dog-name">Dog canine</p>
                    </div>
               </section>

               <footer className="bg-indigo-700 py-5 px-14 flex justify-between items-center">
                    <form action="" onSubmit={submitEmail}>
                        <div>
                            <p className="capitalize text-emerald-50 text-2xl font-semibold mb-2">
                                Subscribe to our Newsletter
                            </p>
                        </div>
                        <div className="flex items-start ">
                            <div>
                                <input className="text-sm text-blue-600 font-medium outline-none pl-3 pr-40 py-2 rounded-l-sm border-none" type="text" value={email} onChange={onChangeEmail} name="" id="" />
                                {error && (
                                    <p className="text-red-600 text-sm font-bold flex justify-end pl-6">{error}</p>
                                )}
                            </div>
                            <input className="cursor-pointer bg-red-400 text-pink-950 text-base py-2 px-6 rounded-r-sm" type="submit" value="Submit Email"  />
                        </div>
                    </form>

                    <div>
                        
                        <p className="text-purple-300 text-sm font-bold">
                            &copy;Copyright {new Date().getFullYear()} Emmac PetShop
                        </p>
                    </div>

               </footer>
                
                
           </main>
        </div>
    )
}
Dog.propTypes = {
    email: PropTypes.string.isRequired,
    onChangeEmail: PropTypes.func.isRequired,
    onSubmitEmail: PropTypes.func.isRequired,
}