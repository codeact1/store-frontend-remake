const catalog = [
    {
        _id: '1',
        title: 'Treadmill',
        price: '129.99',
        category: 'Equipment',
        image: 'tread.jpg',
      },
      {
        _id: '2',
        title: 'Up-right Bike',
        price: '149.99',
        category: 'Equipment',
        image: 'bike.webp',
      },
      {
        _id: '2',
        title: 'Ergonomical Bike',
        price: '149.99',
        category: 'Equipment',
        image: 'ergobike.jpg',
      },
      {
        _id: '3',
        title: 'Weight Set',
        price: '149.99',
        category: 'Equipment',
        image: 'smart weighset.webp',
      },
      {
        _id: '4',
        title: 'Bands',
        price: '149.99',
        category: 'Equipment',
        image:'Band-Set.webp',
      },
      {
        _id: '5',
        title: 'Massage Chair',
        price: '149.99',
        category: 'Equipment',
        image: 'massagechair.webp',
      },
      {
        _id: '6',
        title: 'Sauna',
        price: '149.99',
        category: 'Equipment',
        image: 'sauna.jpg',
      }, 
];

class Dataservice {

    getCatalog(){
        return catalog;
        // ToDO: call the server to get the data

    }

    saveOrder(){


    }

    validateCouponCode(){

    }
}
export default Dataservice;
