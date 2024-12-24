using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MazalTovController : ControllerBase
    {
        private readonly IMazalTovService _service;

        public MazalTovController(IMazalTovService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<IEnumerable<MazalTov>> GetAll() => await _service.GetAllAsync();

        [HttpGet("{id}")]
        public async Task<IActionResult> GetById(int id)
        {
            var mazalTov = await _service.GetByIdAsync(id);
            if (mazalTov == null) return NotFound();
            return Ok(mazalTov);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] MazalTov mazalTov)
        {
            await _service.AddAsync(mazalTov);
            return Ok(mazalTov);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] MazalTov mazalTov)
        {
            if (id != mazalTov.Id) return BadRequest();
            await _service.UpdateAsync(mazalTov);
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
