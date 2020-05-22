import React from 'react';
import Dating from './images/dating.png';
import DIY from './images/diy.png';
import Fashion from './images/fashion.png';
import Handle from './images/handle.png';
import Back from './images/backup.png';
export class Landing extends React.Component {
  render() {
    return (

      <div className="landing">

        <div class="dresser-top">
          <h2>
            Welcome to the portfolio of Sarah Kaiser
            <hr></hr>
            <hr></hr>
          </h2>
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
      </div>

    )
  }
} export default Landing