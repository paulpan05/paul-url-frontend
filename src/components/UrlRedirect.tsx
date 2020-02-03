import React from 'react';
import { useParams } from 'react-router-dom';
import { getRoute, GetResponse } from '../api/Requests';

const UrlRedirect: React.FC = () => {
  const [redirectResponse, setRedirectResponse] = React.useState<GetResponse | undefined>();

  React.useEffect(() => {
    if (!redirectResponse) {
      updateRedirectResponse();
    }
  }, [])

  let { routeName } = useParams();

  const updateRedirectResponse = async () => {
    const response: GetResponse = await getRoute(routeName!);
    setRedirectResponse(response);
  }

  if (!redirectResponse) {
    return <h1>Please wait...</h1>
  } else if (redirectResponse?.id === -1) {
    return <h1>404: Page not found</h1>
  } else {
    window.location.href = redirectResponse?.originalUrl;
    return null;
  }
}

export default UrlRedirect;