import { requestInterceptor } from './request';
import { responseInterceptor } from './response';

export const useInterceptor = () => {
  const onRequest = requestInterceptor();
  const onResponse = responseInterceptor();

  return { onRequest, onResponse }
}