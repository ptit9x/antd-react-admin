import type { FC, ReactElement } from 'react';

import PrivateRoute from './pravateRoute';

export interface WrapperRouteProps {
  element: ReactElement;
  auth?: boolean;
}

const WrapperRouteComponent: FC<WrapperRouteProps> = ({ element, auth }) => {
  return auth ? <PrivateRoute element={element} /> : (element as ReactElement);
};

export default WrapperRouteComponent;
