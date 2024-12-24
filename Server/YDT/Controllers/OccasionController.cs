using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class OccasionController : ControllerBase
    {
        private readonly IOccasionService _service;

        public OccasionController(IOccasionService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<Occasion>> GetAll() => await _service.GetAllAsync();

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var occasion = await _service.GetByIdAsync(id);
            if (occasion == null) return NotFound();
            return Ok(occasion);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Occasion occasion)
        {
            await _service.AddAsync(occasion);
            return Ok(occasion);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Occasion occasion)
        {
            if (id != occasion.Id) return BadRequest();
            await _service.UpdateAsync(occasion);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
