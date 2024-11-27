import { InputFieldProps } from './types';
import Image from 'next/image';

export const InputField: React.FC<InputFieldProps> = ({ icon, label, value, type = "text", rightIcon }) => {
    return (
        <div className="flex flex-wrap gap-5 justify-between px-6 py-3.5 w-full whitespace-nowrap bg-gray-200 rounded-lg text-zinc-800 max-md:px-5 max-md:max-w-full">
            <div className="flex gap-7 items-center">
                <span>{icon}</span>
                <div className="flex flex-col">
                    <label className="self-start text-xs">{label}</label>
                    <input
                        type={type}
                        className="mt-3 text-base font-bold bg-transparent border-none outline-none"
                        aria-label={label}
                    />
                </div>
            </div>
            {rightIcon && (
                <Image loading="lazy" width={100} height={100} src={rightIcon} alt="icon" className="object-contain shrink-0 my-auto aspect-square w-[22px]" />
            )}
        </div>
    );
};