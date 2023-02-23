/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosRequestConfig } from "axios";
import { useSuccessHandler } from "./successHandler";

export const requestInterceptor = () => {
  const { getAccessToken, setRequestHeaders } = useSuccessHandler();

  const onSuccess = async (request: AxiosRequestConfig) => {
    const storedAccessToken = await getAccessToken(request);
    await setRequestHeaders(request, storedAccessToken);
    return request;
  };

  const onError = (error: AxiosRequestConfig) => {
    console.log(error);
    return Promise.reject(error);
  };

  return { onSuccess, onError };
};
