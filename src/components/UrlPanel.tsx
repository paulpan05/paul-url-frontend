import React from 'react';

type UrlPanelProps = {
  route: string
  originalUrl: string
  description: string
}

const UrlPanel: React.FC<UrlPanelProps> = (props) => {
  return (
    <div>
      <h1>{props.route}</h1>
      <h2>{props.originalUrl}</h2>
      <h3>{props.description}</h3>
    </div>
  );
}

export default UrlPanel;