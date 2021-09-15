function ProjectCard({website}) {

  const backgroundHandler = (image) => {
    let style;
    image? 
    style={backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${image})`}
    :
    style={background: 'linear-gradient(180deg, hsla(245, 100%, 15%, 1) 10%, hsla(203, 61%, 45%, 1) 20%, hsla(164, 73%, 57%, 1) 30%, hsla(37, 68%, 85%, 1) 80%, hsla(356, 71%, 73%, 1) 100%)'}
    return style;
  }

  return (
    <div className="card-category" style={backgroundHandler(website.img)}>
                 <div className="carousel-card-infos">
                   <div>
                      <h2 className="title text__bright">{website.name}</h2>
                     <p className="text text__bright">{website.description}</p>
                   </div>
                     <a href={website.githubLink} className=""  target="_blank">
                       <i className="carousel-card-logo fab fa-github"></i>
                     </a>
                 {website.demo?
                        <a href={website.demo} className=""  target="_blank">
                          <i className="carousel-card-logo fab fa-youtube"></i>
                        </a>
                    :''}
                    {website.pageLink?
                        <a href={website.pageLink} className="" target="_blank">               
                          <i className="carousel-card-logo fas fa-paperclip"></i>
                        </a>
                    :''}
                  </div>
    </div>
    );
  }
  
  export default ProjectCard;
  
  //  <div key={website.id} className="carousel-card" >
  //             <div className="carousel-card-wrapper">
  //                 <img className="carousel-card__img"src={website.img} />
  //                 <div className="carousel-card-infos">
  //                   <div>
  //                     <h2 className="title text__bright">{website.name}</h2>
  //                     <p className="text text__bright">{website.description}</p>
  //                   </div>
  //                   <i class="carousel-card-logo fab fa-github">
  //                     <a href={website.githubLink} className=""  target="_blank"></a>
  //                   </i>
  //                   {website.demo?
  //                   <i class="carousel-card-logo fab fa-youtube">
  //                       <a href={website.demo} className=""  target="_blank"></a>
  //                   </i>
  //                   :''}
  //                   {website.pageLink?
  //                   <i class="carousel-card-logo fas fa-paperclip">
  //                       <a href={website.pageLink} className="" target="_blank">               
  //                   </a>
  //                   </i>
  //                   :''}
  //                 </div>
  //               </div>
  //           </div>

  //V1 of slick:
  // <div className="carousel-card">
  //   <div className="carousel-card-wrapper">
  //   <img className="carousel-card__img"src={website.img} alt={website.name}></img>
  //     <h3 className="title text__dark">{website.name}</h3>
  //   {/* <div className="carousel-card-infos"> */}
  //     <p className="text text__dark">{website.description}</p>
  //     <i class="carousel-card-logo fab fa-github">
  //     <a href={website.githubLink} className=""  target="_blank"></a>
  //       </i>
  //       {website.demo?
  //        <i class="carousel-card-logo fab fa-youtube">
  //            <a href={website.demo} className=""  target="_blank"></a>
  //        </i>
  //        :''}
  //        {website.pageLink?
  //        <i class="carousel-card-logo fas fa-paperclip">
  //            <a href={website.pageLink} className="" target="_blank">               
  //        </a>
  //        </i>
  //        :''}
  //   </div>
  //   </div>
  // // </div>