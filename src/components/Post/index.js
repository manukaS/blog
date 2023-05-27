const Post = () => {
  return (
    <>
      <div className="post mx-2">
        <div className="img-post"></div>
        <h5>Tecnologia</h5>
        <h3>O guia definitivo do Blog</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium
          fugiat velit blanditiis ex quaerat laboriosam nostrum voluptas
          voluptatibus nemo qui officia expedita, nesciunt a accusamus minus
          tempore! Sed, vitae voluptates.
        </p>
        <div className="flex pt-2">
          <div className="img-profile"></div>
          <div className="desc-profile ml-2">
            <h6 className="color-blue">Name</h6>
            <p>May 27, 2023 - 10 min read</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Post;
