import React, { Component } from "react";
import NoteForm from "./components/note-form";
import NoteList from "./components/note-list"

class App extends Component {
  render() {
    return (
      <section>
        <NoteForm />
        <NoteList />
      </section>
    );
  }
}

export default App;
