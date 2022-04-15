class Header extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.innerHTML = `
      
      
    <nav class="navbar navbar-expand-lg  fixed-top navbar-light bg-light">
    <div class="container-fluid">
      <img src="images/pitch.png" alt="" width="170px" height="50px">
     
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" style="margin-left:4%" id="navbarSupportedContent">
        <ul class="navbar-nav d-flex justify-content-around me-auto mb-2 mb-lg-0 nav-fill">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="about.html">About us</a>
          </li>
          <li class="nav-item">
          <a class="nav-link" aria-current="page" href="examples.html">Example</a>
        </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Products
            </a>
            <ul class="dropdown-menu nav-fill" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="pitch-deck.html">pitch decks</a></li>
              <li><a class="dropdown-item" href="#">sales decks</a></li>
              <li><a class="dropdown-item" href="#">finance decks</a></li>
              <li><a class="dropdown-item" href="#">corporate decks</a></li>
            </ul>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/enterprise.html">Enterprise</a>
          </li>
          <li class="nav-item">
            <a class="nav-link">Templates</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
             Resources
            </a>
            <ul class="dropdown-menu nav-fill" aria-labelledby="navbarDropdown">
              <li><a class="dropdown-item" href="#">white paper</a></li>
              <li><a class="dropdown-item" href="#">content sheet</a></li>
              <li><a class="dropdown-item" href="#">101 investor questions</a></li>
            </ul>
          </li>
        </ul>
          <!--<div class="d-none d-lg-flex  align-items-baseline ">
            <p class="text white mx-4">
                <span class="mx-2 phone-icon ">
                        <i class="fas fa fa-phone fa-fw"></i>8765439026</span>
            </p>
           </div>-->
           <div class="header__wrapper-phone" >
             <!--<a class="header__phone" href="tel:+493022045903">
              <i class="fa-solid fa-phone"></i>
               <i class="icon-font icon-phone cv--click--phone-number--header-nav"></i>
               <span>93672982783</span>
              </a>-->
              <p><i class="fa fa-phone" aria-hidden="true"></i>  0120-6619540</p><br>
            </div>
           <div   class="nav-right1">
           <form  class="container-fluid justify-content-start ">
            <button type="button"  class=" navbutton" style="background-color: #fa5255; color:white;font-size: 20px;">Order now</button>
          </form>
        </div>
    </div>
    </div>
  </nav>
      
      
    `;
  }
}

customElements.define('header-component', Header);