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
