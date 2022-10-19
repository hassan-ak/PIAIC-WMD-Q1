let company = {
  companyName: 'Healthy Candy',
  activity: 'food manufacturing',
  address: {
    street: '2nd street',
    number: '123',
    zipcode: '33116',
    city: 'Miami',
    state: 'Florida',
  },
  yearOfEstablishment: 2021,
};
console.log(company);
company.address.zipcode = '33117';
company['address']['number'] = '100';
console.log(company);

company = {
  companyName: 'Healthy Candy',
  activities: [
    'food manufacturing',
    "improving kids' health",
    'manufacturing toys',
  ],
  address: {
    street: '2nd street',
    number: '123',
    zipcode: '33116',
    city: 'Miami',
    state: 'Florida',
  },
  yearOfEstablishment: 2021,
};
console.log(company);

let addresses = [
  {
    street: '2nd street',
    number: '123',
    zipcode: '33116',
    city: 'Miami',
    state: 'Florida',
  },
  {
    street: '1st West avenue',
    number: '5',
    zipcode: '75001',
    city: 'Addison',
    state: 'Texas',
  },
];
console.log(addresses);

company = {
  companyName: 'Healthy Candy',
  activities: [
    'food manufacturing',
    "improving kids' health",
    'manufacturing toys',
  ],
  address: [
    {
      street: '2nd street',
      number: '123',
      zipcode: '33116',
      city: 'Miami',
      state: 'Florida',
    },
    {
      street: '1st West avenue',
      number: '5',
      zipcode: '75001',
      city: 'Addison',
      state: 'Texas',
    },
  ],
  yearOfEstablishment: 2021,
};
console.log(company);
