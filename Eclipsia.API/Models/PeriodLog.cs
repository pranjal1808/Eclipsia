namespace Eclipsia.API.Models
{
    public class PeriodLog
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime StartDate { get; set; }
        public DateTime EndDate { get; set; }
        public string FlowLevel { get; set; } = string.Empty;
        public string? Notes { get; set; }

        public User? User { get; set; }
    }
}
