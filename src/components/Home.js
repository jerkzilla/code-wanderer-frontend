import React from 'react'
// import { Player } from 'video-react'
// import { Link } from "react-router-dom";


// const Header = () => {}
export default class Home extends React.Component {
 
  state = {
    imgIndex: null
  }


  images = [
    {
      headline: "Downy Meme",
      link: "https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg"
    },
    {
      headline: "Programmer",
      link: "https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg"
    },
    {
      headline: "Two States",
      link: "https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png"
    }
  ]
 
  componentWillMount() {
    this.displayRandomImage();
  }

  displayRandomImage = () => {
    this.setState({
      imgIndex: Math.floor(Math.random() * 3)
    });
  };

  render () {
    
  return (
   <div> 
    <div class="sidebar">
        <div class="Thx">DANK MEMES</div>
            <div class="content">
            
            <a  href={this.images[0].link}>
              <img
                className="Thx"
                src={this.images[0].link}
                alt="meme"
                class="content"
              />
              </a></div>
              <div class="content">
            <a  href={this.images[1].link}>
              <img
                className="d-block"
                src={this.images[1].link}
                alt="meme"
                class="content"
              />
              </a></div>
              <div class="content">
            <a  href={this.images[2].link}>
              <img
                className="content"
                src={this.images[2].link}
                alt="meme"
                class="content"
              />
              </a></div>
      </div>
      <div>
      <p> RUBY TUTORIAL </p>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/videoseries?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>    
      </div>
      </div>

  );  
};
}

// export default Home;