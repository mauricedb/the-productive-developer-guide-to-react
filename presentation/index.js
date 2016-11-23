// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  Deck,
  CodePane,
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
require("prismjs/components/prism-javascript");
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-typescript");

const images = {
  react: require('../assets/images/react.png'),

  amsterdam: require('../assets/images/amsterdam.jpg'),
  title: require("../assets/images/title.png"),
  maurice: require("../assets/images/maurice1024.jpg"),
  sergeant: require("../assets/images/sergeant.png"),
  reactStarter: require("../assets/images/react-starter.png"),
  createReactApp: require("../assets/images/create-react-app.png"),
  flux: require("../assets/images/flux.png"),
  tree: require("../assets/images/tree.png"),
  lego: require("../assets/images/lego.png"),
  thanks: require("../assets/images/thanks.png")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: 'lightgreen',
  tertiary: 'yellow',
});


export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress='bar'>

          <Slide bgImage={images.amsterdam.replace("/", "")}>
            <Heading margin="0px 0px 0px" textColor='#404040'>
              The Productive Developer Guide to React
            </Heading>
            <Image
              src={images.react.replace("/", "")}
              height="300px"/>
          </Slide>

          <Slide bgImage={images.maurice.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
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

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              What is React?
            </Heading>
            <Appear>
              <Heading size={1} caps fit textColor="secondary">
                a declarative, efficient, and flexible JavaScript library
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} caps fit textColor="tertiary">
               for building user interfaces
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Where does React come from?
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Created at Facebook
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                Powers Facebook, Instagram, AirBNB and many more
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              React vs Angular
            </Heading>
          </Slide>

          <Slide
            notes="https://www.dreamstime.com/royalty-free-stock-image-cartoon-angry-army-drill-sergeant-shouting-image19836396">
            <Heading size={1} caps fit textColor="black">
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
            <Heading size={1} caps fit textColor="black">
              React not so mutch
            </Heading>
            <Image
              src={images.reactStarter.replace("/", "")}
              width="900px"/>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Create-React-App
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                The official React starter project
              </Heading>
            </Appear>
            <Appear>
              <Image
                src={images.createReactApp.replace("/", "")}
                width="450px"/>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              JSX is the language of choice
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                It combines ECMAScript and HTML markup
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/component.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "React JSX"}, 
              {loc: [ 4,  18],note: "Code with markup"} 
          ]}/>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                The building blocks of a React application
              </Heading>
            </Appear>
            <Appear>
              <Image
                src={images.tree.replace("/", "")}
                width="450px"/>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/component.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "React Components example"}, 
              {loc: [ 0,   2],note: "ECMAScript imports"}, 
              {loc: [25,  26],note: "ECMAScript exports"}, 
              {loc: [ 3,   4],note: "ECMAScript classes"}, 
              {loc: [ 4,  18],note: "The render() returns a React element. Transpiled into React.createElement()"}, 
              {loc: [ 8,   9],note: "A few HTML attributes are renamed"}, 
              {loc: [10,  11],note: "Curly braces wrap expressions"}, 
          ]}/>
          
          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              ReactDOM 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                ReactDOM renders the components into the DOM
              </Heading>
            </Appear>
            <Appear>
              <CodePane lang="javascript"
                        source={require("raw!../assets/code/index.app.js.txt")}
                        textSize="x-large"
                        margin="20px auto"
              />
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Server side rendering 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                ReactDOMServer can render the components as a string
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                Useful for server side rendering and SEO
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Components & Props 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Props are inputs to components
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                They should never be updated
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/movie-list.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "Parent Components example"}, 
              {loc: [ 6,  10],note: "Render child component with properties"},
          ]}/>
          
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/movie.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "Child Components example"}, 
              {loc: [ 5,   6],note: "Read data from props"}, 
              {loc: [21,  24],note: "Optionally declare expected properties"}, 
          ]}/>
          
          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Components & State 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Internal to a component
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                Can be used as props for a child component
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/movie-container.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "Stateful Components example"}, 
              {loc: [ 7,  10],note: "Create initial state"}, 
              {loc: [12,  18],note: "Use the componentDidMount() lifecycle method"}, 
              {loc: [13,  14],note: "Execute an AJAX request"}, 
              {loc: [16,  17],note: "Explicitly update the state using setState()"}, 
              {loc: [22,  23],note: "Pass the state to a child component"}, 
          ]}/>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Presentation & Container Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Keep responsibilities separate
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Presentation Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Only concerned with rendering elements on screen
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                Takes all the input data as props
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Container Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Do not directly render any elements on screen 
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                Contain all state management logic
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="lime">
                Better yet: Use Redux or MobX
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Event handling 
            </Heading>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps textColor="primary">
              Flux 
            </Heading>
            <Image
              src={images.flux.replace("/", "")}
              width="900px"/>
          </Slide>

          <Slide bgImage={images.amsterdam.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Redux/MobX
            </Heading>
          </Slide>


         

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
