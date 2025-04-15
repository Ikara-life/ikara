import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "@/components/ui/navigation-menu"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {Button} from "@/components/ui/button"
import {Menu} from "lucide-react"

export default function Navbar() {
  return (
      <nav
          className="fixed top-0 left-0 right-0 w-full bg-white border-b border-gray-200 z-[100] shadow-sm">
        <div className="container mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold font-serif text-gray-900">Ikara</div>

            {/* Desktop Navigation */}
            <NavigationMenu className="hidden md:flex">
              <NavigationMenuList className="gap-1">
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent hover:bg-gray-100 data-[state=open]:bg-gray-100">
                    What is Ikara
                  </NavigationMenuTrigger>
                  <NavigationMenuContent className="bg-white border border-gray-200 shadow-lg rounded-lg">
                    <ul className="grid gap-1 p-2 w-[400px]">
                      <li>
                        <NavigationMenuLink
                            href="#about"
                            className="block p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                        >
                          About Ikara
                        </NavigationMenuLink>
                      </li>
                      <li>
                        <NavigationMenuLink
                            href="#experience"
                            className="block p-3 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
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
                      className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
                  >
                    About Us
                  </NavigationMenuLink>
                </NavigationMenuItem>

                <NavigationMenuItem>
                  <Button asChild variant="default" className="bg-black hover:bg-gray-800">
                    <NavigationMenuLink href="#apply">
                      Apply
                    </NavigationMenuLink>
                  </Button>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            {/* Mobile Navigation */}
            <DropdownMenu>
              <DropdownMenuTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon" className="hover:bg-gray-100">
                  <Menu className="h-5 w-5 text-gray-700" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent
                align="end"
                className="w-56 bg-white border border-gray-200 shadow-lg rounded-lg"
              >
                <DropdownMenuItem className="focus:bg-gray-100">
                  <NavigationMenuLink href="#about" className="w-full text-gray-700">
                    About Ikara
                  </NavigationMenuLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100">
                  <NavigationMenuLink href="#experience" className="w-full text-gray-700">
                    The Experience
                  </NavigationMenuLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100">
                  <NavigationMenuLink href="#about-us" className="w-full text-gray-700">
                    About Us
                  </NavigationMenuLink>
                </DropdownMenuItem>
                <DropdownMenuItem className="focus:bg-gray-100">
                  <NavigationMenuLink href="#apply" className="w-full text-gray-700">
                    Apply
                  </NavigationMenuLink>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </nav>
  )
}
