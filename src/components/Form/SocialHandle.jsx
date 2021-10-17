import React from 'react';
import { Field, ErrorMessage } from "formik";
import classNames from 'classnames';

import styles from './Form.module.scss';


const SocialHandle = () =>
{
    return (
        <div className={ classNames( styles.section, styles.socials ) }>
            <h2 className={ styles.title }>
                Social Handles
            </h2>

            <p className={ styles.instruction }>Enter your business social media handles</p>

            <div className={ styles.fields }>
                <div className={ styles.fieldGroup } >
                    <label
                        className={ styles.label }
                        htmlFor="abeg">
                        Choose your Abeg Tag (required)
                    </label>
                    <Field name="abeg" />
                    <ErrorMessage component="small" name="abeg" />
                </div>

                <div className={ styles.inputRow }>

                    <div className={ styles.fieldGroup } >
                        <label
                            className={ styles.label }
                            htmlFor="instagram">
                            Instagram
                        </label>
                        <Field name="instagram" />
                        <ErrorMessage component="small" name="instagram" />
                    </div>

                    <div className={ styles.fieldGroup } >
                        <label
                            className={ styles.label }
                            htmlFor="twitter">
                            Twitter
                        </label>
                        <Field name="twitter" />
                        <ErrorMessage component="small" name="twitter" />
                    </div>

                </div>
            </div>

        </div>
    );
};

export { SocialHandle };
