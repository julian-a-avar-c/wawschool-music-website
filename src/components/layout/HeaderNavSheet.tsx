import "@/styles/global.css";

import { config } from "@/config/main";

import { Icon } from "@iconify/react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
  // } from "@/components/ui/navigation-menu";
} from "@/components/my-ui/navigation-menu";
import { cn } from "@/lib/utils";

export type HeaderNavSheetProps = {
  class?: string;
};

export function HeaderNavSheet({ class: className }: HeaderNavSheetProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button className={cn("cursor-pointer", className)}>
          <Icon icon="fa6-solid:bars" height="auto" color="white" />
        </Button>
      </SheetTrigger>

      <SheetContent side="left">
        <SheetHeader className="gap-6">
          <SheetTitle>
            {/* 896/187 ~= 307/64 */}
            <img
              src="/images/logo/pacs_logo.png"
              alt="PACS LLC"
              width="154"
              height="32"
            />
            {/* width="307"
            height="64" */}
          </SheetTitle>
        </SheetHeader>

        <div className="grid gap-4 p-4">
          <NavigationMenu
            className={cn(className, "flex-col")}
            orientation="vertical"
          >
            <NavigationMenuList>
              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/about"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg uppercase font-bold",
                  )}
                >
                  About
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/products"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg uppercase font-bold",
                  )}
                >
                  Products
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/services"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg uppercase font-bold",
                  )}
                >
                  Services
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuLink
                  href="/srticles"
                  className={cn(
                    navigationMenuTriggerStyle(),
                    "text-lg uppercase font-bold",
                  )}
                >
                  Articles
                </NavigationMenuLink>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        <SheetFooter className="flex flex-col gap-6">
          <address className="not-italic">
            <ul className="flex flex-col gap-2">
              {[
                config.links.linkedin,
                config.links.instagram,
                config.links.phone,
                config.links.email,
                config.links.location,
              ].map((link, i) => {
                const key = `navsheet-contact-item-${i}`;
                if (link.href) {
                  return (
                    <li key={key}>
                      <a
                        href={link.href}
                        className={cn("flex gap-2 items-center", "text-lg")}
                      >
                        {link.icon && <Icon icon={link.icon} />}
                        {link.value}
                      </a>
                    </li>
                  );
                } else {
                  return (
                    <li key={key} className="flex gap-2 items-center text-lg">
                      {link.icon && <Icon icon={link.icon} />}
                      {link.value}
                    </li>
                  );
                }
              })}
            </ul>
          </address>

          {/* <div className="flex flex-col gap-2">
            <SheetDescription>
              PACS is a provider of blending and manufacturing plant designs,
              equipment and turnkey projects for oil and gas companies around
              the world.
            </SheetDescription>
            <SheetDescription>
              PACS provides consulting services and industrial innovative
              engineering solutions.
            </SheetDescription>
          </div> */}
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
