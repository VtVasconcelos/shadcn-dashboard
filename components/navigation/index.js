'use client';
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";

export default function Menu({...props}) {
    return (
        <NavigationMenu {...props}>
            <NavigationMenuList>
                <NavigationMenuItem>

                    <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                        Inicio
                    </NavigationMenuLink>

                </NavigationMenuItem>
                <NavigationMenuItem>

                    <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                        Sobre
                    </NavigationMenuLink>

                </NavigationMenuItem>
            </NavigationMenuList>
            
        </NavigationMenu>
    )
}