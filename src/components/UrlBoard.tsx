import React from "react";
import UrlPanel from "./UrlPanel";
import { GetResponse, getAll } from "../api/Requests";
import '../styles/UrlBoard.css';

const UrlBoard: React.FC = () => {
  const [allUrls, setAllUrls] = React.useState<GetResponse[] | undefined>();

  React.useEffect(() => {
    if (!allUrls) {
      updateUrls();
    }
  }, [])

  const updateUrls = async () => {
    const responseArray: GetResponse[] = await getAll();
    setAllUrls(responseArray);
  }
  return (
    <>
      <h1 className="title">List of Shortened URL's</h1>
      <p className="description">You can visit each of these websites by going to paulurl.com/"Name of the route"</p>
      {allUrls?.map((value, key) => {
        return <UrlPanel key={key} route={value.route} originalUrl={value.originalUrl} description={value.description} />;
      })}
    </>
  );
}

export default UrlBoard;