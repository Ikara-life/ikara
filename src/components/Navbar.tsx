import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react"

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState(true)
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY < 100)
    }
    handleScroll()
    window.addEventListener("scroll", handleScroll)

    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const textColor = isAtTop ? "text-white" : "text-[#1A1F2C]"

  return (
      <nav
          className={`fixed top-0 left-0 right-0 w-full z-[100] backdrop-blur-xl ${isAtTop ? 'bg-transparent' : 'bg-white/5'} border-b border-white/10 shadow-[0_4px_12px_-2px_rgba(0,0,0,0.1)] transition-colors duration-300`}>
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between flex-wrap">
            <div className={`text-2xl font-bold ${textColor}`}>Ikara</div>

            <NavigationMenu className="flex">
              <NavigationMenuList className="gap-2 flex-wrap">
                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#about"
                      className={`px-4 py-2 ${textColor} hover:bg-[#9b87f5]/10 rounded-lg transition-colors block`}
                  >
                    About Ikara
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#experience"
                      className={`px-4 py-2 ${textColor} hover:bg-[#9b87f5]/10 rounded-lg transition-colors block`}
                  >
                    The Experience
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#about-us"
                      className={`px-4 py-2 ${textColor} hover:bg-[#9b87f5]/10 rounded-lg transition-colors block`}
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button
                      asChild
                      className="bg-[#9b87f5] hover:bg-[#7E69AB] text-white border-none shadow-sm transition-colors"
                  >
                    <NavigationMenuLink href="#apply">
                      Apply
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </nav>
  )
}
