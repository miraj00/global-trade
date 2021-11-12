import React from 'react';
// import ClassTeam from '../assets/images/Class-Team.JPG';
import '../style.css';

function About() {
    return (
    
        <React.Fragment>

   <div className="container" >
      <div className="row">
         <div className="col-9">
              <div className='info-text'> Little Information About Us </div>
         </div>
      </div>  
      <br></br>
    
        <div className='row'>
                              
                <p> Global-Trade LLC was established in 2021. Students from bootcamp ( as in picture below ) were put together to work on a project. 
                    While working together they realized that the Information they have learned in this project is a well supporting to move their career in Web Development Business.
                    With all that had work they had put in bootcamp and with a hope to achieve something on their own in the future, they decided to open their IT company.
                    After bootcamp completed, they all took few months of break and collected Information on establishing an LLC and doing new business start-up.
                </p>
                <p>
                  Since then all of the team looked into expanding their resources and coming up with their best to make company efficient and profitable.
                </p>
   
                {/* <div> <img className='company' src={ClassTeam} /> </div> */}

       </div>
    </div>   

    </React.Fragment>

        )
    }   

export default About;