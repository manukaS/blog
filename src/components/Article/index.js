import Post from "../Post";

const Article = () => {
  //fazer uma requisição para uma API

  return (
    <>
      <section className="container">
        <h1>Artigos</h1>
        <div className="mt-5 container-posts">
          <Post subtitle="tecnologia" title="O guia definitivo do Blog">
            1 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium fugiat velit blanditiis ex quaerat laboriosam nostrum
            voluptas voluptatibus nemo qui officia expedita, nesciunt a
            accusamus minus tempore! Sed, vitae voluptates.
          </Post>
          <Post
            subtitle="fotografia"
            title="Quais as melhores câmeras em 2023?"
          >
            2 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium fugiat velit blanditiis ex quaerat laboriosam nostrum
            voluptas voluptatibus nemo qui officia expedita, nesciunt a
            accusamus minus tempore! Sed, vitae voluptates.
          </Post>
          <Post subtitle="cinema" title="Os 10 filmes com maior bilheteria">
            3 - Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Accusantium fugiat velit blanditiis ex quaerat laboriosam nostrum
            voluptas voluptatibus nemo qui officia expedita, nesciunt a
            accusamus minus tempore! Sed, vitae voluptates.
          </Post>
        </div>
      </section>
    </>
  );
};

export default Article;
