import React from "react";

const Category = () => {
  return (
    <section id="menu" className="menu section">
      {/* Section Title */}
      <div className="container section-title" data-aos="fade-up">
        <h2>OUR CATEGORY</h2>
        <p>
          <span>CHECK RESTAURANTS IN CATEGORIES</span>{" "}
        </p>
      </div>
      {/* End Section Title */}

      <div className="container">
        <ul
          className="nav nav-tabs d-flex justify-content-center"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <li className="nav-item">
            <a
              className="nav-link active show"
              data-bs-toggle="tab"
              data-bs-target="#menu-starters"
            >
              <h4>Starters</h4>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-breakfast"
            >
              <h4>Breakfast</h4>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-lunch"
            >
              <h4>Lunch</h4>
            </a>
          </li>
          <li className="nav-item">
            <a
              className="nav-link"
              data-bs-toggle="tab"
              data-bs-target="#menu-dinner"
            >
              <h4>Dinner</h4>
            </a>
          </li>
        </ul>

        <div className="tab-content" data-aos="fade-up" data-aos-delay="200">
          {/* Starters Tab */}
          <div className="tab-pane fade active show" id="menu-starters">
            <div className="row gy-5">
              {menuItems.map((item) => (
                <div className="col-lg-4 menu-item" key={item.id}>
                  <a href={item.image} className="glightbox">
                    <img
                      src={item.image}
                      className="menu-img img-fluid"
                      alt={item.title}
                    />
                  </a>
                  <h4>{item.title}</h4>
                  <p className="ingredients">{item.ingredients}</p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* End Starters Tab */}

          {/* Breakfast Tab */}
          <div className="tab-pane fade" id="menu-breakfast">
            <div className="row gy-5">
              {menuItems.map((item) => (
                <div className="col-lg-4 menu-item" key={item.id}>
                  <a href={item.image} className="glightbox">
                    <img
                      src={item.image}
                      className="menu-img img-fluid"
                      alt={item.title}
                    />
                  </a>
                  <h4>{item.title}</h4>
                  <p className="ingredients">{item.ingredients}</p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* End Breakfast Tab */}

          {/* Lunch Tab */}
          <div className="tab-pane fade" id="menu-lunch">
            <div className="row gy-5">
              {menuItems.map((item) => (
                <div className="col-lg-4 menu-item" key={item.id}>
                  <a href={item.image} className="glightbox">
                    <img
                      src={item.image}
                      className="menu-img img-fluid"
                      alt={item.title}
                    />
                  </a>
                  <h4>{item.title}</h4>
                  <p className="ingredients">{item.ingredients}</p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* End Lunch Tab */}

          {/* Dinner Tab */}
          <div className="tab-pane fade" id="menu-dinner">
            <div className="row gy-5">
              {menuItems.map((item) => (
                <div className="col-lg-4 menu-item" key={item.id}>
                  <a href={item.image} className="glightbox">
                    <img
                      src={item.image}
                      className="menu-img img-fluid"
                      alt={item.title}
                    />
                  </a>
                  <h4>{item.title}</h4>
                  <p className="ingredients">{item.ingredients}</p>
                  <p className="price">{item.price}</p>
                </div>
              ))}
            </div>
          </div>
          {/* End Dinner Tab */}
        </div>
      </div>
    </section>
  );
};

const menuItems = [
  {
    id: 1,
    image: "assets/img/menu/menu-item-1.png",
    title: "Magnam Tiste",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$5.95",
  },
  {
    id: 2,
    image: "assets/img/menu/menu-item-2.png",
    title: "Aut Luia",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$14.95",
  },
  {
    id: 3,
    image: "assets/img/menu/menu-item-3.png",
    title: "Est Eligendi",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$8.95",
  },
  {
    id: 4,
    image: "assets/img/menu/menu-item-4.png",
    title: "Eos Luibusdam",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$12.95",
  },
  {
    id: 5,
    image: "assets/img/menu/menu-item-5.png",
    title: "Eos Luibusdam",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$12.95",
  },
  {
    id: 6,
    image: "assets/img/menu/menu-item-6.png",
    title: "Laboriosam Direva",
    ingredients: "Lorem, deren, trataro, filede, nerada",
    price: "$9.95",
  },
];

export default Category;
