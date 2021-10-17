import React, { useState } from 'react';

import { Tab } from "./Tab";
import { TabTitle } from "./TabTitle";
import { Button } from "../";

import 
{
    uuidv4,
    canGoTo,
    normalizeRange
} from "../../utils";

import styles from './Tabs.module.scss';



const Tabs = ( { children } ) => 
{
    const [ selectedTab, setSelectedTab ] = useState( 0 );

    const handleTabChange = index =>
    {
        const validStates = children.map( t => t.props.valid );

        if ( canGoTo( selectedTab, index, validStates ) )
        {
            setSelectedTab( normalizeRange( index, children.length ) );

        }
    };

    return (
        <div>
            <nav>
                <ul className={ styles.navigation }>

                    {
                        children.map( ( t, i ) => (
                            <li key={ t.props.title }>
                                <TabTitle
                                    title={ t.props.title }
                                    setSelectedTab={ handleTabChange }
                                    index={ i }
                                    valid={ t.props.valid }
                                    selectedTab={ selectedTab }

                                />
                            </li>
                        ) )
                    }
                </ul>

                <div className={ styles.mini }>
                    <button
                        type="button"
                        disabled={ selectedTab === 0 }
                        onClick={ () => handleTabChange( selectedTab - 1 ) } >
                        <i className="las la-angle-left"></i>
                    </button>

                    <button
                        type="button"
                        disabled={ selectedTab === children.length - 1 }
                        onClick={ () => handleTabChange( selectedTab + 1 ) } >
                        <i className="las la-angle-right"></i>
                    </button>
                </div>



            </nav>

            <section className={ styles.panel }>

                <p className={ styles.step } >Step { selectedTab + 1 }/{ children.length }</p>

                { children[ selectedTab ] }


                {/* 
- pass key so that the button will not submit form for type=button 
- replace click with mouse up/mouse down to fix ux issue of click not firing when input fields are changed
*/}
                <footer>
                    <Button
                        key={ uuidv4() }
                        onMouseUp={ () => handleTabChange( selectedTab + 1 ) }
                        onMouseDown={ ( e ) => e.preventDefault() }
                        type={ !children[ selectedTab ].props.isLast ? "button" : "submit" }>
                        { children[ selectedTab ].props.nextButtonText }

                    </Button>
                </footer>


            </section>
        </div>
    );
};

export 
{
    Tabs,
    Tab
};
