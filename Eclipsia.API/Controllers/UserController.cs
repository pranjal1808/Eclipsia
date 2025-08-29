using Microsoft.AspNetCore.Mvc;
using Eclipsia.API.Data;
using Eclipsia.API.Models;
using Eclipsia.API.Services;
using Microsoft.EntityFrameworkCore;

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

        [HttpPost("register")]
        public async Task<IActionResult> Register([FromBody] RegisterRequest request)
        {
            // Check if user already exists
            var existingUser = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (existingUser != null)
            {
                return BadRequest("User with this email already exists");
            }

            // Create new user
            var user = new User
            {
                Id = Guid.NewGuid(),
                Email = request.Email,
                PasswordHash = PasswordHasher.HashPassword(request.Password),
                PCOSFlag = request.PCOSFlag,
                PregnancyMode = request.PregnancyMode,
                CreatedAt = DateTime.UtcNow
            };

            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return Ok(new { message = "User registered successfully", userId = user.Id });
        }

        [HttpPost("login")]
        public async Task<IActionResult> Login([FromBody] LoginRequest request)
        {
            // Find user by email
            var user = await _context.Users.FirstOrDefaultAsync(u => u.Email == request.Email);
            if (user == null)
            {
                return Unauthorized("Invalid email or password");
            }

            // Verify password
            if (!PasswordHasher.VerifyPassword(request.Password, user.PasswordHash))
            {
                return Unauthorized("Invalid email or password");
            }

            return Ok(new { message = "Login successful", userId = user.Id, email = user.Email });
        }
    }

    public class RegisterRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
        public bool PCOSFlag { get; set; }
        public bool PregnancyMode { get; set; }
    }

    public class LoginRequest
    {
        public string Email { get; set; } = string.Empty;
        public string Password { get; set; } = string.Empty;
    }
}
