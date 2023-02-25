import logo from "./logo.svg";
// import "./App.css";
import { Header } from "./Components/Header/Header";
import { Navigation } from "./Components/Navigation/Navigation";
import { Container } from "./Components/Container/Container";
import { Cards } from "./Components/Card/Cards";
import { BodyWrapper } from "./Components/BodyWrapper/BodyWrapper";
import { CartModal } from "./Components/CartModal/CartModal";
import { useState } from "react";
import { BackDrop } from "./Components/backdrop/BackDrop";

let database = [
  {
    id: 1,
    path: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4nalOb806g7SL70OJNUCHUZ3aFaWdPRvbNw&usqp=CAU",
    heading: "pegga pig",
    price: 470,
  },
  {
    id: 2,
    path: "https://cdn.shopify.com/s/files/1/0668/5120/9465/products/556707-PeppaPigAdventuresAirPeppaPlayset-1_510x.jpg?v=1674650820",
    heading: "Air peppa",
    price: 399,
  },
  {
    id: 3,
    path: "https://cdn.shopify.com/s/files/1/0668/5120/9465/products/538259-paw_20patrol_20ultimate_20rescue_20skye_20helicopter-1_510x.jpg?v=1672127194",
    heading: "petrol altimate",
    price: 670,
  },
  {
    id: 4,
    path: "https://cdn.shopify.com/s/files/1/0668/5120/9465/products/528990-peppa_20pig_20laugh_20and_20learn_20laptop-1_510x.jpg?v=1672127156",
    heading: "learn laptop",
    price: 8000,
  },
];

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const modalOPenHandler = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="App">
      <Header />
      <Container>
        <Navigation close={modalOPenHandler} />
        <BodyWrapper>
          {database.length === 0 && <h3>Empty DataBase</h3>}
          {database.length &&
            database.map((data) => (
              <Cards
                key={data.id}
                path={data.path}
                heading={data.heading}
                price={data.price}
              />
            ))}
        </BodyWrapper>
      </Container>
      {isOpen && (
        <BackDrop>
          <CartModal close={modalOPenHandler} />
        </BackDrop>
      )}
    </div>
  );
}

export default App;
