// PER PRIMA COSA:
// 1. Registrati per ottenere la tua API key: https://www.pexels.com/join/
// una volta registrati la key la trovate qui:
// https://www.pexels.com/api/new/
// 2. La key, quando ottenuta, dovrà essere usata negli header della tua HTTP request con la proprietà:
// Authorization: [LA TUA API KEY]
// questo dovrebbe essere abbastanza per fare la richiesta GET con successo.
// ESERCIZIO:
// 1) Premere sul bottone "Load Images" caricherà il contenuto delle API nella pagina:
// GET https://api.pexels.com/v1/search?query=[your-query]
// 2) Premere sul bottone "Load Secondary Images" invece dovrà usare una diversa query:
// GET https://api.pexels.com/v1/search?query=[your-secondary-query]
// 3) Il tasto "Edit" andrà sostituito con un tasto "Hide".
// 4) Quando si preme "Hide", l'intera card dovrebbe scomparire.
// 5) Sostituisci il testo "9 mins" del template delle card con l'id dell'immagine corrispondente.
// 6) Nella sezione principale aggiungi un campo di ricerca. Usa il valore di questo campo per cercare nuove immagini rimpiazzando quelle esistenti.
// 7) Cliccare l'immagine o il suo nome farà cambiare pagina verso una di dettaglio dell'immagine. Qui dovrai visualizzare immagine, nome artista e linkare la sua pagina personale. Dai la possibilità all'utente di tornare indietro.
// l'endpoint da contattare nella pagina dettaglio è il seguente:
// GET  https://api.pexels.com/v1/photos/[id-risorsa]
// Documentazione URLSearchParams: https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
// [EXTRA]
// 8) Il background della pagina di dettaglio dovrà essere la media dei colori presenti in quella foto.
// 9) Quando l'utente clicca su bottone "VIEW" della Card, apri l'immagine corrispondente in un modale.
// API Docs:
// Documentazione : https://www.pexels.com/it-it/api/documentation/
// Documentazione dell'endpoint per la ricerca foto: https://www.pexels.com/it-it/api/documentation/#photos-search

//variabili esterne
const URL = "https://api.pexels.com/v1/search?query=duck";
const row = document.getElementById("row");
const loadBtn = document.querySelector(".load-btn");
const loadSecondImg = document.querySelector(".load-secondary-images-btn");

const loadImages = () => {
  loadBtn.addEventListener("click", () => {
    fetch(URL, {
      method: "GET",
      body: JSON.stringify(),
      headers: {
        "Content-Type": "application/json",
        Authorization: "Ov5Q2mWS78jU4vCTYUP2hUeLPedmYPMnQN19JAmdVqE3na6sqnYEgPCq",
      },
    })
      .then((response) => {
        console.log(response);
        if (response.ok) {
          console.log("your page is now loading");
          return response.json();
        } else {
          throw new Error("Errore nella fetch");
        }
      })
      .then((data) => {
        console.log(data);
        data.photos.forEach((obj) => {
          const img = obj.src.medium;
          const id = obj.id;
          console.log(obj);
          const div = document.createElement("div");
          div.classList.add("col-md-4");

          div.innerHTML = `<div class="card mb-4 shadow-sm">
          <img
            src="${img}"
            class="bd-placeholder-img card-img-top"
          />
          <div class="card-body">
            <h5 class="card-title">Lorem Ipsum</h5>
            <p class="card-text">
              This is a wider card with supporting text below as a natural
              lead-in to additional content. This content is a little bit
              longer.
            </p>
            <div
              class="d-flex justify-content-between align-items-center"
            >
              <div class="btn-group">
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary"
                >
                  View
                </button>
                <button
                  type="button"
                  class="btn btn-sm btn-outline-secondary hideBtn"
                >
                  Hide
                </button>
              </div>
              <small class="text-muted">${id}</small>
            </div>
          </div>
        </div>`;

          row.appendChild(div);
        });
      });
  });
};

loadImages();

const hideCard = () => {
  const hideBtn = document.querySelector(".hideBtn");
  hideBtn.addEventListener("click", () => {
    alert("ciao");
  });
};
