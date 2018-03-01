//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import Note from './Note.jsx';
import '../styles/NotePad.css';
import EditNoteModal from './EditNoteModal';

//-----------------------------------------------------------------------------------------
//------------------------------------ NotePad Component ----------------------------
//-----------------------------------------------------------------------------------------


class NotePad extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: true,
      openNote: '',
    };
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------
  
  openModal = (note) => {
    this.setState(
      { 
        isModalOpen: true,
        openNote: note, 
      }
    )
  }

  closeModal = () => {
    this.setState({ isModalOpen: false })
  }
  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className="notepad">

        {this.props.notes.map((note,index) => {
          return (
            <Note 
              key={`${index} key`}
              note={note}
              openModal={this.openModal}
            />
          )
        })}

        <EditNoteModal
          note={this.state.openNote}
          isModalOpen={this.state.isModalOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />
        

      </div>
    );
  }
}


//-------------------------------------------------------------------------
//-------------------- Mapping store to ImagesDisplay's props ----------------------
//-------------------------------------------------------------------------


const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
  }
}


const mapDispatchToProps = dispatch => {
  return {
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(NotePad);