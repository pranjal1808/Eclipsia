namespace Eclipsia.API.Models
{
    public class Reminder
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public string Type { get; set; } = string.Empty; // e.g., "period", "medication"
        public string Message { get; set; } = string.Empty;
        public DateTime TimeUtc { get; set; }

        public User? User { get; set; }
    }
}