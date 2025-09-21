"use client";

import React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useForm, Controller } from "react-hook-form";
import { SearchableSelect } from "./SearchableSelect";
import { Separator } from "../ui/separator";
import Text from "../ui/t";
import Link from "next/link";
import { useLanguage } from "@/lib/contexts/LanguageContext";
import AppTooltip from "../ui/app-tooltip";
import {
  countries,
  districts,
  municipalities,
  provinces,
  wards,
} from "@/lib/fake";

type FormDataType = {
  q: string;
  country: string;
  province: string;
  district: string;
  local: string;
  ward: string;
  party: string;
  verified: boolean;
};

export default function HomeSidebar({
  children,
}: {
  children?: React.ReactNode;
}) {
  const { t } = useLanguage();
  const { control, handleSubmit } = useForm({
    defaultValues: {
      q: "",
      country: "Nepal",
      province: "",
      district: "",
      local: "",
      ward: "",
      party: "",
      verified: false,
    },
  });

  const onSubmit = (data: FormDataType) => {
    console.log("Filter values:", data);
    // TODO: call API or filter logic
  };

  return (
    <SidebarProvider>
      <Sidebar>
        {/* Header */}
        <SidebarHeader className="p-4 text-xl bg-background">
          <Link href="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">
                OS
              </span>
            </div>
            <Text span title="appname" className="font-bold text-xl" />
          </Link>
        </SidebarHeader>

        {/* Filters */}
        <SidebarContent className="p-4 space-y-6 bg-background">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div className="pt-2">
              <Controller
                name="q"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SidebarInput
                    value={value}
                    onChange={onChange}
                    placeholder={t("search")}
                    className="w-full h-10"
                  />
                )}
              />
            </div>
            <Separator className="mt-6" />
            {/* Country */}
            <div>
              <Text label title="country" className="text-sm font-medium" />
              <Controller
                name="country"
                disabled
                control={control}
                render={({ field: { value, onChange, disabled } }) => (
                  <SearchableSelect
                    value={value}
                    options={countries}
                    onChange={onChange}
                    disabled={disabled}
                  />
                )}
              />
            </div>

            {/* Province */}
            <div>
              <Text label title="province" className="text-sm font-medium" />
              <Controller
                name="province"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SearchableSelect
                    value={value}
                    options={provinces}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            {/* District */}
            <div>
              {/* <label className="text-sm font-medium">das</label> */}
              <Text label title="district" className="text-sm font-medium" />
              <Controller
                name="district"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SearchableSelect
                    value={value}
                    options={districts}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            {/* Municipality */}
            <div>
              <Text label title="locale" className="text-sm font-medium" />
              <Controller
                name="local"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SearchableSelect
                    value={value}
                    options={municipalities}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            {/* Ward */}
            <div>
              <Text title="ward" className="text-sm font-medium" />
              <Controller
                name="ward"
                control={control}
                render={({ field: { value, onChange } }) => (
                  <SearchableSelect
                    value={value}
                    options={wards}
                    onChange={onChange}
                  />
                )}
              />
            </div>

            {/* Verified */}
            <div className="flex items-center space-x-2">
              <Controller
                name="verified"
                control={control}
                render={({ field }) => (
                  <Checkbox
                    checked={field.value}
                    onCheckedChange={field.onChange}
                    id="verified"
                  />
                )}
              />
              <Text
                label
                title="verified"
                className="text-sm font-medium leading-none"
              />
            </div>

            <Button type="submit" className="w-full">
              {t("search")}
            </Button>
          </form>
        </SidebarContent>

        {/* Footer */}
        <SidebarFooter className="p-4 text-sm  bg-background">
          <SidebarMenu>
            <SidebarMenuItem className="flex flex-row justify-between items-center ">
              <div className="text-muted-foreground text-xs">
                © 2025 <Text span title="appname" />
              </div>
              <SidebarTrigger />
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarFooter>
      </Sidebar>

      {/* Main Content */}
      <SidebarInset>{children}</SidebarInset>
      <AppTooltip title="Open sidebar">
        <div className="fixed bottom-4 right-4 md:left-4 w-fit">
          <SidebarTrigger className="rounded-full size-12 border-1 shadow-md md:shadow-md" />
        </div>
      </AppTooltip>
    </SidebarProvider>
  );
}
