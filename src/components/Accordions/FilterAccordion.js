import React from 'react';
import { MenuItem, Divider, Typography, AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import { useSearchParams } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FilterAccordion(props) {
    const [searchParams,setSearchParams] = useSearchParams()

    const handleClick = (event) => {
        const name = event.currentTarget.id.split("+")
        if(name[0] === "category"){
            if(props.expanded === props.id){
                setSearchParams({...Object.fromEntries([...searchParams]),category:"ALL",subcategory:"ALL"})
                props.checkExpanded("none")
            } else {
                setSearchParams({...Object.fromEntries([...searchParams]),category:name[1]})
                props.checkExpanded(name[1])
            }
        }
        name[0] === "subcategory" && setSearchParams({...Object.fromEntries([...searchParams]),subcategory:name[1]})
    }

  return (
    <>
        <Divider style={{width:'100%'}} />
        <Accordion elevation={0} expanded={props.expanded === props.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={props.label}
                id={`category+${props.id}`}
                onClick={handleClick}
            >
                <Typography>{props.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {Array.from(props.subcategories).map((subcategory)=>{
                    return (
                        <MenuItem key={subcategory.id} id={`subcategory+${subcategory.id}`} onClick={handleClick}><Typography>{subcategory.label}</Typography></MenuItem>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    </>
  );
}