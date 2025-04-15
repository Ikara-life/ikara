import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import {Button} from "@/components/ui/button"

export default function Navbar() {
  return (
      <nav
          className="fixed top-0 w-full bg-white/80 backdrop-blur-sm z-50 border-b transition-all duration-300">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-serif">Ikara</div>

            <NavigationMenu>
              <NavigationMenuList className="gap-2">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100">
                    What is Ikara
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <ul className="grid gap-3 p-4 w-[400px]">
                      <li>
                        <NavigationMenuLink
                            href="#about"
                            className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          About Ikara
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                            href="#experience"
                            className="block p-3 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          The Experience
                        </NavigationMenuLink>
                      </li>
                    </ul>
                  </NavigationMenuContent>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <NavigationMenuLink
                      href="#about-us"
                      className="px-4 py-2 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button asChild variant="default" className="btn-primary">
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
