using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace YDT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShiurController : ControllerBase
    {
        private readonly IShiurService _shiurService;

        public ShiurController(IShiurService shiurService)
        {
            _shiurService = shiurService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Shiur>>> GetAll()
        {
            var shiurim = await _shiurService.GetAllAsync();
            return Ok(shiurim);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Shiur>> GetById(int id)
        {
            var shiur = await _shiurService.GetByIdAsync(id);
            if (shiur == null) return NotFound();
            return Ok(shiur);
        }

        [HttpGet("length")]
        public async Task<ActionResult<IEnumerable<Shiur>>> GetByLength([FromQuery] int minLength, [FromQuery] int maxLength)
        {
            var shiurim = await _shiurService.GetByLengthAsync(minLength, maxLength);
            return Ok(shiurim);
        }

        [HttpGet("year/{year}")]
        public async Task<ActionResult<IEnumerable<Shiur>>> GetByYear(int year)
        {
            var shiurim = await _shiurService.GetByYearAsync(year);
            return Ok(shiurim);
        }

        [HttpGet("rav/{ravId}")]
        public async Task<ActionResult<IEnumerable<Shiur>>> GetByRavId(int ravId)
        {
            var shiurim = await _shiurService.GetByRavIdAsync(ravId);
            return Ok(shiurim);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Shiur shiur)
        {
            await _shiurService.AddAsync(shiur);
            return CreatedAtAction(nameof(GetById), new { id = shiur.Id }, shiur);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Shiur shiur)
        {
            shiur.Id = id;
            await _shiurService.UpdateAsync(shiur);
            return NoContent();
        }
        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            await _shiurService.DeleteAsync(id);
            return NoContent();
        }
    }
}

