import { useState } from "react";
import { useNavigate } from "react-router-dom";

function AdminLogin() {
  const [credentials, setCredentials] = useState({ username: "", password: "" });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials({ ...credentials, [e.target.name]: e.target.value });
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (credentials.username === "admin" && credentials.password === "srkinfra2026") {
        localStorage.setItem("isAdminAuthenticated", "true");
        setLoading(false);
        navigate("/admin/dashboard");
      } else {
        setLoading(false);
        setError("Invalid administrative credentials. Access Denied.");
      }
    }, 1000);
  };

  return (
    <div 
      className="relative min-h-screen flex items-center justify-center p-4 bg-cover bg-center bg-no-repeat" 
      style={{ 
        fontFamily: "Poppins, sans-serif",
        // REPLACE 'your-background-image.jpg' with your actual image filename from public/images
        backgroundImage: "url('/public/images/projects/project3.jpg')", 
      }}
    >
      {/* BACKGROUND FADE OVERLAY - Low opacity mask with a slight blur */}
      <div className="absolute inset-0 bg-[#f3f4f6]/80 backdrop-blur-xs pointer-events-none z-0"></div>
      
      {/* MAIN CARD GATEWAY FORM */}
      <div className="bg-white max-w-md w-full rounded-2xl shadow-xl p-8 border border-gray-100 z-10">
        <div className="text-center mb-8">
          <h2 className="text-[#34489b] text-[26px] font-bold uppercase tracking-wide">Admin Portal</h2>
          <p className="text-gray-500 text-[14px] mt-1">Sign in to manage infrastructure leads</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-5">
          <div>
            <label className="block text-[14px] font-semibold text-gray-700 mb-2">Username</label>
            <input
              type="text"
              name="username"
              required
              value={credentials.username}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white"
              placeholder="Enter admin username"
            />
          </div>

          <div>
            <label className="block text-[14px] font-semibold text-gray-700 mb-2">Password</label>
            <input
              type="password"
              name="password"
              required
              value={credentials.password}
              onChange={handleChange}
              className="w-full px-4 py-3 bg-[#f9fafb] border border-gray-300 rounded-lg text-[15px] focus:outline-none focus:border-blue-500 focus:bg-white"
              placeholder="••••••••"
            />
          </div>

          {error && <p className="text-red-500 text-[13px] font-medium text-center">{error}</p>}

          <button
            type="submit"
            className="w-full bg-[#34489b] text-white py-3 rounded-lg font-bold text-[15px] shadow-md hover:bg-[#28387a] transition duration-200 uppercase tracking-wide"
          >
            Authenticate
          </button>
        </form>
      </div>

      {/* VERIFYING/LOADING FULL SCREEN OVERLAY MASK */}
      {loading && (
        <div className="absolute inset-0 bg-white/70 backdrop-blur-sm flex flex-col items-center justify-center z-50 transition-all duration-300">
          <div className="animate-spin rounded-full h-12 w-12 border-4 border-[#34489b] border-t-transparent"></div>
          <p className="mt-4 text-[#34489b] font-semibold text-sm tracking-wider uppercase animate-pulse">
            Verifying Credentials...
          </p>
        </div>
      )}

    </div>
  );
}

export default AdminLogin;