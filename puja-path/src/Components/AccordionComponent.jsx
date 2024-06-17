import React from "react";
import { Link } from "react-router-dom";
import Styles from "../Styles/CustomStyles.module.css";
import { Box, Text, AccordionItem, AccordionButton, AccordionIcon } from '@chakra-ui/react';

export const AccordionComponent = ({path,title}) => {

    return <>
        <AccordionItem>
            <Link to={path} className={Styles.accordionChild}>
                    <AccordionButton>
                        <Box as='span' flex='1' textAlign='left'>
                            <Text fontSize='md' as={'b'} > {title} </Text>
                        </Box>
                        <AccordionIcon />
                    </AccordionButton>
            </Link>
        </AccordionItem>
    </>
}