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
import DeleteModal from './DeleteModal';

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
      isModalOpen: false,
      isDeleteModalOpen: false,
      openNote: '',
      deleteNoteID: '',
      notes: [],
    };
  }

  componentWillMount() {
    this.setState({ notes: this.props.notes })
  }
  componentWillReceiveProps(nextProps) {
    this.setState({ notes: nextProps.notes })
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

  openDeleteModal = (id) => {
    this.setState(
      { 
        isDeleteModalOpen: true,
        deleteNoteID: id,
      }
    )
  }

  closeDeleteModal = () => {
    this.setState({ isDeleteModalOpen: false })
  }
  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className="notepad">

        {this.state.notes.map((note,index) => {
          return (
            <Note 
              key={`${index} key`}
              note={note}
              openModal={this.openModal}
              openDeleteModal={this.openDeleteModal}
            />
          )
        })}

        <EditNoteModal
          note={this.state.openNote}
          isModalOpen={this.state.isModalOpen}
          openModal={this.openModal}
          closeModal={this.closeModal}
        />

        <DeleteModal
          deleteNoteID={this.state.deleteNoteID}
          isDeleteModalOpen={this.state.isDeleteModalOpen}
          openDeleteModal={this.openDeleteModal}
          closeDeleteModal={this.closeDeleteModal}
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