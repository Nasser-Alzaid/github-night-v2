import { motion } from "framer-motion"

export default function GitHubQuickExplainer() {
  return (
    <div className="min-h-screen bg-slate-950 text-white">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="inline-block px-3 py-1 rounded-full bg-slate-800 text-sm mb-4">
              Learn GitHub fast
            </div>
            <h1 className="text-5xl font-bold leading-tight mb-5">
              GitHub, quickly explained
            </h1>
            <p className="text-slate-300 text-lg leading-8 mb-6">
              GitHub helps developers store code, track changes, collaborate with teams, and safely build projects together.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 mt-8">
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="font-semibold mb-1">Repository</h3>
                <p className="text-sm text-slate-400">Your project folder and history.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="font-semibold mb-1">Commit</h3>
                <p className="text-sm text-slate-400">A saved snapshot of your changes.</p>
              </div>
              <div className="p-4 rounded-2xl bg-slate-900 border border-slate-800">
                <h3 className="font-semibold mb-1">Branch</h3>
                <p className="text-sm text-slate-400">A safe space for new work.</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="rounded-3xl overflow-hidden shadow-2xl border border-slate-800"
          >
            <img
              src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=1200&q=80"
              alt="Developer working with code"
              className="w-full h-[420px] object-cover"
            />
          </motion.div>
        </div>

        <div className="mt-14 p-8 rounded-3xl bg-slate-900 border border-slate-800">
          <h2 className="text-2xl font-semibold mb-5">Typical GitHub workflow</h2>
          <div className="grid md:grid-cols-5 gap-4 text-sm">
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">1. Create repository</div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">2. Make changes</div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">3. Commit</div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">4. Push</div>
            <div className="p-4 rounded-2xl bg-slate-950 border border-slate-800">5. Collaborate</div>
          </div>
        </div>
      </div>
    </div>
  )
}
