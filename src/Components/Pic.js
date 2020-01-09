import React, { useState, useEffect } from "react";
import axios from 'axios';
import { Container, Row, Card, CardBody, Button, CardTitle, CardText, CardImg } from "reactstrap";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function Pic() {


    const [img, setImg] = useState('');
    const [title, setTitle] = useState('');
    const [about, setAbout] = useState('');
    const [date, setDate] = useState('');
    const [newDate, setNewDate] = useState(new Date());

    let day = newDate.getDate();
    let month = newDate.getMonth() + 1;
    let year = newDate.getFullYear();

    const onChange = newDate => setNewDate(newDate)

    useEffect(() => {
        const fetchImg = () => 
            axios
            .get(`https://api.nasa.gov/planetary/apod?api_key=txo9QSfawgvc4ylb0UaZObrbdjO1ClUOtGfIvObv&date=${year}-${month}-${day}`)
        
            .then(img => {
                setImg(img.data.hdurl)
                setTitle(img.data.title)
                setAbout(img.data.explanation)
                setDate(img.data.date)
                console.log(img);
            })
            .catch(error => {
                console.log("The data was not returned", error);
            });
        fetchImg()
        }, [day, month, year])
        console.log(img)
    

    return (
        <Container>
               {/* <Row>
                    <p>Title: {title}</p>    
               </Row> */}
               <Row> 
                    <p>
                        Date: {} 
                        < DatePicker 
                        selected = {newDate}
                        onChange = {onChange}
                        value = {newDate}
                        format = 'yyyy-MM-dd'
                        maxDate = {new Date()}/>
                    </p>                 
                </Row>         
            {/* <img src = {img} alt = ""/> */}
            {/* <div>
                <h3>About this Photo</h3>
                <p>{about}</p>
            </div> */}

            <Card>
                <CardImg top width="70%" src={img} alt = "" />
                <CardBody>
                    <CardTitle>{title}</CardTitle>
                    <CardText>{about}</CardText>
                </CardBody>
            </Card>



        </Container>
    );


}
console.log(Pic);
export default Pic;


