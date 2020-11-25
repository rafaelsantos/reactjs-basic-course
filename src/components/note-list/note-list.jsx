import React, { Component } from "react";
import NoteCard from "../note-card";
import "./theme.css";

class NoteList extends Component {
    render() {
        return <ul className="note-list">
            {Array.of("Work", "Work", "Study").map((category, index) => {
            return (
                <li className="note-list-item" key={index}>
                    <NoteCard />
                </li>
            );
        })}</ul>;
    }
}

export default NoteList;