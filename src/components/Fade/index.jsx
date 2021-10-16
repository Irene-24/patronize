import React, { useEffect, useState } from "react";
import styles from "./Fade.module.scss";

const Fade = ( { show = true, children, dur = "1s" } ) =>
{
    const [ shouldRender, setRender ] = useState( show );

    useEffect( () =>
    {
        if ( show ) setRender( true );
    }, [ show ] );

    const onAnimationEnd = () =>
    {
        if ( !show ) setRender( false );
    };

    return (
        shouldRender && (
            <div
                style={
                    {
                        animation: `${ show ? styles.fadeIn : styles.fadeOut } ${ dur }`
                    }
                }
                onAnimationEnd={ onAnimationEnd }
            >
                { children }
            </div>
        )
    );
};

export { Fade };
