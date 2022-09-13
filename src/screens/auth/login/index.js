import React, { Fragment } from "react";
import Header from "../../../components/header";
import LogoImage from "../../../assets/images/logo.png";
import { Column, Section, Title, Container, Card } from "rbx";
import LoginForm from "../../../components/auth/login_form";
import "../../../styles/auth.scss";

const LoginScreen = () => (
  <div className="pg">
    <Header />
    <Section size="medium" className="auth">
      <Container>
        <Column.Group centered>
          <Column size={3}>
            <Card className="card-login">
              <Card.Content>
                <Section className="sec">
                  <Column.Group centered>
                    <Column size={12}>
                      <img src={LogoImage} />
                    </Column>
                  </Column.Group>
                  <Column.Group>
                    <Column size={12}>
                      <Title
                        size={6}
                        className="has-text-grey has-text-centered title">
                        Your notes on the cloud
                      </Title>
                    </Column>
                  </Column.Group>
                  <LoginForm/>
                </Section>
              </Card.Content>
            </Card>
          </Column>
        </Column.Group>
      </Container>
    </Section>
  </div>
);

export default LoginScreen;