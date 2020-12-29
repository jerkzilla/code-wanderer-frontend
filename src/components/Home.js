import React from "react";

const Home = () => {
  return (
    <>
      {/* <div class="sidebar">
        <div class="Thx">DANK MEMES</div>
        <div class="content">
          <a href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg">
            <img
              className="Thx"
              src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20200330_011818_dvukiy.jpg"
              alt="meme"
              class="content"
            />
          </a>
        </div>
        <div class="content">
          <a href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg">
            <img
              className="d-block"
              src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/download_nfnwb2.jpg"
              alt="meme"
              class="content"
            />
          </a>
        </div>
        <div class="content">
          <a href="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png">
            <img
              className="content"
              src="https://res.cloudinary.com/jjmarshall-me/image/upload/v1605358765/home%20components/20_rvhzar.png"
              alt="meme"
              class="content"
            />
          </a>
        </div>
      </div> */}

      <h2 class="neon">PLAYLISTS</h2>
      <ul class="home">
        <li>
          <p>
            <a
              class="likeP"
              href="https://www.youtube.com/watch?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya&v=CIe1DxrSrhs&feature=emb_title"
              target="_blank"
            >
              RUBY
            </a>
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/videoseries?list=PLLAZ4kZ9dFpO90iMas70Tt4_wYjhLGkya"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <p>
            <a
              class="likeP"
              href="https://www.youtube.com/watch?v=-MlNBTSg_Ww&feature=emb_title"
              target="_blank"
            >
              REACT
            </a>
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/-MlNBTSg_Ww"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </li>
        <li>
          <p>
            <a
              class="likeP"
              href="https://www.youtube.com/watch?v=OILrg4658JA&feature=emb_title"
              target="_blank"
            >
              MUSIC
            </a>
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/OILrg4658JA"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
        <li>
          <p>
            <a
              class="likeP"
              href="https://www.youtube.com/watch?v=ObZwFExwzOo&feature=emb_title"
              target="_blank"
            >
              TECH
            </a>
          </p>
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/ObZwFExwzOo"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </li>
      </ul>
    </>
  );
};
export default Home;
