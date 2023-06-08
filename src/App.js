import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div >
      <header className="shadow" >
        <div className="container-fuild ">
          <h3 class="">Company name</h3>
      <ul class="nav justify-content-center start-60 " >
  <li class="nav-item">
    <a class="nav-link text-dark  "  href="#">Features</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Enterprise</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Support</a>
  </li>
  <li class="nav-item">
    <a class="nav-link text-dark" href="#">Pricing</a>
  </li>

<li class="nav-item  rang">
    <a class="nav-link text-primary border border-primary " href="#">Sign up</a>
  </li>
</ul>

</div>
      </header>
      
      <section className='sectiionBody' >
        <div className='sarlavha'>
          <h1>Pricing</h1>

          <p>Quickly build an effective pricing table for your potential customers with this Bootstrap example. It's built with default Bootstrap components and utilities with little customization.</p>

        </div>

        <div class="row "> 
        
           <div class="col-3 card border-dark mb-3 max-width: 18rem;">
           <div class="card-header">Free</div>
            <div class="card-body text-dark">
           <h5 class="card-title">$0 / mo</h5>
           <p class="card-text "> 10 users included
                                2 GB of storage
                                Email support
                                 Help center access
                                 
            </p>

            <div class="rang"> <a class="nav-link text-primary border border-primary " href="#">Sign up</a></div>
           </div>
            </div>



            <div class="col-3 card border-dark mb-3 max-width: 18rem;">
           <div class="card-header">Pro</div>
            <div class="card-body text-dark">
           <h5 class="card-title">$15/ mo</h5>
           <p class="card-text "> 10 users included
                                2 GB of storage
                                Email support
                                 Help center access
                                 
            </p>

            <div class="rang"> <a class="nav-link text-light bg-primary border border-primary  " href="#">Sign up</a></div>
           </div>
            </div>



            <div class="col-3 card border-dark mb-3 max-width: 18rem;">
           <div class="card-header">Enterprise</div>
            <div class="card-body text-dark">
           <h5 class="card-title">$29 / mo</h5>
           <p class="card-text "> 10 users included
                                2 GB of storage
                                Email support
                                 Help center access
                                 
            </p>

            <div class="rang"> <a class="nav-link text-light bg-primary border border-primary  "href="#">Sign up</a></div>
           </div>
            </div>

            
       </div>
       

      </section>
      <hr />

      
      <footer class="pt-4 my-md-5 pt-md-5 ">
        <div class="row">
          <div class="col-12 col-md">
            
            <small class="d-block mb-3 text-muted">© 2017-2018</small>
          </div>
          <div class="col-6 col-md">
            <h5>Features</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Cool stuff</a></li>
              <li><a class="text-muted" href="#">Random feature</a></li>
              <li><a class="text-muted" href="#">Team feature</a></li>
              <li><a class="text-muted" href="#">Stuff for developers</a></li>
              <li><a class="text-muted" href="#">Another one</a></li>
              <li><a class="text-muted" href="#">Last time</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>Resources</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Resource</a></li>
              <li><a class="text-muted" href="#">Resource name</a></li>
              <li><a class="text-muted" href="#">Another resource</a></li>
              <li><a class="text-muted" href="#">Final resource</a></li>
            </ul>
          </div>
          <div class="col-6 col-md">
            <h5>About</h5>
            <ul class="list-unstyled text-small">
              <li><a class="text-muted" href="#">Team</a></li>
              <li><a class="text-muted" href="#">Locations</a></li>
              <li><a class="text-muted" href="#">Privacy</a></li>
              <li><a class="text-muted" href="#">Terms</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
