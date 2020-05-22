import React from 'react';
import Handle from './images/handle.png';
import Back from './images/backup.png';
import Mail from './images/envelope.jpg';
import Lamp from './images/lamp.png';
import Top from './images/top.jpg';
import Rug from './images/rug.png';
export class Landing extends React.Component {
  render() {
    return (
      <html>
      <div className="landing">

        <div class="dresser-top">
        <img class="top" src={Top}></img>
          <img class="lamp" src={Lamp}></img>
          <img class="mail" src={Mail}></img>
  
        </div>

        <div class="container">
          <div class="dropdown" >

            <div class="row">
              <div class="col">
                <div class="drawer-1">
                  <button class="btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img class="handle" src={Handle}></img>
                  </button>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <img className="d-block w-100" src={Back}></img>
                  </div>
                </div>
              </div>

              <div class="col">
                <div class="drawer-2">
                  <button class="btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img class="handle" src={Handle}></img>
                  </button>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <img className="d-block w-100" src={Back}></img>
                  </div>
                </div>
              </div>
              <div class="col">
                <div class="drawer-3">
                  <button class="btn"
                    type="button"
                    id="dropdownMenuButton"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false">
                    <img class="handle" src={Handle}></img>
                  </button>

                  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <img className="d-block w-100" src={Back}></img>
                  </div>
                </div>

              </div>
            </div>

          </div>


        </div>

        <h2>Welcome to Sarah Kaiser's portfolio</h2>
        <img class='rug' src={Rug}></img>
      </div>
      </html>
    )
  }
} export default Landing