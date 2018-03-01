//-----------------------------------------------------------------------------------------
//--------------------------------- Third party imports -----------------------------------
//-----------------------------------------------------------------------------------------

import React, { Component } from 'react';
import { connect } from 'react-redux';

//-----------------------------------------------------------------------------------------
//------------------------------------ Local imports --------------------------------------
//-----------------------------------------------------------------------------------------

import '../styles/NewNote.css';
import { noteColors } from '../helpers/constants';
import { editNote } from '../actions/Actions';


//-----------------------------------------------------------------------------------------
//------------------------------------ EditNoteModal Component ----------------------------
//-----------------------------------------------------------------------------------------


class EditNoteModal extends Component {

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
    if(nextProps.note) {
      this.setState(nextProps.note);
    }
  }
    


  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------
  handleCancel = () => {
    this.props.closeModal();
    this.setState(
      {
        color: 'red',
        title: '',
        content: '',
        id: '',
      }
    )
  }
  handleEdit = () => {
    this.props.editNote(this.state)
    this.props.closeModal();
    this.setState(
      {
        color: 'red',
        title: '',
        content: '',
        id: '',
      }
    )
  }

  handleInputChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }
  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className={`modal ${this.props.isModalOpen ? 'open' : 'closed'}`}>
        <div className={`new-note-modal ${this.state.color}`}>
          <div className="palette">
            {
              noteColors.map((color, index) => {
                return (
                  <input
                    key={color}
                    type="button"
                    className={`swatch ${color}`}
                    value={color}
                    name="color"
                    onClick={this.handleInputChange}
                  ></input>
                );
              })
            }
          </div>

          <div className="input">
            <form>
              <input
                className="title"
                name="title"
                type="text"
                placeholder="Untitled"
                value={this.state.title}
                onChange={this.handleInputChange}
              />

              <input
                className="content"
                name="content"
                type="textarea"
                placeholder="Just start typing here..."
                value={this.state.content}
                onChange={this.handleInputChange}
              />
            </form>
          </div>

          <div className="controls">
            <button
              className="cancel"
              onClick={this.handleCancel}
            >
              Cancel
            </button>
            <button
              onClick={this.handleEdit}
              className="add"
            >
              Save
            </button>
          </div>
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

export default connect(mapStateToProps, { editNote })(EditNoteModal);