namespace Eclipsia.API.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Email { get; set; } = string.Empty;
        public string PasswordHash { get; set; } = string.Empty;
        public bool PCOSFlag { get; set; }
        public bool PregnancyMode { get; set; }
        public DateTime CreatedAt { get; set; } = DateTime.UtcNow;

        public ICollection<PeriodLog>? PeriodLogs { get; set; }
        public ICollection<WaterLog>? WaterLogs { get; set; }
        public ICollection<Reminder>? Reminders { get; set; }
    }
}
