import Link from "next/link";
import { Button } from "./button";
import MobileNav from "./MobileNav";

//components
import Nav from "./Nav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibolds">
            Przemek<span className="text-accent">.</span>
          </h1>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden xl:flex gap-8 items-center">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
};

export default Header;
