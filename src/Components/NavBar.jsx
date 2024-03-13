import {useState } from 'react'
import logo from '../assets/name-logo.png';

const NavBar = () => {
	const [searchInput, setsSearchInput] = useState('');
	const handleChange = (e) => 
	{
		const {value} = e.target;
		setsSearchInput(value);
	}
	const searchQuery = (e) =>
	{
		e.preventDefault();// prevents the page from auto reload on submit
		console.log(searchInput);// prints the input given in search bar on console 
	}

	return (
		<nav className="navbar">
			<img src={`${logo}`} alt="" /> {/*Logo SkillTube */}
			<form className='searchBar' onSubmit={searchQuery}>
				<input type="text" id='searchUserInput' value={searchInput} onChange={handleChange} placeholder='Search' /> {/* Here the user gives the input to search the video*/}
				<button className='submitBtn' type='submit' id='searchBtn'>
					<i className="uil uil-search"></i>{/*Button to search the given input*/}
				</button>
			</form>
			<div className="rightMenu">
				<li className="item3">LOGIN</li>
			</div>
		</nav>
	)
}

export default NavBar
