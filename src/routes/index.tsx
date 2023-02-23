import { BrowserRouter } from 'react-router-dom';

import { useAuth } from '../hooks/auth';
import PrivateRoutes from './private.routes';
import PublicRoutes from './public.routes';

const Routes = () => {
  const { logged } = useAuth();

  return <BrowserRouter>{!logged ? <PrivateRoutes /> : <PublicRoutes />}</BrowserRouter>;
};

export default Routes;
