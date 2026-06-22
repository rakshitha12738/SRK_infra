import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../supabaseClient";
import { MdOutlinePeopleAlt, MdDownload, MdLogout, MdSearch, MdRefresh } from "react-icons/md";

function AdminDashboard() {
  const [leads, setLeads] = useState([]);
  const [filteredLeads, setFilteredLeads] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // Switch box tracker to prevent double-popups from React Strict Mode
  const hasAlerted = useRef(false);

  // Authentication check guard
  useEffect(() => {
    const isAuth = localStorage.getItem("isAdminAuthenticated");
    if (isAuth !== "true") {
      navigate("/admin");
    } else {
      fetchLeads();
    }
  }, [navigate]);

  // Read data from Supabase table 'SRK_infra'
  const fetchLeads = async () => {
    setLoading(true);
    try {
      if (!import.meta.env.VITE_SUPABASE_URL) {
        alert("Vite environment variables are missing! Did you restart your server?");
      }

      const { data, error } = await supabase
        .from("SRK_infra") 
        .select("*");

      if (error) throw error;

      // FIXED: Pops up exactly ONCE when the dashboard component first loads data
      if (!hasAlerted.current) {
        alert("Successfully connected! Found " + (data ? data.length : 0) + " rows in Supabase.");
        hasAlerted.current = true; // Flips the switch so it won't fire again
      }

      setLeads(data || []);
      setFilteredLeads(data || []);
    } catch (err) {
      console.error("Error retrieving leads:", err.message);
      alert("Supabase Fetch Error: " + err.message);
    } finally {
      setLoading(false);
    }
  };

  // Live Filtering Search Function
  useEffect(() => {
    const results = leads.filter(
      (lead) =>
        lead.Name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead.Email?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        lead["Mobile Number"]?.includes(searchTerm)
    );
    setFilteredLeads(results);
  }, [searchTerm, leads]);

  // Export Leads directly to CSV Spreadsheet File (Date Column Removed)
  const exportToCSV = () => {
    if (filteredLeads.length === 0) return;

    const headers = ["Name", "Email", "Mobile Number\n"];
    const csvRows = filteredLeads.map((lead) => [
      `"${lead.Name}"`,
      `"${lead.Email}"`,
      `"${lead["Mobile Number"]}"\n`,
    ]);

    const csvContent = "data:text/csv;charset=utf-8," + headers.join(",") + csvRows.map((e) => e.join(",")).join("");
    const encodedUri = encodeURI(csvContent);
    const link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    link.setAttribute("download", `SRK_Infra_Leads_${new Date().toLocaleDateString()}.csv`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleLogout = () => {
    localStorage.removeItem("isAdminAuthenticated");
    navigate("/admin");
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] flex flex-col font-sans" style={{ fontFamily: "Poppins, sans-serif" }}>
      {/* TOP NAVIGATION HEADER (Updated Heading Name) */}
      <header className="bg-white border-b border-gray-200 px-8 py-4 flex justify-between items-center shadow-xs">
        <h1 className="text-[#34489b] text-[20px] md:text-[22px] font-bold tracking-wide uppercase">
          SRK INFRA BROCHURE DOWNLOAD DATA
        </h1>
        <button
          onClick={handleLogout}
          className="flex items-center gap-2 bg-red-50 text-red-600 hover:bg-red-100 font-semibold text-[14px] px-4 py-2 rounded-lg transition"
        >
          <MdLogout className="text-lg" />
          Logout
        </button>
      </header>

      {/* DASHBOARD CONTENT BODY */}
      <main className="flex-1 max-w-7xl w-full mx-auto p-6 md:p-8 space-y-8">
        
        {/* METRICS CARDS PANEL */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between shadow-xs">
            <div>
              <p className="text-gray-400 text-[14px] font-medium uppercase tracking-wider">Total Leads Gathered</p>
              <h3 className="text-slate-800 text-[32px] font-bold mt-1">{leads.length}</h3>
            </div>
            <div className="p-4 bg-blue-50 text-[#34489b] rounded-xl text-3xl">
              <MdOutlinePeopleAlt />
            </div>
          </div>
          
          <div className="bg-white rounded-xl border border-gray-200 p-6 flex items-center justify-between shadow-xs">
            <div>
              <p className="text-gray-400 text-[14px] font-medium uppercase tracking-wider">Filtered Matches</p>
              <h3 className="text-slate-800 text-[32px] font-bold mt-1">{filteredLeads.length}</h3>
            </div>
            <div className="p-4 bg-emerald-50 text-emerald-600 rounded-xl text-3xl">
              <MdSearch />
            </div>
          </div>
        </div>

        {/* CORE DATA HUB PLATFORM */}
        <div className="bg-white rounded-2xl border border-gray-200 shadow-xs overflow-hidden">
          
          {/* SEARCH AND ACTION CONTROLS */}
          <div className="p-6 border-b border-gray-200 flex flex-col md:flex-row md:items-center justify-between gap-4 bg-slate-50/50">
            <div className="relative flex-1 max-w-md">
              <MdSearch className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 text-xl" />
              <input
                type="text"
                placeholder="Search leads by name, email, or phone number..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-white border border-gray-300 rounded-xl text-[14px] shadow-inner focus:outline-none focus:border-blue-500"
              />
            </div>

            <div className="flex gap-3">
              <button
                onClick={() => {
                  // Allow manual refreshes to always pop up the alert as well
                  hasAlerted.current = false;
                  fetchLeads();
                }}
                className="p-3 text-gray-500 bg-white border border-gray-300 rounded-xl hover:bg-gray-50 shadow-xs transition"
                title="Refresh Table Data"
              >
                <MdRefresh className="text-lg" />
              </button>
              <button
                onClick={exportToCSV}
                disabled={filteredLeads.length === 0}
                className="flex items-center gap-2 bg-[#5cb85c] hover:bg-[#4cae4c] text-white font-semibold text-[14px] px-5 py-2.5 rounded-xl shadow-xs transition disabled:opacity-50"
              >
                <MdDownload className="text-lg" />
                Export to CSV Spreadsheet
              </button>
            </div>
          </div>

          {/* CUSTOM INTERACTIVE TABLE DATA VIEW */}
          <div className="overflow-x-auto">
            {loading ? (
              <div className="text-center py-16 text-gray-500 text-[16px] font-medium">Syncing live lead streams from Supabase database clusters...</div>
            ) : filteredLeads.length === 0 ? (
              <div className="text-center py-16 text-gray-500 text-[16px] font-medium">No system leads record matches found matching search queries.</div>
            ) : (
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-slate-50/70 border-b border-gray-200 text-gray-400 font-semibold text-[13px] tracking-wider uppercase">
                    <th className="py-4 px-6">Name</th>
                    <th className="py-4 px-6">Email Address</th>
                    <th className="py-4 px-6">Mobile Contact Number</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 text-[15px] text-gray-700">
                  {filteredLeads.map((lead, idx) => (
                    <tr key={idx} className="hover:bg-slate-50/50 transition duration-150">
                      <td className="py-4 px-6 font-semibold text-slate-900">{lead.Name || "N/A"}</td>
                      <td className="py-4 px-6 text-gray-600">{lead.Email || "N/A"}</td>
                      <td className="py-4 px-6 text-gray-600 font-mono">{lead["Mobile Number"] || "N/A"}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}

export default AdminDashboard;