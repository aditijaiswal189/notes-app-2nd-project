import { useNoteContext } from "./NoteContext"

export default function Note({ notem }) {
  const { handleDeleteNote } = useNoteContext();
  return (
    <div className='note'>
      <div className='note-header'><h3>{notem.title}</h3>
        <button className="icon" onClick={() => handleDeleteNote(notem.id)}><svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="#364f67" viewBox="0 0 256 256"><path d="M208.49,191.51a12,12,0,0,1-17,17L128,145,64.49,208.49a12,12,0,0,1-17-17L111,128,47.51,64.49a12,12,0,0,1,17-17L128,111l63.51-63.52a12,12,0,0,1,17,17L145,128Z"></path></svg></button></div>
      <p>{notem.body}
      </p>
    </div>
  )
}