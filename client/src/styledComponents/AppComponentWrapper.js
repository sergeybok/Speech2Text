// App component wrapper
// Div containers that wraps the whole page ans sets basic styling, width, height, etc.

import styled from 'styled-components';

const AppComponentWrapper = styled.div`
  height: 100%;
  width: 100%;
  background-color: ${props => props.GlobalTheme.appBackgroundColor};
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  position: fixed;
`;

export default AppComponentWrapper;
