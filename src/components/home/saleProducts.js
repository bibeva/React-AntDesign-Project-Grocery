import { Col, Row, Button } from 'antd';

const products = [
  {
    key: '1',
    image: require('../../assets/images/img5.jpg'),
    title: 'Glens Vodka 70cl Extra smooth',
    saleprice: '£20.00',
    price: '£15.50'
  },
  {
    key: '2',
    image: require('../../assets/images/img6.jpg'),
    title: 'Pot Noodle Chicken & Mushroom Standard 90g',
    saleprice: '£1.50',
    price: '£0.90'
  },
  {
    key: '3',
    image: require('../../assets/images/img7.jpg'),
    title: 'Branston Baked Beans in a Rich and Tasty Tomato Sauce 4 x 410g',
    saleprice: '£2.00',
    price: '£1.50'
  },
  {
    key: '4',
    image: require('../../assets/images/img8.jpg'),
    title: 'Kelloggs Crunchy Nut Hazelnut & Chocolate Granola 380g',
    saleprice: '£3.00',
    price: '£2.50'
  }
]

function SaleProducts() {
  return (
    <div className="block products separator">
      <h2>Sale Products</h2>
      <Row gutter={[24, 24]}>
        {products.map(product => {
          return (
            <Col xs={{ span: 24 }} sm={{ span: 12 }} lg={{ span: 6 }} key={product.key}>
              <div className="content">
                <div className="image">
                  <img src={product.image} alt="product" />
                </div>
                <h3>{product.title}</h3>
                <div className='price'>
                  <span className='salePrice'>{product.saleprice}</span> 
                  {product.price}
                </div>
                <Button type="primary">Add to Basket</Button>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
}

export default SaleProducts;