import './AboutSection.css';

function AboutSection() {
  return (
    <section id='about' className='about-section'>
      <div className='about-wrapper container'>
        <div className='about-image'>
          <img src='/Photo.jpeg' alt='M Harshavardan' />
        </div>
        <div className='about-copy'>
          <h1>About Me</h1>
            <p>
                <strong>Computer Science Student</strong> •
                <strong> Linux Enthusiast</strong> •
                <strong> Distributed Systems</strong> •
                <strong> Deep Learning</strong>
            </p>

            <p>
              I enjoy building software from the ground up, exploring low-level systems, and applying computer science fundamentals to real-world projects. I'm continuously learning modern technologies while strengthening my expertise in software engineering and AI.
            </p>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
