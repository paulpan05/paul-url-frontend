import React from 'react';
import '../styles/UrlPanel.css';

type UrlPanelProps = {
  route: string
  originalUrl: string
  description: string
}

const UrlPanel: React.FC<UrlPanelProps> = (props) => {
  return (
    <div className="outerPanel">
      <div className="panel">
        <h1 className="route"><a href={props.originalUrl}>/{props.route}</a></h1>
        <h2 className="url">{props.originalUrl}</h2>
        <h3 className="url-description">{props.description}</h3>
      </div>
    </div>
  );
}

export default UrlPanel;