
<template>

    <div class="container-fluid d-flex justify-content-center h-100">
      
      <!--  WELCOME SECTION  -->
      <div class="row" id="julia">
        
        <div class="col-12 col-md-5 order-1 order-md-1 d-flex align-items-center justify-content-center">
          <img src="./assets/me clear sq.png" alt="Description" class="img-fluid" id="julia-sketch">
        </div>
        
        <div class="col-12 col-md order-2 order-md-2" id="julia-text">
          <div class="row" id="julia-text-title">
            <h1 id="julia-text-title">Julia Nonnenkamp</h1>
          </div>
          <div class="spacer" />
          <div class="row" id="julia-text-body">
            <p class="text-start">
              I'm an incoming MS <small><em>(and maybe Ph.D.??)</em></small> student in computer science at the University of Wisconsin-Madison 
              <a href="https://madsp.cs.wisc.edu/" target="_blank">Security & Privacy Research Group</a> interested in human-centered privacy research & policy.
            </p>
            <p class="text-start">
              I'm just about to graduate from Georgetown University, where I'm a 
              <a href="https://techandsociety.georgetown.edu/projects/fritz-family-fellows-program/" target="_blank">Fritz Fellow</a> 
              working with the
              <a href="https://mdi.georgetown.edu/" target="_blank">Massive Data Institute</a> 
              auditing forensic DNA analysis software systems.
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

      <!--  RESEARCH  -->
      <div class="row section" id="research">
        <h1 id='research-title'>Research</h1>
        <div class="spacer" />
        <h2>Forensic DNA Analysis & Algorithmic Safety</h2>
        <p>
          During criminal investigation, law enforcement collects genetic evidence and uses a class of tools 
          called probabilistic genotyping software (PGS) to identify and validate potential persons of interest.
          The wider scientific and regulatory community has been aware of transparency issues related to commercial PGS tools
          for several years. In this multi-year project with the Massive Data Institute and GULC's Center for Privacy and 
          Technology, we seek to better understand the available tools, audit them, and generate synthetic 
          data to help mitigate the challenge of limited data for auditing. 
        </p>
        <!--<p><med-weight>Associated institutions:</med-weight> Massive Data Institute & Center for Privacy and Technology, Georgetown University</p>
        <div class="spacer" />
        <h2>Posters & Talks</h2>
        <ul>
          <li>
            <i>Auditing Probabilistic Genotyping Software used in Forensic DNA Analysis</i>
            <ul><li>Poster presentation, MDI Research Showcase, May 2024</li></ul>
          </li>
          <div class="spacer" />
          <li>
            <i>The Technology behind Forensic Analysis</i>
            <ul><li>Talk, Fritz Fellowship Conference, April 2024</li></ul>
          </li>
          <div class="spacer" />
          <li>
            <i>Risk Mapping in Forensic DNA Analysis</i>
            <ul><li>Poster presentation, MDI Research Showcase, December 2023</li></ul>
          </li>
        </ul> -->
      </div>



      <!--  PROJECTS  -->
      <div class="row section" id="projects">
        <h1 id='research-title'>Projects</h1>
        <div class="spacer" />
        <ul>
          <li>
            <a>DataAccess</a>
            <ul><li>PostgreSQL data mart & <a href="https://www.mage.ai/">Mage</a> ETL pipelines centralizing point-of-sale data for <a href="https://www.thecorp.org/">The Corp</a></li></ul>
          </li>
          <div class="spacer" />
          <li>
            <a href="https://github.com/julianonn/dc-parking-tickets">dc-parking-tickets</a>
            <ul><li>Geospatial preprocessing, EDA, & visualization of DC parking violations</li></ul>
          </li>
          <div class="spacer" />
          <li>
            <a href="https://github.com/julianonn/NewTimeClockConverter">NewTimeClockConverter</a>
            <ul><li>Python/tkinter application that parses, reformats, & analyzes payroll files for <a href="https://www.thecorp.org/">The Corp</a></li></ul>
          </li>
          <div class="spacer" />
          <!--<li>
            <a href="https://github.com/julianonn/lexiconundrum">lexiconundrum</a>
            <ul><li>Very silly Flask REST API that retrieves absurdly long words & definitions from the Oxford English Dictionary</li></ul>
          </li>
          <div class="spacer" />
          <li>
            <a href="https://codepen.io/julianonn/pen/BavXJbE?editors=1111">Simple marquee menu</a>
          </li>-->
        </ul>
      </div>

    </div>


    <footer>
      <p class="footer-text">
        <!--copyright--> &copy; 2024 Julia Nonnenkamp
        &Tab;
        |
        &Tab;
        site src code on <a href="https://github.com/julianonn/julianonn.github.io">github</a>
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