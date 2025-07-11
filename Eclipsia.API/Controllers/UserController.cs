using Microsoft.AspNetCore.Mvc;
using Eclipsia.API.Data;
using Eclipsia.API.Models;

namespace Eclipsia.API.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly AppDbContext _context;
        public UserController(AppDbContext context) => _context = context;

        [HttpGet("{id}")]
        public async Task<IActionResult> GetUser(Guid id) => Ok(await _context.Users.FindAsync(id));
    }
}