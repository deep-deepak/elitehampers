import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="w-100" style={{ fontFamily: 'Inter, system-ui, sans-serif' }}>
      <style jsx>{`
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
          background: radial-gradient(circle at 50% 50%, rgba(255, 215, 0, 0.15) 0%, transparent 60%);
        }

        .yellow-accent {
          color: #FFD700 !important;
        }

        .success-animation {
          animation: successPulse 2s infinite;
        }

        @keyframes successPulse {
          0%, 100% {
            transform: scale(1);
            filter: drop-shadow(0 0 20px rgba(255, 215, 0, 0.5));
          }
          50% {
            transform: scale(1.05);
            filter: drop-shadow(0 0 40px rgba(255, 215, 0, 0.8));
          }
        }

        .floating-gift {
          animation: floatGift 3s ease-in-out infinite;
        }

        @keyframes floatGift {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .fade-in {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.8s ease;
        }

        .fade-in.visible {
          opacity: 1;
          transform: translateY(0);
        }
      `}</style>

      <section className="hero-gradient text-white d-flex align-items-center" style={{ minHeight: '100vh' }}>
        <Container className="position-relative" style={{ zIndex: 2 }}>
          <Row className="justify-content-center text-center">
            <Col lg={8}>
              <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
                <div className="mb-4">
                  <CheckCircle size={120} className="yellow-accent success-animation" />
                </div>
                <h1 className="display-2 fw-bold mb-4">
                  Thank <span className="yellow-accent">You!</span>
                </h1>
                <p className="lead fs-3 mb-5">
                  Your order has been successfully placed. We're excited to create 
                  something truly special for you!
                </p>
                <div className="d-flex justify-content-center gap-4">
                  <div className="floating-gift" style={{ fontSize: '3rem' }}>🎁</div>
                  <div className="floating-gift" style={{ fontSize: '2.5rem', animationDelay: '0.5s' }}>🎀</div>
                  <div className="floating-gift" style={{ fontSize: '3rem', animationDelay: '1s' }}>🎊</div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default ThankYouPage;
