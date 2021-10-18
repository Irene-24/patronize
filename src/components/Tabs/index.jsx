import React, { useState } from 'react';

import { Tab } from "./Tab";
import { TabTitle } from "./TabTitle";

import 
{
    canGoTo,
    normalizeRange
} from "../../utils";

import styles from './Tabs.module.scss';

const Tabs = ( { children } ) => 
{
    const [ selectedTab, setSelectedTab ] = useState( 0 );

    const handleTabChange = index =>
    {
        const validStates = React.Children.map( children, t => t.props.valid );

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
                        React.Children.map( children, ( t, i ) => (
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


                { children[ selectedTab ].props.children( () => handleTabChange( selectedTab + 1 ) ) }


            </section>
        </div>
    );
};

export 
{
    Tabs,
    Tab
};
