//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import '../styles/Note.css';

//-----------------------------------------------------------------------------------------
//------------------------------------ Note Component ----------------------------
//-----------------------------------------------------------------------------------------


class Note extends Component {

  //-------------------------------------------------------------------------
  //------------------ Constructor & Lifecycle methods ----------------------
  //-------------------------------------------------------------------------

  constructor(props) {
    super(props);
    this.state = {};
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------

  handleOpen = () => {
    this.props.openModal(this.props.note)
  }

  handleDelete = () => {
    this.props.openDeleteModal(this.props.note.id)
  }
  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
      let { title, content, color, id } = this.props.note;
    return (
      <div className={`note ${color}`}>
        <div className="title">
          <p> {title} </p>
          <div className="note-controls">
            <button
              onClick={this.handleOpen}
            > 
              <i className="material-icons">mode_edit</i>
            </button>

            <button
              onClick={this.handleDelete}
            > 
            <i className="material-icons">delete</i>
            </button>
          </div>

        </div>

        <div className="content">
          {content}
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

export default connect(mapStateToProps, mapDispatchToProps)(Note);