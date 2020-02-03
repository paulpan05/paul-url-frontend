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
    <div className="board">
      <h1 className="title">Paul's URL Shortener</h1>
      <h2 className="description">You can visit each of these websites by going to <b>paulurl.com/<i>Name of the route</i></b></h2>
      {allUrls?.map((value, key) => {
        return <UrlPanel key={key} route={value.route} originalUrl={value.originalUrl} description={value.description} />;
      })}
    </div>
  );
}

export default UrlBoard;