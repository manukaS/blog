import api from "../../services/api";
import Post from "../../components/Post";
import { useState } from "react";

const Main = () => {
  const [post, setPost] = useState([]);

  async function handleAxios() {
    try {
      const response = await api.get("/posts");
      setPost(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <section className="container">
        <h1>Main.js</h1>
        <button onClick={handleAxios}> Fazer requisição </button>

        <div className="mt-5 container-posts">
          {post.map((post) => {
            return (
              <>
                <Post key={post.id} subtitle={post.category} title={post.title}>
                  {post.resume}
                </Post>
              </>
            );
          })}
        </div>
      </section>
    </>
  );
};

export default Main;
