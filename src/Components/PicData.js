import React from "react";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";


const PicData = props => {
    return(
        <Card>
            <CardBody className="Pic-Data">
            <CardTitle>Title: {props.title}</CardTitle>
            <CardText>{props.explanation}</CardText>
            <CardSubtitle>{props.hdurl}</CardSubtitle>
            <CardSubtitle>Release date: {props.date}</CardSubtitle>
            </CardBody>
        </Card>
    );
};

export default PicData;