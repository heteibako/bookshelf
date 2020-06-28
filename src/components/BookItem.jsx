import React from 'react';
import { Card, CardBody, CardFooter, CardTitle } from 'reactstrap';
const BookItem = ({ title, coverImg }) => {
  return (
    <Card
      className="card-background"
      style={{
        backgroundImage: `url(${coverImg})`,
      }}>
      <CardBody>
        <CardTitle className="text-left" tag="div">
          <h3>{title}</h3>
        </CardTitle>
        <CardFooter className="text-left">
          <div className="stats">
            <span>
              <i className="now-ui-icons media-2_sound-wave"></i>
              SPACE.com
            </span>
            <span>
              <i className="now-ui-icons tech_watch-time"></i>
              20min ago
            </span>
          </div>
          <div className="stats-link pull-right">
            <a className="footer-link" href="#pablo" onClick={(e) => e.preventDefault()}>
              Environment
            </a>
          </div>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default BookItem;
