import { useState } from 'react';
import Sidebar from './components/Sidebar';
import SkillsSection from './components/SkillsSection';
import ProjectCard from './components/ProjectCard';
import Login from './components/Login';
import './styles/App.css';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [skills, setSkills] = useState(['C++', 'Python', 'React', 'C+', 'Competitive Programming']);

  const handleRemoveSkill = (skillToRemove) => {
    setSkills(skills.filter(skill => skill !== skillToRemove));
  };

  const handleLogin = () => {
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  const projects = [
    {
      title: 'Build plan de',
      description: 'Weekend build given time',
      time: 4
    },
    {
      title: 'Responsive Portfolio',
      description: 'Create a portfolio site with responsive design',
      time: 3
    },
    {
      title: 'Task Tracker',
      description: 'Design a task tracker with CRUD operations',
      time: 5
    }
  ];

  if (!isAuthenticated) {
    return <Login onLogin={handleLogin} />;
  }

  return (
    <div className="app-container">
      <Sidebar />
      <main className="main-content">
        <header className="header">
          <h1 className="page-title">Personalized coding project ideas<br />for weekends</h1>
          <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
            <button 
              onClick={handleLogout}
              style={{
                background: 'none',
                border: '1px solid var(--primary-color)',
                color: 'var(--primary-color)',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                cursor: 'pointer'
              }}
            >
              Logout
            </button>
            <div className="user-avatar"></div>
          </div>
        </header>

        <SkillsSection skills={skills} onRemoveSkill={handleRemoveSkill} />
        
        <input
          type="range"
          className="time-slider"
          min="0"
          max="100"
          defaultValue="50"
        />

        <button className="get-ideas-button">Get Ideas</button>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <ProjectCard
              key={index}
              title={project.title}
              description={project.description}
              time={project.time}
            />
          ))}
        </div>
      </main>
    </div>
  );
}

export default App;
