import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img1.jpg'),
    title: 'Fairy Clean & Fresh Washing Up Liquid Pomegranate &amp; Honeysuckle 520 ml',
    price: '£2.00'
  },
  {
    key: '2',
    image: require('../../assets/images/img2.jpg'),
    title: 'Colgate Triple Action Toothpaste 100ml',
    price: '£1.50'
  },
  {
    key: '3',
    image: require('../../assets/images/img3.jpg'),
    title: 'Breeze Toilet Tissue Soft White 24 Roll',
    price: '£5.70'
  },
  {
    key: '4',
    image: require('../../assets/images/img4.jpg'),
    title: 'Comfort intense Fresh Sky Fabric Conditioner Liquid 60 Wash 900 ML',
    price: '£4.50'
  }
]

function RecentProducts() {
  return (
    <div className="block products">
      <h2>Recent Products</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h3>{product.title}</h3>
                <div className='price'>{product.price}</div>
                <Button type="primary">Add to Basket</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default RecentProducts;