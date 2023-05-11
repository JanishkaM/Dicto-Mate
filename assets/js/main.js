const header = document.querySelector('header')
const footer = document.querySelector('footer')
const preloader = document.querySelector(".preloader")

preloader.innerHTML = `
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
  </button>
  <button class="btn btn-primary" type="button" disabled>
    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
    <span class="visually-hidden">Loading...</span>
  </button>   
`

window.onload = function(){
  //hide the preloader
  preloader.style.display = "none";
}


header.innerHTML = 
`
<nav class="des-nav navbar navbar-expand-md d-none d-md-block navbar-dark bg-primary">
  <div class="container">
    <a class="navbar-brand" href="index.html"><div class="logo">Dicto Mate</div></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="index.html">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="dicto.html">Dicto</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="dictionary.html">Dictionary</a>
        </li>
        <li class="nav-item">
        <a class="nav-link" href="https://voicytext.netlify.app/" target="_blank">Voicy</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="contact.html">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
<nav class="mob-nav d-block d-md-none">
        <ul class="nav justify-content-around position-fixed">
            <li class="nav-item">
              <a class="nav-link active p-0" aria-current="page" href="index.html"><i class="bi bi-house"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="dicto.html"><i class="bi bi-pencil-square"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="dictionary.html"><i class="bi bi-journal-text"></i></a>
            </li>
            <li class="nav-item">
              <a class="nav-link p-0" href="contact.html" ><i class="bi bi-envelope"></i></a>
            </li>
          </ul>
    </nav>
`

footer.innerHTML += 
`
<div class="text-bg-primary p-4 d-none d-md-block">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col d-flex flex-column align-items-center align-items-md-start mb-5">
                    <img src="assets/img/apple-touch-icon.png" class="mb-2">
                    <div class="logo mb-2">Dicto Mate</div>
                    <p>Your Dicto Friend</p>
                </div>
                <div class="col d-flex flex-column align-items-center align-items-md-start mb-5">
                    <ul class="navbar-nav text-center text-md-start">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href="index.html">Home</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="dicto.html">Dicto</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="contact.html">Feedback</a>
                        </li>
                    </ul>
                </div>
                <div class="col d-flex flex-column align-items-center align-items-md-start mb-5">
                    <ul class="navbar-nav text-center text-md-start">
                      <li class="nav-item">
                        <a class="nav-link active" aria-current="page" href="https://voicytext.netlify.app/" target="_blank">Voicy Text</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="https://simpgames.netlify.app/" target="_blank">Rock Paper Scissors</a>
                      </li>
                      <li class="nav-item">
                        <a class="nav-link" href="#" target="_blank">Special</a>
                      </li>
            </ul>
                </div>
            </div>
            <div class="copyright text-center">© 2023 - 2023 DictoMate - All Rights Reserved.<br> Version: 1.2.0</div>
        </div>
    </div>
`
