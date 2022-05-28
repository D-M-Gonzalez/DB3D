import React from 'react';
import { MenuItem, Divider, Typography, AccordionDetails, AccordionSummary, Accordion } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FilterAccordion(props) {

  return (
    <>
        <Divider style={{width:'100%'}} />
        <Accordion elevation={0} expanded={props.expanded === props.id}>
            <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                aria-controls={props.label}
                id={`category+${props.id}`}
                onClick={props.handleClick(props.expanded,props.id)}
            >
                <Typography>{props.label}</Typography>
            </AccordionSummary>
            <AccordionDetails>
                {Array.from(props.subcategories).map((subcategory)=>{
                    return (
                        <MenuItem 
                            key={subcategory.id} 
                            id={`subcategory+${subcategory.id}`} 
                            onClick={props.handleClick(props.expanded,subcategory.id)}
                            >
                            <Typography>{subcategory.label}</Typography>
                        </MenuItem>
                    )
                })}
            </AccordionDetails>
        </Accordion>
    </>
  );
}