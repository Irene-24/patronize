import React, { useState } from 'react';
import { Field, ErrorMessage } from "formik";
import classNames from 'classnames';

import { Button, AccordionCard } from "..";
import { banks } from "../../utils";
import styles from './Form.module.scss';
import lock from "../../assets/images/lock.svg";
import lock2 from "../../assets/images/lock2.png";



const VerifyAccount = ( { formikProps, goTo } ) =>
{
    const [ isBank, setIsBank ] = useState( formikProps.values.bvn ? false : true );


    const toggleBank = ( val ) =>
    {
        setIsBank( val );

        formikProps.setValues( {
            ...formikProps.values,
            bvn: "",
            bank: "",
            accountNumber: ""
        }
        );
        formikProps.setErrors( {
            ...formikProps.errors,
            bvn: "",
            bank: "",
            accountNumber: ""
        }
        );

    };


    return (
        <div className={ styles.section }>
            <h2 className={ styles.title }>
                Verify Account
            </h2>


            <section className={ styles.fields }>
                <p className={ styles.label }>
                    Select a verification method
                </p>
                <div className={ styles.btnRow }>
                    <Button
                        onClick={ () => toggleBank( false ) }
                        className={ classNames( styles.pick,
                            {
                                [ styles.active ]: !isBank
                            } ) }>
                        BVN
                    </Button>

                    <Button
                        onClick={ () => toggleBank( true ) }
                        className={ classNames( styles.pick,
                            {
                                [ styles.active ]: isBank
                            } ) }>
                        Personal Account Number
                    </Button>
                </div>

                {
                    isBank
                        ?

                        <div className={ styles.inputRow }>
                            <div className={ styles.fieldGroup } >
                                <label
                                    className={ styles.label }
                                    htmlFor="accountNumber">
                                    Account Number
                                </label>
                                <Field name="accountNumber" />
                                <ErrorMessage component="small" name="accountNumber" />
                            </div>
                            <div className={ styles.fieldGroup } >
                                <label
                                    className={ styles.label }
                                    htmlFor="bank">
                                    Select Bank
                                </label>
                                <Field as="select" name="bank">
                                    <option
                                        value="">
                                        Choose...
                                    </option>
                                    {
                                        banks.map( b => (
                                            <option
                                                key={ b.id }
                                                value={ b.code }>
                                                { b.name }
                                            </option>
                                        ) )
                                    }


                                </Field>
                                <ErrorMessage component="small" name="bank" />
                            </div>
                        </div>

                        :

                        <>
                            <div className={ styles.fieldGroup } >
                                <label
                                    className={ styles.label }
                                    htmlFor="bvn">
                                    Bank Verification Number (11-digits)
                                </label>
                                <Field name="bvn" />
                                <ErrorMessage component="small" name="bvn" />
                            </div>

                            <AccordionCard
                                icon={ <img src={ lock } alt="lock icon" /> }
                                label="Why we need your BVN">

                                <div className={ styles.acc }>
                                    <p>We only need access to your:</p>

                                    <br />

                                    <p  >

                                        <i className="las la-check"></i>                                   <span>
                                            Full Name
                                        </span>
                                    </p>

                                    <p  >

                                        <i className="las la-check"></i>                                   <span>
                                            Phone Number
                                        </span>
                                    </p>

                                    <p  >

                                        <i className="las la-check"></i>                                   <span>
                                            Date of Birth
                                        </span>
                                    </p>

                                    <footer>
                                        <img src={ lock2 } alt="lock icon" />
                                        <p>Your BVN does not give us access to your bank accounts or transactions</p>
                                    </footer>
                                </div>



                            </AccordionCard>

                        </>
                }


            </section>


            <div className={ styles.next }>
                <Button onClick={ goTo }>
                    Next
                </Button>
            </div>


        </div>
    );
};

export { VerifyAccount };
