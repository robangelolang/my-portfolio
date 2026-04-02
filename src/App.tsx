import profile from './assets/profile.jpg'
function App() {
return (
  <div className="bg-slate-950 text-white min-h-screen">
     
   <header className="w-full border-b border-white/10 bg-slate-950/90">
   <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
   <h1 className="text-xl font-bold text-orange-400">Gelo</h1>

    <nav className="hidden md:flex gap-6 text-sm">
            <a href="#about" className="hover:text-blue-400">About</a>
            <a href="#skills" className="hover:text-blue-400">Skills</a>
            <a href="#projects" className="hover:text-blue-400">Projects</a>
            <a href="#contact" className="hover:text-blue-400">Contact</a>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="max-w-6xl mx-auto px-6 py-20 md:py-28">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          <div>
            <p className="text-slate-400 font-medium mb-3">Hello, I am</p>
            <h2 className="text-4xl font-bold text-orange-400">
              Rob Angelo Catunao
            </h2>
            <h3 className="text-xl md:text-2xl text-slate-300 mt-3">
              BSIT Student | Frontend Learner | Creative Web Builder
            </h3>

            <p className="text-slate-400 mt-6 leading-7 max-w-xl">
              I am an Information Technology student who enjoys creating simple,
              clean, and user-friendly websites. I am currently learning frontend
              development and improving my skills in building modern web projects.
            </p>

            <div className="mt-8 flex gap-4 flex-wrap">
              <a
                href="#projects"
                className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-lg font-medium"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="border border-white/20 hover:border-blue-400 px-6 py-3 rounded-lg font-medium"
              >
                Contact Me
              </a>
            </div>
          </div>
       
         <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden
          border-4 border-white/20 shadow-lg transition-all duration-500 ease-in-out hover:scale-105 hover:shadow-[0_0_35px_rgba(255,255,255,0.35)]">
  <img
    src={profile}
    alt="Gelo"
    className="w-full h-full object-cover"
  />
</div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="max-w-6xl mx-auto px-6 py-16">
  
  <div className="bg-white/5 border border-white/10 rounded-2xl p-8 
  backdrop-blur-md 
  transition-all duration-500 ease-in-out
  hover:shadow-[0_0_30px_rgba(255,255,255,0.15)] hover:-translate-y-1">
    

    <h2 className="text-3xl font-bold mb-4 text-orange-400">
      About Me
    </h2> 

    <p className="text-slate-300 leading-8">
      I am currently studying Bachelor of Science in Information Technology. 
      I enjoy learning how websites are built and how design and code work together. 
      I like creating projects that are simple, useful, and easy to understand. 
      As a student, I am continuously improving my skills in HTML, CSS, JavaScript, React, and UI design
      with the help of online resources, tutorials, and practice projects. I dont hide the fact that I use ChatGPT to help me with my learning and projects, but I always make sure to understand the concepts and code behind it. 
      I am excited to continue my journey in frontend development and create more amazing web projects in the future.
    </p>

  </div>

</section>

     
<section id="skills" className="max-w-6xl mx-auto px-6 py-16">

  <h2 className="text-3xl font-bold mb-10 text-orange-400">
    Skills
  </h2>

  <div className="grid grid-cols-2 md:grid-cols-3 gap-6">

    {[
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Vite",
      "Tailwind CSS",
      "UI Design",
      "Git & GitHub",
      "User Experience (UX)",
    ].map((skill) => (
      
      <div
        key={skill}
        className="bg-white/5 border border-white/10 rounded-xl p-6 text-center
        transition-all duration-300 ease-in-out
        hover:-translate-y-2 hover:scale-105
        hover:border-white/30
        hover:shadow-[0_0_20px_rgba(255,255,255,0.15)]
        cursor-pointer"
      >
        <p className="text-lg font-semibold text-white">
          {skill}
        </p>
      </div>

    ))}

  </div>

</section>

      {/* Projects */}
      <section id="projects" className="max-w-6xl mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-8 text-orange-400">Projects</h2>

        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 
          transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Commnect Barangay Website</h3>
            <p className="text-slate-300 leading-7">
              A group project that focuses on creating a community-based website project with pages for announcements,
              contact details, and local information.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 
          transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.18)]">
            <h3 className="text-xl font-semibold mb-3">Portfolio Website</h3>
            <p className="text-slate-300 leading-7">
              I created this portfolio website  with the help of online resources to showcase my skills, projects, and contact information in a clean and modern design.
            </p>
          </div>

          <div className="bg-white/5 border border-white/10 rounded-2xl p-6 
          transition-all duration-300 ease-in-out hover:-translate-y-2 hover:scale-[1.02] hover:border-white/30 hover:shadow-[0_0_25px_rgba(255,255,255,0.18)]">
            <h3 className="text-xl font-semibold mb-3">UI/UX Design</h3>
            <p className="text-slate-300 leading-7">
              I Designed a simple UI/UX design projects to practice my design skills and create user-friendly interfaces.
            </p>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="max-w-6xl mx-auto px-6 py-16 pb-24">
        <div className="bg-white/5 border border-white/10 rounded-2xl p-8
          transition-all duration-300 ease-in-out hover:border-white/30
           hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]">
          <h2 className="text-3xl font-bold mb-4 text-orange-400">Contact Me</h2>
          <p className="text-slate-300 mb-6">
            You can reach me through the following:
          </p>

          <div className="space-y-3 text-slate-200">
            <p><span className="font-semibold">Email:</span> robskiegelo@gmail.com</p>
            <p><span className="font-semibold">Facebook:</span> Rob Olegna Oanutac</p>
            <p><span className="font-semibold">GitHub:</span> robangeloang</p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default App