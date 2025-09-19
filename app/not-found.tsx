"use client";

import Text from "@/components/ui/t";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen  px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-extrabold text-red-400 mb-4 ">404</h1>
        <Text
          className="text-2xl font-semibold mb-2 text-gray-800 dark:text-gray-400"
          title="pagenotfound"
        />
        <Text className="text-gray-600 mb-6" title="pnfmessage" />
        <Link
          href="/"
          className="inline-block px-6 py-2 rounded-md bg-primary text-primary-foreground"
        >
          <Text title="gotohome" />
        </Link>
      </div>
    </div>
  );
}
