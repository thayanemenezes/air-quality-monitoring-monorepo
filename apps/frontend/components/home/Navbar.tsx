import { BsPersonCircle } from "react-icons/bs";
import { FaRegBell } from "react-icons/fa";
import { RiArrowDropDownLine } from "react-icons/ri";


export const NavBar: React.FC = () => {
    return (
        <div className="flex w-full bg-white py-10 justify-end shadow-sm rounded-sm">
            <div className="flex gap-3">
                <FaRegBell fontSize={24} className="text-blue-900" />
                <span className="flex items-center text-blue-900"><BsPersonCircle fontSize={25} />
                    <RiArrowDropDownLine fontSize={22} />
                </span>
            </div>

        </div>
    )
}
export default NavBar;