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
    pos: false
};

const banks =
    [
        { "id": "1", "name": "Access Bank", "code": "044" },
        { "id": "2", "name": "Citibank", "code": "023" },
        { "id": "3", "name": "Diamond Bank", "code": "063" },
        { "id": "4", "name": "Dynamic Standard Bank", "code": "" },
        { "id": "5", "name": "Ecobank Nigeria", "code": "050" },
        { "id": "6", "name": "Fidelity Bank Nigeria", "code": "070" },
        { "id": "7", "name": "First Bank of Nigeria", "code": "011" },
        { "id": "8", "name": "First City Monument Bank", "code": "214" },
        { "id": "9", "name": "Guaranty Trust Bank", "code": "058" },
        { "id": "10", "name": "Heritage Bank Plc", "code": "030" },
        { "id": "11", "name": "Jaiz Bank", "code": "301" },
        { "id": "12", "name": "Keystone Bank Limited", "code": "082" },
        { "id": "13", "name": "Providus Bank Plc", "code": "101" },
        { "id": "14", "name": "Polaris Bank", "code": "076" },
        { "id": "15", "name": "Stanbic IBTC Bank Nigeria Limited", "code": "221" },
        { "id": "16", "name": "Standard Chartered Bank", "code": "068" },
        { "id": "17", "name": "Sterling Bank", "code": "232" },
        { "id": "18", "name": "Suntrust Bank Nigeria Limited", "code": "100" },
        { "id": "19", "name": "Union Bank of Nigeria", "code": "032" },
        { "id": "20", "name": "United Bank for Africa", "code": "033" },
        { "id": "21", "name": "Unity Bank Plc", "code": "215" },
        { "id": "22", "name": "Wema Bank", "code": "035" },
        { "id": "23", "name": "Zenith Bank", "code": "057" }
    ];

const businessTypes =
    [
        { "id": 0, "name": "Sole proprietorship" },
        { "id": 1, "name": "Partnership" },
        { "id": 2, "name": "Limited liability company (LLC)" },
        { "id": 3, "name": "Corporation - C corp" },
        { "id": 4, "name": "Corporation - S corp" },
        { "id": 5, "name": "Corporation - B corp" },
        { "id": 6, "name": "Corporation - nonprofit" }
    ];

const businessCategories =
    [
        { id: 'IAB1', name: 'Arts & Entertainment' },
        { id: 'IAB2', name: 'Automotive' },
        { id: 'IAB3', name: 'IT' },
        { id: 'IAB4', name: 'Clothing & Textiles' },
        { id: 'IAB5', name: 'Education' },
        { id: 'IAB6', name: 'Furniture' },
        { id: 'IAB7', name: 'Food & Drink' },
        { id: 'IAB8', name: 'Travel' },
        { id: 'IAB9', name: 'Pharmaceuticals' },
        { id: 'IAB10', name: 'Other' },
    ];

const canGoTo = ( currentPos, destination, validStates ) =>
{
    const b4Dest = destination - 1 > -1 ? destination - 1 : 0;

    return validStates[ currentPos ] && validStates[ b4Dest ];

};

const normalizeRange = ( destination, max ) =>
{
    if ( destination < 0 ) { return 0; }
    else if ( destination > max - 1 ) { return max - 1; }
    else { return destination; }
};


const keys =
{
    bvn: "BVN",
    accountNumber: "Account Number",
    bank: "Bank",
    instagram: "Instagram",
    abeg: "Abeg",
    twitter: "Twitter",
    businessCategory: "Business Category",
    businessType: "Business Type",
    pos: "Uses POS"
};

const getValue = ( key, value ) =>
{
    switch ( key )
    {
        case "pos":
            return value ? "No" : "Yes";

        case "abeg":
        case "twitter":
        case "instagram":
            return `@${ value }`;

        case "businessCategory":
            const bC = businessCategories.find( v => v.id === value );
            return bC ? bC.name : "N/A";

        case "businessType":
            const bT = businessTypes.find( v => v.id === +value );
            return bT ? bT.name : "N/A";

        case "bank":
            const bank = banks.find( v => v.code === value );
            return bank ? bank.name : "N/A";

        default:
            return value;
    }
};



export 
{
    schema,
    initValues,
    banks,
    businessTypes,
    businessCategories,
    canGoTo,
    normalizeRange,
    keys,
    getValue
};
