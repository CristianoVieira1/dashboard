import { useSession } from "../../../context/Session";

export const useErrorsHandlers = () => {
  const { removeSession } = useSession();

  const notAuthorized = async (error: any): Promise<void> => {
    if (error?.response?.status == 401) {
      removeSession();
    }
  };

  const noInternetConnection = (error: any): void => {
    const noInternetConnection = error.response;

    if (noInternetConnection) {
      // Do something...
    }
  };

  const internalServerError = (error: any): void => {
    if (error?.response?.status === 500) {
      // Do something...
    }
  };

  return { notAuthorized, noInternetConnection, internalServerError };
};
