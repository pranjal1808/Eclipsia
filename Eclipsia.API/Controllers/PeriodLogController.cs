using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Eclipsia.API.Data;
using Eclipsia.API.Models;

namespace Eclipsia.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class PeriodLogController : ControllerBase
    {
        private readonly AppDbContext _context;
        public PeriodLogController(AppDbContext context) => _context = context;

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetLogs(Guid userId)
        {
            var logs = await _context.PeriodLogs.Where(p => p.UserId == userId).ToListAsync();
            return Ok(logs);
        }

        [HttpPost]
        public async Task<IActionResult> PostLog([FromBody] PeriodLog log)
        {
            _context.PeriodLogs.Add(log);
            await _context.SaveChangesAsync();
            return Ok(log);
        }
    }
}