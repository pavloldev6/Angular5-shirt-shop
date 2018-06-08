import { Shirt } from "../shared/shirt";

export const COUNTRIES = ['Canada', 'USA'];

export const REGIONS = {
    Canada: [
        'Alberta',
        'British Columbia',
        'Manitoba',
        'New Brunswick',
        'Newfoundland and Labrador',
        'Nova Scotia',
        'Nunavut',
        'Northwest Territories',
        'Ontario',
        'Prince Edward Island',
        'Quebec',
        'Saskatchewan',
        'Yukon'
    ],
    USA: [
        'Alabama',
        'Alaska',
        'Arizona',
        'Arkansas',
        'California',
        'Colorado',
        'Connecticut',
        'District of Columbia',
        'Delaware',
        'Florida',
        'Georgia',
        'Hawaii',
        'Idaho',
        'Illinois',
        'Indiana',
        'Iowa',
        'Kansas',
        'Kentucky',
        'Louisiana',
        'Maine',
        'Maryland',
        'Massachusetts',
        'Michigan',
        'Minnesota',
        'Mississippi',
        'Missouri',
        'Montana',
        'Nebraska',
        'Nevada',
        'New Hampshire',
        'New Jersey',
        'New Mexico',
        'New York',
        'North Carolina',
        'North Dakota',
        'Ohio',
        'Oklahoma',
        'Oregon',
        'Pennsylvania',
        'Rhode Island',
        'South Carolina',
        'South Dakota',
        'Tennessee',
        'Texas',
        'Utah',
        'Vermont',
        'Virginia',
        'Washington',
        'West Virginia',
        'Wisconsin',
        'Wyoming',
        'American Samoa',
        'Guam',
        'Northern Mariana Islands',
        'Puerto Rico',
        'United States Minor Outlying Islands',
        'Virgin Islands'
    ]
};

export const GRAPHICS = [
    { name: 'crown', fileName: 'graphic1.svg' },
    { name: 'smile', fileName: 'graphic2.svg' },
    { name: 'wolf', fileName: 'graphic3.svg' },
    { name: 'planet', fileName: 'graphic4.svg' },
    { name: 'maple', fileName: 'graphic5.svg' },
    { name: 'karate', fileName: 'graphic6.svg' },
    { name: 'rocket', fileName: 'graphic7.svg' },
    { name: 'falcon', fileName: 'graphic8.svg' },
    { name: 'eagle', fileName: 'graphic9.svg' },
    { name: 'heart', fileName: 'graphic10.svg' },
    { name: 'earth', fileName: 'graphic11.svg' },
    { name: 'afro', fileName: 'graphic12.svg' },
    { name: 'skeleton', fileName: 'graphic13.svg' },
    { name: 'hundred', fileName: 'graphic14.svg' },
    { name: 'vader', fileName: 'graphic15.svg' }
  ];

  export const STYLES = [
    { imgName: 'MensShirt', imgDescription: 'Mens Fine Jersey Short Sleeve' },
    { imgName: 'WomensShirt', imgDescription: 'Womens Fine Jersey Short Sleeve' }
  ];

  export const SHIRTS = [
    new Shirt(1, 'Happy Shirt', 'Womens Fine Jersey Short Sleeve', 14.99, '/assets/images/WomensShirtDesigns-3.jpg', 'F'),
    new Shirt(2, '4 Coders', 'Mens Fine Jersey Short Sleeve', 14.99, '/assets/images/MensShirtDesigns-2.jpg', 'M'),
    new Shirt(3, 'Emoji Shirt', 'Womens Fine Jersey Short Sleeve', 15.99, '/assets/images/WomensShirtDesigns-2.jpg', 'F'),
    new Shirt(4, 'Falcon on black', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-3.jpg', 'M'),
    new Shirt(5, 'Falcon on white', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-4.jpg', 'M'),
    new Shirt(6, 'Office Space', 'Womens Fine Jersey Short Sleeve', 14.99, './assets/images/WomensShirtDesigns-1.jpg', 'F'),
    new Shirt(7, 'Smile', 'Mens Fine Jersey Short Sleeve', 15.99, '/assets/images/MensShirtDesigns-1.jpg', 'M'),
    new Shirt(8, 'Dabbing Skeleton', 'Mens Fine Jersey Short Sleeve', 19.99, '/assets/images/MensShirtDesigns-5.jpg', 'M'),
];
