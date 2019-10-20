import React, { Component } from 'react';

 class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-6"><a href="/"><h1>PhotoShowCase</h1></a></div>
						<div className="col-md-6 text-right">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/About">About</a></li>
								<li><a href="/Disclaimer">Disclaimer</a></li>
								<li><a href="/credits">credits</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}
export default Header;