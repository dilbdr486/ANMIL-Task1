import React, { useEffect, useState } from "react";
import appwriteService from "../Auth/Conf";
import { Container, PostCart } from "../components";
import bgImage from "./bg.jpg";
import myImage from "./dil.jpg";
import photo from "./photo.jpg";
function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    appwriteService.getPosts().then((posts) => {
      if (posts) {
        setPosts(posts.documents);
      }
    });
  }, []);

  if (posts.length === 0) {
    return (
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full py-8 mt-4 text-center"
      >
        <Container>
          <div className="flex flex-wrap">
            <div className="p-2 w-full">
              <h1 className="text-2xl font-bold hover:text-gray-500">
                Login to read posts
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
  return (
    <div>
      <div
        style={{ backgroundImage: `url(${bgImage})` }}
        className="w-full h-screen bg-cover bg-center bg-no-repeat py-8 mt-4 text-center"
      >
        <Container>
          <div className="flex flex-wrap">
            {posts.map((post) => (
              <div key={post.$id} className="p-2 w-1/4">
                <PostCart {...post} />
              </div>
            ))}
          </div>
        </Container>
      </div>
      <div className="text-center py-4">
        <h1>CERTIFIED WEB DESIGNER BASED IN NEPAL</h1>
      </div>
      <div className="text-center mt-4 mb-8">
        <h1 className="text-5xl">Problems I can help with</h1>
      </div>
      <div>
        <div className="flex justify-center gap-10">
          <div className="pl-10">
            <img
              src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/2-home.jpg"
              alt=""
              className="w-96"
            />
            <h1 className="text-3xl py-4 text-start">Web Design</h1>
            <ul>
              <li className="text-xl py-1 text-start">
                Focus on how you can help and
                <br /> benefit your user. Use simple
                <br /> words to avoid confusion.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/3-home.jpg"
              alt=""
              className="w-96"
            />
            <h1 className="text-3xl py-4 text-start">Graphic Design</h1>
            <ul>
              <li className="text-xl py-1 text-start">
                Focus on how you can help and
                <br /> benefit your user. Use simple
                <br /> words to avoid confusion.
              </li>
            </ul>
          </div>
          <div>
            <img
              src="https://websitedemos.net/hope-02/wp-content/uploads/sites/1410/2023/10/4-home.jpg"
              alt=""
              className="w-96"
            />
            <h1 className="text-3xl py-4 text-start">Content Creation</h1>
            <ul className="text-center">
              <li className="text-xl py-1 text-start">
                Focus on how you can help and
                <br /> benefit your user. Use simple
                <br /> words to avoid confusion.
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="text-center mt-8 text-xl bg-green-50 py-20 font-medium">
        <p>You can showcase a client review here. Make it nice</p>
        <p>and short, then use this button to send them to</p>
        <p>your reviews or services page.</p>
      </div>
      <div className="flex justify-center mt-8 gap-32">
        <div className="pl-24">
          <img className="w-96" src={myImage} alt="" />
          <h1 className="text-3xl py-4">Dil Bahadur Tharu</h1>
          <p className="text-lg py-1">Website Content Creator</p>
          <p className="text-lg ">Certified Web Designer</p>
          <p className="text-lg ">Incurable Perfectionist</p>
        </div>
        <div className="text-start">
          <h2>Welcome!</h2>
          <h1 className="text-3xl py-4">
            My name is Dil and I am the
            <br /> creator of this template.
          </h1>
          <p className="text-xl py-3">
            I gave it my all to make this the best design to start from.
            <br /> I named it Hope, in honor of my client who inspired me
            <br /> to make it her middle name is Hope.
          </p>
          <p className="text-xl py-3">
            For the first section at the top of the page, I recommend
            <br /> writing something that will pique the interest of your
            <br /> target audience. Make them curious to read more!
          </p>
          <p className="text-xl py-3">
            These middle sections are the perfect place to introduce
            <br /> yourself, and to perhaps start introducing your services.
          </p>
          <p className="text-xl py-3">
            The last section below is great for a call to action.
          </p>
        </div>
      </div>
      
      <div style={{ backgroundImage: `url(${photo})` }} className="w-full h-96 bg-cover bg-center bg-no-repeat py-8 mt-4 text-center">
        <div className="text-center mt-24">
        <h1 className="text-5xl py-3 text-gray-100 font-bold">Insert a call to action</h1>
        <p className="text-3xl py-3 text-gray-100 font-bold">Think of what you want your visitor to do next.</p>
        <p className="text-3xl text-gray-100 font-bold">Maybe they should contact you?</p>
        </div>
      </div>
    </div>
  );
}

export default Home;
