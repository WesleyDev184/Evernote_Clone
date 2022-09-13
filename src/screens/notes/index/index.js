import React, { Fragment } from 'react';
import HeaderLogged from '../../../components/header_logged';
import Notes from '../../../components/notes';
import '../../../styles/notes.scss'

const NotesScreen = () => (
  <Fragment>
    <HeaderLogged/>
    <Notes/>
  </Fragment>
);

export default NotesScreen;