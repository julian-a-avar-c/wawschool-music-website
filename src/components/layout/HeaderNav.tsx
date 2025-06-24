"use client";

import * as React from "react";

import { config as mainConfig } from "@/config/main";

import { cn } from "@/lib/utils";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { Separator } from "@/components/ui/separator";

export type HeaderNavProps = {
  class?: string;
};

export function HeaderNav({ class: className }: HeaderNavProps) {
  return (
    <NavigationMenu className={cn(className)}>
      <NavigationMenuList>
        <NavigationMenuItem>
          <NavigationMenuLink
            href="/about"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow uppercase font-semibold bg-background/0 rounded-sm",
            )}
            style={{ textDecorationLine: "none" }}
          >
            About
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/portfolio"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow uppercase font-semibold bg-background/0 rounded-sm",
            )}
            style={{ textDecorationLine: "none" }}
          >
            Portfolio
          </NavigationMenuLink>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow uppercase font-semibold bg-background/0 rounded-sm",
            )}
          >
            <a href="/products" style={{ textDecorationLine: "none" }}>
              Products
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul
              className={cn(
                "grid md:grid-cols-[1fr_auto_1fr] md:grid-rows-10",
                "w-[400px] gap-3 p-4 md:w-[500px] lg:w-[600px]",
              )}
            >
              <div className="md:row-[1/11]">
                <ListItem
                  title={mainConfig.nav.products.liquidLubricants.item.title}
                  href={mainConfig.nav.products.liquidLubricants.item.href}
                  titleClass="font-bold uppercase"
                >
                  {
                    mainConfig.nav.products.liquidLubricants.item
                      .shortDescription
                  }
                </ListItem>
                <>
                  {mainConfig.nav.products.liquidLubricants.items.map(
                    (component) => (
                      <ListItem
                        key={`top-nav-products-liquid-lubricants-${component.key}`}
                        title={component.title}
                        href={component.href}
                      >
                        {component.shortDescription}
                      </ListItem>
                    ),
                  )}
                </>
              </div>

              <Separator orientation="vertical" className="md:row-[2/11]" />

              <div className="md:row-[1/11]">
                <ListItem
                  title={mainConfig.nav.products.greases.item.title}
                  href={mainConfig.nav.products.greases.item.href}
                  titleClass="font-bold uppercase"
                >
                  {mainConfig.nav.products.greases.item.shortDescription}
                </ListItem>
                <>
                  {mainConfig.nav.products.greases.items.map((component) => (
                    <ListItem
                      key={`top-nav-products-greases-${component.key}`}
                      title={component.title}
                      href={component.href}
                    >
                      {component.shortDescription}
                    </ListItem>
                  ))}
                </>
              </div>
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuTrigger
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow uppercase font-semibold bg-background/0 rounded-sm",
            )}
          >
            <a href="/services" style={{ textDecorationLine: "none" }}>
              Services
            </a>
          </NavigationMenuTrigger>
          <NavigationMenuContent>
            <ul className="grid w-[400px] gap-3 p-4 md:w-[500px] md:grid-cols-2 lg:w-[600px] ">
              <ListItem
                key={`top-nav-services`}
                title="Services"
                href="/services"
                className="col-[1/-1]"
                listClassName="col-[1/-1]"
              >
                Explore all our services
              </ListItem>
              <Separator className="col-[1/-1]" />
              {mainConfig.nav.services.items.map((component) => (
                <ListItem
                  key={`top-nav-services-${component.key}`}
                  title={component.title}
                  href={component.href}
                >
                  {component.shortDescription}
                </ListItem>
              ))}
            </ul>
          </NavigationMenuContent>
        </NavigationMenuItem>

        <NavigationMenuItem>
          <NavigationMenuLink
            href="/articles"
            className={cn(
              navigationMenuTriggerStyle(),
              "text-lg text-shadow uppercase font-semibold bg-background/0 rounded-sm",
            )}
            style={{ textDecorationLine: "none" }}
          >
            Articles
          </NavigationMenuLink>
        </NavigationMenuItem>
      </NavigationMenuList>
    </NavigationMenu>
  );
}

const ListItem = React.forwardRef<
  React.ComponentRef<"a">,
  React.ComponentPropsWithoutRef<"a"> & {
    listClassName?: string;
    titleClass?: string;
  }
>(
  (
    { className, listClassName, title, children, titleClass, ...props },
    ref,
  ) => {
    return (
      <li className={listClassName}>
        <NavigationMenuLink asChild>
          <a
            ref={ref}
            className={cn(
              "leading-none",
              "space-y-1 p-3",
              "block",
              "select-none rounded-md no-underline outline-none transition-colors",
              "hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
              className,
            )}
            style={{ textDecorationLine: "none" }}
            {...props}
          >
            <div className={cn("text-sm font-medium leading-none", titleClass)}>
              {title}
            </div>
            <p
              className={cn(
                "line-clamp-2 text-sm leading-snug text-muted-foreground",
              )}
            >
              {children}
            </p>
          </a>
        </NavigationMenuLink>
      </li>
    );
  },
);
ListItem.displayName = "ListItem";
