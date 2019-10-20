import React, { Component } from 'react';
import axios from 'axios';

class LatestPhotos extends Component {
    constructor(props) {
        super(props)
        this.state = {
            photoStore: [],
            currentPage: 2,
            searchQuery: "",
            search: false
        }
    }
    // data fetching
    componentDidMount() {
        const ACCESS_KEY = '8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6';
        const PER_PAGE = 16;
        axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=${PER_PAGE}`).then(res => this.setState({
            photoStore: res.data
        }))
    }

    // Pagination
    loadMoreButton = (e) => {
        const ACCESS_KEY = '8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6';
        const CURRENT_PAGE = this.state.currentPage;
        const PER_PAGE = 16;
        axios.get(`https://api.unsplash.com/photos/?client_id=${ACCESS_KEY}&per_page=${PER_PAGE}&page=${CURRENT_PAGE}`).then(res => this.setState({
            photoStore: res.data
        }))
        this.setState({
            currentPage: this.state.currentPage + 1
        })
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        })
        e.preventDefault();
    }
    // Search
    searchQueryHandler = (e) => {
        this.setState({
            searchQuery: e.target.value
        })
    }

    searchSubmit = (e) => {
        const ACCESS_KEY = '8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6';
        const PER_PAGE = 16;
        const SEARCH_QUERY = this.state.searchQuery;
        axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${SEARCH_QUERY}&per_page=${PER_PAGE}`)
            .then(res => this.setState({
                photoStore: res.data.results
            }))
        this.setState({
            search: true
        })
          e.preventDefault();
         
    }

    searchNextPage = (e) => {
        const ACCESS_KEY = '8551439ada983d53b1f7de4200e573ff5e0832d894e2ee1c5b9780050ba1afc6';
        const PER_PAGE = 16;
        const SEARCH_QUERY = this.state.searchQuery;
        const CURRENT_PAGE = this.state.currentPage;
        axios.get(`https://api.unsplash.com/search/photos/?client_id=${ACCESS_KEY}&query=${SEARCH_QUERY}&per_page=${PER_PAGE}&page=${CURRENT_PAGE}`)
        .then(res => this.setState({
        	photoStore:res.data.results
        }))
        this.setState({
        	search:true,
        	currentPage:this.state.currentPage+1
        })
        window.scrollTo({
            top: 150,
            behavior: 'smooth'
        })
      
    }
    render() {
        const { photoStore,search } = this.state;
        var loadItem ='';
        
        if (search === true) {
        	loadItem = <button onClick={this.searchNextPage}>Load More {this.state.currentPage}</button>
        }else{
        	 loadItem = <button onClick={this.loadMoreButton}>Load More {this.state.currentPage}</button>
        }
        console.log(photoStore);
        return (
            <section className="main-content">
				<div className="container">
					<div className="row">
						<div className="col-md-6">
							<h2>Latest Photos</h2>
						</div>
						<div className="col-md-6 text-right">
							<form onSubmit={this.searchSubmit}>
								<input type="text" onChange={this.searchQueryHandler} name="search" id=""/>
								<input type="submit" value="Search"/>
							</form>
						</div>
					</div>
					<div className="row">
						{
							photoStore.map((singlePhotoBox,i) => (
								<div className="col-lg-3 col-md-4 col-sm-6" key={i}>
									<a href={"/photo?id="+singlePhotoBox.id}>
										<div className="single-photo">
											<div className="photo-thum">
												<img src={singlePhotoBox.urls.small} alt={singlePhotoBox.alt_description}/>
											</div>
											<div className="photo-info">
												<h4>{singlePhotoBox.alt_description ? singlePhotoBox.alt_description :singlePhotoBox.created_at}</h4>
												<p>by - {singlePhotoBox.user.first_name} {singlePhotoBox.user.last_name}</p>
											</div>
										</div>
									</a>
								</div>
							))
						}
					</div>
					<div className="row">
						<div className="col-md-12 text-center">
							{loadItem}
						</div>
					</div>
				</div>
			</section>
        )
    }
}
export default LatestPhotos;