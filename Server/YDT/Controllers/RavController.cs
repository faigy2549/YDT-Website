using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using DTOs;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YDT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class RavController : ControllerBase
    {
        private readonly IRavService _ravService;

        public RavController(IRavService ravService)
        {
            _ravService = ravService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rav>>> GetAll()
        {
            var rabbanim = await _ravService.GetAllAsync();
            return Ok(rabbanim);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rav>> GetById(int id)
        {
            var rav = await _ravService.GetByIdAsync(id);
            if (rav == null) return NotFound();
            return Ok(rav);
        }

        [HttpGet("name/{name}")]
        public async Task<ActionResult<Rav>> GetByName(string name)
        {
            var rav = await _ravService.GetByNameAsync(name);
            if (rav == null) return NotFound();
            return Ok(rav);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] RavDTO rav)
        {
            await _ravService.AddAsync(rav);
            return CreatedAtAction(nameof(GetById), new { id = rav.Id }, rav);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RavDTO rav)
        {
            rav.Id = id;
            await _ravService.UpdateAsync(id,rav);
            return NoContent();
        }
    }
}
