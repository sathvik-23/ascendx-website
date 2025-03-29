import { cn } from "@/lib/utils"

interface TimelineEvent {
  year: string
  title: string
  description: string
}

interface TimelineProps {
  events: TimelineEvent[]
  className?: string
}

export function Timeline({ events, className }: TimelineProps) {
  return (
    <div
      className={cn(
        "relative space-y-8 before:absolute before:inset-0 before:ml-5 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:via-primary/70 before:to-primary/30",
        className,
      )}
    >
      {events.map((event, index) => (
        <div key={index} className="relative flex items-start space-x-4">
          <div className="relative z-10 flex h-10 w-10 items-center justify-center rounded-full bg-primary text-primary-foreground shadow">
            {event.year}
          </div>
          <div className="flex-grow pt-1">
            <div className="rounded-lg bg-card p-4 shadow">
              <h3 className="font-bold">{event.title}</h3>
              <p className="text-muted-foreground text-sm">{event.description}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

