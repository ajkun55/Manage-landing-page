function Features() {
  const contents = [
    {
      id: "01",
      title: "Track company-wide progress",
      text: " See how your day-to-day tasks fit into the wider vision. Go from tracking progress at the milestone level all the way done to the smallest of details. Never lose sight of the bigger picture again.",
    },

    {
      id: "02",
      title: "Advanced built-in reports",
      text: " Set internal delivery estimates and track progress toward company goals. Our customisable dashboard helps you build out the reports you need to keep key stakeholders informed.",
    },

    {
      id: "03",
      title: "Everything you need in one place",
      text: "Stop jumping from one service to another to communicate, store files, track tasks and share documents. Manage offers an all-in-one team productivity solution.",
    },
  ];

  return (
    <section className="features">
      <div className="container">
        <div>
          <h2>{`What’s different about Manage?`}</h2>
          <p className="feature-text">
            Manage provides all the functionality your team needs, without the
            complexity. Our software is tailor-made for modern digital product
            teams.
          </p>
        </div>

        <div className="row">
          {contents.map((c) => (
            <div className="feature" key={c.id}>
              <div>
                <span className="mark">{c.id}</span>
                <h3>{c.title}</h3>
              </div>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Features;
