import  '../../css/studentpanel/index.css'
import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import {FaKey,FaLock,FaAlignJustify, FaTachometerAlt,FaUserCircle,FaPenSquare,FaRegCalendarAlt,FaRegQuestionCircle,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';
import Logo from '../../images/logo.jpg'


function Studentdashboard(){

  const [isRegistrationOpen, setIsRegistrationOpen] = useState(false);
  const [isResultsOpen, setIsResultsOpen] = useState(false);
  const [isAccomodationOpen,setIsAccomodationOpen] = useState(false)
  const [isHelpOpen,setIsHelpOpen] = useState(false)

  const toggleRegistrationMenu = () => {
    setIsRegistrationOpen(!isRegistrationOpen);
  };

  const toggleResultsMenu = () => {
    setIsResultsOpen(!isResultsOpen);
  };

  const toggleAccomodationMenu = () => {
    setIsAccomodationOpen(!isAccomodationOpen)
  }

  const toggleHelpMenu = () => {
    setIsHelpOpen(!isHelpOpen)
  }

  return (
    <div className='studentpanel'>
      <div className='studentpaneldivsflex'>
        <div className='leftdiv'>
          <div className='header'>
            <span><FaUserCircle></FaUserCircle></span>
            <h1>lonely chisale</h1>
          </div>
          <div className='menu'>
            <div>
              <ul>
                <li className='dashboardlist'><span><FaTachometerAlt></FaTachometerAlt></span>dashboard</li>
                <li onClick={toggleRegistrationMenu}><span><FaPenSquare></FaPenSquare></span>registration</li>
                   {isRegistrationOpen &&(
                  <ul className='dropdownmenu'>
                    <li>register</li>
                    <li> status</li>
                  </ul>
                )}
              <li><span><FaCoins></FaCoins></span>financials</li>
              <li onClick={toggleResultsMenu}><span><FaRegFolder></FaRegFolder></span>results</li>
              { isResultsOpen &&(
                <ul className='dropdownmenu'>
                <li>overal results</li>
                <li>sup courses</li>
                </ul>
              )}
              <li onClick={toggleAccomodationMenu}><span><FaWarehouse></FaWarehouse></span>accomodation</li>
              {isAccomodationOpen &&(
                <ul className='dropdownmenu'>
                  <li>book room</li>
                  <li>allocation</li>
                </ul>
              )}
              <li><span><FaRegFileAlt></FaRegFileAlt></span>e-resources</li>
              <li><span><FaKey></FaKey></span>security</li>
              <li><span><FaRegCalendarAlt></FaRegCalendarAlt></span>events</li>
              <li onClick={toggleHelpMenu}><span><FaRegQuestionCircle></FaRegQuestionCircle></span>help</li>
              {isHelpOpen &&(
                <ul className='dropdownmenu'>
                  <li>manual</li>
                  <li>send query</li>
                </ul>
              )}
              <li><span><FaLock></FaLock></span>logout</li>
              </ul>
            </div>
          </div>
        </div>
        <div className='rightdiv'>
          <div className='rightdivheader'>
            <div className='flexingrightdivheader'>
              <div className='menucontroller'>
                <span><FaAlignJustify></FaAlignJustify></span>
              </div>
              <div className='rightdivheadertopic'>
                <h1>ECOHS  portal</h1>
              </div>
            </div>
          </div>
         
         <div className='content'>
          <div className='justifycontent'>
            <h1 style={{borderBottom:'1px solid gray',textTransform:'capitalize',padding:'5px'}}>dashboard</h1>
            <div className='rowone'>
              <div className='userinfo'>
                <div className='card'>
                  <div className='card-header'>
                    <h1>my profile</h1>
                  </div>
                  <div className='card-body'>
                    <table>
                      <tr>
                        <td>name</td>
                        <td>lonely chisale</td>
                      </tr>
                      <tr>
                        <td>age</td>
                        <td>25</td>
                      </tr>
                      <tr>
                        <td>gender</td>
                        <td>female</td>
                      </tr>
                      <tr>
                        <td>district</td>
                        <td>mzimba</td>
                      </tr>
                      <tr>
                        <td>program of study</td>
                        <td>CIS</td>
                      </tr>
                      <tr>
                        <td>year of study</td>
                        <td>3 year</td>
                      </tr>
                      <tr>
                        <td>name</td>
                        <td>lonely chisale</td>
                      </tr>
                      <tr>
                        <td>year of admission</td>
                        <td>2018</td>
                      </tr>
                     
                       
                    </table>
                  </div>
                  <div className='card-footer'></div>
                </div>
              </div>
              <div className='regstatus'>
                <div className='card'>
                  <h3>registration status</h3>
                  <i>your are registered</i>
                </div>
                <div className='card'>
                  <h3>financials</h3>
                  <i>2000000</i>
                </div>
              </div>
            </div>

            <div className='iframes' >

              <div className='iframe registration'>
                <iframe src='/registration'></iframe>
              </div>

              <div className='iframe results overall'>
                <div className='card'>
                  <div className='card-header'>
                    <h1>my results</h1>
                  </div>
                  <div className='card-body'>
                    <div className='link'>
                      <i>2018 first semester results</i>
                    </div>
                 
                  <iframe src='/results'></iframe>
                  </div>
                </div>
                
              </div>

              <div className='iframe results sup'>
                <div className='card'>
                  <div className='card-header'>
                    <h1>sup results</h1>
                  </div>
                  <div className='card-body'>
                  <div className='link'>
                      <i>2018 first semester sup courses</i>
                    </div>
                  <iframe src='/supcoarses'></iframe>
                  </div>
                </div>
                
              </div>

              <div className='iframe accomodation book'>
                <iframe src='/accomodationregistration'></iframe>
              </div>

              <div className='iframe accomodation allocation'>
                <iframe src='/accomodationallocation'></iframe>
              </div>

              <div className='iframe documents'>
                <iframe src='/documents'></iframe>
              </div>
              
              <div className='iframe events'>
                <iframe src='/calenderevents'></iframe>
              </div>

              <div className='iframe help contact'>
                <iframe src='/contacthelp'></iframe>
              </div>

            </div>
            
          </div>
          
         </div>
        
         
        </div>
        
       
      </div>
     

    </div>
  );
}

export default Studentdashboard;