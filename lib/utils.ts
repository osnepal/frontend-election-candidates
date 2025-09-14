import axios from "axios";
import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const apiService = axios.create({
  baseURL: `${process.env.EXPO_PUBLIC_BACKEND_API_URL}`,
  withCredentials: true,
});

/**
 *
 * @param fullName eg. "Kishan Sharma"
 * @returns KS
 */
export function getInitials(fullName: string): string {
  const initials = fullName
    .split(" ")
    .map((name) => name.charAt(0).toUpperCase())
    .join("");
  return initials;
}

/**
 *
 * @param route "/api/v1/user"
 * @returns ["api","v1","user"]
 */
export const getQueryKey = (route: string): string[] =>
  route.split("/").filter((part) => part !== "");
