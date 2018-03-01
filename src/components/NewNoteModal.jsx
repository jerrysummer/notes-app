//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import '../styles/NewNote.css';

//-----------------------------------------------------------------------------------------
//------------------------------------ NewNoteModal Component ----------------------------
//-----------------------------------------------------------------------------------------


class NewNoteModal extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      color: '',
      title: '',
      content: '',
    };
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className={`modal ${this.props.isModalOpen? 'open' : 'closed'}`}>
        <div className="new-note-modal">
          <div>
            <div className="red"></div>
            <div className="red"></div>
            <div className="red"></div>
            <div className="red"></div>
          </div>
          NewNoteModal
        </div>
      </div>
    );
  }
}


//-------------------------------------------------------------------------
//-------------------- Mapping store to ImagesDisplay's props ----------------------
//-------------------------------------------------------------------------


const mapStateToProps = (state, ownProps) => {
  return {
  }
}


const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteModal);