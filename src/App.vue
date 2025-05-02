<script setup lang="ts">
import Navbar from './components/Navbar.vue';

</script>


<template>

   <!---<Navbar /> --->

    <div class="container-fluid d-flex justify-content-center">
      
      <div class="row" id="julia">
        
        <!-- <div class="col-12 col-md-4 col-lg-3 order-1 order-md-1 d-flex align-items-start justify-content-center pt-5" > -->
        <div class="col-12 col-lg-3 col-xl-4 order-1 order-lg-1 d-flex align-items-start justify-content-center" id="julia-sketch">
          <img src="./assets/me clear sq.png" alt="Pencil sketch drawing of me" class="img-fluid">
        </div>
        
        <div class="col-12 col-md order-2 order-md-2" id="julia-text">
          <div class="row" id="julia-text-title">
            <h1 id="julia-text-title">Julia Nonnenkamp</h1>
          </div>
          <div class="spacer-20" />
          <div class="row" id="julia-text-body">
            <p class="text-start">
              I'm a 1st year research MS <small><em>(and maybe PhD?)</em></small> student in computer science at the University of Wisconsin-Madison 
              <a href="https://madsp.cs.wisc.edu/" target="_blank">Security & Privacy Research Group</a> working with 
              <a href="https://pages.cs.wisc.edu/~chatterjee/" target="_blank">Dr. Rahul Chatterjee</a>. 

              I'm interested in software security for everyday people, mitigations for tech-facilitated abuse &amp; harrassment, and the commercial landscape of surveillance technology.
              I volunteer at the <a href="https://techclinic.cs.wisc.edu/" target="_blank">Madison Tech Clinic</a> where we provide trauma-informed, cybersecurity assistance to survivors of 
              intimate partner violence (IPV) around Wisconsin.
              
            </p>
            <p class="text-start">
              In May 2024, I finished my bachelor's in math and computer science at Georgetown University, where I became a tech policy wonk by osmosis. I was a 
              <a href="https://techandsociety.georgetown.edu/projects/fritz-family-fellows-program/" target="_blank">Fritz Fellow</a> 
              with GU's 
              <a href="https://techandsociety.georgetown.edu/">Tech & Society Initiative</a>, 
              and I worked with the
              <a href="https://mdi.georgetown.edu/" target="_blank">Massive Data Institute</a> 
              and the 
              <a href="https://www.law.georgetown.edu/privacy-technology-center/" target="_blank">Center on Privacy &amp; Technology</a> (Georgetown Law) auditing forensic DNA analysis software systems.
              I interned at the United States Office of Management and Budget (OMB) where I learned an <em>enormous</em> amount about how make government and its digital systems work better for the people we serve.
            </p>
            <!--<p class="text-start"><b>Currently dabbling in:</b> dynamic instrumentation</p>
            <p class="text-start"><b>ISO:</b> solo hobbies for the long Wisconsin winter</p>-->

          </div> <!-- end row -->
          <div class="spacer-40" />

          <div class="row">
            <div id="ongoing-projects">
              <p class="text-start"><b><em>Ongoing Projects</em></b></p>
              <ul class="custom">
                <li class="disco">Developing protocols for employing data downloads (i.e., <a href="https://takeout.google.com/" target="_blank">Google Takeout</a>) in tech clinic settings</li>
                <li class="disco">Collaborating on a new project understanding how adults with intellectual and developemental disabilities navigate security notifications and warnings</li>
                <li class="disco">Dabbling in mobile dynamic instrumentation &amp; reverse engineering</li>
              </ul>
            </div>
          </div>

          <div class="spacer-40" />

          <div class="row w-100">
            <div class="contact-links">
                  <a href="https://github.com/julianonn" target="_blank">github</a>
                  <!-- <div class="tab-surround">|</div> -->
                  <div class="px-2">|</div>
                  <a href="https://www.linkedin.com/in/jsnonnenkamp/" target="_blank">linkedin</a>
                  <div class="px-2">|</div>
                  [my last name]@wisc.edu
                  <!-- CV when i get my act together -->
            </div>
          </div>  

        </div>
      
      </div>

    



    </div>


    <footer>

      <div class="spacer-40" />
      <p class="footer-text">
        <!--copyright--> &copy; 2025 Julia Nonnenkamp  <em>(she/her/hers)</em>
      </p>
    </footer>


</template>





<style scoped>

  /*div {
    border: 1px solid black;
  }*/
  .container-fluid {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }

.row.flex-grow-1 {
  flex-grow: 1;
}

  /* #julia {
    height: auto; 
    margin-bottom: 5vh;
  } */

  #julia-sketch img {
    width: 90%;
  }
  @media (max-width: 992px) {
    #julia-sketch img {
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

  @media (min-width: 992px) {
    #julia-text {
      margin-left: 10px;
    }
  }

  @media (max-width: 992px) {
    #julia-text {
      text-align: center;
      align-items: center;
    }
  }

  #what-im-up-to {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap; /* Allow items to wrap to the next line */
  }
  #what-im-up-to ul {
    text-align: left;
  }

  /* .contact-links {
    display: flex;
    justify-content: flex-end;
    align-items: flex-end;
  }

  @media (max-width: 768px) {
    .contact-links {
      text-align: center;
      justify-content: center;
      align-items: center;
    }
  } */

  .contact-links {
    font-size: calc(100% - 2px);
    display: flex;
    justify-content: center;
    /* align-items: flex-end; */
  }
</style>