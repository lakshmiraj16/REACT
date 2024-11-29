  
function Home(){
    return (
        <div>
            
            <p>Welcome to our website!</p>
            <div id="carouselExample" className="carousel slide">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://media.gettyimages.com/id/184946701/photo/pizza.jpg?s=612x612&w=gi&k=20&c=4iMEO-I-_0tSb7f35CMFWN4N3Xdqf99sadSJyD-4dZk=" className="d-block w-100"  height="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://t3.ftcdn.net/jpg/01/74/36/70/240_F_174367045_6hyh7c8Mkju5Qn1O7mLQqmtfChQMdxZa.jpg" className="d-block w-100" height="500" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://as2.ftcdn.net/v2/jpg/02/20/63/99/1000_F_220639944_GIG2wbAIjMiO1smcPJhzhKrpTNbaKDNQ.jpg" className="d-block w-100" height="500" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExample" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExample" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
        </div>
    );
}
export default Home;
