import classNames from 'classnames';
import React, { useCallback } from 'react';
import styles from './Tabs.module.scss';


const TabTitle = (
    {
        title,
        selectedTab,
        setSelectedTab,
        index,
        valid = false
    } ) =>
{
    const onClick = useCallback( () =>
    {
        setSelectedTab( index );
    }, [ setSelectedTab, index ] );


    return (
        <button
            onClick={ onClick }
            className={ classNames( styles.tabTitle,
                {
                    [ styles.active ]: index === selectedTab
                } ) }>
            <span className={ classNames( styles.icon,
                {
                    [ styles.active ]: index === selectedTab,
                } ) } >
                { valid ? <i className="las la-check"></i> : ( index + 1 ) }
            </span>
            <span className={ styles.title } >
                { title }
            </span>
        </button>
    );
};

export { TabTitle };
