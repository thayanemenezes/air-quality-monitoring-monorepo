import * as React from 'react';
import { SocialLoginButtonProps } from './types';

export const SocialLoginButton: React.FC<SocialLoginButtonProps> = ({ icon, text, onClick }) => {
    return (
        <button
            onClick={onClick}
            className="flex flex-col justify-center items-center px-16 py-6 w-full text-base bg-white rounded-lg shadow-[0px_4px_15px_rgba(0,0,0,0.11)] text-zinc-800 max-md:px-5 max-md:max-w-full"
        >
            <div className="flex gap-5 max-w-full">
                <img loading="lazy" src={icon} alt="" className="object-contain shrink-0 w-8 aspect-square" />
                <span className="grow shrink my-auto">{text}</span>
            </div>
        </button>
    );
};