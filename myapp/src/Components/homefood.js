import React from "react";
import "../Components/homefood.css";
import Logobg from "./foodimages/logobg.png";
import Logo from "./foodimages/LOGO.png";
import Image1 from "./foodimages/image1.png";
import Image21 from "./foodimages/image2.1.png";
import Image22 from "./foodimages/image2.2.png";
import Card1 from "./foodimages/card1.png";
import Card2 from "./foodimages/card2.png";
import Card3 from "./foodimages/card3.png";
import Image41 from "./foodimages/image41.png";
import Image42 from "./foodimages/image42.png";
import Image51 from "./foodimages/image51.png";

export default function homefood() {
  return (
    <div>
      <div class="container">
        <div className="header">
          <nav class="navbar bg-body-tertiary">
            <div class="container-fluid">
              <a class="navbar-brand" href="#">
                <div className="icons">
                  <i class="bi bi-facebook"></i>
                  <i class="bi bi-instagram"></i>
                  <i class="bi bi-twitter"></i>
                  <i class="bi bi-youtube"></i>
                  <i class="bi bi-pinterest"></i>
                </div>
              </a>
              <div className="logo">
                <img src={Logobg} alt="Logobg" />
                <img className="logotext" src={Logo} alt="Logo " />
              </div>
              <div className="info">
                <div>
                  <i
                    class="bi bi-telephone-inbound"
                    style={{ cursor: "pointer" }}
                  ></i>
                  1800 123 456
                  <span className="enquiry">
                    <i class="bi bi-briefcase"></i> Enquiry
                  </span>
                </div>
                <div className="search">
                  <span>
                    <input
                      class="form-control me-2"
                      type="search"
                      placeholder="Search"
                      aria-label="Search"
                    />
                  </span>

                  <span className="searchicon">
                    <i class="bi bi-search" style={{ cursor: "pointer" }}></i>
                  </span>
                </div>
              </div>
            </div>
          </nav>
        </div>
      </div>
      <div class="container">
        <div className="menu">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                Products
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Recipes</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Career</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Media</a>
            </li>
            <li className="nav-item">
              <a className="nav-link ">Contacts</a>
            </li>
          </ul>
        </div>
      </div>
      <div class="container">
        <img src={Image1} alt="image1" className="pasta" />
      </div>
      <div class="container">
        <div className="photos" style={{ marginBottom: 20 }}>
          <div className="column">
            <img src={Image21} alt="image21" className="images2" />

            <img src={Image22} alt="image22" className="images2" />
          </div>
        </div>
        <div className="photos">
          <div className="column">
            <img src={Image21} alt="image21" className="images3" />
            <img src={Image22} alt="image22" className="images3" />
            <img src={Image22} alt="image22" className="images3" />
          </div>
        </div>

        <div className="bombinotext">
          <p className="bombino">
            <i>BomBiNO instant pasta</i>
          </p>
          <p className="want">
            Want Something <br /> Real?
          </p>
          <p className="wanttext">
            Bomino Instant Nutritious pasta with
            <br />
            taste masala.
          </p>
          <button type="button" class="btn btn-danger">
            Read More
          </button>
        </div>
        <div className="macaronitext">
          <p className="bombino">
            <i>BomBiNO</i>
          </p>
          <p className="bommac">
            Bombino Macaroni
            <br />
            pep Elbows
          </p>
          <button type="button" class="btn btn-danger">
            Know More
          </button>
        </div>
        <div className="healthy">
          <p className="bommac">Healthy Pasta !!!</p>
          <button
            type="button"
            class="btn btn-danger"
            style={{ float: "right" }}
          >
            Know More
          </button>
        </div>
        <div className="best">
          <p className="bommac" style={{ fontSize: 22 }}>
            Best for any time...
          </p>
        </div>
        <div className="plate">
          <p className="bommac" style={{ fontSize: 22 }}>
            How we bring pasta to your plate?
          </p>
          <button type="button" class="btn btn-danger">
            Know More
          </button>
        </div>
      </div>
      <div className="ourproducts">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <i>Our Products</i>
          </li>
        </ul>
      </div>
      <div class="container">
        <div className="photos">
          <div className="column">
            <div className="cardtemp">
              <div className="container">
                <div class="card">
                  <img src={Card1} alt="..." className="cardimg" />
                </div>
              </div>
              <div className="container">
                {" "}
                <div className="ctext1">
                  <h4 style={{ textAlign: "center" }}>ONLY VEGITARIAN</h4>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <a href="#" className="read">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="cardtemp">
              <div className="container">
                <div class="card">
                  <img src={Card2} alt="..." className="cardimg" />
                </div>
              </div>
              <div className="container">
                <div className="ctext1">
                  <h4 style={{ textAlign: "center" }}>GRAB & GO!</h4>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <a href="#" className="read">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
            <div className="cardtemp">
              <div className="container">
                <div class="card">
                  <img src={Card3} alt="..." className="cardimg" />
                </div>
              </div>

              <div className="container">
                <div className="ctext1">
                  <h4 style={{ textAlign: "center" }}>FRESH SCHOOL TACOS</h4>
                  <p style={{ textAlign: "center" }}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam...
                  </p>
                  <p style={{ textAlign: "center" }}>
                    <a href="#" className="read">
                      Read More
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="ourproducts">
        <ul class="nav justify-content-center">
          <li class="nav-item">
            <i>Pasta Stories</i>
          </li>
        </ul>
      </div>
      <div className="container">
        <div className="photos">
          <div className="column">
            <img src={Image41} alt="image21" className="images4" />
            <img src={Image42} alt="image22" className="images4" />
          </div>
        </div>
        <div className="knowmore">Know More</div>
        <div className="ourproducts">
          <ul class="nav justify-content-center">
            <li class="nav-item">
              <i>Pasta Videos</i>
            </li>
          </ul>
        </div>
      </div>
      <div className="container">
        <div className="photos">
          <div className="column">
            <img src={Image51} alt="image21" className="images4" />
            <img src={Image22} alt="image22" className="images4" />
          </div>
        </div>
      </div>
      <div className="yt1">
        <i class="bi bi-play-btn-fill"></i>
      </div>
      <div className="yt2">
        <i class="bi bi-play-btn-fill"></i>
      </div>
      <div className="container" style={{ backgroundColor: "whitesmoke" }}>
        <div style={{ display: "flex", justifyContent: "center", margin: 40 }}>
          <div className="newsletter">
            <i
              style={{
                margin: 10,
                fontSize: 26,
                color: "#00000",
              }}
            >
              Subscribe for Newsletter
            </i>
            <input
              type="search"
              className="searchint"
              placeholder="Enter Email"
              aria-label="Search"
              style={{ margin: 10, border: "none", width: 250 }}
            />
            <button class="btnsub">
              <p className="subtext">Subscribe</p>
            </button>
          </div>
        </div>
      </div>
      <div>
        <div style={{ textAlign: "center" }}>
          <p>
            <pre className="footer">
              Privacy Policy | Privacy | Terms of Use | FAQs | Contactus
            </pre>
          </p>
          <p>
            <pre>
              Follow us :
              <i
                class="bi bi-facebook"
                style={{ marginLeft: 10, cursor: "pointer" }}
              ></i>
              <i
                class="bi bi-instagram"
                style={{ marginLeft: 10, cursor: "pointer" }}
              ></i>
              <i
                class="bi bi-twitter"
                style={{ marginLeft: 10, cursor: "pointer" }}
              ></i>
              <i
                class="bi bi-youtube"
                style={{ marginLeft: 10, cursor: "pointer" }}
              ></i>
              <i
                class="bi bi-pinterest"
                style={{ marginLeft: 10, cursor: "pointer" }}
              ></i>
            </pre>
          </p>
        </div>
      </div>
    </div>
  );
}
