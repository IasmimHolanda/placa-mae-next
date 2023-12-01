import {
  Bars3Icon,
} from "@heroicons/react/24/solid";

export default function TopBar({ showNav, setShowNav }) {
  return (
    <div
      className={`fixed w-full h-16 flex justify-between items-center transition-all duration-[400ms] ${
        showNav ? "pl-56" : ""
      }`}
    >
      <div className="pl-4 md:pl-16">
        <Bars3Icon
          className="h-8 w-8 text-orange-500 cursor-pointer"
          onClick={() => setShowNav(!showNav)}
        />
      </div>
        
    </div>
  );
}
