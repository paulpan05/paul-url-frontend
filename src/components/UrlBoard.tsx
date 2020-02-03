import React from "react";
import UrlPanel from "./UrlPanel";
import { GetResponse, getAll } from "../api/Requests";

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
  if (!allUrls) {
    return <div></div>
  } else {
    console.log("Fetch success");
    return <>
      {allUrls?.map((value, key) => {
        return <UrlPanel key={key} route={value.route} originalUrl={value.originalUrl} description={value.description} />;
      })}
    </>
  }
}

export default UrlBoard;