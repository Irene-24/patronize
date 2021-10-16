import React, { useState } from 'react';
import { Tab } from "./Tab";
import { TabTitle } from "./TabTitle";

import styles from './Tabs.module.scss';

const canGoTo = ( currentPos, destination, validStates ) =>
{
    const b4Dest = destination - 1 > -1 ? destination - 1 : 0;

    return validStates[ currentPos ] && validStates[ b4Dest ];

};


const Tabs = ( { children } ) => 
{
    const [ selectedTab, setSelectedTab ] = useState( 0 );

    const handleTabChange = index =>
    {
        const validStates = children.map( t => t.props.valid );

        if ( canGoTo( selectedTab, index, validStates ) )
        {
            setSelectedTab( index );

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
                                    selectedTab={ selectedTab }

                                />
                            </li>
                        ) )
                    }
                </ul>
            </nav>

            <section className={ styles.panel }>

                <p className={ styles.step } >Step { selectedTab + 1 }/{ children.length }</p>

                { children[ selectedTab ] }


            </section>
        </div>
    );
};

export 
{
    Tabs,
    Tab
};
