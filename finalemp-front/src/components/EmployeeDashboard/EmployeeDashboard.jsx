// import "./EmployeeDashboard.css";
// "use client"

// import { useState } from "react"
// import {
//   Calendar,
//   DollarSign,
//   Clock,
//   LogOut,
//   Download,
//   Plus,
//   CheckCircle,
//   AlertCircle,
//   FileText,
//   Settings,
//   User,
// } from "lucide-react"

// const EmployeeDashboard = ({ user, onLogout }) => {
//   const [activeTab, setActiveTab] = useState("overview")

//   // Mock data
//   const recentPayslips = [
//     { id: 1, month: "November 2024", amount: 6250, status: "Paid", date: "2024-11-30" },
//     { id: 2, month: "October 2024", amount: 6250, status: "Paid", date: "2024-10-31" },
//     { id: 3, month: "September 2024", amount: 6250, status: "Paid", date: "2024-09-30" },
//   ]

//   const leaveBalance = {
//     vacation: { used: 8, total: 20 },
//     sick: { used: 3, total: 10 },
//     personal: { used: 2, total: 5 },
//   }

//   const myLeaveRequests = [
//     { id: 1, type: "Vacation", dates: "Dec 20-24, 2024", status: "Pending", reason: "Holiday vacation" },
//     { id: 2, type: "Sick Leave", dates: "Nov 15, 2024", status: "Approved", reason: "Medical appointment" },
//   ]

//   const attendanceData = [
//     { date: "2024-12-16", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8.5", status: "Present" },
//     { date: "2024-12-15", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8.5", status: "Late" },
//     { date: "2024-12-14", checkIn: "08:45 AM", checkOut: "05:15 PM", hours: "8.5", status: "Present" },
//     { date: "2024-12-13", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8.5", status: "Present" },
//   ]

//   const TabButton = ({ id, label, isActive, onClick }) => (
//     <button
//       onClick={() => onClick(id)}
//       className={`px-4 py-2 rounded-lg font-medium transition-colors ${
//         isActive ? "bg-blue-600 text-white" : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
//       }`}
//     >
//       {label}
//     </button>
//   )

//   const StatCard = ({ title, value, subtitle, icon: Icon }) => (
//     <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//       <div className="flex items-center justify-between mb-4">
//         <h3 className="text-sm font-medium text-gray-600">{title}</h3>
//         <Icon className="h-5 w-5 text-gray-400" />
//       </div>
//       <div className="text-2xl font-bold text-gray-900 mb-1">{value}</div>
//       <p className="text-sm text-gray-600">{subtitle}</p>
//     </div>
//   )

//   return (
//     <div className="min-h-screen bg-gray-50">
//       {/* Header */}
//       <header className="bg-white border-b border-gray-200">
//         <div className="flex h-16 items-center justify-between px-6">
//           <div className="flex items-center gap-4">
//             <h1 className="text-xl font-semibold text-gray-900">Employee Portal</h1>
//           </div>
//           <div className="flex items-center gap-4">
//             <span className="text-sm text-gray-600">Welcome, {user.name}</span>
//             <button
//               onClick={onLogout}
//               className="flex items-center gap-2 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 border border-gray-300 rounded-lg hover:bg-gray-50"
//             >
//               <LogOut className="h-4 w-4" />
//               Logout
//             </button>
//           </div>
//         </div>
//       </header>

//       <div className="p-6">
//         {/* Tab Navigation */}
//         <div className="flex gap-2 mb-6 overflow-x-auto">
//           <TabButton id="overview" label="Overview" isActive={activeTab === "overview"} onClick={setActiveTab} />
//           <TabButton id="payslips" label="Payslips" isActive={activeTab === "payslips"} onClick={setActiveTab} />
//           <TabButton id="leaves" label="Leave" isActive={activeTab === "leaves"} onClick={setActiveTab} />
//           <TabButton id="attendance" label="Attendance" isActive={activeTab === "attendance"} onClick={setActiveTab} />
//           <TabButton id="profile" label="Profile" isActive={activeTab === "profile"} onClick={setActiveTab} />
//         </div>

//         {/* Overview Tab */}
//         {activeTab === "overview" && (
//           <div className="space-y-6">
//             {/* Quick Stats */}
//             <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
//               <StatCard title="This Month" value="$6,250" subtitle="Gross salary" icon={DollarSign} />
//               <StatCard
//                 title="Leave Balance"
//                 value={leaveBalance.vacation.total - leaveBalance.vacation.used}
//                 subtitle="Vacation days left"
//                 icon={Calendar}
//               />
//               <StatCard title="Attendance" value="96%" subtitle="This month" icon={Clock} />
//               <StatCard title="Pending" value="1" subtitle="Leave request" icon={AlertCircle} />
//             </div>

//             {/* Recent Activity */}
//             <div className="grid gap-6 md:grid-cols-2">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Recent Payslips</h3>
//                 <div className="space-y-4">
//                   {recentPayslips.slice(0, 3).map((payslip) => (
//                     <div key={payslip.id} className="flex items-center justify-between">
//                       <div>
//                         <p className="font-medium">{payslip.month}</p>
//                         <p className="text-sm text-gray-600">{payslip.date}</p>
//                       </div>
//                       <div className="flex items-center gap-3">
//                         <span className="font-medium">${payslip.amount.toLocaleString()}</span>
//                         <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
//                           <CheckCircle className="h-3 w-3" />
//                           {payslip.status}
//                         </span>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Leave Summary</h3>
//                 <div className="space-y-4">
//                   {Object.entries(leaveBalance).map(([type, balance]) => (
//                     <div key={type} className="space-y-2">
//                       <div className="flex justify-between text-sm">
//                         <span className="capitalize">{type}</span>
//                         <span>
//                           {balance.used}/{balance.total} days
//                         </span>
//                       </div>
//                       <div className="w-full bg-gray-200 rounded-full h-2">
//                         <div
//                           className="bg-blue-600 h-2 rounded-full"
//                           style={{ width: `${(balance.used / balance.total) * 100}%` }}
//                         />
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Payslips Tab */}
//         {activeTab === "payslips" && (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold">Payslip History</h3>
//               <p className="text-gray-600">Download and view your salary statements</p>
//             </div>
//             <div className="p-6">
//               <div className="space-y-4">
//                 {recentPayslips.map((payslip) => (
//                   <div
//                     key={payslip.id}
//                     className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
//                   >
//                     <div className="flex items-center gap-4">
//                       <div className="h-10 w-10 bg-blue-100 rounded-lg flex items-center justify-center">
//                         <FileText className="h-5 w-5 text-blue-600" />
//                       </div>
//                       <div>
//                         <p className="font-medium">{payslip.month}</p>
//                         <p className="text-sm text-gray-600">Paid on {payslip.date}</p>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-4">
//                       <div className="text-right">
//                         <p className="font-medium">${payslip.amount.toLocaleString()}</p>
//                         <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full flex items-center gap-1">
//                           <CheckCircle className="h-3 w-3" />
//                           {payslip.status}
//                         </span>
//                       </div>
//                       <button className="flex items-center gap-2 px-3 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//                         <Download className="h-4 w-4" />
//                         Download
//                       </button>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Leave Tab */}
//         {activeTab === "leaves" && (
//           <div className="space-y-6">
//             <div className="flex justify-between items-center">
//               <div>
//                 <h2 className="text-2xl font-bold">Leave Management</h2>
//                 <p className="text-gray-600">Apply for leave and track your requests</p>
//               </div>
//               <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                 <Plus className="h-4 w-4" />
//                 Apply for Leave
//               </button>
//             </div>

//             <div className="grid gap-6 md:grid-cols-2">
//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Leave Balance</h3>
//                 <div className="space-y-4">
//                   {Object.entries(leaveBalance).map(([type, balance]) => (
//                     <div key={type} className="flex items-center justify-between p-3 border border-gray-200 rounded-lg">
//                       <div>
//                         <p className="font-medium capitalize">{type} Leave</p>
//                         <p className="text-sm text-gray-600">
//                           {balance.used} used of {balance.total} days
//                         </p>
//                       </div>
//                       <div className="text-right">
//                         <p className="text-2xl font-bold">{balance.total - balance.used}</p>
//                         <p className="text-xs text-gray-600">days left</p>
//                       </div>
//                     </div>
//                   ))}
//                 </div>
//               </div>

//               <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
//                 <h3 className="text-lg font-semibold mb-4">Apply for Leave</h3>
//                 <form className="space-y-4">
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Leave Type</label>
//                     <select className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent">
//                       <option>Select leave type</option>
//                       <option>Vacation</option>
//                       <option>Sick Leave</option>
//                       <option>Personal</option>
//                     </select>
//                   </div>
//                   <div className="grid grid-cols-2 gap-4">
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
//                       <input
//                         type="date"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                     <div>
//                       <label className="block text-sm font-medium text-gray-700 mb-2">End Date</label>
//                       <input
//                         type="date"
//                         className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       />
//                     </div>
//                   </div>
//                   <div>
//                     <label className="block text-sm font-medium text-gray-700 mb-2">Reason</label>
//                     <textarea
//                       className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                       rows="3"
//                       placeholder="Please provide a reason for your leave..."
//                     />
//                   </div>
//                   <button
//                     type="submit"
//                     className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700"
//                   >
//                     Submit Request
//                   </button>
//                 </form>
//               </div>
//             </div>

//             <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//               <div className="p-6 border-b border-gray-200">
//                 <h3 className="text-lg font-semibold">My Leave Requests</h3>
//                 <p className="text-gray-600">Track your submitted leave applications</p>
//               </div>
//               <div className="p-6">
//                 <div className="space-y-4">
//                   {myLeaveRequests.map((request) => (
//                     <div
//                       key={request.id}
//                       className="flex items-center justify-between p-4 border border-gray-200 rounded-lg"
//                     >
//                       <div>
//                         <div className="flex items-center gap-3 mb-2">
//                           <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
//                             {request.type}
//                           </span>
//                           <span className="font-medium">{request.dates}</span>
//                         </div>
//                         <p className="text-sm text-gray-600">{request.reason}</p>
//                       </div>
//                       <span
//                         className={`px-3 py-1 text-xs rounded-full flex items-center gap-1 ${
//                           request.status === "Approved"
//                             ? "bg-green-100 text-green-800"
//                             : "bg-yellow-100 text-yellow-800"
//                         }`}
//                       >
//                         {request.status === "Approved" && <CheckCircle className="h-3 w-3" />}
//                         {request.status === "Pending" && <Clock className="h-3 w-3" />}
//                         {request.status}
//                       </span>
//                     </div>
//                   ))}
//                 </div>
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Attendance Tab */}
//         {activeTab === "attendance" && (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold">Attendance Record</h3>
//               <p className="text-gray-600">Your daily check-in and check-out times</p>
//             </div>
//             <div className="p-6">
//               <div className="space-y-4">
//                 {attendanceData.map((record, index) => (
//                   <div key={index} className="flex items-center justify-between p-4 border border-gray-200 rounded-lg">
//                     <div className="flex items-center gap-4">
//                       <div className="text-center">
//                         <p className="font-medium">{record.date}</p>
//                         <span
//                           className={`px-2 py-1 text-xs rounded-full mt-1 ${
//                             record.status === "Present"
//                               ? "bg-green-100 text-green-800"
//                               : "bg-yellow-100 text-yellow-800"
//                           }`}
//                         >
//                           {record.status}
//                         </span>
//                       </div>
//                     </div>
//                     <div className="flex items-center gap-8">
//                       <div className="text-center">
//                         <p className="text-xs text-gray-600">Check In</p>
//                         <p className="font-medium">{record.checkIn}</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="text-xs text-gray-600">Check Out</p>
//                         <p className="font-medium">{record.checkOut}</p>
//                       </div>
//                       <div className="text-center">
//                         <p className="text-xs text-gray-600">Hours</p>
//                         <p className="font-medium">{record.hours}</p>
//                       </div>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>
//         )}

//         {/* Profile Tab */}
//         {activeTab === "profile" && (
//           <div className="bg-white rounded-xl shadow-sm border border-gray-100">
//             <div className="p-6 border-b border-gray-200">
//               <h3 className="text-lg font-semibold">Personal Information</h3>
//               <p className="text-gray-600">Update your profile details</p>
//             </div>
//             <div className="p-6 space-y-6">
//               <div className="flex items-center gap-6">
//                 <div className="h-20 w-20 bg-blue-100 rounded-full flex items-center justify-center">
//                   <User className="h-10 w-10 text-blue-600" />
//                 </div>
//                 <div>
//                   <h3 className="text-lg font-semibold">{user.name}</h3>
//                   <p className="text-gray-600">{user.role}</p>
//                   <p className="text-sm text-gray-600">Employee ID: {user.employeeId}</p>
//                 </div>
//               </div>

//               <div className="grid gap-4 md:grid-cols-2">
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
//                   <input
//                     type="email"
//                     value={user.email}
//                     readOnly
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Phone</label>
//                   <input
//                     type="tel"
//                     placeholder="+1 (555) 123-4567"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Department</label>
//                   <input
//                     type="text"
//                     value={user.department}
//                     readOnly
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Manager</label>
//                   <input
//                     type="text"
//                     value="Sarah Johnson"
//                     readOnly
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Start Date</label>
//                   <input
//                     type="text"
//                     value="2023-01-15"
//                     readOnly
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg bg-gray-50"
//                   />
//                 </div>
//                 <div>
//                   <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
//                   <input
//                     type="text"
//                     placeholder="New York, NY"
//                     className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
//                   />
//                 </div>
//               </div>

//               <div className="flex gap-4">
//                 <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
//                   <Settings className="h-4 w-4" />
//                   Update Profile
//                 </button>
//                 <button className="px-4 py-2 border border-gray-300 rounded-lg hover:bg-gray-50">
//                   Change Password
//                 </button>
//               </div>
//             </div>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default EmployeeDashboard
// import styles from "../styles/EmployeeDashboard.module.css";
// import PayslipCard from "./modules/PayslipCard";
// import LeaveCard from "./modules/LeaveCard";
// import AttendanceCard from "./modules/AttendanceCard";
// import ProfileCard from "./modules/ProfileCard";
// import { useState } from "react";
// import { Users, Calendar, Clock, DollarSign, LogOut, Plus, CheckCircle, AlertCircle, FileText, Settings } from "lucide-react";

// import TabButton from "./TabButton";
// import StatCard from "./StatCard";
// import PayslipCard from "./PayslipCard";
// import LeaveCard from "./LeaveCard";
// import AttendanceCard from "./AttendanceCard";
// import ProfileCard from "./ProfileCard";

// import styles from "../styles/EmployeeDashboard.module.css";

// const EmployeeDashboard = ({ user, onLogout }) => {
//   const [activeTab, setActiveTab] = useState("overview");

//   // Mock data
//   const recentPayslips = [
//     { id: 1, month: "November 2024", amount: 6250, status: "Paid", date: "2024-11-30" },
//     { id: 2, month: "October 2024", amount: 6250, status: "Paid", date: "2024-10-31" },
//     { id: 3, month: "September 2024", amount: 6250, status: "Paid", date: "2024-09-30" },
//   ];

//   const leaveBalance = {
//     vacation: { used: 8, total: 20 },
//     sick: { used: 3, total: 10 },
//     personal: { used: 2, total: 5 },
//   };

//   const myLeaveRequests = [
//     { id: 1, type: "Vacation", dates: "Dec 20-24, 2024", status: "Pending", reason: "Holiday vacation" },
//     { id: 2, type: "Sick Leave", dates: "Nov 15, 2024", status: "Approved", reason: "Medical appointment" },
//   ];

//   const attendanceData = [
//     { date: "2024-12-16", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8.5", status: "Present" },
//     { date: "2024-12-15", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8.5", status: "Late" },
//   ];

//   return (
//     <div className={styles.dashboard}>
//       {/* Header */}
//       <header className={styles.header}>
//         <h1>Employee Portal</h1>
//         <div className={styles.userSection}>
//           <span>Welcome, {user.name}</span>
//           <button onClick={onLogout}><LogOut /> Logout</button>
//         </div>
//       </header>

//       {/* Tabs */}
//       <div className={styles.tabNav}>
//         <TabButton id="overview" label="Overview" isActive={activeTab === "overview"} onClick={setActiveTab} />
//         <TabButton id="payslips" label="Payslips" isActive={activeTab === "payslips"} onClick={setActiveTab} />
//         <TabButton id="leaves" label="Leave" isActive={activeTab === "leaves"} onClick={setActiveTab} />
//         <TabButton id="attendance" label="Attendance" isActive={activeTab === "attendance"} onClick={setActiveTab} />
//         <TabButton id="profile" label="Profile" isActive={activeTab === "profile"} onClick={setActiveTab} />
//       </div>

//       {/* Tab Content */}
//       {activeTab === "overview" && (
//         <div className={styles.grid4}>
//           <StatCard title="This Month" value="$6,250" subtitle="Gross salary" icon={DollarSign} />
//           <StatCard title="Leave Balance" value={leaveBalance.vacation.total - leaveBalance.vacation.used} subtitle="Vacation days left" icon={Calendar} />
//           <StatCard title="Attendance" value="96%" subtitle="This month" icon={Clock} />
//           <StatCard title="Pending" value="1" subtitle="Leave request" icon={AlertCircle} />
//         </div>
//       )}

//       {activeTab === "payslips" && <PayslipCard recentPayslips={recentPayslips} />}
//       {activeTab === "leaves" && <LeaveCard leaveBalance={leaveBalance} myLeaveRequests={myLeaveRequests} />}
//       {activeTab === "attendance" && <AttendanceCard attendanceData={attendanceData} />}
//       {activeTab === "profile" && <ProfileCard user={user} />}
//     </div>
//   );
// };

// export default EmployeeDashboard;

import { useState } from "react";
import { Users, Calendar, Clock, DollarSign, LogOut, Plus, CheckCircle, AlertCircle, FileText, Settings } from "lucide-react";

import styles from "../styles/EmployeeDashboard.module.css";
import TabButton from "./TabButton";
import StatCard from "./StatCard";
import Overview from "./Overview";
import PayslipCard from "./PayslipCard";
import LeaveCard from "./LeaveCard";
import AttendanceCard from "./AttendanceCard";
import ProfileCard from "./ProfileCard";

const EmployeeDashboard = ({ user, onLogout }) => {
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data
  const recentPayslips = [
    { id: 1, month: "November 2024", amount: 6250, status: "Paid", date: "2024-11-30" },
    { id: 2, month: "October 2024", amount: 6250, status: "Paid", date: "2024-10-31" },
    { id: 3, month: "September 2024", amount: 6250, status: "Paid", date: "2024-09-30" },
  ];

  const leaveBalance = {
    vacation: { used: 8, total: 20 },
    sick: { used: 3, total: 10 },
    personal: { used: 2, total: 5 },
  };

  const myLeaveRequests = [
    { id: 1, type: "Vacation", dates: "Dec 20-24, 2024", status: "Pending", reason: "Holiday vacation" },
    { id: 2, type: "Sick Leave", dates: "Nov 15, 2024", status: "Approved", reason: "Medical appointment" },
  ];

  const attendanceData = [
    { date: "2024-12-16", checkIn: "09:00 AM", checkOut: "05:30 PM", hours: "8.5", status: "Present" },
    { date: "2024-12-15", checkIn: "09:15 AM", checkOut: "05:45 PM", hours: "8.5", status: "Late" },
  ];

  return (
    <div className={styles.dashboard}>
      {/* Header */}
      <header className={styles.header}>
        <h1>Employee Portal</h1>
        <div className={styles.userSection}>
          <span>Welcome, {user.name}</span>
          <button onClick={onLogout}><LogOut /> Logout</button>
        </div>
      </header>

      {/* Tabs */}
      <div className={styles.tabNav}>
        <TabButton id="overview" label="Overview" isActive={activeTab === "overview"} onClick={setActiveTab} />
        <TabButton id="payslips" label="Payslips" isActive={activeTab === "payslips"} onClick={setActiveTab} />
        <TabButton id="leaves" label="Leave" isActive={activeTab === "leaves"} onClick={setActiveTab} />
        <TabButton id="attendance" label="Attendance" isActive={activeTab === "attendance"} onClick={setActiveTab} />
        <TabButton id="profile" label="Profile" isActive={activeTab === "profile"} onClick={setActiveTab} />
      </div>

      {/* Tab Content */}
      
      {activeTab === "overview" && <Overview leaveBalance={leaveBalance} recentPayslips={recentPayslips} />}

      {activeTab === "payslips" && <PayslipCard recentPayslips={recentPayslips} />}
      {activeTab === "leaves" && <LeaveCard leaveBalance={leaveBalance} myLeaveRequests={myLeaveRequests} />}
      {activeTab === "attendance" && <AttendanceCard attendanceData={attendanceData} />}
      {activeTab === "profile" && <ProfileCard user={user} />}
    </div>
  );
};

export default EmployeeDashboard;

