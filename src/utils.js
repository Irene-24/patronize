import * as Yup from "yup";

const schema = Yup.object().shape(
    {
        bvn: Yup.string().when( [ "bank", "accountNumber" ],
            {
                is: ( accountNumber, bank ) => !accountNumber || !bank,
                then: Yup.string().required( "Please input your BVN" )
                    .matches( /^[0-9]+$/, "Only digits allowed" )
                    .min( 11, "BVN must be 11 digits" )
                    .max( 11, "BVN must be 11 digits" ),
                otherwise: Yup.string()
            } ),
        accountNumber: Yup.string().when( "bvn",
            {
                is: ( bvn ) => !bvn,
                then: Yup.string().required( "Please input your account number" )
                    .matches( /^[0-9]+$/, "Only digits allowed" )
                    .min( 10, "Account number must be 10 digits" )
                    .max( 10, "Account number must be 10 digits" ),
                otherwise: Yup.string()
            } ),
        bank: Yup.string().when( "bvn",
            {
                is: ( bvn ) => !bvn,
                then: Yup.string().required( "Please choose your bank" ),
                otherwise: Yup.string()
            } ),
        abeg: Yup.string().required( "Please input your abeg Tag" ),
        instagram: Yup.string().nullable().notRequired(),
        twitter: Yup.string().nullable().notRequired(),
        pos: Yup.boolean().required( "Please select POS status" ),
        businessType: Yup.string().required( "Please select your business type" ),
        businessCategory: Yup.string().required( "Please select your business category" ),

    },
    [
        [ "bank", "bvn" ],
        [ "bvn", "accountNumber" ],

    ] );

const initValues =
{
    bvn: "",
    accountNumber: "",
    bank: "",
    instagram: "",
    abeg: "",
    twitter: "",
    businessCategory: "",
    businessType: "",
    pos: ""
};

export 
{
    schema,
    initValues
};
