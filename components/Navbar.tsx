import Logo from "./Logo";
import { FaBars } from "react-icons/fa6";

const Navbar = () => {
    return ( 
        <div className="flex flex-row items-center justify-between w-[80%] mx-auto h-[100%]">
            <Logo/>
            <div className="flex flex-row gap-10 text-basic-pink">
                <div className="hidden sm:block">Home</div>
                <div className="hidden sm:block">Latest Post</div>
                <div className="hidden sm:block">Categories</div>
            </div>
            <FaBars className="w-[2rem] sm:hidden h-[2rem] cursor-pointer" />
        </div>
     );
}
 
export default Navbar;