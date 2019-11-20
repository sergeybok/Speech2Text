// Basic styling for the audio recording Play, Pause, and Send Buttons

import styled from 'styled-components';


const AudioRecordingButton = styled.button`
  height: 30px;
  width: 60px;
  background-color: ${props => props.GlobalTheme.buttonBackgroundColor};
  border-style: solid;
  border-width: 2px;
  margin: auto;
`;

export default AudioRecordingButton;
