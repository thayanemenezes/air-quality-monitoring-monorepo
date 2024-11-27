'use client'

import { InputField } from '@/components/login/InputField';
import Image from 'next/image';
import * as React from 'react';
import { MdEmail, MdOutlinePassword } from 'react-icons/md';

export default function LoginPage() {
    const [email, setEmail] = React.useState('example@gmail.com');
    const [password, setPassword] = React.useState('***********');
    return (
        <main className="overflow-hidden px-20 py-11 bg-zinc-100">
            <section className="flex gap-5 max-md:flex-col justify-between items-center">
                <div className="flex flex-col w-[40%] max-md:ml-0 max-md:w-full">
                    <Image src={'/environment-animate.svg'} width={500} height={500} alt='enviroment animation' />
                </div>
                <div className="flex flex-col  w-[50%] max-md:ml-0 max-md:w-full">
                    <form className="flex flex-col px-14 py-9 mx-auto w-full leading-none bg-white rounded-lg shadow-[0px_0px_4px_rgba(0,0,0,0.08)] max-md:px-5 max-md:mt-10 max-md:max-w-full">
                        <div className="self-start text-3xl font-black text-green-500 leading-[30px]">
                            <span className="font-medium">Welcome to</span>
                            <br />
                            <span className="text-4xl text-green-500 leading-[62px]">Air Quality Monitoring </span>
                        </div>

                        <div className="mt-9 ml-5">
                            <InputField
                                icon={<MdEmail size={28} />}
                                label="Email"
                                value={email}
                                type="email"
                            />
                        </div>

                        <div className="mt-5 ml-5">
                            <InputField
                                icon={<MdOutlinePassword size={28} />}
                                label="Password"
                                value={password}
                                type="password"
                                rightIcon=""
                            />
                        </div>

                        <div className="flex flex-wrap gap-10 mt-6 ml-5 text-base max-md:mr-1.5 max-md:max-w-full">
                            <label className="flex flex-1 gap-4 text-zinc-800 cursor-pointer">
                                <input type="checkbox" className="my-auto bg-gray-200 rounded border border-solid border-zinc-300 h-[18px] w-[18px]" />
                                <span>Remember me</span>
                            </label>
                            <button type="button" className="text-indigo-500">Forgot Password?</button>
                        </div>

                        <button type="submit" className="px-16 py-7 mt-6 ml-5 text-base font-semibold text-white whitespace-nowrap bg-green-500 rounded-lg max-md:px-5 max-md:max-w-full">
                            Login
                        </button>

                        <p className="self-center mt-12 text-base text-black max-md:mt-10">
                            Don't have an account?{" "}
                            <a href="#" className="text-indigo-500">Register</a>
                        </p>
                    </form>
                </div>
            </section>
        </main>
    );
};

