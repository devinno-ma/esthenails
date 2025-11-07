"use client"

import { useState } from "react"

interface CalendarProps {
  onDateSelect: (date: Date) => void
  selectedDate: Date | null
  bookedDates?: string[]
}

export function Calendar({ onDateSelect, selectedDate, bookedDates = [] }: CalendarProps) {
  const [currentMonth, setCurrentMonth] = useState(new Date())

  const getDaysInMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth() + 1, 0).getDate()
  }

  const getFirstDayOfMonth = (date: Date) => {
    return new Date(date.getFullYear(), date.getMonth(), 1).getDay()
  }

  const daysInMonth = getDaysInMonth(currentMonth)
  const firstDay = getFirstDayOfMonth(currentMonth)
  const days = []

  for (let i = 0; i < firstDay; i++) {
    days.push(null)
  }

  for (let i = 1; i <= daysInMonth; i++) {
    days.push(new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i))
  }

  const isDateBooked = (date: Date) => {
    const dateStr = date.toISOString().split("T")[0]
    return bookedDates?.includes(dateStr)
  }

  const isDatePast = (date: Date) => {
    const today = new Date()
    today.setHours(0, 0, 0, 0)
    return date < today
  }

  const isDateSelected = (date: Date) => {
    if (!selectedDate) return false
    return (
      date.getDate() === selectedDate.getDate() &&
      date.getMonth() === selectedDate.getMonth() &&
      date.getFullYear() === selectedDate.getFullYear()
    )
  }

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1))
  }

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1))
  }

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg">
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-bold text-foreground">Select Date</h3>
        <div className="flex gap-2">
          <button onClick={handlePrevMonth} className="p-2 hover:bg-muted rounded-lg transition-all text-xl">
            ←
          </button>
          <button onClick={handleNextMonth} className="p-2 hover:bg-muted rounded-lg transition-all text-xl">
            →
          </button>
        </div>
      </div>

      <div className="mb-4">
        <h4 className="text-center font-semibold text-foreground mb-4">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </h4>

        <div className="grid grid-cols-7 gap-2 mb-2">
          {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map((day) => (
            <div key={day} className="text-center text-xs font-semibold text-muted-foreground py-2">
              {day}
            </div>
          ))}
        </div>

        <div className="grid grid-cols-7 gap-2">
          {days.map((day, index) => (
            <button
              key={index}
              onClick={() => day && !isDatePast(day) && !isDateBooked(day) && onDateSelect(day)}
              disabled={!day || isDatePast(day) || isDateBooked(day)}
              className={`py-2 px-1 rounded-lg text-sm font-medium transition-all ${
                !day
                  ? "invisible"
                  : isDatePast(day)
                    ? "bg-muted text-muted-foreground cursor-not-allowed"
                    : isDateBooked(day)
                      ? "bg-destructive/20 text-destructive cursor-not-allowed"
                      : isDateSelected(day)
                        ? "bg-primary text-primary-foreground font-bold"
                        : "bg-muted hover:bg-primary/20 text-foreground hover:text-primary cursor-pointer"
              }`}
            >
              {day?.getDate()}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
