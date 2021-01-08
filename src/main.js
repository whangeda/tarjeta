const $sendNote = document.getElementById("send-note");

const pop = (item)=>{
    item.remove()
}
const printNote = () => {
   const $noteText = document.getElementById("input-value").value;
   const article = document.createElement("article");
   article.id = "articulo"
   const parrafo = document.createElement("p");
   const $delete = document.createElement("button");
   $delete.id = "eliminar"
   $delete.textContent = "DELETE";
   article.appendChild(parrafo);
   article.appendChild($delete);
   parrafo.textContent = $noteText;
   document.body.appendChild(article);
   $delete.addEventListener("click",()=>{
       pop(article)
   })
}

$sendNote.addEventListener("click" , () => {
    printNote()
});

