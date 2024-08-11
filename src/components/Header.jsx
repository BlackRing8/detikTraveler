import React from "react";
import Logo from "/assets/logo/group.png";
import { Link } from "react-router-dom";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { IconButton, Collapse } from "@material-tailwind/react";

function NavList() {
  return (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6 text-center pt-6 pb-6 lg:py-0 ">
      <a href="/#home" className="mx-14 lg:mx-0 px-8 py-2 border-2 border-transparent rounded-full hover:bg-slate-100  hover:border-white/30 hover:shadow-lg hover:bg-white/30">
        Home
      </a>
      <a href="/#tentang-program" className="mx-14 lg:mx-0 px-8 py-2 border-transparent rounded-full hover:bg-slate-100 border-2 hover:border-white/30 hover:shadow-lg hover:bg-white/30">
        Tentang Program
      </a>
      <a href="/#berita" className="mx-14 lg:mx-0 px-8 py-2 border-transparent rounded-full hover:bg-slate-100 border-2 hover:border-white/30 hover:bg-white/30 hover:shadow-lg">
        Berita
      </a>
      <Link to="/registrasi" className="mx-14 lg:mx-0 px-8 py-2 border-transparent rounded-full text-white bg-[#FFC73C] hover:bg-[#c4a75d] hover:shadow-lg">
        Registrasi
      </Link>
    </ul>
  );
}

export function Header() {
  const [openNav, setOpenNav] = React.useState(false);

  return (
    <>
      <header className="absolute z-30  w-full h-40 max-w-full px-5">
        <nav className="hidden lg:left-0 lg:right-0 lg:fixed z-30 lg:flex  lg:max-w-full   lg:w-[1296px] h-[60px] mt-[38px] lg:mx-auto lg:my-[51px] lg:h-[90px] backdrop-blur-xl bg-white/30 rounded-xl lg:rounded-full items-center justify-between px-8">
          <div className="w-[160px] h-[26.4px] lg:w-[200px] lg:h-[33px] ">
            <img src={Logo} className="w-full h-full" />
          </div>
          <div className="hidden lg:block">
            <NavList />
          </div>
        </nav>
        {/* Mobile Nav */}
        <div className={`left-0 right-0 mx-4 fixed lg:hidden max-w-full h-[60px] bg-white/30 backdrop-blur-xl  mt-[38px] ${openNav ? "rounded-t-3xl" : "rounded-full"} mt-[38px] transition-all duration-0 ease-in-out`}>
          <div className="flex w-full justify-between items-center h-[60px] px-5">
            <div className="w-[160px] h-[26.4px] lg:w-[200px] lg:h-[33px] ">
              <img src={Logo} className="w-full h-full" />
            </div>
            <IconButton variant="text" className="ml-auto h-[29px] w-[29px] lg:hidden bg-[#FFC73C] rounded-full flex justify-center items-center text-inherit" ripple={false} onClick={() => setOpenNav(!openNav)}>
              {openNav ? <XMarkIcon className="h-6 w-6 text-white" strokeWidth={2} /> : <Bars3Icon className="h-6 w-6 text-white" strokeWidth={2} />}
            </IconButton>
          </div>
        </div>
      </header>
      <div open={openNav} className={` mt-[98px] lg:hidden z-30 max-w-full rounded-b-3xl bg-white/30 backdrop-blur-xl mx-4 left-0 right-0 ${openNav ? "fixed" : "hidden"} `}>
        <NavList />
      </div>
    </>
  );
}
