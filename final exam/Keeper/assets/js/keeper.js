
// add notes....!
function addbtn() {
     let addnote = document.getElementById('keepertxt').value;
     if (addnote == ''){
          alert('information is required...');
     }
     else {
          alert('Note saved successfully....!');
          console.log(addnote);
          let keepnote = JSON.parse(localStorage.getItem('notes')) ? JSON.parse(localStorage.getItem('notes')) : [];
          if (keepnote == null || keepnote == undefined) {
               keepnote.push(addnote);
               localStorage.setItem('notes',JSON.stringify(keepnote));
          } else {
               keepnote.push(addnote);
               localStorage.setItem('notes',JSON.stringify(keepnote));
          }
          document.getElementById('keepertxt').value="";
     }
     viewNotes();
}
// view notes.....

function viewNotes() {
     let tbl="";
     let keepnote = JSON.parse(localStorage.getItem('notes'));
     console.log(keepnote);
     keepnote.map((note,index)=>{
          return tbl += `
          <div class="card my-1 mx-2" style="width: 18rem;">
          <div class="card-body">
            <h5 class="card-title">Note.${index+1}</h5>
            <p class="card-text">${note}</p>
            <a href="#" class="btn btn-light" onclick="delNote(${index})"><i class="fa-solid fa-trash" style="color:#f5ba14"></i></a>
          </div>
        </div>
          `
     })

     document.getElementById('keeper').innerHTML = tbl;

}
viewNotes();

// delete notes...

function delNote(id) {
     let keepnote = JSON.parse(localStorage.getItem('notes'));
     keepnote.splice(id,1);
     localStorage.setItem('notes',JSON.stringify(keepnote));
     viewNotes();
     alert("Delete note successfully...!")
}































