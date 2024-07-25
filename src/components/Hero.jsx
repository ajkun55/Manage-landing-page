import Button from "./Button";

function Hero() {
  return (
    <section className="hero">
      <div className="container">
        <div className="hero-text">
          <h1>Bring everyone together to build better products.</h1>
          <p>
            Manage makes it simple for software teams to plan day-to-day tasks
            while keeping the larger team goals in view.
          </p>
          <Button />
        </div>

        <div className="image">
          <img src="/images/illustration-intro.svg" alt="" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
