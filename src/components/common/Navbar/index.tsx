import Logo from "./Logo";
import NavLinks from "./NavLinks";
import TopHeader from "../top-header/TopHeader";
import SearchInput from "./SearchInput";
import Icons from "./Icons";
import Sidebar from "@/components/Home/sidebar/Sidebar";


const Navbar = () => {
  return (
    <>
      <TopHeader/>
      <nav className="navbar border-b-[0.5px] border-black h-24">
        <div className='flex items-center gap-2'>
          <Logo/>
          <Sidebar/>
        </div>
        <NavLinks/>
        <div className="right-nav flex gap-1.5 ">
          <SearchInput/>
          <Icons/>

        </div>
      </nav>
    </>
  );
};

export default Navbar;
