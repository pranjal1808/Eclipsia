using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Eclipsia.API.Data;
using Eclipsia.API.Models;

namespace Eclipsia.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class WaterController : ControllerBase
    {
        private readonly AppDbContext _context;
        public WaterController(AppDbContext context) => _context = context;

        [HttpPost]
        public async Task<IActionResult> PostLog([FromBody] WaterLog log)
        {
            _context.WaterLogs.Add(log);
            await _context.SaveChangesAsync();
            return Ok(log);
        }

        [HttpGet("{userId}")]
        public async Task<IActionResult> GetLogs(Guid userId)
        {
            var logs = await _context.WaterLogs.Where(w => w.UserId == userId).ToListAsync();
            return Ok(logs);
        }
    }
}
