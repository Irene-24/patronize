import React from 'react';
import { Field, ErrorMessage } from "formik";
import styles from './Form.module.scss';


const BusinessCategory = ( { formikProps } ) =>
{
    return (
        <div className={ styles.section }>
            <h2 className={ styles.title }>
                Business Category
            </h2>

            <div>
                Select a verification method
            </div>

            <div className={ styles.fieldGroup } >
                <label htmlFor="email">Email Address</label>
                <Field name="email" type="email" />
                <ErrorMessage as="small" name="email" />
            </div>

        </div>
    );
};

export { BusinessCategory };
