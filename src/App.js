import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Section } from "./components/Section"
import { Post } from "./components/Post"
import { Emoji } from "./components/Emoji"

const loremIspum = `Proin risus enim, egestas id dictum ac, tempus eget erat. Aliquam erat volutpat. Mauris facilisis scelerisque diam, quis convallis nisl imperdiet a. Nunc accumsan ante quam, vehicula pretium nulla mollis et. Morbi auctor molestie ligula eu congue. Mauris in venenatis magna. Ut sollicitudin hendrerit semper. Vivamus pulvinar, tellus non auctor dapibus, justo nulla bibendum ipsum, in efficitur tortor velit ultricies metus. Nulla euismod maximus sapien nec sodales. Praesent sit amet risus efficitur, semper urna in, maximus diam. Sed lobortis viverra felis, in accumsan justo blandit sed. Nunc eget augue erat. Nulla facilisi. Phasellus id ligula eget justo lobortis euismod nec quis massa. Vivamus id neque euismod, interdum nunc ut, lobortis ipsum. Praesent vel magna tincidunt, congue tortor elementum, sollicitudin leo. Aenean sed tristique quam. Nulla facilisi. Maecenas rutrum auctor accumsan. Quisque mollis lacus et condimentum congue. Morbi rhoncus lectus vitae feugiat sollicitudin. Donec ut tincidunt leo. Aenean facilisis augue eget mauris egestas, vel eleifend velit scelerisque. Nunc sit amet consectetur leo, eget laoreet nulla. Pellentesque vulputate ultrices volutpat. Etiam ultrices leo leo, et imperdiet orci convallis sit amet. Vestibulum ut sapien eu magna vestibulum iaculis. Suspendisse ut dolor sodales augue feugiat cursus.`;
const loremIspum2 = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In massa tempor nec feugiat nisl. Diam in arcu cursus euismod quis viverra nibh. Viverra ipsum nunc aliquet bibendum enim facilisis gravida neque convallis. Adipiscing vitae proin sagittis nisl. Tellus rutrum tellus pellentesque eu tincidunt tortor aliquam nulla facilisi. Mattis aliquam faucibus purus in massa tempor. Massa sed elementum tempus egestas. Aenean et tortor at risus viverra adipiscing at in tellus. Id diam maecenas ultricies mi eget mauris pharetra. Aliquam faucibus purus in massa tempor nec feugiat nisl. Habitant morbi tristique senectus et netus et malesuada. Euismod quis viverra nibh cras. Est lorem ipsum dolor sit amet consectetur. Nibh sed pulvinar proin gravida hendrerit lectus a. Feugiat nisl pretium fusce id velit ut tortor pretium viverra. Placerat duis ultricies lacus sed turpis tincidunt id. In pellentesque massa placerat duis ultricies. Porttitor rhoncus dolor purus non enim praesent elementum facilisis leo. Sed libero enim sed faucibus turpis in eu mi bibendum. Lobortis mattis aliquam faucibus purus in massa tempor. Sit amet nulla facilisi morbi.`;
const loremIspum3 = `Turpis massa sed elementum tempus. Convallis posuere morbi leo urna molestie at. A iaculis at erat pellentesque adipiscing. Eu feugiat pretium nibh ipsum consequat nisl vel. Faucibus turpis in eu mi bibendum. Odio ut sem nulla pharetra diam sit amet nisl suscipit. Sagittis nisl rhoncus mattis rhoncus urna. Congue quisque egestas diam in arcu cursus euismod quis. In egestas erat imperdiet sed. Libero id faucibus nisl tincidunt. Scelerisque varius morbi enim nunc faucibus. Massa ultricies mi quis hendrerit dolor magna eget est lorem. Accumsan sit amet nulla facilisi morbi tempus iaculis urna. Et leo duis ut diam. Diam sollicitudin tempor id eu nisl. Nisi quis eleifend quam adipiscing vitae proin sagittis nisl. Turpis egestas integer eget aliquet nibh. Maecenas accumsan lacus vel facilisis volutpat est. Facilisi cras fermentum odio eu feugiat pretium nibh ipsum. Vitae congue eu consequat ac felis donec et odio pellentesque. `;

const App = () => (
  <BrowserRouter basename="/">
        <Switch>
          <Route exact path="/who">
            <div className="wrapper">
              <div className="flex-left">
                <h1>Hi!&nbsp;<Emoji emoji="wave"/> My name is <Section title="Andrew Young" address="/who"/> and I am <Section title="a student" address="/what"/> from <Section title="Wayland, Ma" address="/where"/>.</h1>
              </div>
              <div className="flex-right">
                <Post title="Andrew Young" content={ loremIspum }/>
              </div>
            </div>
          </Route>
          <Route exact path="/what">
            <div className="wrapper">
              <div className="flex-left">
                <h1>Hi!&nbsp;<Emoji emoji="wave"/> My name is <Section title="Andrew Young" address="/who"/> and I am <Section title="a student" address="/what"/> from <Section title="Wayland, Ma" address="/where"/>.</h1>
              </div>
              <div className="flex-right">
                <Post title="a student" content={ loremIspum2 }/>
              </div>
            </div>
          </Route>
          <Route exact path="/where">
            <div className="wrapper">
              <div className="flex-left">
                <h1>Hi!&nbsp;<Emoji emoji="wave"/> My name is <Section title="Andrew Young" address="/who"/> and I am <Section title="a student" address="/what"/> from <Section title="Wayland, Ma" address="/where"/>.</h1>
              </div>
              <div className="flex-right">
                <Post title="Boston, MA" content={ loremIspum3 }/>
              </div>
            </div>
          </Route>
          <Route exact path="/">
            <div className="wrapper">
              <div className="flex-full">
                <h1>Hi!&nbsp;<Emoji emoji="wave"/> My name is <Section title="Andrew Young" address="/who"/> and I am <Section title="a student" address="/what"/> from <Section title="Wayland, Ma" address="/where"/>.</h1>
              </div>
            </div>
          </Route>
        </Switch>
  </BrowserRouter>
)

export default App
