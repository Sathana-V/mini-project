class Footer extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
      <div class="d-flex flex-column h-100">
      <footer class="w-100 py-4 flex-shrink-0">

          <div class="container py-4">
            <div class="row footer-heading">
              <div class="col-lg-6" style="margin-top:-2%">
                <h2>Do you have any questions?</h2>
                <h3 style="color:#fa5255">We're here for you!</h3>
              </div>
              <div class="col-lg-3">
                <h5><span><i class="fa fa-phone icons"></i></span>&nbsp;&nbsp;+49 (0) 30 2204 5903</h5>
              </div>
              <div class="col-lg-3">
                <h5><span><i class="fa fa-envelope icons"></i></span>&nbsp;&nbsp;info@pitchguru.com</h5>
            
              </div>
            </div>
            <div class="row" style="height:70px"></div>
              <div class="row gy-4 gx-5 mt-3" style="margin-top:8%">
                  <div class="col-lg-4 col-md-6">
                  
                      <img usemap="#pitch-group-links" class="footer-img" src="images/logo-111.png" alt="logo"/>
                      <map name = "pitch-group-links">
                        <area shape = "rect" coords = "14,84,36,106" 
                           href = "https://google.com" alt="linked-in"  />
                        
                        <area shape = "rect" coords = "61,84,88,107" alt="medoium" 
                           href = "https://medium.com/" target = "_self" />
                           <area shape = "rect" coords = "104,83,143,106" 
                           href = "https://instagram.com" alt="linked-in"  />
                           <area shape = "rect" coords = "158,85,190,106" 
                           href = "https://facebook.com" alt="linked-in"  />
                     </map>
                    </div>
                  <div class="col-lg-2 col-md-6">
                     <strong><h5 class="text-black mb-3">company </h5></strong> 
                      <ul class="list-unstyled text-muted">
                          <li><a href="about.html">about us</a></li>
                          <li><a href="customer.html">Customers</a></li>
                          <li><a href="trust.html">Trust & Security</a></li>
                          <li><a href="presentation-design.html">Start Order</a></li>
                      </ul>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2 col-md-6">
                      <strong><h5 class="text-black mb-3">resources</h5></strong>
                      <ul class="list-unstyled text-muted">
                          <li><a href="resource1.html">white paper</a></li>
                          <li><a href="resource2.html">Content sheet</a></li>
                          <li><a href="resource3.html">101 investor questions</a></li>
                      </ul>
                  </div>
                  <div class="col-lg-1"></div>
                  <div class="col-lg-2 col-md-6">
                    <strong><h5 class="text-black mb-3">Information</h5></strong>
                    <ul class="list-unstyled text-muted">
                        <li><a href="faq.html">Faq</a></li>
                    </ul>
                </div>
                <div class="payments">
                 
                  <img class="payment-img" src="images/payment.png" alt="">
                </div>
          </div>
          <hr style="height:1px;border:10px;color:#333;background-color:#333;" />
          <div class="container copyrights">
            <div class="row">
              <div class="col-lg-8">
                <p>Copyright 2021 © PitchGuru</p>
              </div>
              <div class="col-lg-4 copyrights-group">

                <a href="#" >Condition</a>
                <a href="#">imprint</a>
                <a href="#">Privacy</a>
              </div>
             
            </div>
          </div>
      </footer>
  </div>
        
        
      `;
    }
  }
  
  customElements.define('footer-component', Footer);