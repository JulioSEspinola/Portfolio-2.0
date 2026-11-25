export default function About() {
  return (
    <section id="about" className="section about-section reveal" aria-labelledby="about-title">
      <div className="about-grid">
        <div>
          <p className="eyebrow">About</p>
          <h2 id="about-title" className="section-title">A bit about me</h2>
        </div>
        <div className="about-copy">
          <p>
            I'm a full-stack software engineer in Washington State with a B.S. in
            Computer Science from Central Washington University. I like owning a
            feature end to end, from the interface and API design down to the
            cloud resources it runs on.
          </p>
          <p>
            On the side I run Websio, a small studio that builds secure websites
            for non-profits. When I'm away from code I'm usually tinkering with my
            home network.
          </p>
        </div>
      </div>
    </section>
  );
}
