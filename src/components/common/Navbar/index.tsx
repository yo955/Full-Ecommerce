import Logo from "./Logo";
import NavLinks from "./NavLinks";
import TopHeader from "../top-header/TopHeader";
import SearchInput from "./SearchInput";
import Icons from "./Icons";



const Navbar = () => {
  return (
    <>
      <TopHeader />
      <nav className="navbar border-b-[0.5px] border-black h-24">
        <Logo />
        <NavLinks />
        <div className="right-nav flex gap-5 ">
          <SearchInput />
          <Icons />
          
        </div>
      </nav>
    </>
  );
};

export default Navbar;
