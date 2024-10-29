import React, { useState } from "react";
import { Container, Row } from "react-bootstrap";
import { productData } from "../Data/ProductData";
import Product from "./product";

export default function Products() {
  const [data, setData] = useState(productData);
  return (
    <Container >
      <Row >
        {data.map((obg) => {
          return <Product key={obg.id} {...obg} />;
        })}
      </Row>
    </Container>
  );
}
