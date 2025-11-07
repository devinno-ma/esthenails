"use client"

import type React from "react"

import { useState } from "react"
import { Calendar, Clock, User, Phone, Mail, CheckCircle, XCircle, Trash2, Eye } from "lucide-react"

interface Booking {
  id: string
  clientName: string
  email: string
  phone: string
  service: string
  date: string
  time: string
  status: "pending" | "approved" | "cancelled"
}

export default function AdminDashboard() {
  const [bookings, setBookings] = useState<Booking[]>([
    {
      id: "1",
      clientName: "Sara M.",
      email: "sara@example.com",
      phone: "+212 6XX XXX XXX",
      service: "Gel Manicure",
      date: "2025-01-20",
      time: "10:00",
      status: "pending",
    },
    {
      id: "2",
      clientName: "Nadia B.",
      email: "nadia@example.com",
      phone: "+212 6XX XXX XXX",
      service: "Gel Pedicure",
      date: "2025-01-21",
      time: "14:00",
      status: "approved",
    },
    {
      id: "3",
      clientName: "Youssef L.",
      email: "youssef@example.com",
      phone: "+212 6XX XXX XXX",
      service: "Custom Nail Art",
      date: "2025-01-22",
      time: "11:00",
      status: "approved",
    },
    {
      id: "4",
      clientName: "Leila K.",
      email: "leila@example.com",
      phone: "+212 6XX XXX XXX",
      service: "Nail Extensions",
      date: "2025-01-23",
      time: "15:00",
      status: "pending",
    },
  ])

  const [selectedBooking, setSelectedBooking] = useState<Booking | null>(null)
  const [showDetails, setShowDetails] = useState(false)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [password, setPassword] = useState("")

  const handleApprove = (id: string) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: "approved" } : b)))
  }

  const handleCancel = (id: string) => {
    setBookings(bookings.map((b) => (b.id === id ? { ...b, status: "cancelled" } : b)))
  }

  const handleDelete = (id: string) => {
    setBookings(bookings.filter((b) => b.id !== id))
  }

  const handleViewDetails = (booking: Booking) => {
    setSelectedBooking(booking)
    setShowDetails(true)
  }

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === "admin123") {
      setIsAuthenticated(true)
      setPassword("")
    } else {
      alert("Invalid password")
    }
  }

  const stats = [
    { label: "Total Bookings", value: bookings.length, color: "bg-primary" },
    { label: "Approved", value: bookings.filter((b) => b.status === "approved").length, color: "bg-green-500" },
    { label: "Pending", value: bookings.filter((b) => b.status === "pending").length, color: "bg-yellow-500" },
    { label: "Cancelled", value: bookings.filter((b) => b.status === "cancelled").length, color: "bg-red-500" },
  ]

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary/10 via-background to-accent/10 flex items-center justify-center p-4">
        <div className="bg-card rounded-2xl shadow-2xl p-8 max-w-md w-full">
          <h1 className="text-3xl font-bold text-foreground mb-2 text-center">Admin Dashboard</h1>
          <p className="text-muted-foreground text-center mb-8">Enter your password to access the dashboard</p>

          <form onSubmit={handleLogin} className="space-y-6">
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary"
                placeholder="Enter admin password"
              />
              <p className="text-xs text-muted-foreground mt-2">Demo password: admin123</p>
            </div>
            <button
              type="submit"
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Login
            </button>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <div className="bg-card border-b border-border sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-foreground">ESTHENAILS - Admin Dashboard</h1>
          <button
            onClick={() => setIsAuthenticated(false)}
            className="px-4 py-2 bg-destructive/20 text-destructive rounded-lg font-medium hover:bg-destructive/30 transition-colors"
          >
            Logout
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => (
            <div key={index} className="bg-card rounded-2xl p-6 shadow-lg">
              <p className="text-muted-foreground text-sm mb-2">{stat.label}</p>
              <p
                className={`text-4xl font-bold ${stat.color === "bg-primary" ? "text-primary" : stat.color === "bg-green-500" ? "text-green-600" : stat.color === "bg-yellow-500" ? "text-yellow-600" : "text-red-600"}`}
              >
                {stat.value}
              </p>
            </div>
          ))}
        </div>

        {/* Bookings Table */}
        <div className="bg-card rounded-2xl shadow-lg overflow-hidden">
          <div className="p-6 border-b border-border">
            <h2 className="text-2xl font-bold text-foreground">Nail Service Reservations</h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-muted/50 border-b border-border">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Client</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Service</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Date & Time</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Status</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-foreground">Actions</th>
                </tr>
              </thead>
              <tbody>
                {bookings.map((booking) => (
                  <tr key={booking.id} className="border-b border-border hover:bg-muted/30 transition-colors">
                    <td className="px-6 py-4">
                      <div>
                        <p className="font-semibold text-foreground">{booking.clientName}</p>
                        <p className="text-sm text-muted-foreground">{booking.email}</p>
                      </div>
                    </td>
                    <td className="px-6 py-4 text-foreground">{booking.service}</td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-4 text-sm text-foreground">
                        <span className="flex items-center gap-1">
                          <Calendar size={16} />
                          {new Date(booking.date).toLocaleDateString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock size={16} />
                          {booking.time}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span
                        className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-sm font-medium ${
                          booking.status === "approved"
                            ? "bg-green-100 text-green-700"
                            : booking.status === "pending"
                              ? "bg-yellow-100 text-yellow-700"
                              : "bg-red-100 text-red-700"
                        }`}
                      >
                        {booking.status === "approved" ? (
                          <CheckCircle size={16} />
                        ) : booking.status === "cancelled" ? (
                          <XCircle size={16} />
                        ) : null}
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleViewDetails(booking)}
                          className="p-2 hover:bg-muted rounded-lg transition-colors text-foreground"
                          title="View details"
                        >
                          <Eye size={18} />
                        </button>
                        {booking.status === "pending" && (
                          <button
                            onClick={() => handleApprove(booking.id)}
                            className="p-2 hover:bg-green-100 rounded-lg transition-colors text-green-600"
                            title="Approve"
                          >
                            <CheckCircle size={18} />
                          </button>
                        )}
                        {booking.status !== "cancelled" && (
                          <button
                            onClick={() => handleCancel(booking.id)}
                            className="p-2 hover:bg-red-100 rounded-lg transition-colors text-red-600"
                            title="Cancel"
                          >
                            <XCircle size={18} />
                          </button>
                        )}
                        <button
                          onClick={() => handleDelete(booking.id)}
                          className="p-2 hover:bg-destructive/20 rounded-lg transition-colors text-destructive"
                          title="Delete"
                        >
                          <Trash2 size={18} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Details Modal */}
      {showDetails && selectedBooking && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50">
          <div className="bg-card rounded-2xl shadow-2xl max-w-md w-full p-8 animate-scale-in">
            <h2 className="text-2xl font-bold text-foreground mb-6">Booking Details</h2>

            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3">
                <User size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Client Name</p>
                  <p className="font-semibold text-foreground">{selectedBooking.clientName}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Email</p>
                  <p className="font-semibold text-foreground">{selectedBooking.email}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Phone</p>
                  <p className="font-semibold text-foreground">{selectedBooking.phone}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Calendar size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Service</p>
                  <p className="font-semibold text-foreground">{selectedBooking.service}</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Clock size={20} className="text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Date & Time</p>
                  <p className="font-semibold text-foreground">
                    {new Date(selectedBooking.date).toLocaleDateString()} at {selectedBooking.time}
                  </p>
                </div>
              </div>
            </div>

            <button
              onClick={() => setShowDetails(false)}
              className="w-full py-3 bg-primary text-primary-foreground rounded-lg font-semibold hover:bg-primary/90 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  )
}
