import React, { Component } from "react";
import NoteForm from "./components/note-form";
import NoteList from "./components/note-list";
import "./assets/App.css";
import './assets/index.css';

class App extends Component {
  render() {
    return (
      <section className="content">
        <NoteForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
