"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Github, Menu, Star } from "lucide-react";
import ThemeButton from "@/components/ThemeButton";
import LanguageDropdown from "@/components/LanguageDropdown";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import { useSidebar } from "./ui/sidebar";
import { DialogTitle } from "./ui/dialog";
import Text from "./ui/t";
import { useGenericGet } from "@/lib/hooks/useGetGeneric";

export default function Navbar() {
  const { t } = useLanguage();
  const { open } = useSidebar();

  const { data: githubData } = useGenericGet<{ stargazers_count: number }>({
    route: "https://api.github.com/repos/osnepal/frontend-election-candidates",
    standAlone: true,
  });

  return (
    <header
      className={`fixed z-50 right-0 bg-background/50 backdrop-blur-md border-b border-border duration-300 ${open ? "md:left-(--sidebar-width) left-0 " : "left-0"}`}
    >
      <nav>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14">
            {/* Logo */}
            <div
              className={`flex-shrink-0 ${open ? "md:hidden block" : "block"}`}
            >
              <Link href="/" className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
                  <span className="text-primary-foreground font-bold text-lg">
                    OS
                  </span>
                </div>
                <span className="font-bold text-xl">{t("appname")}</span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            {/* <div className="hidden md:block"> */}
            <div className="hidden lg:flex flex-1 items-center justify-center">
              <NavigationMenu>
                <NavigationMenuList>
                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/"
                      className="group inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {t("home")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuTrigger className="bg-transparent">
                      {t("projects")}
                    </NavigationMenuTrigger>
                    <NavigationMenuContent>
                      <ul className="grid gap-3 p-6 md:w-[400px] lg:w-[500px] lg:grid-cols-[.75fr_1fr]">
                        <li className="row-span-3">
                          <NavigationMenuLink
                            href="/"
                            className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-muted/50 to-muted p-6 no-underline outline-none focus:shadow-md"
                          >
                            <div className="mb-2 mt-4 text-lg font-medium">
                              {t("welcome")}
                            </div>
                            <p className="text-sm leading-tight text-muted-foreground">
                              {t("description")}
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/projects"
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("projects")}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Explore our open source projects
                            </p>
                          </NavigationMenuLink>
                        </li>
                        <li>
                          <NavigationMenuLink
                            className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground"
                            href="/community"
                          >
                            <div className="text-sm font-medium leading-none">
                              {t("community")}
                            </div>
                            <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                              Join our vibrant community
                            </p>
                          </NavigationMenuLink>
                        </li>
                      </ul>
                    </NavigationMenuContent>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/events"
                      className="group inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {t("events")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/blog"
                      className="group inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {t("blog")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>

                  <NavigationMenuItem>
                    <NavigationMenuLink
                      href="/about"
                      className="group inline-flex w-max items-center justify-center px-4 py-2 text-sm font-medium focus:outline-none disabled:pointer-events-none disabled:opacity-50 data-[active]:bg-accent/50 data-[state=open]:bg-accent/50"
                    >
                      {t("about")}
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
            </div>

            {/* Right side controls */}
            <div className="flex items-center space-x-2 justify-end flex-1 lg:flex-0">
              <div className="hidden md:flex items-center space-x-2">
                <Link
                  href={
                    "https://github.com/osnepal/frontend-election-candidates"
                  }
                  target="_blank"
                >
                  <Button variant="outline">
                    <Github />
                    {githubData?.stargazers_count || 0}
                    <Star />
                  </Button>
                </Link>
                <LanguageDropdown />
                <ThemeButton />
              </div>

              {/* Mobile Sheet */}
              <Sheet>
                <SheetTrigger asChild>
                  <Button
                    variant="outline"
                    size="icon"
                    className="lg:hidden"
                    aria-label="Open menu"
                  >
                    <Menu className="h-6 w-6" />
                  </Button>
                </SheetTrigger>
                <SheetContent
                  side="right"
                  className="w-[280px] p-0 bg-background/80 backdrop-blur-md"
                >
                  {/* Header */}
                  <DialogTitle>
                    <div className="flex items-center justify-between p-6 border-b border-border">
                      <div className="flex items-center space-x-2">
                        <div className="w-6 h-6 bg-primary rounded flex items-center justify-center">
                          <span className="text-primary-foreground font-bold text-sm">
                            OS
                          </span>
                        </div>
                        <Text className="font-bold text-lg" title="appname" />
                      </div>
                    </div>
                  </DialogTitle>

                  <div className="flex flex-col h-full">
                    {/* Navigation - Scrollable */}
                    <div className="flex-1 overflow-y-auto">
                      <div className="p-4 space-y-1">
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10"
                          asChild
                        >
                          <Link href="/">{t("home")}</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10"
                          asChild
                        >
                          <Link href="/projects">{t("projects")}</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10"
                          asChild
                        >
                          <Link href="/events">{t("events")}</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10"
                          asChild
                        >
                          <Link href="/blog">{t("blog")}</Link>
                        </Button>
                        <Button
                          variant="ghost"
                          className="w-full justify-start h-10"
                          asChild
                        >
                          <Link href="/about">{t("about")}</Link>
                        </Button>
                      </div>
                    </div>

                    {/* Footer with controls */}
                    <div className="border-t border-border p-4 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{t("selectLanguage")}</span>
                        <LanguageDropdown />
                      </div>
                      <div className="flex items-center justify-between">
                        <span className="text-sm">{t("toggleTheme")}</span>
                        <ThemeButton />
                      </div>
                    </div>
                  </div>
                </SheetContent>
              </Sheet>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
