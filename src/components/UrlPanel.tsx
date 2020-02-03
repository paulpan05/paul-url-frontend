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
        <h1>/{props.route}</h1>
        <h2>{props.originalUrl}</h2>
        <h3>{props.description}</h3>
      </div>
    </div>
  );
}

export default UrlPanel;