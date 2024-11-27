import Image from "next/image";
import { NavItem } from "./NavItem";

const navItems = [
    { label: "Home", isActive: true },
    { label: "Relatórios" },
];

export const Sidebar: React.FC = () => {
    return (
        <nav className="fixed flex flex-col w-[15%] max-md:ml-0 max-md:w-full">
            <div className="flex overflow-hidden flex-col rounded-none">
                <div className="flex overflow-hidden flex-col pt-10 pb-6 max-w-full h-[100vh] bg-white w-[290px]">
                    <header className="self-center text-2xl text-center items-center justify-center flex font-bold leading-none text-blue-600">
                        CLEAR AIR <span className="w-14"><img src="/illustration-logo.png" /></span>
                    </header>
                    <div className="flex flex-col items-start pl-8 mt-8 w-full max-md:pl-5">
                        {navItems.map((item, index) => (
                            <NavItem key={index} {...item} />
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    )
}
export default Sidebar;