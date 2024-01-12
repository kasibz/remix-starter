import newNoteStyles from "../components/NewNote.css";

function NewNote() {
  return (
    <form id="note-form" method="post">
      <p>
        <label htmlFor="title">Title</label>
        <input type="text" id="title" name="title" required />
      </p>
      <p>
        <label htmlFor="content">Content</label>
        <input type="text" id="content" name="content" required />
      </p>
      <div className="form-actions">
        <button>Add Note</button>
      </div>
    </form>
  );
}

export default NewNote;

export function links() {
  return [{ rel: "stylesheet", href: newNoteStyles }];
}
