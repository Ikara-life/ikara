import {NavBar} from "@/components/ui/tubelight-navbar";
import {Home, User, Briefcase, FileText} from "lucide-react";

export default function Navbar() {
  const navItems = [
    {name: "About Ikara", url: "#about", icon: Home},
    {name: "The Experience", url: "#experience", icon: Briefcase},
    {name: "About Us", url: "#about-us", icon: User},
    {name: "Apply", url: "#apply", icon: FileText},
  ];

  return (
      <NavBar
          items={navItems}
          className="text-white bg-transparent sm:text-[#1A1F2C]"
      />
  );
}
