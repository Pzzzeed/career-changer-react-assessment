import Layout from "./Layout";

const Owner = () => {
  return (
    <div className="home-bg">
      <Layout>
        <div className="px-4 py-5 my-5">
          <img
            className="d-block mx-auto mb-4"
            src="profile.jpg"
            alt="profile picture"
            width="300"
            height="300"
          />
          <h1 className="display-5 fw-bold text-body-emphasis text-center">
            Seed - Group E - 30
          </h1>
          <div className="col-lg-6 mx-auto">
            {/* <h3 className="text-body-emphasis">Short Bio</h3> */}
            <p className="lead mb-4 text-center">
              I am a Generation Thailand learner who is passionate about
              software development <hr />
            </p>
            <p className="lead mb-4 ">
              Name: Peeranat Phengsalaeh <br /> Age: 29 <br /> Email:
              seed.peeranat@gmail.com <br /> <br /> Love to... Playing football,
              Travelling, Hiking, Camping, Coding
            </p>
          </div>
        </div>
      </Layout>
    </div>
  );
};

export default Owner;
