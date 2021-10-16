import React, { useState, useCallback } from 'react';
import classNames from "classnames";

import { Button } from "../";

import styles from "./AccordionCard.module.scss";

const AccordionCard = ( {
    children,
    label,
    icon
} ) => 
{
    const [ isOpen, setIsOpen ] = useState( false );

    const onClick = useCallback( () =>
    {
        setIsOpen( s => !s );
    }, [ setIsOpen ] );


    return (
        <div className={ styles.card }>
            <Button
                onClick={ onClick }
                className={ styles.label }>
                <span className={ styles.left }>
                    { icon }
                    <p>{ label }</p>
                </span>

                <span className={ styles.right } >
                    <span> { isOpen ? "Hide" : "Show " }</span>
                    <i
                        className={ `las la-angle-${ isOpen ? "up" : "down" }` }>

                    </i>
                </span>

            </Button>

            <section className={ classNames( styles.panel, { [ styles.active ]: isOpen } ) }>
                { children }
            </section>
        </div>
    );
};


export { AccordionCard };
