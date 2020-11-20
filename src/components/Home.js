import React from 'react'

const  Home = () => {
  return (
   <div> 
    <div class="sidebar">
        <div class="Thx">DANK MEMES</div>
            <div class="content">
            <a  href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg">
              <img
                className="Thx"
                src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg"
                alt="meme"
                class="content"
              />
              </a></div>
              <div class="content">
            <a  href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg">
              <img
                className="d-block"
                src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg"
                alt="meme"
                class="content"
              />
              </a></div>
              <div class="content">
            <a  href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png">
              <img
                className="content"
                src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png"
                alt="meme"
                class="content"
              />
              </a></div>
      </div>
      <div>
      <h2 class="neon"> PROGRAMMER PLAYLIST </h2>
      <ul class="home">
      <li><p>RUBY</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/videoseries?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe></li>  
      <li><p>REACT</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/-MlNBTSg_Ww" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen ></iframe></li>
      <li><p>MUSIC</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/OILrg4658JA" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li> 
      <li><p>TECH</p><iframe width="100%" height="100%" src="https://www.youtube.com/embed/ObZwFExwzOo" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></li>
      </ul>
      </div>
      </div>

  );  
};
export default Home;