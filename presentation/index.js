// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  List,
  ListItem,
  Slide,
  Spectacle,
  Text
} from "spectacle";

import CodeSlide from "spectacle-code-slide";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

require("prismjs");
require("prismjs/components/prism-typescript");

const images = {
  react: require('../assets/images/react.png'),

  amsterdam: require('../assets/images/amsterdam.jpg'),
  title: require("../assets/images/title.png"),
  maurice: require("../assets/images/maurice1024.jpg"),
  sergeant: require("../assets/images/sergeant.png"),
  reactStarter: require("../assets/images/react-starter.png"),
  lego: require("../assets/images/lego.png"),
  thanks: require("../assets/images/thanks.png")
};

preloader(images);

const theme = createTheme({primary: "#ffffff"});

// What is React Where does React come from React versus Angular Create React
// App JSX Components ReactDOM Server side rendering Props State Presentational
// versus Container Components Event handling Flux Redux/MobX

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress='bar'>

          <Slide bgImage={images
            .amsterdam
            .replace("/", "")}>
            <Heading margin="0px 0px 0px" textColor='#404040'>
              The Productive Developer Guide to React
            </Heading>
            <Image
              src={images
              .react
              .replace("/", "")}
              height="300px"/>
          </Slide>

          <Slide bgImage={images
            .maurice
            .replace("/", "")}>
            <Heading textColor='black'>
              Who am I?
            </Heading>
            <List>
              <ListItem>Maurice de Beijer</ListItem>
              <ListItem>The Problem Solver</ListItem>
              <ListItem>Microsoft Azure MVP</ListItem>
              <ListItem>Freelance developer/instructor</ListItem>
              <ListItem>Twitter: @mauricedb</ListItem>
              <ListItem>Web: http://www.TheProblemSolver.nl</ListItem>
              <ListItem>E-mail: maurice.de.beijer@gmail.com</ListItem>
            </List>
          </Slide>

          <Slide
            notes="https://www.dreamstime.com/royalty-free-stock-image-cartoon-angry-army-drill-sergeant-shouting-image19836396">
            <Heading textColor='black' textSize='5rem'>
              Angular 2 is opinionated
            </Heading>
            <Image
              src={images
              .sergeant
              .replace("/", "")}
              margin="40px auto 0px"
              height="500px"/>
          </Slide>

          <Slide>
            <Image
              src={images
              .reactStarter
              .replace("/", "")}
              width="900px"/>
          </Slide>

          <Slide>
            <Heading textColor='black'>
              Building blocks
            </Heading>
            <Layout>
              <Fill>
                <List>
                  <ListItem>Modules</ListItem>
                  <ListItem>Components</ListItem>
                  <ListItem>Templates</ListItem>
                  <ListItem>Data binding</ListItem>
                  <ListItem>Directives</ListItem>
                  <ListItem>Services</ListItem>
                  <ListItem>Routing</ListItem>
                  <ListItem>Dependency injection</ListItem>
                </List>
              </Fill>
              <Fill>
                <Image
                  src={images
                  .lego
                  .replace("/", "")}
                  margin="40px auto 0px"
                  width="460px"/>
              </Fill>
            </Layout>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="typescript"
            code={require("raw!../assets/code/app.module.ts")}
            ranges={[
              {loc: [ 0, 255],title: "Angular 2 main module"}, 
              {loc: [28,  30],note: "An ECMA Script 2015 class"}, 
              {loc: [12,  13],note: "The module decorator"}, 
              {loc: [ 0,  11],note: "ECMA Script 2015 imports"}, 
              {loc: [18,  23],note: "Other module dependencies"}, 
              {loc: [13,  18],note: "Components declared by this module"}, 
              {loc: [24,  27],note: "The root components to render"
            }
          ]}/>


          <Slide notes="https://www.flickr.com/photos/ell-r-brown/7160371456">
            <Image
              src={images
              .thanks
              .replace("/", "")}
              width="900px"/>
            <Text>
              Maurice de Beijer - @mauricedb
            </Text>
          </Slide>

        </Deck>
      </Spectacle>
    );
  }
}
