//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import '../styles/NewNote.css';
import { deleteNote } from '../actions/Actions';


//-----------------------------------------------------------------------------------------
//------------------------------------ DeleteNoteModal Component ----------------------------
//-----------------------------------------------------------------------------------------


class DeleteNoteModal extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {
      color: 'red',
      title: '',
      content: '',
      id: '',
    };
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.deleteNoteID) {
      this.setState({ id : nextProps.deleteNoteID} );
    }
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------
  handleCancel = () => {
    this.props.closeDeleteModal();

  }
  handleDelete = () => {
    this.props.deleteNote( this.state.id );
    this.props.closeDeleteModal();
  }


  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className={`modal ${this.props.isDeleteModalOpen ? 'open' : 'closed'}`}>
          <div className="controls">
            <button
              className="cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              onClick={this.handleDelete}
              className="add"
            >
              Delete
            </button>
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

export default connect(mapStateToProps, { deleteNote })(DeleteNoteModal);