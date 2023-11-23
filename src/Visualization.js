import styled from "styled-components";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Footer from "./Footer";
import Pomnik from "./Pomnik";
import PomnikDwa from "./PomnikDwa";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Text = styled.p`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 40px;
`;

const Row = styled.div`
  display: flex;
  flex-direction: row;
`;

const Visualization = () => {
  return (
    <>
      <Container>
        <Row>
          <div>
            <Text>
              Cinema 4D
            </Text>
            <Canvas
              style={{
                height: "1000px",
                width: "50vw",
              }}
            >
              <ambientLight intensity={Math.PI / 4} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
              <Pomnik position={[0, 2, 0]} />
              {/* <PomnikDwa position={[-1.5, -0.33, 0]} rotation={[0, 750, 0]} /> */}
              <OrbitControls />
            </Canvas>{" "}
          </div>
          <div>
            <Text>
              Agisoft Metashape Professional
            </Text>
            <Canvas
              style={{
                height: "1000px",
                width: "50vw",
              }}
            >
              <ambientLight intensity={Math.PI / 4} />
              <spotLight
                position={[10, 10, 10]}
                angle={0.15}
                penumbra={1}
                decay={0}
                intensity={Math.PI}
              />
              <pointLight position={[10, 10, 10]} decay={0} intensity={Math.PI} />
              {/* <Pomnik position={[1.5, 2, 0]} /> */}
              <PomnikDwa position={[0, 0, 0]} rotation={[0, 1460, 0]} />
              <OrbitControls />
            </Canvas>
          </div>
        </Row>
      </Container>
      <Footer />
    </>
  );
};


export default Visualization;
