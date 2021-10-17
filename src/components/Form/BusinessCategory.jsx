import React from 'react';
import { Field, ErrorMessage } from "formik";
import classNames from 'classnames';

import { Button } from "..";


import { businessCategories, businessTypes } from "../../utils";


import styles from './Form.module.scss';


const BusinessCategory = ( { formikProps } ) =>
{
    const setPos = val =>
    {
        formikProps.setFieldValue( "pos", val );
    };

    return (
        <div className={ styles.section }>
            <h2 className={ styles.title }>
                Business Category
            </h2>

            <div className={ styles.fields }>

                <div className={ styles.inputRow }>

                    <div className={ styles.fieldGroup } >
                        <label
                            className={ styles.label }
                            htmlFor="businessType">
                            Type of your business
                        </label>
                        <Field as="select" name="businessType">
                            <option
                                value="">
                                Choose...
                            </option>
                            {
                                businessTypes.map( b => (
                                    <option
                                        key={ b.id }
                                        value={ b.id }>
                                        { b.name }
                                    </option>
                                ) )
                            }


                        </Field>
                        <ErrorMessage component="small" name="bank" />
                    </div>

                    <div className={ styles.fieldGroup } >
                        <label
                            className={ styles.label }
                            htmlFor="businessCategory">
                            Business Category
                        </label>
                        <Field as="select" name="businessCategory">
                            <option
                                value="">
                                Choose...
                            </option>
                            {
                                businessCategories.map( b => (
                                    <option
                                        key={ b.id }
                                        value={ b.id }>
                                        { b.name }
                                    </option>
                                ) )
                            }


                        </Field>
                        <ErrorMessage component="small" name="bank" />
                    </div>
                </div>


                <div className={ classNames( styles.fieldGroup, styles.pos ) } >
                    <label className={ styles.label }>
                        Do you use POS machines for your business?
                    </label>

                    <div className={ styles.btnRow }>
                        <Button
                            onClick={ () => setPos( true ) }
                            className={ classNames( styles.pick,
                                {
                                    [ styles.active ]: formikProps.values.pos
                                } ) }>
                            Yes
                        </Button>

                        <Button
                            onClick={ () => setPos( false ) }
                            className={ classNames( styles.pick,
                                {
                                    [ styles.active ]: !formikProps.values.pos
                                } ) }>
                            No
                        </Button>
                    </div>

                    <ErrorMessage component="small" name="pos" />

                </div>





            </div>



        </div>
    );
};

export { BusinessCategory };
