import { apiService, getQueryKey } from "@/lib/utils";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import axios, { AxiosRequestConfig } from "axios";

interface ParamProps {
  [key: string]: string | number | boolean | undefined;
}

const getData = async <T>(
  route: string,
  config?: AxiosRequestConfig<ParamProps> | undefined,
  standAlone: boolean = false
): Promise<T> =>
  standAlone
    ? (await axios.get<T>(route, config)).data
    : (await apiService.get<T>(route, config)).data;

export const useGenericGet = <T>({
  route,
  options,
  apiConfig,
  standAlone = false,
}: {
  route: string;
  apiConfig?: AxiosRequestConfig<ParamProps> | undefined;
  options?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">;
  standAlone?: boolean;
}) =>
  useQuery<T, Error>({
    queryKey: getQueryKey(route),
    queryFn: () => getData<T>(route, apiConfig, standAlone),
    ...options,
  });
