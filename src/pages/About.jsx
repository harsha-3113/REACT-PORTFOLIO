import './AboutPage.css';
import AboutSection from '../components/AboutSection/AboutSection';
import GitHubStats from '../components/GitHubStats/GitHubStats';
import SkillCard from '../components/SkillCard/SkillCard';

const SKILLS = [
  { name: 'C', level: 'Advanced', icon: '💻' },
  { name: 'Python', level: 'Intermediate', icon: '🐍' },
  { name: 'HTML5', level: 'Intermediate', icon: '🌐' },
  { name: 'CSS3', level: 'Intermediate', icon: '🎨' },
  { name: 'JavaScript', level: 'Intermediate', icon: '⚡' },
  { name: 'React', level: 'Beginner', icon: '⚛️' },
  { name: 'Linux', level: 'Intermediate', icon: '🐧' },
  { name: 'PostgreSQL', level: 'Beginner', icon: '🐘' }
];

function About() {
  return (
    <div className='about-page container'>
      <AboutSection />

      <section id='skills' className='skills-section' style={{ marginTop: '40px' }}>
        <h2>Skills</h2>
        <div className='skills-panel'>
          <div className='skills-grid'>
            {SKILLS.map(s => <SkillCard key={s.name} name={s.name} level={s.level} icon={s.icon} />)}
          </div>
        </div>
      </section>

      <section style={{ marginTop: '40px' }}>
        <h2>GitHub Activity</h2>
        <GitHubStats username='harsha-3113' />
      </section>
    </div>
  );
}
export default About;