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
  BlockQuote,
  Quote,
  Cite,
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
  background: require('../assets/images/background.jpg'),
  title: require("../assets/images/title.png"),
  maurice: require("../assets/images/maurice1024.jpg"),
  mapOperator: require("../assets/images/map-operator.png"),
  sergeant: require("../assets/images/sergeant.png"),
  reactStarter: require("../assets/images/react-starter.png"),
  createReactApp: require("../assets/images/create-react-app.png"),
  flux: require("../assets/images/flux.png"),
  tree: require("../assets/images/tree.png"),
  thanks: require("../assets/images/thanks.jpg")
};

preloader(images);

const theme = createTheme({
  primary: "#ffffff",
  secondary: 'lightgreen',
  tertiary: 'yellow',
});

const bgImage = images.background.replace("/", "")

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["fade"]} transitionDuration={500} progress='bar'>

          <Slide bgImage={bgImage}>
            <Heading margin="0px 0px 0px" textColor='#404040'>
              The Productive Developer Guide to React
            </Heading>
            <Image
              src={images.react.replace("/", "")}
              height="300px"/>
          </Slide>

          <Slide bgImage={images.maurice.replace("/", "")} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Who am I?
            </Heading>
            <List>
              <ListItem>Maurice de Beijer</ListItem>
              <ListItem>The Problem Solver</ListItem>
              <ListItem>Microsoft Azure MVP</ListItem>
              <ListItem>Freelance developer/instructor</ListItem>
              <ListItem>Twitter: @mauricedb &amp; @React_Tutorial</ListItem>
              <ListItem>Web: http://www.TheProblemSolver.nl</ListItem>
              <ListItem>E-mail: maurice.de.beijer@gmail.com</ListItem>
            </List>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              is React reactive?
            </Heading>
          </Slide>

          <Slide>
            <Heading size={1} textColor="black">
              RxJS map operator
            </Heading>
            <Image
              src={images.mapOperator.replace("/", "")}
              margin="20px auto"
              width="900px"/>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              RxJS example
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code/rx.js.txt")}
                      textSize="x-large"
                      margin="20px auto"
            />
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              A functional React component
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code/functional.jsx.txt")}
                      textSize="x-large"
                      margin="20px auto"
            />
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              What is React?
            </Heading>

{/*
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
*/}
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <BlockQuote>
              <Quote>
                React is a JavaScript library for building user interfaces
              </Quote>
              <Cite>
                Facebook
              </Cite>
            </BlockQuote>
          </Slide>

{/*
          <Slide bgImage={bgImage} bgDarken={0.5}>
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
                Powers Facebook, Instagram, AirBNB, Zoover and many more
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
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
              src={images.sergeant.replace("/", "")}
              margin="40px auto 0px"
              height="500px"/>
          </Slide>

          <Slide>
            <Heading size={1} caps fit textColor="black">
              React not so much
            </Heading>
            <Image
              src={images.reactStarter.replace("/", "")}
              width="900px"/>
          </Slide>
*/}

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
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

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              JSX is the language of choice
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                It combines ECMAScript and HTML markup
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              JSX = Code with markup
            </Heading>
            <CodePane lang="javascript"
                      source={require("raw!../assets/code/functional.jsx.txt")}
                      textSize="x-large"
                      margin="20px auto"
            />
          </Slide>

{/*
          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/component.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "React JSX"}, 
              {loc: [ 4,  18],note: "Code with markup"} 
          ]}/>
*/}

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary" margin="20px auto">
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
          
          <Slide bgImage={bgImage} bgDarken={0.5}>
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

{/*}
          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
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
*/}

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Components & Props 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary" margin="20px auto">
                Props are inputs to components
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary" margin="20px auto">
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
          
          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Components & State 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Internal to a component
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary" margin="20px auto">
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

{ /*}
          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Presentation & Container Components 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Keep responsibilities separate
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
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

          <Slide bgImage={bgImage} bgDarken={0.5}>
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

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} caps fit textColor="primary">
              Event handling 
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                DOM events are exposed to components
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/login-page.jsx.txt")}
            ranges={[
              {loc: [ 0, 255],title: "Event handling example"}, 
              {loc: [32,  37],note: "Input element with change event handler"}, 
              {loc: [15,  19],note: "The event handler"}, 
              {loc: [38,  44],note: "A button with event handler"}, 
              {loc: [20,  26],note: "The event handler"}, 
              {loc: [10,  13],note: "Binding to the current instance"}, 
          ]}/>
*/}

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Redux
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                A predictable state container for JavaScript apps
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Redux principels
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Single source of truth
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                State is read-only
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="lime">
                Changes are made with pure functions
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/reducer.js.txt")}
            ranges={[
              {loc: [ 0, 255],title: "Redux reducer"}, 
              {loc: [11,  19],note: "The state is never modified"}, 
          ]}/>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              MobX
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Simple, scalable state management
              </Heading>
            </Appear>
          </Slide>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              MobX principels
            </Heading>
            <Appear>
              <Heading size={1} fit textColor="secondary">
                Single source of truth
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="tertiary">
                State is observable
              </Heading>
            </Appear>
            <Appear>
              <Heading size={1} fit textColor="lime">
                React components are observers
              </Heading>
            </Appear>
          </Slide>

          <CodeSlide
            transition={[]}
            lang="jsx"
            code={require("raw!../assets/code/mobx.js.txt")}
            ranges={[
              {loc: [ 0, 255],title: "MobX observers"}, 
              {loc: [ 5,   9],note: "State is observable"}, 
              {loc: [11,  12],note: "Components are observers"}, 
          ]}/>

          <Slide bgImage={bgImage} bgDarken={0.5}>
            <Heading size={1} fit textColor="primary">
              Is React reactive?
            </Heading>
            <Appear>
              <Heading size={1} caps fit textColor="red">
                &nbsp;&nbsp;&nbsp;&nbsp;
                No!
                &nbsp;&nbsp;&nbsp;&nbsp;
              </Heading>
            </Appear>
            <Appear>
              <div>
                <Heading size={1} fit textColor="secondary">
                  But it's a great library for building user interfaces
                </Heading>
                <Heading size={1} fit textColor="tertiary">
                  And MobX is reactive!
                </Heading>
              </div>
            </Appear>
          </Slide>

          <Slide bgImage={images.thanks.replace("/", "")} notes="https://www.flickr.com/photos/stevendepolo/4582437563/">
            <Appear>
            <Heading size={1} fit textColor="black" margin="00px auto">
              @mauricedb
            </Heading>
            </Appear>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
