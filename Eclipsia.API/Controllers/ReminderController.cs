using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Eclipsia.API.Data;
using Eclipsia.API.Models;

namespace Eclipsia.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ReminderController : ControllerBase
    {
        private readonly AppDbContext _context;
        public ReminderController(AppDbContext context) => _context = context;

        [HttpPost]
        public async Task<IActionResult> PostReminder([FromBody] Reminder reminder)
        {
            _context.Reminders.Add(reminder);
            await _context.SaveChangesAsync();
            return Ok(reminder);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetReminders(Guid userId)
        {
            var reminders = await _context.Reminders.Where(r => r.UserId == userId).ToListAsync();
            return Ok(reminders);
        }
    }
}
