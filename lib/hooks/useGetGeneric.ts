import { apiService, getQueryKey } from "@/lib/utils";
import { useQuery, UseQueryOptions } from "@tanstack/react-query";
import { AxiosRequestConfig } from "axios";

interface ParamProps {
  [key: string]: string | number | boolean | undefined;
}

const getData = async <T>(
  route: string,
  config?: AxiosRequestConfig<ParamProps> | undefined
): Promise<T> => (await apiService.get<T>(route, config)).data;

export const useGenericGet = <T>({
  route,
  options,
  apiConfig,
}: {
  route: string;
  apiConfig?: AxiosRequestConfig<ParamProps> | undefined;
  options?: Omit<UseQueryOptions<T, Error>, "queryKey" | "queryFn">;
}) =>
  useQuery<T, Error>({
    queryKey: getQueryKey(route),
    queryFn: () => getData<T>(route, apiConfig),
    ...options,
  });
