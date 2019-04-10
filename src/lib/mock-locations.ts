import Location from '../types/location';

const locations: Location[] = [
  {
    name: 'Pittsburg Es',
    lat: '34.71351',
    lng: '-95.8541',
    address: '200 W Grand St',
    city: 'Pittsburg',
    zip: '74560-0200',
    phone: '918-432-5062',
    phoneExt: null,
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-05-23T05:00:00.000Z',
    breakfastStart: '9:00 AM',
    breakfastEnd: '9:30 AM',
    lunchStart: '11:30 AM',
    lunchEnd: '12:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Family Life Center',
    lat: '34.80013',
    lng: '-96.6805',
    address: '229 Seabrook Road',
    city: 'Ada',
    zip: '74820',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-05-25T05:00:00.000Z',
    endDate: '2018-05-25T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: '12:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: false,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: false,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Wintersmith Park, Fmnp Event',
    lat: '34.76372',
    lng: '-96.6523',
    address: '18Th Street At Scenic Drive',
    city: 'Ada',
    zip: '74820',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-05-29T05:00:00.000Z',
    endDate: '2018-05-29T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: null,
    lunchEnd: null,
    snackStart: null,
    snackEnd: null,
    dinnerStart: '3:00 PM',
    dinnerEnd: '6:00 PM',
    monday: false,
    tuesday: false,
    wednesday: false,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    servesBreakfast: false,
    servesLunch: false,
    servesSnack: false,
    servesDinner: true
  },
  {
    name: 'Puterbaugh Ms',
    lat: '34.9149',
    lng: '-95.7584',
    address: '1100 E. South Street',
    city: 'Mcalester',
    zip: '74501-1100',
    phone: '918-423-7816',
    phoneExt: null,
    startDate: '2018-05-29T05:00:00.000Z',
    endDate: '2018-05-31T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '12:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Chickasaw Nation Environmental Camp',
    lat: '34.79611',
    lng: '-96.679',
    address: '111 Rosedale Road',
    city: 'Ada',
    zip: '74820',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-05-30T05:00:00.000Z',
    endDate: '2018-06-01T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '12:00 AM',
    lunchEnd: '1:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Chickasaw Nation Camp Survivor Sp',
    lat: '35.95662',
    lng: '-97.4231',
    address: 'Highway 77 And Sooner Road',
    city: 'Davis',
    zip: '73030-8001',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-05-29T05:00:00.000Z',
    endDate: '2018-06-01T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '12:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: '5:00 PM',
    dinnerEnd: '5:30 PM',
    monday: false,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: true
  },
  {
    name: 'Sapulpa Hs',
    lat: '35.99891',
    lng: '-96.0987',
    address: '3 S. Mission',
    city: 'Sapulpa',
    zip: '74066-4698',
    phone: '918-224-6560',
    phoneExt: '2780',
    startDate: '2018-06-04T05:00:00.000Z',
    endDate: '2018-06-04T05:00:00.000Z',
    breakfastStart: '7:45 AM',
    breakfastEnd: '8:15 AM',
    lunchStart: null,
    lunchEnd: null,
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: false,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: false,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Choctaw Nation Head Start - Broken Bow',
    lat: '34.02713',
    lng: '-94.7191',
    address: '300 Chahta Street',
    city: 'Broken Bow',
    zip: '74728-4108',
    phone: '580-584-6680',
    phoneExt: null,
    startDate: '2018-06-04T05:00:00.000Z',
    endDate: '2018-06-04T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: '11:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: false,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Bishop Public School',
    lat: '34.57624',
    lng: '-98.4178',
    address: '2204 Sw Bishop Road',
    city: 'Lawton',
    zip: '73505-0876',
    phone: '580-353-4870',
    phoneExt: '401',
    startDate: '2018-05-21T05:00:00.000Z',
    endDate: '2018-06-07T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:20 AM',
    lunchStart: '11:20 AM',
    lunchEnd: '11:40 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Battiest Es',
    lat: '34.39413',
    lng: '-94.9824',
    address: '100 Main County St',
    city: 'Broken Bow',
    zip: '74722',
    phone: '580-241-5499',
    phoneExt: '3',
    startDate: '2018-05-07T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: '7:30 AM',
    breakfastEnd: '8:00 AM',
    lunchStart: '11:30 AM',
    lunchEnd: '12:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Agra Public School Cafeteria',
    lat: '35.89114',
    lng: '-96.8751',
    address: '121 North Main Street',
    city: 'Agra',
    zip: '74824-0279',
    phone: '918-375-2261',
    phoneExt: '118',
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: '7:30 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '10:30 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'First Indian Baptist Church',
    lat: '34.77945',
    lng: '-96.6409',
    address: '2521 Arlington Blvd',
    city: 'Ada',
    zip: '74820',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-06-04T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: null,
    lunchEnd: null,
    snackStart: '8:00 AM',
    snackEnd: '8:30 AM',
    dinnerStart: '6:00 PM',
    dinnerEnd: '6:30 PM',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: false,
    servesLunch: false,
    servesSnack: true,
    servesDinner: true
  },
  {
    name: 'Choctaw Wellness Center Hugo',
    lat: '34.01439',
    lng: '-95.5269',
    address: '304 Chahta Circle',
    city: 'Hugo',
    zip: '74743',
    phone: '580-326-9422',
    phoneExt: null,
    startDate: '2018-06-04T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: '12:00 AM',
    lunchEnd: '1:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: false,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Tulsa Met Hs',
    lat: '36.18462',
    lng: '-95.9087',
    address: '6201 E Virgin St',
    city: 'Tulsa',
    zip: '74115-4339',
    phone: '918-746-9314',
    phoneExt: null,
    startDate: '2018-06-04T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: '8:30 AM',
    breakfastEnd: '9:00 AM',
    lunchStart: '12:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: false,
    tuesday: false,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Ardmore Indian Church Bs',
    lat: '34.18136',
    lng: '-97.1246',
    address: '820 N. Washington',
    city: 'Ardmore',
    zip: '73401-7340',
    phone: '580-421-8766',
    phoneExt: null,
    startDate: '2018-06-02T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: null,
    breakfastEnd: null,
    lunchStart: null,
    lunchEnd: null,
    snackStart: '8:00 AM',
    snackEnd: '8:30 AM',
    dinnerStart: '6:00 PM',
    dinnerEnd: '6:30 PM',
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: true,
    sunday: false,
    servesBreakfast: false,
    servesLunch: false,
    servesSnack: true,
    servesDinner: true
  },
  {
    name: 'Canton Es',
    lat: '36.05344',
    lng: '-98.5884',
    address: 'Highway 58 South And Park Street',
    city: 'Canton',
    zip: '73724-0639',
    phone: '580-886-3516',
    phoneExt: null,
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-06-08T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '11:30 AM',
    lunchEnd: '1:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Hulbert Es',
    lat: '35.93232',
    lng: '-95.145',
    address: '316 Rider Lane',
    city: 'Hulbert',
    zip: '74441-0188',
    phone: '918-772-2501',
    phoneExt: '2',
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-06-11T05:00:00.000Z',
    breakfastStart: '7:30 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: null,
    lunchEnd: null,
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: false,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Hulbert Jr-Sr Hs',
    lat: '35.93232',
    lng: '-95.145',
    address: '316 Rider Lane',
    city: 'Hulbert',
    zip: '74441-0188',
    phone: '918-772-2501',
    phoneExt: null,
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-06-11T05:00:00.000Z',
    breakfastStart: '7:30 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: null,
    lunchEnd: null,
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: false,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Strother Es',
    lat: '35.36269',
    lng: '-96.5853',
    address: '36085 Ew1140',
    city: 'Seminole',
    zip: '74868-6213',
    phone: '405-382-0982',
    phoneExt: '114',
    startDate: '2018-05-14T05:00:00.000Z',
    endDate: '2018-06-11T05:00:00.000Z',
    breakfastStart: '8:00 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '12:00 AM',
    lunchEnd: '12:30 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  },
  {
    name: 'Central Oak Es',
    lat: '35.45076',
    lng: '-97.4763',
    address: '1450 S Eastern Ave',
    city: 'Oklahoma City',
    zip: '73129-6094',
    phone: '405-672-1525',
    phoneExt: null,
    startDate: '2018-05-21T05:00:00.000Z',
    endDate: '2018-06-12T05:00:00.000Z',
    breakfastStart: '8:15 AM',
    breakfastEnd: '8:30 AM',
    lunchStart: '11:30 AM',
    lunchEnd: '12:00 PM',
    snackStart: null,
    snackEnd: null,
    dinnerStart: null,
    dinnerEnd: null,
    monday: true,
    tuesday: true,
    wednesday: true,
    thursday: true,
    friday: true,
    saturday: false,
    sunday: false,
    servesBreakfast: true,
    servesLunch: true,
    servesSnack: false,
    servesDinner: false
  }
];

export default locations;
