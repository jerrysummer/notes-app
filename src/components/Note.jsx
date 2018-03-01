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
    console.log('open edit');
    this.props.openModal(this.props.note)
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

          <button
            onClick={this.handleOpen}
          > 

            edit 
          </button>
          <p> delete </p>
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