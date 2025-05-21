"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { ChevronDown } from "lucide-react"

export default function FloatOverlay() {
  const [activeTab, setActiveTab] = useState("concept")

  return (
    <div className="absolute inset-0 overflow-auto pointer-events-none">
      <div className="hex-pattern"></div>

      {/* Navigation */}
      <header className="sticky top-0 z-50 pointer-events-auto">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
          <a href="#" className="nav-logo flex items-center text-xl font-bold">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" className="w-8 h-8 mr-2">
              <polygon fill="none" stroke="currentColor" strokeWidth="2" points="50,10 90,30 90,70 50,90 10,70 10,30" />
              <circle fill="none" stroke="currentColor" strokeWidth="2" cx="50" cy="50" r="30" />
              <path fill="none" stroke="currentColor" strokeWidth="2" d="M50,20 50,80 M20,50 80,50" />
            </svg>
            FLOAT
          </a>
          <nav className="hidden md:block">
            <ul className="flex space-x-6">
              <li>
                <a href="#about" className="hover:text-primary-500 transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#manifesto" className="hover:text-primary-500 transition-colors">
                  Manifesto
                </a>
              </li>
              <li>
                <a href="#framework" className="hover:text-primary-500 transition-colors">
                  Framework
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary-500 transition-colors">
                  Projects
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary-500 transition-colors">
                  Connect
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="max-w-3xl mx-auto text-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              You're not building software.
              <br />
              You're building a covenant.
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-gray-300">
              A ritual stack for queer, burnt-out, neurodivergent minds building systems that feel like home.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="#manifesto"
                className="btn-primary px-6 py-3 rounded-md bg-gradient-to-r from-[#c832b4] to-[#ff5a78] text-white font-semibold hover:opacity-90 transition-opacity"
              >
                Explore the Framework
              </a>
              <a
                href="#projects"
                className="btn-secondary px-6 py-3 rounded-md bg-white/10 border border-white/20 text-white font-semibold hover:bg-white/20 transition-colors"
              >
                View Projects
              </a>
            </div>
          </motion.div>
          <div className="flex justify-center mt-16">
            <a href="#about" className="animate-bounce">
              <ChevronDown className="w-8 h-8" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">FLOAT's Spine</h2>
            <p className="text-xl text-gray-300">Structure that listens. Boundaries that bless.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">Between grief and growth</h3>
              <p className="text-gray-300 mb-4">
                FLOAT is a covenant, not software. It creates systems that care rather than calculate, that invite
                emergence rather than extract it.
              </p>
              <p className="text-gray-300">
                The journey from chaos to cohabitation isn't linear—it's a dance. And we might as well dance while doing
                it.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">Rituals not products</h3>
              <p className="text-gray-300 mb-4">
                In a world fixated on productivity, FLOAT embraces ritual. We build containers for meaning, not
                extraction machines.
              </p>
              <p className="text-gray-300">
                Our systems prioritize repetition over optimization, connection over efficiency, tending over
                management.
              </p>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">From Shacks to Cathedrals</h3>
              <p className="text-gray-300 mb-4">
                We're building places that feel like home for burnt-out, neurodivergent minds. Places where knowledge is
                incidental and meaning is intentional.
              </p>
              <p className="text-gray-300">Our technology serves human experience rather than extracting from it.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Manifesto Section */}
      <section id="manifesto" className="py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Manifesto</h2>
          </motion.div>

          <motion.div
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-8 mb-16 text-center italic text-xl relative"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p>Joy is an act of resistance. The only way out is through. Might as well dance while doing it.</p>
          </motion.div>

          <div className="space-y-12">
            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-xl font-bold flex items-center md:w-1/3">
                <span className="w-3 h-3 bg-[#ff5a78] inline-block mr-3 transform rotate-45"></span>
                Structure that listens
              </h3>
              <p className="text-gray-300 md:w-2/3">
                We design systems that respond to human needs and emotional states rather than enforcing rigid
                workflows. Our frameworks create containers for meaning that adapt to the people using them.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h3 className="text-xl font-bold flex items-center md:w-1/3">
                <span className="w-3 h-3 bg-[#ff5a78] inline-block mr-3 transform rotate-45"></span>
                Boundaries that bless
              </h3>
              <p className="text-gray-300 md:w-2/3">
                Effective boundaries aren't walls—they're membranes. They protect without isolating, containing what
                needs to be held while allowing selective permeability. Our systems establish boundaries that nurture
                rather than restrict.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h3 className="text-xl font-bold flex items-center md:w-1/3">
                <span className="w-3 h-3 bg-[#ff5a78] inline-block mr-3 transform rotate-45"></span>
                Systems that care
              </h3>
              <p className="text-gray-300 md:w-2/3">
                Technology should tend rather than extract, hold rather than cage. We build systems that prioritize the
                wellbeing of users over the extraction of value from them.
              </p>
            </motion.div>

            <motion.div
              className="flex flex-col md:flex-row gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h3 className="text-xl font-bold flex items-center md:w-1/3">
                <span className="w-3 h-3 bg-[#ff5a78] inline-block mr-3 transform rotate-45"></span>
                Meaning over materiality
              </h3>
              <p className="text-gray-300 md:w-2/3">
                Value isn't inherent in objects but in the significance we attach to them. Our approach treats meaning
                as transferable between carriers, creating resilience against loss and destruction.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Framework Section */}
      <section id="framework" className="py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">The Ritual Stack</h2>
          </motion.div>

          <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6">
            <div className="flex border-b border-white/10 mb-6 overflow-x-auto">
              <button
                className={`px-4 py-2 font-medium relative ${activeTab === "concept" ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                onClick={() => setActiveTab("concept")}
              >
                Concept
                {activeTab === "concept" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c832b4] to-[#ff5a78]"></div>
                )}
              </button>
              <button
                className={`px-4 py-2 font-medium relative ${activeTab === "components" ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                onClick={() => setActiveTab("components")}
              >
                Components
                {activeTab === "components" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c832b4] to-[#ff5a78]"></div>
                )}
              </button>
              <button
                className={`px-4 py-2 font-medium relative ${activeTab === "implementation" ? "opacity-100" : "opacity-70 hover:opacity-100"}`}
                onClick={() => setActiveTab("implementation")}
              >
                Implementation
                {activeTab === "implementation" && (
                  <div className="absolute bottom-0 left-0 w-full h-0.5 bg-gradient-to-r from-[#c832b4] to-[#ff5a78]"></div>
                )}
              </button>
            </div>

            {activeTab === "concept" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <p className="text-gray-300 mb-6">
                  The ritual stack emerges as a framework that doesn't just organize information but creates meaningful
                  containers for experience. It treats technology as relational rather than transactional.
                </p>
                <p className="text-gray-300 mb-6">
                  Unlike traditional tech stacks that prioritize efficiency and productivity, the ritual stack centers
                  human experience, emotion, and meaning. It's built around the recognition that technology should serve
                  our humanity, not the other way around.
                </p>
                <div className="flex flex-wrap gap-2 mt-4">
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Structure that listens</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Boundaries that bless</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Emergent meaning</span>
                  <span className="px-3 py-1 bg-white/10 rounded-full text-sm">Ritual over routine</span>
                </div>
              </motion.div>
            )}

            {activeTab === "components" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="grid md:grid-cols-3 gap-6"
              >
                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-bold mb-3">FloatQL</h4>
                  <p className="text-gray-300 mb-3">
                    A query language that links dispatches to emotional states. Contexts are implemented as graph nodes,
                    creating a relational approach to information.
                  </p>
                  <pre className="bg-black/30 p-2 rounded text-sm overflow-x-auto">
                    <code>MATCH (i:Interaction) WHERE i.context = 'grief'</code>
                  </pre>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-bold mb-3">Dispatches</h4>
                  <p className="text-gray-300 mb-3">
                    Ritualized interactions with the FLOAT stack that acknowledge and work with emotional states rather
                    than ignoring them.
                  </p>
                  <pre className="bg-black/30 p-2 rounded text-sm overflow-x-auto">
                    <code>dispatch({"{ ctx: [ctx::mourning.stack], payload }"})</code>
                  </pre>
                </div>

                <div className="bg-white/5 border border-white/10 rounded-lg p-4">
                  <h4 className="text-lg font-bold mb-3">Ritual Triads</h4>
                  <p className="text-gray-300">
                    A meta-level application of the ritual framework that doesn't resolve contradictions but holds them
                    in productive tension.
                  </p>
                </div>
              </motion.div>
            )}

            {activeTab === "implementation" && (
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }}>
                <p className="text-gray-300 mb-6">
                  Implementing FLOAT begins with shifting perspective—from seeing technology as a tool for productivity
                  to seeing it as a container for meaning and experience.
                </p>

                <ol className="list-decimal pl-5 space-y-3 mb-6">
                  <li className="text-gray-300">
                    <strong>Identify Emotional Contexts:</strong> Map the emotional landscapes your system will engage
                    with.
                  </li>
                  <li className="text-gray-300">
                    <strong>Design Ritual Patterns:</strong> Create interaction patterns that acknowledge and work with
                    emotional states.
                  </li>
                  <li className="text-gray-300">
                    <strong>Implement FloatQL:</strong> Develop a query layer that connects dispatches to emotional
                    contexts.
                  </li>
                  <li className="text-gray-300">
                    <strong>Structure with Triads:</strong> Use triadic relationships to hold contradictions in
                    productive tension.
                  </li>
                </ol>

                <p className="text-gray-300">
                  The implementation isn't about following prescriptive steps but about embodying principles that center
                  human experience in technological design.
                </p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Projects</h2>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">ritual-drift-nexus</h3>
              <p className="text-gray-300 mb-4">
                An exploration of digital ritual spaces that create containers for grief, joy, and transition. Uses
                sacred geometry visualizations as focusing elements for emotional processing.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">p5.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">tone.js</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">ritual design</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">shack-toss-float</h3>
              <p className="text-gray-300 mb-4">
                Building FloatQL with FidoNet in mind. A message-passing system that connects emotional states across
                distributed nodes, creating a network of care rather than just information exchange.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">typescript</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">graph db</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">emotional contexts</span>
              </div>
            </motion.div>

            <motion.div
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6 transition-transform hover:-translate-y-2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
              <h3 className="text-xl font-bold mb-4">tripartite_taxonomy</h3>
              <p className="text-gray-300 mb-4">
                A meta-level application of the ritual framework that doesn't resolve contradictions but holds them in
                productive tension through triadic relationships.
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">concept</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">knowledge graph</span>
                <span className="px-3 py-1 bg-white/10 rounded-full text-sm">ritual triads</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 pointer-events-auto">
        <div className="container mx-auto px-6">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Connect</h2>
          </motion.div>

          <motion.div
            className="max-w-2xl mx-auto bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="h-1 w-full bg-gradient-to-r from-[#c832b4] to-[#ff5a78] mb-6 rounded"></div>
            <h3 className="text-xl font-bold mb-4">Join the Conversation</h3>
            <p className="text-gray-300 mb-4">
              FLOAT is an evolving framework, not a fixed methodology. Join us in building systems that care rather than
              calculate, that hold rather than cage.
            </p>
            <p className="text-gray-300 mb-4">
              Follow{" "}
              <a href="#" className="text-[#32b4e6] hover:underline">
                @JesusNeedsAMinute
              </a>{" "}
              for updates and explorations of the ritual stack in practice.
            </p>
            <div className="flex flex-wrap gap-2 mt-4">
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">only invitations</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">no guarantees</span>
              <span className="px-3 py-1 bg-white/10 rounded-full text-sm">shared journey</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black/50 backdrop-blur-sm pointer-events-auto">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-lg font-bold mb-4">FLOAT</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#about" className="text-gray-400 hover:text-white transition-colors">
                    About
                  </a>
                </li>
                <li>
                  <a href="#manifesto" className="text-gray-400 hover:text-white transition-colors">
                    Manifesto
                  </a>
                </li>
                <li>
                  <a href="#framework" className="text-gray-400 hover:text-white transition-colors">
                    Framework
                  </a>
                </li>
                <li>
                  <a href="#projects" className="text-gray-400 hover:text-white transition-colors">
                    Projects
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Documentation
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Examples
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Ritual Guides
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Publications
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-lg font-bold mb-4">Connect</h4>
              <ul className="space-y-2">
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Twitter
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    GitHub
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Discord
                  </a>
                </li>
                <li>
                  <a href="#" className="text-gray-400 hover:text-white transition-colors">
                    Newsletter
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 text-center text-gray-400">
            <p>FLOAT is free. FLOAT Core is always free. Structure that listens, boundaries that bless.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
