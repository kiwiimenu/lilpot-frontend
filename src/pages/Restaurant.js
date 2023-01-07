import "./menus.css"
import masterbg from '../assets/masterbackground.png';
import RestaurantFood from '../assets/restaurantfood.png'
import RestaurantPot from '../assets/restaurantpot.png'
import {AiOutlineArrowRight} from "react-icons/ai";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect, useState, useRef } from "react";
import { db } from "../firebase/firebase-config.js";
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { async } from "@firebase/util";



function Restaurant() {
    
    const [textEn, setTextEn] = useState("");
    const [textCn, setTextCn] = useState("")
    const [textFieldText, setTextField] = useState("");
    const docReference = doc(db, "text", "restauranttextcn");
    const docReferenceCn = doc(db, "text", "restauranttexten");
    const valueRef = useRef('');
    const valueRefCn = useRef('');
    // add a ref for chinese
    
    useEffect(() => {
        const getText = async () => {
            const textData = await getDoc(docReference);
            setTextEn(textData.data().text);
        };
        getText();
    }, []);

    useEffect(() => {
        const getText = async () => {
            const textData = await getDoc(docReferenceCn);
            setTextCn(textData.data().text);
        };
        getText();
    }, []);
    
    async function submitText() {
        const docReference = doc(db, "text", "restauranttextcn");
        await updateDoc(docReference, {
            text: valueRef.current.value
          });
        valueRef.current.value = "";
    }

    async function submitTextCn() {
        const docReference = doc(db, "text", "restauranttexten");
        await updateDoc(docReference, {
            text: valueRefCn.current.value
          });
        valueRefCn.current.value = ""
    }
    return (
        <div  className="background-wrapper" style={{backgroundImage:`url(${masterbg})`}}>
            <div className="image-container">
                <img src={RestaurantFood} alt='' className="image-food"></img>
            </div>
            <div className="title-container">
                <div>Restaurant</div>
                <div className="arrow-container">
                    <AiOutlineArrowRight className="arrow"></AiOutlineArrowRight>
                </div>
            </div>
            <div className="body-container">
                <div className="body-text">{textEn}</div>
                <div className="img-container">
                    <img src={RestaurantPot} alt=''></img>
                </div>
            </div>
            <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '500px', color: "white"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Change Display English" variant="outlined" multiline
          rows={8} defaultValue={textEn} InputLabelProps={{ shrink: true }} inputProps={{ style: { color: "white" } }} inputRef={valueRef} />
    </Box>

    <Button variant="contained" onClick= {submitText}>Submit</Button>
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '500px', color: "white"},
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Change Display Chinese" variant="outlined" multiline
          rows={8} defaultValue={textCn} InputLabelProps={{ shrink: true }} inputProps={{ style: { color: "white" } }} inputRef={valueRefCn} />
    </Box>
    <Button variant="contained" onClick= {submitTextCn}>Submit</Button>
        </div>
    )
}

export default Restaurant;