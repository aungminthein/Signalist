"use client";

import React from "react";
import {
   DropdownMenu,
   DropdownMenuContent,
   DropdownMenuItem,
   DropdownMenuLabel,
   DropdownMenuSeparator,
   DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { NavItems } from "@/components/NavItems";
import { Button } from "@/components/ui/button";
import { LogOutIcon } from "lucide-react";
import { toast } from "sonner";

const user = {
   name: "John Doe",
   email: "aungminthein@gmail.com",
};

function handleLogOut() {
   toast.success("Logged out successfully!");
}

export const UserDropDown = () => {
   return (
      <DropdownMenu>
         <DropdownMenuTrigger asChild>
            <button className="flex cursor-pointer items-center gap-2 focus:outline-none">
               <Avatar>
                  {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
                  <AvatarFallback className="flex items-center bg-yellow-500 text-yellow-100">
                     {user.name[0]}
                  </AvatarFallback>
               </Avatar>
               <div className="hidden flex-col items-start sm:flex">
                  <span className="text-base font-medium text-gray-400">
                     {user.name}
                  </span>
               </div>
            </button>
         </DropdownMenuTrigger>
         <DropdownMenuContent className="text-gray-400">
            <DropdownMenuLabel className="relative flex items-center gap-2 py-2">
               <Avatar className="h-10 w-10">
                  {/*<AvatarImage src="https://github.com/shadcn.png" />*/}
                  <AvatarFallback className="flex items-center bg-yellow-500 text-yellow-100">
                     {user.name[0]}
                  </AvatarFallback>
               </Avatar>
               <div className="flex flex-col">
                  <span className="text-base font-medium text-gray-400">
                     {user.name}
                  </span>
                  <span className="text-gray-500">{user.email}</span>
               </div>
            </DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="block focus:bg-transparent sm:hidden">
               <nav>
                  <NavItems />
               </nav>
            </DropdownMenuItem>
            <DropdownMenuSeparator className="sm:hidden" />
            <DropdownMenuItem
               onClick={handleLogOut}
               className="text-base font-medium text-gray-100 transition-colors focus:bg-transparent focus:text-yellow-500"
            >
               <LogOutIcon className="mr-2 hidden h-4 w-4 sm:block" />
               Log Out
            </DropdownMenuItem>
         </DropdownMenuContent>
      </DropdownMenu>
   );
};
