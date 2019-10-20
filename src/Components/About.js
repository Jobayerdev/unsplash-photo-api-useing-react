import React, { Component } from 'react';

class About extends Component {
    render() {
        return (

		    <section id="about" class="container content-section text-center py-5">
		       <div className="container">
		        <div class="row">
		            <div class="col-md-6 offset-md-3 text-center">
		                <h2 className="display-5">About Grayscale</h2>
		                <p>Grayscale is a free Bootstrap 3 theme created by Start Bootstrap. It can be yours right now, simply download the template on <a href="/">the preview page</a>. The theme is open source, and you can use it for any purpose, personal or commercial.</p>
		                <p>This theme features stock photos by <a href="/">Gratisography</a> along with a custom Google Maps skin courtesy of <a href="/">Snazzy Maps</a>.</p>
		                <p>Grayscale includes full HTML, CSS, and custom JavaScript files along with LESS files for easy customization.</p>
		            </div>
		        </div>
		       </div>
		    </section>
        );
    }
}
export default About;