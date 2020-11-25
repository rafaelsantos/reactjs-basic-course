import React, { Component } from "react";
import "./theme.css";

class NoteForm extends Component {
    render() {
        return (
            <form className="note-form">
                <input 
                    type="text" 
                    placeholder="Title" 
                    className="note-form-input" 
                />
                <textarea 
                    rows={15} 
                    placeholder="Write your note..." 
                    className="note-form-input" 
                />
                <button className="note-form-input note-form-send">
                    Create note
                </button>
            </form>
        );
    }
}

export default NoteForm