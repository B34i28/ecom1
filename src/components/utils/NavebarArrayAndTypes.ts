export interface NavebarItemType {
    label : string,
    href : string,
    isDorpDown : boolean,
    dropDownData? : Array<NavebarItemType>,
};

export const NavebarArray: Array<NavebarItemType> = [
    {
        label : "Female",
        href : "/female/Female",
        isDorpDown : true,
        dropDownData : [
            {
                label : "Dresses",
                href : "/female/Dresse",
                isDorpDown : false,
            },
            {
                label : "T-Shirts",
                href : "/female/T-shirt",
                isDorpDown : false,
            },
            {
                label : "Pents",
                href : "/female/Pent",
                isDorpDown : false,
            },
            {
                label : "Jackets",
                href : "/female/Jacket",
                isDorpDown : false,
            },
            {
                label : "Sweaters",
                href : "/female/Sweater",
                isDorpDown : false,
            }
        ]

    },
    {
        label : "Male",
        href : "/male/Male",
        isDorpDown : true,
        dropDownData : [
            {
                label : "Sweaters",
                href : "/male/Sweater",
                isDorpDown : false,
            },
            {
                label : "Jackets",
                href : "/male/Jacket",
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
        href : "/products",
        isDorpDown : false,

    }
];