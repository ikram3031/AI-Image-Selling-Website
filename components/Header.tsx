import React, { useState } from 'react';
import Link from 'next/link';
import Navigation from './Navigation';
import { AiOutlineSearch } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FaBars } from "react-icons/fa";
import { RxCross1 } from "react-icons/rx";

type Props = {
    activeItem: number;
}

const Header = ({activeItem}: Props) => {
    const [active, setActive] = useState(false)
    const [open, setOpen] = useState(false)
    
    const handleClose = (e: React.MouseEvent) => {
        const target = e.target as HTMLElement;
        if (target.id === "screen") {
          setOpen(!open);
        }
    };
    
    if (typeof window !== "undefined") {
        window.addEventListener("scroll", () => {
          if (window.scrollY > 100) {
            setActive(true);
          } else {
            setActive(false);
          }
        });
    }
    
    return (
        <div
        className={`w-full p-5 border-b min-h-[60px] border-b-[#ffffff32] transition-opacity ${
            active && "fixed top-0 left-0 bg-[#000] z-[9999]"
        }`}
        >
            <div className="hidden md:w-[90%] mx-auto md:flex items-center justify-between">
                <div>
                    <Link href={"/"}>
                        <h1 className="font-Inter text-3xl cursor-pointer">
                        <span className="text-[#64ff4c]">Mar</span>ketplace
                        </h1>
                    </Link>
                </div>
                
                {/* Menu */}
                <div className="flex">
                    <Navigation activeItem={activeItem} />
                </div>
                
                {/* sEARCH & PROFILE */}
                <div className="flex items-center ml-10">
                    <AiOutlineSearch className="text-[25px] mr-5 cursor-pointer" />
                    {/* {user ? (
                        <div>
                        <DropDown
                            user={user}
                            setOpen={setOpen}
                            handleProfile={handleProfile}
                            isSellerExist={isSellerExist}
                        />
                        </div>
                    ) : (
                        <Link href="/sign-in">
                        <CgProfile className="text-[25px] cursor-pointer" />
                        </Link>
                    )} */}
                    <Link href="/sign-in">
                        <CgProfile className="text-[25px] cursor-pointer" />
                    </Link>
                </div>
                
                {/* todo */}
                
                {/* for mobile screen */}
                {/* copy after adding authentication */}
                
            </div>

        </div>
    )
}

export default Header