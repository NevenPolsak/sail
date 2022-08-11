import React from 'react'
import "./Search.css"
import Gold from "../../img/gold.png"

function Search() {
  return (
    <div name='book' className='search'>
      <div className="container">
        <div className="left">
            <h2>LUXURY VACATIONS</h2>
            <div className="search-col-2">
                <div className="box">
                    <div>
                        <img src={Gold} alt="/" style={{height:"200px"}}/>
                    </div>
                    <div>
                        <h3>LEADING COMPANY</h3>
                        <p>IN TRAVEL AND EXPLORING</p>
                       
                    </div>
                </div>
            </div>
        </div>
        <div className="right">
            <div className="promo">
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
            </div>
            <form>
            <div className="input-wrap">
                            <label>Destination</label>
                            <select>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                                <option value="1">undisclosed locations</option>
                            </select>
                        </div>
                        <div className="date">
                            <div className="input-wrap">
                                <label>Check-In</label>
                                <input type="date" />
                            </div>
                            <div className="input-wrap">
                                <label>Check-Out</label>
                                <input type="date" />
                            </div>
                        </div>
                        <button>Rates & Availabilities </button>
            </form>
        </div>
      </div>
    </div>
  )
}

export default Search
