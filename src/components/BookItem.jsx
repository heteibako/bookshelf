import React from 'react';
import { Link } from 'react-router-dom';
import { Card, CardBody, CardText, CardFooter, CardTitle, CardImg } from 'reactstrap';
const BookItem = ({ title, coverImg, description, bookLink }) => {
  return (
    <Card
      className="card-background"
      style={{
        backgroundImage: `url(${coverImg}) `,
      }}>
      <CardBody>
        <CardTitle className="text-left" tag="div">
          <h3>{title}</h3>
        </CardTitle>
        <CardText style={{ color: 'white' }}>{description && description.slice(0, 150)}</CardText>
        <CardFooter className="text-left">
          <div className="stats-link pull-right">
            <Link to={`/book/${bookLink}`} style={{ color: 'white' }}>
              Details
            </Link>
          </div>
        </CardFooter>
      </CardBody>
    </Card>
  );
};

export default BookItem;
