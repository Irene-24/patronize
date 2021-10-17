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
  SocialHandle,
  Thanks
} from "./components";


const getValid = ( formikProps, key ) =>
{
  const { errors } = formikProps;
  switch ( key ) 
  {
    case "vf":
      const { bvn, accountNumber, bank } = errors;
      return !( bvn || accountNumber || bank );

    case "sh":
      const { abeg } = errors;
      return !abeg;

    case "bc":
      const { businessType, businessCategory } = errors;
      return !( businessType || businessCategory );

    default:
      return true;
  }
};



function App ()
{

  const [ details, setDetails ] = useState( {} );

  const submitHandler = values =>
  {
    setDetails( values );
  };

  //key  for fade it necessary, else animation won't run
  return (
    <main>
      <div className={ styles.illus }> <div /> </div>
      <section className={ styles.form }>

        {
          details?.abeg ?
            <Thanks details={ details } />
            :
            <Formik
              initialValues={ initValues }
              validationSchema={ schema }
              validateOnMount={ true }
              onSubmit={ ( values ) =>
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



        }






        <Button className={ styles.logout } >
          Logout
        </Button>
      </section>

    </main>
  );
}

export default App;
