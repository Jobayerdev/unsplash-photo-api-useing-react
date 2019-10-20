import React, { Component } from 'react';

 class Header extends Component {
	render() {
		return (
			<header>
				<div className="container">
					<div className="row">
						<div className="col-md-6"><h1>PhotoShowCase</h1></div>
						<div className="col-md-6 text-right">
							<ul>
								<li><a href="/">Home</a></li>
								<li><a href="/">About</a></li>
								<li><a href="/">Disclaimer</a></li>
								<li><a href="/">credits</a></li>
							</ul>
						</div>
					</div>
				</div>
			</header>
		)
	}
}
export default Header;