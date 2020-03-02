import React from 'react';
import './index.css';

function App() {
  return (
    <header className="page-header">
      <h1>Sally Student Resume</h1>
  </header>
  <main>
     <section>
        <h2>Education</h2>
        <ul>
          <li><b>North Carolina State University</b></li>
          <p>August 2014-May 2018</p>
          <p>BS Polymer and Color Chemistry</p>
        </ul>
        </h2>
     </section>
     <section>
       <h2>Employment History</h2>
         <ul>
          <li><b>Chiesi USA</b>
            <p>Quality Assurance Representative</p>
            <p>May 2017-Present</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
          </li>      
            <li><b>Applebee's</b>
            <p>Waitress</p>
            <p>October 2013-April 2017</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae veritatis sed laborum, accusantium ut dolore asperiores ea enim, hic fuga corporis? Id cupiditate, voluptatibus veniam doloribus consectetur quia! Quae, eveniet?</p>
          </li>  
      </section> 
      <section>
        <h2>Contact Info</h2>
        <p align="center"><b>Sally Student</b></p>
        <p align="center">
          <img src="sally-student.jpg" alt="Sally Student Individual Picture" width="100" height="150"
        </p>
        <address>
          <ul>
            <li><a href="mailto:sstudent@gmail.com">Sally Student Email</a>
            <li>9999999999</li>
        </address>
    </section>
  </main>
  );
}

export default App;
