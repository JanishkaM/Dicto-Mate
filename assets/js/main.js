const header = document.querySelector('header')
const footer = document.querySelector('footer')
header.innerHTML = 
`
<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
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
          <a class="nav-link" href="contact.html">Feedback</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
`

footer.innerHTML += 
`
<div class="text-bg-primary p-4">
        <div class="container">
            <div class="row row-cols-1 row-cols-md-3">
                <div class="col d-flex flex-column align-items-center align-items-md-start mb-5">
                    <div class="logo">Dicto Mate</div>
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
                    <div class="special text-center text-md-start">
                        <a class="link-info" href="#">Special Links</a><br>
                        <a class="link-info" href="#">Special Links</a><br>
                        <a class="link-info" href="#">Special Links</a>
                    </div>
                </div>
            </div>
            <div class="copyright text-center">© 2023 - 2023 DictoMate - All Rights Reserved.<br> Version: 1.0.0</div>
        </div>
    </div>
`
