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
      id: '',
    };
  }

  //-------------------------------------------------------------------------
  //------------------------- Handler methods -------------------------------
  //-------------------------------------------------------------------------
  handleCancel = () => {
    console.log('closing');
    this.props.closeModal();
    this.setState(
      {
        color: '',
        title: '',
        content: '',
        id: '',
      }
    )
  }
  handleAdd = () => {
    console.log('adding');
    this.props.closeModal();
    this.setState(
      {
        color: '',
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
    console.log(name, value)
    this.setState({
      [name]: value
    });
  }
  //-------------------------------------------------------------------------
  //------------------------------- Render ----------------------------------
  //-------------------------------------------------------------------------

  render() {
    return (
      <div className={`modal ${this.props.isModalOpen? 'open' : 'closed'}`}>
        <div className="new-note-modal">
          <div className="palette">
              <input 
                type="button"
                className="swatch red"
                value="red"
                name="color"
                onClick={this.handleInputChange}
              ></input>
              <input 
                type="button"
                className="swatch green"
                value="green"
                name="color"
                onClick={this.handleInputChange}
              ></input>
              <input 
                type="button"
                className="swatch yellow"
                value="yellow"
                name="color"
                onClick={this.handleInputChange}
              ></input>
              <input 
                type="button"
                className="swatch blue"
                value="blue"
                name="color"
                onClick={this.handleInputChange}
              ></input>
          </div>

          <div className="input">
            <form>
              <label>
                title
              <input
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleInputChange} />
              </label>

              <label>
                content
              <input
                  name="content"
                  type="text"
                  value={this.state.content}
                  onChange={this.handleInputChange} />
              </label>
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
              className="add"
            >
              Add
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

export default connect(mapStateToProps, mapDispatchToProps)(NewNoteModal);