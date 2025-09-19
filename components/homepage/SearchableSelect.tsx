"use client";

import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import Text from "../ui/t";
import { useLanguage } from "@/lib/contexts/LanguageContext";

interface Option {
  value: string;
  label: string;
}

interface SearchableSelectProps {
  options: Option[];
  value?: string;
  onChange: (value: string) => void;
  disabled?: boolean | undefined;
}

export function SearchableSelect({
  options,
  value,
  onChange,
  disabled = false,
}: SearchableSelectProps) {
  const { t } = useLanguage();
  const [open, setOpen] = React.useState(false);

  const selected = React.useMemo(
    () => options.find((opt) => opt.value === value),
    [value, options]
  );

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger disabled={disabled} asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className={`w-full justify-between bg-transparent hover:bg-transparent font-normal ${selected ? "text-primary" : "text-muted-foreground"}`}
        >
          {selected ? selected.label : <Text title="select" />}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-full p-0">
        <Command>
          <CommandInput placeholder={t("searchinoptions")} />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup>
              {options.map((option) => (
                <CommandItem
                  key={option.value}
                  onSelect={() => {
                    if (option.value === value) {
                      onChange("");
                    } else {
                      onChange(option.value);
                    }
                    setOpen(false);
                  }}
                  className={option.value === value ? "bg-accent" : ""}
                >
                  {option.label}
                  <div className="flex flex-1 justify-end self-center items-center">
                    <Check
                      className={cn(
                        "h-4 w-4",
                        option.value === value ? "opacity-100" : "opacity-0"
                      )}
                    />
                  </div>
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
