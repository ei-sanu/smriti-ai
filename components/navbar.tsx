"use client";

import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import { AnimatePresence, motion } from "framer-motion";
import { Brain, LayoutDashboard, Settings, Star } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // Close menu when route changes
  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed w-full top-0 z-50 backdrop-blur-md bg-background/50 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center flex-shrink-0">
            <Link
              href="/#"
              className="flex items-center cursor-pointer hover:opacity-90 transition-all duration-300 group whitespace-nowrap"
            >
              <Brain className="me-[5px] h-5 w-5 text-[#adff2f]" />
              <span className="text-xl font-bold bg-gradient-to-r from-gray-900 to-gray-700 dark:from-white dark:to-gray-300 bg-clip-text text-transparent group-hover:from-[#adff2f] group-hover:to-[#9dff07] transition-all duration-300">
                Smriti AI
              </span>
            </Link>
          </div>

          {/* Center Navigation Links - Hidden on Mobile */}
          <div className="hidden md:flex items-center justify-center gap-6">
            <Link href="/#" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#adff2f]/10 hover:text-[#adff2f] transition-all duration-300 hover:scale-105"
              >
                Home
              </Button>
            </Link>
            <Link href="/about" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#adff2f]/10 hover:text-[#adff2f] transition-all duration-300 hover:scale-105"
              >
                About Us
              </Button>
            </Link>
            <Link href="/contributors" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#adff2f]/10 hover:text-[#adff2f] transition-all duration-300 hover:scale-105 flex items-center gap-2"
              >
                Contributors
              </Button>
            </Link>
            <Link href="/contact" className="cursor-pointer">
              <Button
                variant="ghost"
                className="rounded-full cursor-pointer hover:bg-[#adff2f]/10 hover:text-[#adff2f] transition-all duration-300 hover:scale-105"
              >
                Contact Us
              </Button>
            </Link>

            {/* Add Dashboard button for desktop */}
            <SignedIn>
              <Link href="/dashboard" className="cursor-pointer">
                <Button
                  variant="outline"
                  className="rounded-full flex items-center gap-2 cursor-pointer border-[#adff2f]/30 text-[#adff2f] hover:bg-gradient-to-r hover:from-[#adff2f] hover:to-[#9dff07] hover:text-black hover:border-[#adff2f] transition-all duration-300 hover:scale-105"
                >
                  <LayoutDashboard className="h-4 w-4" />
                  Dashboard
                </Button>
              </Link>
            </SignedIn>
          </div>

          {/* Right side buttons */}
          <div className="flex items-center space-x-2">
            {/* GitHub Star Button */}
            <div className="flex items-center">
              <a
                href="https://github.com/vatsal-bhakodia/smriti-ai"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Button
                  variant="outline"
                  size="sm"
                  className="rounded-full flex items-center gap-2 border-[#adff2f]/30 text-[#adff2f] hover:bg-gradient-to-r hover:from-[#adff2f] hover:to-[#9dff07] hover:text-black hover:border-[#adff2f] transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-[#adff2f]/25"
                >
                  <Star className="h-4 w-4" />
                  <span>Star</span>
                </Button>
              </a>
            </div>

            {/* Profile Button */}
            <SignedIn>
              <div className="flex items-center">
                <UserButton />
              </div>
            </SignedIn>

            {/* Settings Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden flex items-center p-2 rounded-full hover:bg-[#adff2f]/10"
            >
              <motion.div
                animate={{ rotate: isMenuOpen ? -90 : 0 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
              >
                <Settings className="h-6 w-6 text-[#adff2f]" />
              </motion.div>
            </button>
          </div>
        </div>

        {/* Animated Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden bg-background/95 border-t border-border"
            >
              <motion.div
                initial={{ y: -20 }}
                animate={{ y: 0 }}
                exit={{ y: -20 }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                className="py-4 px-2 space-y-3"
              >
                <Link href="/#" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#adff2f]/10 hover:text-[#adff2f]"
                  >
                    Home
                  </Button>
                </Link>
                <Link href="/about" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#adff2f]/10 hover:text-[#adff2f]"
                  >
                    About Us
                  </Button>
                </Link>
                <Link href="/contributors" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#adff2f]/10 hover:text-[#adff2f]"
                  >
                    Contributors
                  </Button>
                </Link>
                <Link href="/contact" className="block">
                  <Button
                    variant="ghost"
                    className="w-full text-left rounded-full hover:bg-[#adff2f]/10 hover:text-[#adff2f]"
                  >
                    Contact Us
                  </Button>
                </Link>

                <SignedOut>
                  <Link href="/sign-in" className="block">
                    <Button className="w-full bg-gradient-to-r from-[#adff2f] to-[#9dff07] text-black rounded-full hover:from-[#9dff07] hover:to-[#adff2f]">
                      Sign In
                    </Button>
                  </Link>
                </SignedOut>

                <SignedIn>
                  <Link href="/dashboard" className="block">
                    <Button
                      variant="outline"
                      className="w-full rounded-full flex items-center justify-center gap-2 border-[#adff2f]/30 text-[#adff2f] hover:bg-gradient-to-r hover:from-[#adff2f] hover:to-[#9dff07] hover:text-black"
                    >
                      <LayoutDashboard className="h-4 w-4" />
                      Dashboard
                    </Button>
                  </Link>
                </SignedIn>

                {/* GitHub Star Button in Mobile Menu */}
                {/* <a
                  href="https://github.com/vatsal-bhakodia/smriti-ai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <Button
                    variant="outline"
                    className="w-full rounded-full flex items-center justify-center gap-2 border-[#adff2f]/30 text-[#adff2f] hover:bg-gradient-to-r hover:from-[#adff2f] hover:to-[#9dff07] hover:text-black"
                  >
                    <Star className="h-4 w-4" />
                    Star
                  </Button>
                </a> */}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
