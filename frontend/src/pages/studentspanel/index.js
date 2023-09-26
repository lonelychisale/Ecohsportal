import  '../../css/studentpanel/index.css'
import { Link } from 'react-router-dom';
import SecurityAlert from './componets/securityalert';
import React, { useState } from 'react';
import {FaKey,FaLock,FaAlignJustify, FaTachometerAlt,FaUserCircle,FaPenSquare,FaRegCalendarAlt,FaRegQuestionCircle,FaRegFolder,FaRegFileAlt,FaWarehouse,FaCoins,FaCaretDown,FaBell, FaAdjust} from 'react-icons/fa';
import Logo from '../../images/profile.jpg'


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

  //showing iframes once the menu is clicked
  

  return (
    <div className='studentpanel'>
      <div className='header'>
        <div className='headercontents'>
          <div className='title'>
            <h1>ecohs student portal</h1>
          </div>

          <div className='searchform'>
            <form>
              <div className='formgroup'>
                <input type='sebmit' value='search here'></input>
              </div>
            </form>
          </div>

          <div className='userprofile'>
            <div className='notification'><FaBell></FaBell></div>
            <div className='profile'>
              <div className='info'>
                <img src={Logo}></img>
                <div className='details'>
                  <h4>lonely chisale <br></br> cis/003/18</h4>
                  <h4></h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='content'>
        <div className='menu'>
          <ul>
            <li>dashboard</li>
            <li>registration</li>
            <li>finances</li>
            <li>results</li>
            <li>accomodation</li>
            <li>documents</li>
            <li>events</li>
            <li>help</li>
            <li>logout</li>
          </ul>
        </div>
        <div className='maincontainer'>
          <div className='maincontainercontent'>
            <div className='upperdivs'>
              <div className='financestatistics'>finances <br></br><i>200000</i></div>
              <div className='registrationstatus'>registration status <br></br><i>registered</i></div>
              <div className='documentsstatistics'>documents <br></br><i>20</i></div>
            </div>

            <div className='middiv'>
              <div className='userprofileinfo'>
                <table>
                  <tr>
                   
                    <th colSpan={2} style={{color:"#075794"}}>my profile</th>
                    
                  </tr>
                  <tr>
                    <th>full name</th>
                    <td>lonely chisale</td>
                    
                  </tr>
                    <tr>
                    <th>registration number</th>
                    <td>cis /003 /18</td>
                    </tr>
                    <tr><th>program of study</th>
                    <td>cis</td>
                    </tr>
                  
                    <tr><th>year of study</th>
                    <td>3</td>
                    </tr>

                    <tr><th>year of admission</th>
                    <td>2018</td>
                    </tr>

                </table>  
              </div>
              <div className='results'>
                <div className='card'>
                  <h1>my results</h1>
                  <div className='cardbody'>
                    <i>view my results</i>
                  </div>
                </div>
              </div>

            </div>

            <div className='accomationallocation'>
              <table cellSpacing={0}>
                <tr>
                  <th colSpan={3}>room allocation</th>
                </tr>
                <tr>
                  <th>full name</th>
                  <th>hostel name</th>
                  <th>room number</th>
                </tr>
                <tr>
                  <td>lonely chisale</td>
                  <td>hall 7</td>
                  <td>33  </td>
                </tr>
              </table>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}

export default Studentdashboard;