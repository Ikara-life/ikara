import {NavBar} from "@/components/ui/tubelight-navbar";
import {yinYang} from "@lucide/lab";
import {Bolt, SmilePlus, Speech, User, Icon} from "lucide-react";

const navItems = [
  {name: "Home", url: "#hero", icon: Bolt},
  {name: "About Ikara", url: "#about", icon: () => <Icon iconNode={yinYang} />},
  {name: "The Experience", url: "#experience", icon: SmilePlus},
  {name: "About Us", url: "#about-us", icon: User},
  {name: "Apply", url: "#apply", icon: Speech},
];

export default function Navbar() {
  return (
      <NavBar
          items={navItems}
          className="text-white bg-transparent sm:text-[#1A1F2C]"
      />
  );
}
