import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import "./Home.css";

export default function Home() {
  const navigate = useNavigate();

  const toAllCars = () => {
    navigate("/cars/all");
  };

  return (
    <div className="wrapper">
      <div className="text-center hero-text">
        <h1 className="">Fast & Easy </h1>
        <h4>Rent now ! </h4>
        <Button variant="primary" onClick={toAllCars}>
          Choose car
        </Button>
      </div>
    </div>
  );
}
