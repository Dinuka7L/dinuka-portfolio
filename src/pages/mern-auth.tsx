import { motion } from "framer-motion";
import { ArrowRight, Lock, PlayCircle, Camera, Rocket, Github } from "lucide-react";
import MERNAuthHomeImage from "../assets//MERN-Auth-SS-1.png"
import MERNAuthSignUp from "../assets/MERN-Auth-SS-Signup.png"
import MERNAuthLoginfrom from "../assets/MERN-Auth-SS-Login.png"
import MERNAuthVerificationEmail from "../assets/MERN-Auth-SS-Verification-Email.png"
import MERNAuthVerificationCode from "../assets/MERN-Auth-SS-Verfication Code.png"
import MERNAuthProfile from "../assets/MERN-Auth-SS-Profile.png"
import MERNAuthMFASetup from "../assets/MERN-Auth-SS-MFA-Setup.png"


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
              src="https://www.youtube.com/embed/pavbF06RZcA"
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
              src={MERNAuthLoginfrom}
              alt="Login Page"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="absolute -right-10 top-1/3 text-cyan-400 w-10 h-10 animate-pulse" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-cyan-400">Login Flow</h3>
            <p className="text-gray-300 mt-3">
              First if no, cookie is set, user is redirected to login page using redirect route.
            </p>
          </div>

          <div className="relative">
            <img
              src={MERNAuthSignUp}
              alt="Signup Page"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              If the user doesn't have an account, they can easily sign up with an email and a password. Additionally, there's a password strength meter and an automatic password generator which allows to easily generate and check strong passwords.
            </p>
          </div>

          <div className="relative">
            <img
              src={MERNAuthVerificationEmail}
              alt="Signup Verification Email"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              After signing up, users receive a verification email to confirm their account. This step ensures that the email provided is valid and helps in preventing fake accounts.
            </p>
            <div className="relative">
            <img
              src={MERNAuthVerificationCode}
              alt="Verification Code"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              Users need to enter the verification code sent to their email to activate their account. This adds an extra layer of security and ensures that only legitimate users can access the system.
            </p>
          </div>
          <div className="relative">
            <img
              src={MERNAuthHomeImage}
              alt="Home Page"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              After successful login, users are redirected to the home page where they can access the main features of the application.
            </p>
          </div>
          <div className="relative">
            <img
              src={MERNAuthProfile}
              alt="Profile Page"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              Users can click on the profile icon to view and update their profile information, including uploading a profile picture. Additionally, the MFA settings can be managed from the profile page.
            </p>
          </div>
          <div className="relative">
            <img
              src={MERNAuthMFASetup}
              alt="MFA Setup"
              className="rounded-xl shadow-lg border border-slate-700"
            />
            <ArrowRight className="text-purple-400 w-10 h-10 animate-pulse" />
            <p className="text-gray-300 mt-3">
              Users can set up Multi-Factor Authentication (MFA) to add an extra layer of security to their accounts. This process involves linking a mobile device to the account and using it for verification during login.
            </p>
          </div>
          </div>
        </div>
      </section>

      {/* Conclusion */}
      <footer className="text-center py-16 bg-gradient-to-b from-slate-950 via-blue-950 to-slate-900">
        <h2 className="text-2xl font-bold text-cyan-400 flex items-center justify-center gap-2">
          <Github className="w-7 h-7 text-cyan-400" /> MERN Authentication System
        </h2>
        <p className="text-gray-400 mt-4">
          Clone the repository and run it locally:
        </p>

        {/* Clone command */}
        <div className="mt-8 max-w-xl mx-auto text-left">
          <p className="text-gray-300 mb-2 font-semibold">📂 Clone the Repo:</p>
          <pre className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto">
            <code>git clone https://github.com/Dinuka7L/MERN-Auth-System</code>
          </pre>
        </div>

        {/* Install & Run */}
        <div className="mt-6 max-w-xl mx-auto text-left">
          <p className="text-gray-300 mb-2 font-semibold">⚡ Install & Run:</p>
          <pre className="bg-slate-800/80 border border-slate-700 rounded-lg p-4 text-sm text-gray-200 overflow-x-auto">
            <code>{`cd mern-auth-system
      npm install 
      npm run dev <- To start backend server
      cd back-end
      npm install
      cd front-end
      npm install
      npm run dev <- To run GUI Front End
      `}</code>
          </pre>
        </div>
      </footer>
    </div>
  );
};

export default MERNAuth;
