import axios from "axios";

const catalog = [
  {
    _id: "10",
    title: "Treadmill",
    price: 189.99,
    category: "Equipment",
    image: "tread.jpg",
  },
  {
    _id: "20",
    title: "Up-right Bike",
    price: 129.99,
    category: "Equipment",
    image: "bike.webp",
  },
  {
    _id: "30",
    title: "Ergonomical Bike",
    price: 149.99,
    category: "Equipment",
    image: "ergobike.jpg",
  },
  {
    _id: "40",
    title: "Smart-Weight Set",
    price: 99.99,
    category: "Equipment",
    image: "smart weighset.webp",
  },
  {
    _id: "50",
    title: "Tension Bands",
    price: 24.99,
    category: "Equipment",
    image: "Band-Set.webp",
  },
  {
    _id: "60",
    title: "Massage Chair",
    price: 549.99,
    category: "Equipment",
    image: "massagechair.webp",
  },
  {
    _id: "70",
    title: "2-Person Sauna",
    price: 749.99,
    category: "Equipment",
    image: "sauna.jpg",
  },
];

class Dataservice {
  async getCatalog() {
    //return catalog; Use this line to work without server
    // ToDO: call the server to get the data

    //use these lines to work with server
    let res = await axios.get("http://127.0.0.1:5000/api/catalog");
    return res.data;
  }

  saveOrder() {}

  validateCouponCode() {}

  async saveCoupon(coupons) {
    let res = await axios.post("http://127.0.0.1:5000/api/coupons", coupons);
    return res.data;
  }

  async getCoupons() {
    let res = await axios.get("http://127.0.0.1:5000/api/coupons");
    return res.data;
  }

  async saveProduct(product) {
    let res = await axios.post("http://127.0.0.1:5000/api/catalog", product);
    return res.data;
  }
}

export default Dataservice;
