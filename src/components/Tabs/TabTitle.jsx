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

    const active = index === selectedTab;


    return (
        <button
            onClick={ onClick }
            type="button"
            className={ classNames( styles.tabTitle,
                {
                    [ styles.active ]: active
                } ) }>
            <span className={ classNames( styles.icon,
                {
                    [ styles.active ]: active
                } ) } >
                { ( valid && !active ) ? <i className="las la-check"></i> : null }

                { ( !valid && active ) ? index + 1 : null }

                { ( !valid && !active ) ? index + 1 : null }

                { ( valid && active ) ? index + 1 : null }

            </span>
            <span className={ styles.title }>
                { title }
            </span>
        </button>
    );
};

export { TabTitle };
