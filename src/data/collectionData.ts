import suit1 from "../assets/suits/Rectangle 2.svg";
import suit2 from "../assets/suits/Rectangle 3.svg";
import suit3 from "../assets/suits/Rectangle 4.svg";
import suit4 from "../assets/suits/Rectangle 5.svg";
import suit5 from "../assets/suits/Rectangle 6.svg";
import suit6 from "../assets/suits/Rectangle 7.svg";

export interface CollectionType {
  id: number;
  collections: string;
  photo: string;
  price: number;
}

export const collections = [
  {
    id: 1,
    collections: "peak lapel",
    photo: suit1,
    price: 447063.72,
  },
  {
    id: 2,
    collections: "blazer",
    photo: suit2,
    price: 355819.74,
  },
  {
    id: 3,
    collections: "blazer",
    photo: suit3,
    price: 547859.27,
  },
  {
    id: 4,
    collections: "double breasted",
    photo: suit4,
    price: 434212.96,
  },
  {
    id: 5,
    collections: "ventless",
    photo: suit2,
    price: 341780.84,
  },
  {
    id: 6,
    collections: "blazer",
    photo: suit5,
    price: 350517.06,
  },
  {
    id: 7,
    collections: "ventless",
    photo: suit2,
    price: 447619.55,
  },
  {
    id: 8,
    collections: "shawl laperl",
    photo: suit6,
    price: 389655.62,
  },
  {
    id: 9,
    collections: "double breasted",
    photo: suit1,
    price: 358995.91,
  },
  {
    id: 10,
    collections: "ventless",
    photo: suit6,
    price: 543429.61,
  },
  {
    id: 11,
    collections: "blazer",
    photo: suit4,
    price: 360050.11,
  },
  {
    id: 12,
    collections: "peak lapel",
    photo: suit3,
    price: 343238.16,
  },
  {
    id: 13,
    collections: "brownboy afolabi",
    photo: suit4,
    price: 345000.0,
  },
];
