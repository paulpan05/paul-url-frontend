import React from 'react';
import { useParams } from 'react-router-dom';
import { getRoute, GetResponse } from '../api/Requests';

const UrlRedirect: React.FC = () => {
  const [redirectResponse, setRedirectResponse] = React.useState<GetResponse | undefined | null>();

  React.useEffect(() => {
    if (!redirectResponse) {
      updateRedirectResponse();
    }
  }, [])

  let { routeName } = useParams();

  const updateRedirectResponse = async () => {
    const response: GetResponse | null = await getRoute(routeName!);
    setRedirectResponse(response);
  }

  if (!redirectResponse) {
    return <h1 className="status">Please wait...</h1>
  } else if (redirectResponse === null) {
    return <h1 className="status">Error: Route Not Found</h1>
  } else {
    window.location.href = redirectResponse?.originalUrl;
    return null;
  }
}

export default UrlRedirect;