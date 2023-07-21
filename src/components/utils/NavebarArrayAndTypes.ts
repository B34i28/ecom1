export interface NavebarItemType {
    label : string,
    href : string,
    isDorpDown : boolean,
    dropDownData? : Array<NavebarItemType>,
};

export const NavebarArray: Array<NavebarItemType> = [
    {
        label : "Female",
        href : "/female",
        isDorpDown : true,
        dropDownData : [
            {
                label : "Dresses",
                href : "/female/dresses",
                isDorpDown : false,
            },
            {
                label : "Shirts",
                href : "/female/shirts",
                isDorpDown : false,
            },
            {
                label : "Pents",
                href : "/female/pents",
                isDorpDown : false,
            },
            {
                label : "Jackets",
                href : "/female/jackets",
                isDorpDown : false,
            }
        ]

    },
    {
        label : "Male",
        href : "/male",
        isDorpDown : true,
        dropDownData : [
            {
                label : "Shorts",
                href : "/male/Shorts",
                isDorpDown : false,
            },
            {
                label : "Shirts",
                href : "/male/shirts",
                isDorpDown : false,
            },
            {
                label : "Pents",
                href : "/male/pents",
                isDorpDown : false,
            },
            {
                label : "Jackets",
                href : "/male/jackets",
                isDorpDown : false,
            }
        ]

    },
    {
        label : "Kids",
        href : "/kids",
        isDorpDown : false,

    },
    {
        label : "All Product",
        href : "/allproduct",
        isDorpDown : false,

    }
];