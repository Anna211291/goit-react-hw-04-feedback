import { createGlobalStyle } from 'styled-components';
import 'modern-normalize';
import styled from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    padding: 60px;
    background-color: #1E1E1E;
  }
h1,
h2,
h3,
h4,
h5,
h6,
p {
  margin: 0;
}
code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
  `;

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 0 auto;
  padding: 40px;
`;
