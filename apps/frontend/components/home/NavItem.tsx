import * as React from 'react';
import { NavItemProps } from './types';

export const NavItem: React.FC<NavItemProps> = ({ label, isActive }) => {
    return (
        <div className="flex gap-3 mt-6 text-base font-medium tracking-tight leading-8">
            {/* <img
                loading="lazy"
                src={icon}
                alt=""
                className="object-contain shrink-0 my-auto w-6 aspect-square"
            /> */}
            <p className={isActive ? "text-blue-900" : "text-slate-400"}>{label}</p>
            {isActive && (
                <div className="flex shrink-0 w-1 h-9 bg-blue-600 rounded-3xl" />
            )}
        </div>
    );
};