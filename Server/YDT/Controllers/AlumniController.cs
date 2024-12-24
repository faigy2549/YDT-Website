using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AlumniController : ControllerBase
    {
        private readonly IAlumniService _service;

        public AlumniController(IAlumniService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<Alumni>> GetAllAsync() => await _service.GetAllAsync();

        [HttpGet("{id}")]
        public async Task<IActionResult> GetByIdAsync(int id)
        {
            var alumni = await _service.GetByIdAsync(id);
            if (alumni == null) return NotFound();
            return Ok(alumni);
        }

        [HttpPost]
        public async Task<IActionResult> AddAsync([FromBody] Alumni alumni)
        {
            await _service.AddAsync(alumni);
            return Ok(alumni);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateAsync(int id, [FromBody] Alumni alumni)
        {
            if (id != alumni.Id) return BadRequest();
            await _service.UpdateAsync(alumni);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteAsync(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
