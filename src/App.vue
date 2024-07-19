
<template>

    <div class="container-fluid d-flex justify-content-center h-100">
      
      <!--  WELCOME SECTION  -->
      <div class="row" id="julia">
        
        <div class="col-12 col-md-4 order-1 order-md-1 d-flex align-items-center justify-content-center">
          <img src="./assets/me clear sq.png" alt="Description" class="img-fluid" id="julia-sketch">
        </div>
        
        <div class="col-12 col-md order-2 order-md-2" id="julia-text">
          <div class="row" id="julia-text-title">
            <h1 id="julia-text-title">Julia Nonnenkamp</h1>
          </div>
          <div class="spacer" />
          <div class="row" id="julia-text-body">
            <p class="text-start">
              I'm an research MS <small><em>(and maybe Ph.D.?)</em></small> student in computer science at the University of Wisconsin-Madison 
              <a href="https://madsp.cs.wisc.edu/" target="_blank">Security & Privacy Research Group</a> advised by Dr. Rahul Chatterjee. 
              I'm interested in privacy assurance, risk assessment, and applications of privacy-preserving protocols to law and policy.
            </p>
            <p class="text-start">
              I just finished up undergrad at Georgetown University, where I studied math and computer science
              (and became a policy wonk by osmosis). I received a
              <a href="https://techandsociety.georgetown.edu/projects/fritz-family-fellows-program/" target="_blank">Fritz Fellowship</a> 
              from GU's 
              <a href="https://techandsociety.georgetown.edu/">Tech & Society Initiative</a>, 
              where I worked with the
              <a href="https://mdi.georgetown.edu/" target="_blank">Massive Data Institute</a> 
              and the GU Law Center auditing forensic DNA analysis software systems.
            </p>
          </div>
          <div class="spacer" />
          <div class="row w-100" id="contact-links">
            <a href="https://github.com/julianonn" target="_blank">github</a>
            <div class="tab-surround">|</div>
            <a href="https://www.linkedin.com/in/jsnonnenkamp/" target="_blank">linkedin</a>
          </div>
        </div>

      </div>



    </div>


    <footer>
      <p class="footer-text">
        <!--copyright--> &copy; 2024 Julia Nonnenkamp
      </p>
    </footer>


</template>





<style scoped>

  /*div {
    border: 1px solid black;
  }*/

  #julia {
    height: auto; 
    margin-bottom: 10vh;
  }

  @media (min-width: 768px) {
    #julia {
      height: 90vh; 
    }  /* TODO */
  }

  #julia-sketch {
    width: auto;
  }
  @media (max-width: 768px) {
    #julia-sketch {
      width: 40%;
    }
  }

  #julia-text {
    display: flex;
    flex-direction: column;
    /*justify-content: space-around;*/
    justify-content: center;
    align-items: flex-start;
    text-align: left;
  }

  @media (max-width: 768px) {
    #julia-text {
      text-align: center;
      align-items: center;
    }
  }

  #contact-links {

    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    #contact-links {
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  }

</style>