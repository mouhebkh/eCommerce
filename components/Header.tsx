import React from "react";
import HeaderMenu from "./HeaderMenu";
import Logo from "./Logo";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import SearchBar from "./SearchBar";
import CartIcon from "./CartIcon";
import { currentUser } from "@clerk/nextjs/server";
import { ClerkLoaded, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
// import { SignedIn } from "@clerk/clerk-react";
import Link from "next/link";
import { ListOrdered } from "lucide-react";

const Header = async () => {
  const user = await currentUser();
  console.log("The User is ", user);
  return (
    <header className="border-b border-b-gray-400 py-5">
      {/* text-lightColor error */}
      <Container className="flex items-center justify-between gap-7 text-lightColor">
        <HeaderMenu />
        <div className="w-auto md:w-1/3 flex items-center justify-center gap-2.5">
          <MobileMenu />
          <Logo>TrustYourStyle</Logo>
        </div>
        <div className="w-auto md:w-1/3 flex items-center justify-end gap-5 ">
          <SearchBar />
          <CartIcon />
          <ClerkLoaded>
            <SignedIn>
              <Link href={"/orders"} className="group relative">
                <ListOrdered className="w-5 h-5 group-hover:text-darkColor hoverEffect" />
                <span
                  className="absolute -top-1 -right-1 bg-darkColor 
                        text-white h-3.5 w-3.5 rounded.full 
                        text-xs font-semibold flex items-center "
                ></span>
              </Link>
              <UserButton></UserButton>
            </SignedIn>
            {!user && (
              <SignInButton mode="modal">
                <button className="text-sm font-semibold hover:text-darkColor hoverEffect">
                  Login
                </button>
              </SignInButton>
            )}
          </ClerkLoaded>
        </div>
      </Container>
    </header>
  );
};

export default Header;
