class TemplatesList extends HTMLElement {
    constructor() {
      super();
    }
  
    connectedCallback() {
      this.innerHTML = `
        
      <div class="container-fluid example-images">
      <div class="row">
          <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
             <img src="images/example_01.jpg" alt="">
          </div>
          <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
             <img src="images/example_02.jpg" alt="">
         </div>
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
             <img src="images/example_03.jpg" alt="">
         </div>
      </div>
      <div class="row">
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_04.jpg" alt="">
         </div>
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_05.jpg" alt="">
        </div>
        <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_06.jpg" alt="">
        </div>
     </div>
     <div class="row">
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_07.png" alt="">
         </div>
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_17.png" alt="">
        </div>
        <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_18.png" alt="">
        </div>
     </div>
     <div class="row bottom-row">
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_19.png" alt="">
         </div>
         <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_12.png" alt="">
        </div>
        <div class="col-lg-4 col-sm-6 col-sm-6 col-md-4">
            <img src="images/example_20.png" alt="">
        </div>
     </div>
  </div>
        
        
      `;
    }
  }
  
  customElements.define('templates-component', TemplatesList);