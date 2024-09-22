import { NavLink, useRouteError } from 'react-router-dom';

type RouteError = {
  status?: number;
  statusText?: string;
  message?: string;
};

export const PageNotFound= () => {
  const error = useRouteError() as RouteError;

  return (
    <div>
      <h1>Unexpected Application Error!</h1>
      <p>{error.status} {error.statusText}</p>
      <p>{error.message}</p>
      <NavLink to="/">Home Page</NavLink>
    </div>
  );
};

