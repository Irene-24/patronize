import React, { useState } from 'react';

import styles from './App.module.scss';
import { Form, Formik } from "formik";
import { schema, initValues } from "./utils";
import
{
  Button,
  Tabs,
  Tab,
  Fade,
  VerifyAccount,
  BusinessCategory,
  SocialHandle
} from "./components";


const getValid = ( formikProps, key ) =>
{
  const { error } = formikProps;
  console.log( formikProps );
  switch ( key ) 
  {
    case "vf":
      return true;

    case "sh":
      return true;

    case "bc":
      return true;

    default:
      return true;
  }
};



function App ()
{

  const [ details, setDetails ] = useState( null );

  const submitHandler = values =>
  {
    console.log( values );
    setDetails( values );
  };

  //key  for fade it necessary, else animation won't run
  return (
    <main>
      <div className={ styles.illus }> <div /> </div>
      <section className={ styles.form }>

        <Formik
          initialValues={ initValues }
          validationSchema={ schema }
          validateOnMount={ true }
          onSubmit={ ( values, { setSubmitting } ) =>
          {
            submitHandler( values );
          } }
        >

          {
            ( props ) => (
              <Form>

                <Tabs>

                  <Tab
                    nextButtonText="Continue"
                    valid={ getValid( props, "vf" ) }
                    title="Verify Account">
                    <Fade key={ 1 }>
                      <VerifyAccount formikProps={ props } />
                    </Fade>
                  </Tab>

                  <Tab
                    nextButtonText="Confirm Social Handles"
                    valid={ getValid( props, "sh" ) }
                    title="Social Handles">
                    <Fade key={ 2 }>
                      <SocialHandle formikProps={ props } />
                    </Fade>
                  </Tab>

                  <Tab
                    isLast
                    nextButtonText="Complete"
                    valid={ getValid( props, "bc" ) }
                    submitHandler={ submitHandler }
                    title="Business Category">
                    <Fade key={ 3 }>
                      <BusinessCategory formikProps={ props } />
                    </Fade>
                  </Tab>

                </Tabs>

              </Form>

            )
          }

        </Formik>






        <Button className={ styles.logout } >
          Logout
        </Button>
      </section>

    </main>
  );
}

export default App;
