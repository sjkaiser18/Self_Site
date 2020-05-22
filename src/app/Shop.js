import React from 'react';
export class Shop extends React.Component{
    state={
      name:'Town of Salem',
      image:'',
      description:'Spend a spooky night in the forest of the historic witch trials',
      price:0,
      inCart:[],
    }
  
  render(){
        return(
            
                <div className="shop">
                  <h2>Shop</h2>
                  <div className="card">
                      {
                        this.state.name

                      }
                  
                  <div>
                    {this.state.description}
                  </div>
                  </div>
                </div>
              
        )
    }
}export default Shop