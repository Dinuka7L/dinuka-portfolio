import { motion } from "framer-motion";
import { ArrowRight, Lock, PlayCircle, Camera, Rocket } from "lucide-react";

const MERNAuth = () => {
  return (
    <div className="bg-gradient-to-b from-slate-950 via-slate-900 to-black text-white min-h-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center text-center py-24 px-6">
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent"
        >
          MERN Authentication System
        </motion.h1>
        <p className="mt-4 max-w-2xl text-lg text-gray-300">
          Secure, scalable, and modern authentication with MFA, email
          verification, and JWT-based sessions.
        </p>
      </section>

      {/* Features Section */}
      <section className="relative py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-12 flex items-center justify-center gap-2">
          <Lock className="w-8 h-8 text-cyan-400" /> Key Features
        </h2>
        <div className="relative flex flex-wrap justify-center gap-10">
          {[
            "User Registration & Login",
            "Multi-Factor Authentication (MFA)",
            "Email Verification",
            "Password Reset",
            "Profile Picture Upload",
            "Protected Routes",
          ].map((feature, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800/80 backdrop-blur-md border border-slate-700 p-6 rounded-2xl shadow-lg w-72"
            >
              <h3 className="text-xl font-bold text-cyan-400">{feature}</h3>
            </motion.div>
          ))}
        </div>
      </section>

      {/* YouTube Demo */}
      <section className="relative py-20 px-6 bg-gradient-to-r from-slate-900 to-slate-800">
        <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
          <PlayCircle className="w-8 h-8 text-purple-400" /> Live Demo
        </h2>
        <div className="flex justify-center">
          <div className="w-full max-w-3xl aspect-video rounded-2xl overflow-hidden shadow-2xl">
            <iframe
              className="w-full h-full"
              src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
              title="MERN Auth Demo"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>

      {/* Screenshots + Arrows */}
      <section className="relative py-20 px-6">
        <h2 className="text-3xl font-semibold text-center mb-10 flex items-center justify-center gap-2">
          <Camera className="w-8 h-8 text-cyan-400" /> Walkthrough
        </h2>
        <div className="grid md:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          <div className="relative">
            <img
              src="/screenshots/signup.png"
              alt="Signup Page"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="absolute -right-10 top-1/3 text-cyan-400 w-10 h-10 animate-bounce" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-400">Signup Flow</h3>
            <p className="text-gray-300 mt-3">
              Users register with secure password validation. An email is sent
              for verification before login.
            </p>
          </div>

          <div className="relative md:col-span-2 flex gap-8 items-center">
            <img
              src="/screenshots/mfa.png"
              alt="MFA Screen"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-bounce" />
            <p className="text-gray-300 max-w-md">
              MFA adds an extra layer of security with QR-based OTP verification
              using speakeasy + qrcode.
            </p>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <footer className="text-center py-16 bg-slate-950/90">
        <h2 className="text-2xl font-bold text-cyan-400 flex items-center justify-center gap-2">
          <Rocket className="w-7 h-7 text-cyan-400" /> Try it Yourself
        </h2>
        <p className="text-gray-400 mt-4">
          Explore the repo, clone it, and implement secure authentication in
          your own projects.
        </p>
      </footer>
    </div>
  );
};

export default MERNAuth;
