"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { CookieIcon, SearchIcon, ProfileIcon } from "@/constants/icons/icon";
import { RecoilRoot, useRecoilState } from "recoil";
import { authState } from "@/store/authState";
import { useEffect, useState } from "react";
import SignUp from "./signup";
import LogIn from "./login";
import { logInHandler } from "@/lib/authHandlers";

function Navbar() {
  const [auth, setAuth] = useRecoilState(authState);
  const [openSignUp, setOpenSignUp] = useState(false);
  const [openLogIn, setOpenLogIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("recipe_token");
    if (token) {
      logInHandler({
        email: "johndoe@gmail.com",
        password: "johndoe",
        setAuth,
      });
    }
  }, []);

  return (
    <>
      {openSignUp && !openLogIn && (
        <SignUp isOpen={openSignUp} setIsOpen={setOpenSignUp} />
      )}
      {!openSignUp && openLogIn && (
        <LogIn isOpen={openLogIn} setIsOpen={setOpenLogIn} />
      )}
      <header className="flex items-center justify-between h-16 px-4 bg-primary text-primary-foreground sm:px-6">
        <Link href="#" className="flex items-center gap-2" prefetch={false}>
          <CookieIcon className="w-6 h-6" />
          <span className="text-lg font-bold">Cookie</span>
        </Link>
        <div className="relative flex-1 max-w-md mx-4">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search recipes..."
            className="w-full pl-10 pr-12 rounded-md bg-primary/20 focus:bg-primary/30 focus:outline-none"
          />
          {/* <Button variant="ghost" size="icon" className="absolute right-3 top-1/2 -translate-y-1/2">
          <FilterIcon className="w-5 h-5" />
          <span className="sr-only">Filter</span>
        </Button> */}
        </div>
        <div className="flex items-center gap-2">
          {!auth.isAuthenticated ? (
            <>
              <Button
                variant="outline"
                onClick={() => {
                  setOpenSignUp(true);
                  setOpenLogIn(false);
                }}
                className="hidden text-primary font-semibold sm:inline-flex"
              >
                Sign Up
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  setOpenSignUp(false);
                  setOpenLogIn(true);
                }}
                className="hidden text-primary font-semibold sm:inline-flex"
              >
                Log In
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="outline"
                className="hidden text-primary font-semibold sm:inline-flex"
              >
                Add Recipe
              </Button>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="rounded-lg outline-none border-none"
                  >
                    <ProfileIcon />
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Profile</DropdownMenuItem>
                  <DropdownMenuItem>Settings</DropdownMenuItem>
                  <DropdownMenuSeparator />
                  <DropdownMenuItem
                    onClick={() => {
                      setAuth({
                        isAuthenticated: false,
                        username: null,
                        token: null,
                      });
                      localStorage.removeItem("recipe_token");
                    }}
                  >
                    Logout
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </>
          )}
        </div>
      </header>
    </>
  );
}

export default () => (
  <RecoilRoot>
    <Navbar />
  </RecoilRoot>
);
