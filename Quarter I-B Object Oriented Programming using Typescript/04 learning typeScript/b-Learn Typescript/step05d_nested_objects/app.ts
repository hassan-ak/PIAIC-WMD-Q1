// step05d_nested_objects

/***********************************************************************/
interface Person {
  name: string;
  address: {
    country: string;
    city: string;
  };
}
const person: Person = {
  name: 'James',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

/***********************************************************************/
// 👇️ using type alias
type Person1 = {
  name: string;
  address: {
    country: string;
    city: string;
  };
};
const person1: Person1 = {
  name: 'James',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

/***********************************************************************/
const person2: {
  name: string;
  address: { country: string; city: string };
} = {
  name: 'James',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

/***********************************************************************/
const person3 = {
  name: 'James',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};

/***********************************************************************/
type Person4 = {
  name: string;
  address?: {
    country: string;
    city: string;
  };
};
const person4: Person4 = {
  name: 'James',
};
person4.address = {
  country: 'Chile',
  city: 'Santiago',
};

/***********************************************************************/
type Person5 = {
  name: string;
  address: {
    country: string;
    city: string;
    [key: string]: any; // 👈️ index signature
  };
};
const person5: Person5 = {
  name: 'James',
  address: {
    country: 'Chile',
    city: 'Santiago',
  },
};
person5.address.street = 'Example str. 123';
person5.address.postCode = 123;

/***********************************************************************/
type Author = {
  firstName: string;
  lastName: string;
};
type Book = {
  author: Author;
  name: string;
};
const myBook: Book = {
  author: {
    firstName: 'Zia',
    lastName: 'Khan',
  },
  name: 'My Best Book',
};

/***********************************************************************/
