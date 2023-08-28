import { Container, Row, Col, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/etape1.png";
import projImg2 from "../assets/img/etape2.png";
import projImg3 from "../assets/img/etape3.png";
import projImg4 from "../assets/img/etape4.png";
import projImg5 from "../assets/img/etape5.png";
import projImg6 from "../assets/img/etape6.png";


import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const projects = [
    {
      imgUrl: projImg1,
    },
    {
      imgUrl: projImg2,
    },
    {
      imgUrl: projImg3,
    },
    {
      imgUrl: projImg4,
    },
    {
      imgUrl: projImg5,
    },
    {
      imgUrl: projImg6,
    }
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>خطوات الحصول على الاستقبال</h2>
                  <p>
                  أدناه ، الخطوات المختلفة لاستلام منتجك. تحتاج فقط إلى إرسال عنوان بريدك الإلكتروني ورقم هاتفك. ستتلقى مكالمة من موظفينا لتأكيد الطلب. بعد 24 ساعة من التأكيد ، ستتلقى الطلب في المنزل ويمكنك الدفع بمجرد استلام المنتج.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="section">
                        <p>popo</p>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <p>youuuuu</p>{" "}
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  );
};
