import React ,{useState} from 'react'
import {FaSearch} from 'react-icons/fa';
import './search.css';
function Search() {
	const [hide , setHide] = useState(false);
	const [hide1 , setHide1] = useState(false);
  return (
	<form>
	<div className='updatecontainer'>
	  <label name='idsearch'>Search element to be updated : </label>
	  <FaSearch  name='idsearch' style={{fontSize: "24px" ,marginLeft: "20px" }} /> 
	  <input type={"text"} className= "txtinp" name='idsearch' placeholder= "Search by id" onChange={(e) => setHide1(true)}></input><br /><br />
	  <input type={"button"} className="btn btn-dark expand-el" id='srchbtn' value={"Search"} onClick={(e) => setHide(true)}></input>
	  <br/><br />
	  <div className='table-responsive-sm' id='tbleupd'>
		{hide && hide1? <table className='table table-striped table-dark table-hover'>
			<thead>
				<tr><th>Id</th>
				<th>Family</th>
				<th>Category</th>
				<th>Warranty</th></tr>
				</thead>
				<br />
				<tbody>
					<tr><th>12wqfg23</th>
					<th>Furniture</th>
					<th>Chair</th>
					<th>next month</th></tr>
					<tr><th>12wqfg24</th>
					<th>Furniture</th>
					<th>Table</th>
					<th>next month</th></tr>
				</tbody>
		</table>: null}
	  </div>
	</div>
	</form>
  )
}

export default Search;
