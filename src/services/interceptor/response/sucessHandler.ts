import { AxiosResponse } from "axios";
import { useSession } from "../../../context/Session";

export function useSuccessHandler() {
  const { updateAccessToken } = useSession();

  async function updateCurrentSessionAccessToken(
    response: AxiosResponse<any>
  ): Promise<void> {
    const accessToken =
      response?.data?.accessToken || response?.data?.Retorno?.accessToken;
    accessToken && (await updateAccessToken(accessToken));
  }

  return { updateCurrentSessionAccessToken };
}
