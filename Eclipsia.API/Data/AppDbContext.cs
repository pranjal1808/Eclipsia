using Microsoft.EntityFrameworkCore;
using Eclipsia.API.Models;

namespace Eclipsia.API.Data
{
    public class AppDbContext : DbContext
    {
        public AppDbContext(DbContextOptions<AppDbContext> options) : base(options) { }

        public DbSet<User> Users => Set<User>();
        public DbSet<PeriodLog> PeriodLogs => Set<PeriodLog>();
        public DbSet<WaterLog> WaterLogs => Set<WaterLog>();
        public DbSet<Reminder> Reminders => Set<Reminder>();
    }
}
