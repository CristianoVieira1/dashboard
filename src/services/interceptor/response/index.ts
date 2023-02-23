/* eslint-disable react-hooks/rules-of-hooks */
import { AxiosResponse, AxiosError } from "axios";
import { useErrorsHandlers } from "./errorHandler";
import { useSuccessHandler } from "./sucessHandler";

export const responseInterceptor = () => {
  const { updateCurrentSessionAccessToken } = useSuccessHandler();
  const { notAuthorized, internalServerError, noInternetConnection } =
    useErrorsHandlers();

  const onSuccess = async (response: AxiosResponse<any>): Promise<any> => {
    await updateCurrentSessionAccessToken(response);
    return Promise.resolve(response);
  };

  const onError = (error: AxiosError): Promise<AxiosError> => {
    notAuthorized(error);
    internalServerError(error);
    noInternetConnection(error);

    return Promise.reject(error);
  };

  return { onSuccess, onError };
};
