"use client"

interface TimePickerProps {
  onTimeSelect: (time: string) => void
  selectedTime: string | null
  bookedTimes?: string[]
}

export function TimePicker({ onTimeSelect, selectedTime, bookedTimes = [] }: TimePickerProps) {
  const timeSlots = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"]

  return (
    <div className="bg-card rounded-2xl p-6 shadow-lg">
      <h3 className="text-lg font-bold text-foreground mb-4">Select Time</h3>
      <div className="grid grid-cols-3 gap-3">
        {timeSlots.map((time) => (
          <button
            key={time}
            onClick={() => onTimeSelect(time)}
            disabled={bookedTimes?.includes(time)}
            className={`py-3 px-4 rounded-lg font-medium transition-all ${
              bookedTimes?.includes(time)
                ? "bg-destructive/20 text-destructive cursor-not-allowed opacity-50"
                : selectedTime === time
                  ? "bg-primary text-primary-foreground shadow-lg scale-105"
                  : "bg-muted hover:bg-primary/20 text-foreground hover:text-primary hover:shadow-md"
            }`}
          >
            {time}
          </button>
        ))}
      </div>
    </div>
  )
}
