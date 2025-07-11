namespace Eclipsia.API.Models
{
    public class WaterLog
    {
        public int Id { get; set; }
        public Guid UserId { get; set; }
        public DateTime Date { get; set; }
        public int CupsDrank { get; set; }

        public User? User { get; set; }
    }
}
