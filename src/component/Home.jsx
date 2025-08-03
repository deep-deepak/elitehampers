import React, { useState, useEffect } from 'react';
import { Container, Navbar, Nav, Button, Row, Col, Card, Badge, Carousel } from 'react-bootstrap';
import { Star, Gift, Truck, Award, ChevronRight, Heart, Users, ShoppingBag } from 'lucide-react';

const Home = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const hamperCategories = [
    { name: 'Luxury Gourmet', price: '$299', image: '🍾', description: 'Premium wines & artisanal treats' },
    { name: 'Corporate Elite', price: '$199', image: '💼', description: 'Perfect for business gifting' },
    { name: 'Holiday Special', price: '$149', image: '🎄', description: 'Festive seasonal delights' },
    { name: 'Wellness Collection', price: '$179', image: '🧘', description: 'Organic & health-focused items' }
  ];

  const testimonials = [
    { name: 'Sarah Johnson', rating: 5, text: 'Absolutely stunning presentation and quality!', company: 'Tech Startup CEO' },
    { name: 'Michael Chen', rating: 5, text: 'Our clients were thrilled with these hampers.', company: 'Marketing Director' },
    { name: 'Emma Williams', rating: 5, text: 'Perfect for our corporate gifting needs.', company: 'HR Manager' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const smoothScrollTo = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="w-100" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      {/* Custom Styles */}
      <style jsx>{`
        /* Import Bootstrap CSS */
        @import url('https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css');
        
        .hero-gradient {
          background: linear-gradient(135deg, #000000 0%, #1a1a1a 25%, #2d2d2d 50%, #1a1a1a 75%, #000000 100%);
          position: relative;
          overflow: hidden;
        }
        
        .hero-gradient::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 30% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 60%);
        }
        
        .hero-gradient::after {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: radial-gradient(circle at 70% 30%, rgba(255, 165, 0, 0.1) 0%, transparent 50%);
        }
        
        .yellow-accent {
          color: #FFD700 !important;
        }
        
        .bg-yellow {
          background-color: #FFD700 !important;
        }
        
        .btn-yellow {
          background: linear-gradient(45deg, #FFD700, #FFA500) !important;
          border: none !important;
          color: #000 !important;
          font-weight: bold !important;
          transition: all 0.3s ease !important;
          box-shadow: 0 4px 15px rgba(255, 215, 0, 0.3) !important;
          position: relative;
          overflow: hidden;
        }
        
        .btn-yellow:hover {
          transform: translateY(-2px) !important;
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5) !important;
          color: #000 !important;
          background: linear-gradient(45deg, #FFA500, #FFD700) !important;
        }
        
        .btn-yellow:active {
          transform: translateY(0px) !important;
        }
        
        .btn-yellow:focus {
          box-shadow: 0 8px 25px rgba(255, 215, 0, 0.5) !important;
          color: #000 !important;
        }
        
        .card-hover {
          transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1) !important;
          border: 2px solid transparent !important;
          transform: translateY(0) !important;
        }
        
        .card-hover:hover {
          transform: translateY(-10px) !important;
          border-color: #FFD700 !important;
          box-shadow: 0 15px 35px rgba(255, 215, 0, 0.2) !important;
        }
        
        .floating-animation {
          animation: float 6s ease-in-out infinite;
        }
        
        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          25% { transform: translateY(-10px) rotate(2deg); }
          50% { transform: translateY(-20px) rotate(0deg); }
          75% { transform: translateY(-10px) rotate(-2deg); }
        }
        
        .pulse-glow {
          animation: pulse-glow 2s infinite;
        }
        
        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(255, 215, 0, 0.4) !important; 
          }
          50% { 
            box-shadow: 0 0 40px rgba(255, 215, 0, 0.8) !important; 
          }
        }
        
        .navbar-scrolled {
          background: rgba(0, 0, 0, 0.95) !important;
          backdrop-filter: blur(15px) !important;
          box-shadow: 0 2px 20px rgba(0, 0, 0, 0.3) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .navbar-transparent {
          background: rgb(0 0 0) !important;
          backdrop-filter: blur(5px) !important;
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
        }
        
        .stats-counter {
          font-size: 2.5rem !important;
          font-weight: bold !important;
          background: linear-gradient(45deg, #FFD700, #FFA500) !important;
          -webkit-background-clip: text !important;
          -webkit-text-fill-color: transparent !important;
          background-clip: text !important;
          text-shadow: 0 0 30px rgba(255, 215, 0, 0.5) !important;
        }
        
        .nav-link-custom {
          color: white !important;
          font-weight: 500 !important;
          padding: 0.5rem 1rem !important;
          margin: 0 0.25rem !important;
          border-radius: 0.5rem !important;
          transition: all 0.3s ease !important;
          position: relative !important;
          text-decoration: none !important;
          cursor: pointer !important;
        }
        
        .nav-link-custom:hover {
          color: #FFD700 !important;
          background: rgba(255, 215, 0, 0.1) !important;
          transform: translateY(-1px) !important;
          text-decoration: none !important;
        }
        
        .nav-link-custom::after {
          content: '';
          position: absolute;
          bottom: 0;
          left: 50%;
          width: 0;
          height: 2px;
          background: #FFD700;
          transition: all 0.3s ease;
          transform: translateX(-50%);
        }
        
        .nav-link-custom:hover::after {
          width: 80%;
        }
        
        .feature-card {
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1) !important;
          cursor: pointer;
        }
        
        .feature-card:hover {
          transform: translateY(-5px) scale(1.02) !important;
          background: rgba(255, 255, 255, 0.05) !important;
        }
        
        .testimonial-card {
          transition: all 0.5s ease !important;
          background: rgba(255, 255, 255, 0.05) !important;
          backdrop-filter: blur(10px) !important;
          border: 1px solid rgba(255, 215, 0, 0.2) !important;
        }
        
        .testimonial-card:hover {
          transform: translateY(-5px) !important;
          border-color: rgba(255, 215, 0, 0.5) !important;
        }
        
        .section-reveal {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease;
        }
        
        .section-reveal.visible {
          opacity: 1;
          transform: translateY(0);
        }
        
        /* Custom navbar brand hover */
        .navbar-brand {
          transition: all 0.3s ease !important;
          cursor: pointer !important;
        }
        
        .navbar-brand:hover {
          transform: scale(1.05) !important;
          text-shadow: 0 0 20px rgba(255, 215, 0, 0.5) !important;
        }
        
        /* Mobile navbar improvements */
        .navbar-toggler {
          border: none !important;
          padding: 0.25rem 0.5rem !important;
        }
        
        .navbar-toggler:focus {
          box-shadow: 0 0 0 0.2rem rgba(255, 215, 0, 0.25) !important;
        }
        
        .navbar-nav .nav-link {
          transition: all 0.3s ease !important;
        }
        
        /* Carousel improvements */
        .carousel-item {
          transition: transform 0.6s ease-in-out !important;
        }
        
        .carousel-control-prev,
        .carousel-control-next {
          width: 5% !important;
          opacity: 0.8 !important;
        }
        
        .carousel-control-prev:hover,
        .carousel-control-next:hover {
          opacity: 1 !important;
        }
        
        .carousel-indicators button {
          background-color: #FFD700 !important;
          opacity: 0.5 !important;
        }
        
        .carousel-indicators button.active {
          opacity: 1 !important;
        }
        
        /* Smooth scrolling for the whole page */
        html {
          scroll-behavior: smooth !important;
        }
        
        /* Loading animation for images */
        .loading-placeholder {
          background: linear-gradient(90deg, #f0f0f0 25%, #e0e0e0 50%, #f0f0f0 75%);
          background-size: 200% 100%;
          animation: loading 1.5s infinite;
        }
        
        @keyframes loading {
          0% { background-position: 200% 0; }
          100% { background-position: -200% 0; }
        }
      `}</style>

      {/* Navigation */}
      <Navbar 
        expand="lg" 
        fixed="top"
        className={isScrolled ? 'navbar-scrolled' : 'navbar-transparent'}
      >
        <Container>
          <Navbar.Brand 
            className="text-white fw-bold fs-2"
            onClick={() => smoothScrollTo('home')}
            style={{ cursor: 'pointer' }}
          >
            Elite<span className="yellow-accent">Hampers</span>
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="text-white" />
          
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto align-items-center">
              <Nav.Link 
                className="nav-link-custom mx-2"
                onClick={() => smoothScrollTo('home')}
              >
                Home
              </Nav.Link>
              <Nav.Link 
                className="nav-link-custom mx-2"
                onClick={() => smoothScrollTo('products')}
              >
                Products
              </Nav.Link>
              <Nav.Link 
                className="nav-link-custom mx-2"
                onClick={() => smoothScrollTo('about')}
              >
                About
              </Nav.Link>
              <Nav.Link 
                className="nav-link-custom mx-2"
                onClick={() => smoothScrollTo('contact')}
              >
                Contact
              </Nav.Link>
              <Button className="btn-yellow ms-3 px-4 py-2">
                Order Now
              </Button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}
      <section 
        id="home" 
        className="hero-gradient text-white d-flex align-items-center" 
        style={{ minHeight: '100vh', position: 'relative', zIndex: 1 }}
      >
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="align-items-center min-vh-100">
            <Col lg={6} className="mb-5 mb-lg-0">
              <div className="mb-4">
                <Badge className="bg-yellow text-dark px-3 py-2 fs-6">
                  <Award className="me-2" size={16} />
                  Premium Quality Since 2020
                </Badge>
              </div>
              
              <h1 className="display-1 fw-bold mb-4 lh-1">
                Luxury Hampers for 
                <span className="yellow-accent"> Elite</span> Occasions
              </h1>
              
              <p className="lead mb-5 fs-4" style={{ lineHeight: '1.6' }}>
                Curated collections of premium products, beautifully presented 
                for corporate gifting, special celebrations, and memorable moments.
              </p>
              
              <div className="d-flex flex-column flex-sm-row gap-3 mb-5">
                <Button size="lg" className="btn-yellow px-5 py-3 pulse-glow">
                  <Gift className="me-2" size={20} />
                  Explore Collection
                </Button>
                <Button variant="outline-light" size="lg" className="px-5 py-3">
                  <ShoppingBag className="me-2" size={20} />
                  Custom Orders
                </Button>
              </div>
              
              {/* Stats */}
              <Row className="mt-5 pt-4">
                <Col md={4} className="text-center mb-3">
                  <div className="stats-counter">10K+</div>
                  <p className="text-white-50 mb-0">Happy Customers</p>
                </Col>
                <Col md={4} className="text-center mb-3">
                  <div className="stats-counter">500+</div>
                  <p className="text-white-50 mb-0">Corporate Clients</p>
                </Col>
                <Col md={4} className="text-center mb-3">
                  <div className="stats-counter">98%</div>
                  <p className="text-white-50 mb-0">Satisfaction Rate</p>
                </Col>
              </Row>
            </Col>
            
            <Col lg={6} className="text-center">
              <div className="floating-animation">
                <div 
                  style={{ 
                    fontSize: 'clamp(8rem, 15vw, 20rem)',
                    filter: 'drop-shadow(0 0 50px rgba(255, 215, 0, 0.5))'
                  }}
                >
                  🎁
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="py-5 bg-dark text-white">
        <Container>
          <Row className="text-center g-4">
            <Col md={6} lg={3}>
              <div className="p-4 feature-card rounded">
                <Truck size={48} className="yellow-accent mb-3" />
                <h5 className="fw-bold">Free Delivery</h5>
                <p className="text-white-50 mb-0">Complimentary delivery on orders over $100</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4 feature-card rounded">
                <Award size={48} className="yellow-accent mb-3" />
                <h5 className="fw-bold">Premium Quality</h5>
                <p className="text-white-50 mb-0">Handpicked luxury items from trusted brands</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4 feature-card rounded">
                <Gift size={48} className="yellow-accent mb-3" />
                <h5 className="fw-bold">Custom Packaging</h5>
                <p className="text-white-50 mb-0">Elegant presentation for every occasion</p>
              </div>
            </Col>
            <Col md={6} lg={3}>
              <div className="p-4 feature-card rounded">
                <Heart size={48} className="yellow-accent mb-3" />
                <h5 className="fw-bold">Personal Touch</h5>
                <p className="text-white-50 mb-0">Personalized messages and custom selections</p>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Products Section */}
      <section 
        id="products" 
        className="py-5" 
        style={{ background: 'linear-gradient(to bottom, #f8f9fa, #e9ecef)' }}
      >
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-3">
              Our <span className="yellow-accent">Elite</span> Collections
            </h2>
            <p className="lead text-muted fs-4">Carefully curated hampers for every special moment</p>
          </div>
          
          <Row className="g-4">
            {hamperCategories.map((hamper, index) => (
              <Col lg={3} md={6} key={index}>
                <Card className="h-100 border-0 shadow card-hover">
                  <Card.Body className="text-center p-4">
                    <div style={{ fontSize: '4rem' }} className="mb-3">{hamper.image}</div>
                    <Card.Title className="h4 mb-3 fw-bold">{hamper.name}</Card.Title>
                    <Card.Text className="text-muted mb-3">{hamper.description}</Card.Text>
                    <div className="mb-3">
                      <span className="h3 fw-bold yellow-accent">Starting at {hamper.price}</span>
                    </div>
                    <Button className="btn-yellow w-100 py-2">
                      View Details <ChevronRight size={16} className="ms-1" />
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* Testimonials */}
      <section id="about" className="py-5 bg-dark text-white">
        <Container>
          <div className="text-center mb-5">
            <h2 className="display-3 fw-bold mb-3">
              What Our <span className="yellow-accent">Clients</span> Say
            </h2>
          </div>
          
          <Carousel 
            indicators={true} 
            controls={true} 
            interval={5000}
            className="testimonial-carousel"
          >
            {testimonials.map((testimonial, index) => (
              <Carousel.Item key={index}>
                <Container>
                  <Row className="justify-content-center">
                    <Col lg={8}>
                      <Card className="testimonial-card border-0 text-white text-center p-4">
                        <Card.Body>
                          <div className="mb-4">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} size={24} className="yellow-accent me-1" fill="currentColor" />
                            ))}
                          </div>
                          <blockquote className="blockquote">
                            <p className="h4 mb-4">"{testimonial.text}"</p>
                          </blockquote>
                          <div>
                            <h5 className="yellow-accent fw-bold">{testimonial.name}</h5>
                            <p className="text-white-50 mb-0">{testimonial.company}</p>
                          </div>
                        </Card.Body>
                      </Card>
                    </Col>
                  </Row>
                </Container>
              </Carousel.Item>
            ))}
          </Carousel>
        </Container>
      </section>

      {/* CTA Section */}
      <section className="py-5 bg-yellow text-dark">
        <Container>
          <Row className="align-items-center">
            <Col lg={8}>
              <h2 className="display-4 fw-bold mb-3">Ready to Create Something Special?</h2>
              <p className="lead mb-0 fs-4">Contact us today for custom hamper solutions tailored to your needs.</p>
            </Col>
            <Col lg={4} className="text-lg-end mt-3 mt-lg-0">
              <Button variant="dark" size="lg" className="px-5 py-3">
                <Users className="me-2" size={20} />
                Get Started
              </Button>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-black text-white py-5">
        <Container>
          <Row className="g-4">
            <Col lg={4}>
              <h3 className="fw-bold mb-3">Elite<span className="yellow-accent">Hampers</span></h3>
              <p className="text-white-50">Creating memorable moments through carefully curated luxury hampers.</p>
            </Col>
            <Col lg={2} md={6}>
              <h5 className="yellow-accent mb-3 fw-bold">Products</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Gourmet</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Corporate</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Holiday</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Wellness</a>
                </li>
              </ul>
            </Col>
            <Col lg={2} md={6}>
              <h5 className="yellow-accent mb-3 fw-bold">Company</h5>
              <ul className="list-unstyled">
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">About Us</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Contact</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Careers</a>
                </li>
                <li className="mb-2">
                  <a href="#" className="text-white-50 text-decoration-none">Blog</a>
                </li>
              </ul>
            </Col>
            <Col lg={4}>
              <h5 className="yellow-accent mb-3 fw-bold">Contact Info</h5>
              <div className="mb-2">
                <span className="me-2">📧</span>
                <span className="text-white-50">hello@elitehampers.com</span>
              </div>
              <div className="mb-2">
                <span className="me-2">📞</span>
                <span className="text-white-50">8101800006</span>
              </div>
              <div className="mb-2">
                <span className="me-2">📍</span>
                <span className="text-white-50">
                  Street Number 3, Sunder Nagari<br />
                  Abohar, Fazilka<br />
                  Punjab 152116
                </span>
              </div>
            </Col>
          </Row>
          <hr className="my-4 border-secondary" />
          <div className="text-center">
            <p className="text-white-50 mb-0">© 2025 EliteHampers. All rights reserved.</p>
          </div>
        </Container>
      </footer>
    </div>
  );
};

export default Home;