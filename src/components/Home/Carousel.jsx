import { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from '../../assets/images/pexels-apasaric-325185.jpg';
import img2 from '../../assets/images/pexels-eberhardgross-443446.jpg';
import img3 from '../../assets/images/pexels-pixabay-50594.jpg';
import Button from 'react-bootstrap/Button';

function Carousels() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
        <Button variant="danger">Book Now</Button>
          <p>Rs.1316/-PER MONTH WITH THREE MONTHS PACKAGE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
        <Button variant="danger">Book Now</Button>
          <p>Rs.1316/-PER MONTH WITH THREE MONTHS PACKAGE</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 h-100"
          style={{ maxHeight: '400px', objectFit: 'cover' }}
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
        <Button variant="danger">Book Now</Button>
          <p>Rs.1316/-PER MONTH WITH THREE MONTHS PACKAGE</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Carousels;
