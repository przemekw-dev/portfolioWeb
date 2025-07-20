import Link from "next/link";
import { Button } from "./button";
import MobileNav from "./MobileNav";
import { TypeAnimation } from "react-type-animation";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-3 text-white bg-accent-dark w-screen sticky top-0 left-0 ">
      <div className="container mx-auto flex justify-around items-center ">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibolds">
            Przemek Waliszka<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <Nav />
        <div className="hidden xl:flex gap-8 items-center group">
          <Link href="/contact" className="w-full h-full">
            <Button
              className="relative border-2 border-background shadow-md
                 transition-all duration-400  group-hover:text-slate-700 group-hover:border-accent"
            >
              Contact me
              <span className="absolute top-0 left-0 rounded-full opacity-0 group-hover:opacity-50 group-hover:cursor-pointer w-full h-full transition-opacity duration-400 bg-gradient-to-br from-accent-dark/70 to-accent-dark" />
            </Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden ">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
