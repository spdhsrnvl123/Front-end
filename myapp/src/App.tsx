import { createGlobalStyle } from "styled-components";
import Router from "./Router";

/*
스타일 컴포넌트는 정확이 이걸 위한 property를 갖고 있다.
그 프로퍼티는 createGlobalStyle이라고 부른다.
->렌더링 될 때, 그 컴포넌트는 전역 스코프에 스타일들을 올려준다.(고립되지 않음)
*/
// Fragment는 일종의 유령 컴포넌트이다.
const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Source+Sans+Pro:ital,wght@1,300;1,400&display=swap');

html, body, div, span, applet, object, iframe,
h1, h2, h3, h4, h5, h6, p, blockquote, pre,
a, abbr, acronym, address, big, cite, code,
del, dfn, em, img, ins, kbd, q, s, samp,
small, strike, strong, sub, sup, tt, var,
b, u, i, center,
dl, dt, dd, menu, ol, ul, li,
fieldset, form, label, legend,
table, caption, tbody, tfoot, thead, tr, th, td,
article, aside, canvas, details, embed,
figure, figcaption, footer, header, hgroup,
main, menu, nav, output, ruby, section, summary,
time, mark, audio, video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article, aside, details, figcaption, figure,
footer, header, hgroup, main, menu, nav, section {
  display: block;
}
/* HTML5 hidden-attribute fix for newer browsers */
*[hidden] {
    display: none;
}
body {
  line-height: 1;
}
menu, ol, ul {
  list-style: none;
}
blockquote, q {
  quotes: none;
}
blockquote:before, blockquote:after,
q:before, q:after {
  content: '';
  content: none;
}
table {
  border-collapse: collapse;
  border-spacing: 0;
}
*{
    box-sizing: border-box;
}
body{
    font-family: 'Source Sans Pro', sans-serif;
    background-color:${(props) => props.theme.bgColor};
    color:${(props) => props.theme.textColor};
}
a{
    text-decoration: none;
}
`;

function App() {
  return (
    <>
      <GlobalStyle />
      <Router />
    </>
  );
}

export default App;
