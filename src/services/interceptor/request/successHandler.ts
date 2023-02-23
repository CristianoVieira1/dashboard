import { AxiosRequestConfig } from "axios";
import { Auth } from "../../../models/Auth";

export const useSuccessHandler = () => {
  const setRequestHeaders = async (
    request: AxiosRequestConfig,
    accessToken = ""
  ) => {
    if (request.headers) {
      request.headers.Authorization = accessToken;
    }

    return request;
  };

  const getAccessToken = async (
    request: AxiosRequestConfig
  ): Promise<string> => {
    // if (preventInfiniteLoopByAccessTokenGeneration(request)) {
    //   return ''
    // }

    const accessToken = await new Auth().getAccessToken();
    return accessToken;
  };

  // const preventInfiniteLoopByAccessTokenGeneration = (request: AxiosRequestConfig): boolean => {
  //   return request.url?.endsWith('/signin') || false
  // }

  return { setRequestHeaders, getAccessToken };
};
