import { Bell, Search } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { CiMenuBurger } from "react-icons/ci";

const navigation = [
  { name: "Home", href: "/", current: false },
  { name: "My Learning", href: "/learning", current: true },
  { name: "Catalog", href: "/catalog", current: false },
  { name: "Favorites", href: "/favorites", current: false },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 flex items-center justify-center">
      <div className="container flex h-14 items-center px-6 md:px-0  ">
        <div className="flex items-center space-x-6">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold">LMS</span>
          </Link>
          <nav className=" hidden lg:flex items-center space-x-6 ">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`text-sm font-medium transition-colors hover:text-primary ${
                  item.current ? "text-primary" : "text-muted-foreground"
                }`}
              >
                {item.name}
                {/* {item.name === "Favorites" && (
                  <span className="ml-1 rounded-full bg-primary px-1.5 py-0.5 text-xs text-white">
                    3
                  </span>
                )} */}
              </Link>
            ))}
            <Button
              variant="default"
              size="sm"
              className=" bg-transparent text-black border border-pink-600/80 hover:bg-transparent shadow-xl"
            >
              Ask AI
            </Button>
          </nav>
        </div>
        <div className="ml-auto flex items-center space-x-4">
      
          <div className="relative hidden  md:flex w-full max-w-sm items-center">
            <Search className="absolute left-2 h-4 w-4 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Search..."
              className="w-full pl-8 sm:w-[300px]"
            />
          </div>

          <Button variant="ghost" size="icon">
            <Bell className="h-5 w-5" />
          </Button>
          <div className=" w-full">
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </div>

          {/* Mobile Humburger  */}
          <button className="flex items-center justify-center p-2 rounded-md text-black bg-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-pink-600/80 lg:hidden ">
            <CiMenuBurger className="h-6 w-6" />
          </button>


          {/* <Avatar>
            <AvatarImage src="/avatars/01.png" alt="@username" />
            <AvatarFallback>AI</AvatarFallback>
          </Avatar> */}
        </div>
      </div>
    </header>
  );
}
