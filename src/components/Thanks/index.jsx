import React from 'react';
import { keys, getValues, getValue } from "../../utils";
import styles from './Thanks.module.scss';


const Thanks = ( { details } ) => 
{
    const list = Object.entries( details ).filter( d => d[ 1 ].toString().length );

    return (
        <>
            <h2>Thank you for your time</h2>
            <br />


            <h4  >User Details</h4>

            <br />


            <section className={ styles.items } >
                {
                    list.map( d => (
                        <div key={ d[ 0 ] }
                            className={ styles.grid }>
                            <p className={ styles.label } >{ keys[ d[ 0 ] ] }</p>
                            <p >{ getValue( d[ 0 ], d[ 1 ] ) }</p>
                        </div>
                    ) )
                }
            </section>


        </>
    );
};

export { Thanks };
