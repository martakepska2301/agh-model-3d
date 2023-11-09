import styled from "styled-components";
import pomnik from "./images/pomnik.jpg";
import Footer from "./Footer";

const Container = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Agh = styled.img`
  height: 560px;
  margin: 55px;
`;

const Text = styled.p`
  margin: auto;
  padding: 60px 0;
  max-width: 800px;
`;

const Home = () => (
  <Container>
    <Container>
      <Agh src={pomnik} />
    </Container>
    <Text>
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
      voluptatum alias optio esse nihil vero porro consequuntur, quos voluptas
      itaque, ducimus corporis ea qui maiores nam, quas assumenda voluptate at!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
      voluptatum alias optio esse nihil vero porro consequuntur, quos voluptas
      itaque, ducimus corporis ea qui maiores nam, quas assumenda voluptate at!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
      voluptatum alias optio esse nihil vero porro consequuntur, quos voluptas
      itaque, ducimus corporis ea qui maiores nam, quas assumenda voluptate at!
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Beatae
      voluptatum alias optio esse nihil vero porro consequuntur, quos voluptas
      itaque, ducimus corporis ea qui maiores nam, quas assumenda voluptate at!
    </Text>
    <Footer />
  </Container>
);

export default Home;
