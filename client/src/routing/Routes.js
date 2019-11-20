// External Packages
import React from 'react';
import { Switch, BrowserRouter } from 'react-router-dom';
// Internal Modules
// Containers
import AudioRecordingContainer from '../containers/AudioRecordingContainer';
// Components
import AuthenticatedRoute from '../components/AuthenticatedRoute';
import UnauthenticatedRoute from '../components/UnauthenticatedRoute';


export default ({childProps}) =>
    <BrowserRouter>
        <Switch>
            <UnauthenticatedRoute path="/" exact component={AudioRecordingContainer} props={childProps} />
        </Switch>
    </BrowserRouter>
