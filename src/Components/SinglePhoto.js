import React, { Component } from 'react';
import axios from 'axios'

 class SinglePhoto extends Component {
 	constructor(props){
 		super(props)
 		this.state ={
 			SinglePhotoStore:[]
 		}
 	}
 	componentDidMount() {
 		let search = window.location.search;
 		let params = new URLSearchParams(search);
 		let GetID = params.get('id');
 		
 		axios.get(`https://api.unsplash.com/photos/${GetID}/?client_id=8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6&id=t4ViEFC9yKc`)
 		.then(res =>  this.setState({
 			SinglePhotoStore:res.data
 		}))
 	}
	render() {
		const { SinglePhotoStore } = this.state
		console.log(SinglePhotoStore);
		
		return (
			<section className="single-photo-wrapper">
				<div className="container">
					<div className="row">
						<div className="col-md-12">
							<div className="photo">
								<div className="large-thumbnail">
									<img src={SinglePhotoStore.urls && SinglePhotoStore.urls.full} alt=""/>
								</div>
								<div className="large-thumbnail-info">
									<ul>
										<li>Uploaded by- {SinglePhotoStore.user && SinglePhotoStore.user.first_name} 
										{SinglePhotoStore.user && SinglePhotoStore.user.last_name}</li>
										<li>Upload date {SinglePhotoStore.created_at}</li>
										<li>Camera model {SinglePhotoStore.exif && SinglePhotoStore.exif.model}</li>
									</ul>
									<a href={SinglePhotoStore.links && SinglePhotoStore.links.download} target="_blank">Download</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		)
	}
}
export default SinglePhoto;