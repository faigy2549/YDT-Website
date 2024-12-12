using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using DTOs;
using System;
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
            try
            {
                var rabbanim = await _ravService.GetAllAsync();
                return Ok(rabbanim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rav>> GetById(int id)
        {
            try
            {
                var rav = await _ravService.GetByIdAsync(id);
                if (rav == null) return NotFound();
                return Ok(rav);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("name/{name}")]
        public async Task<ActionResult<Rav>> GetByName(string name)
        {
            try
            {
                var rav = await _ravService.GetByNameAsync(name);
                if (rav == null) return NotFound();
                return Ok(rav);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] RavDTO rav)
        {
            try
            {
                await _ravService.AddAsync(rav);
                return CreatedAtAction(nameof(GetById), new { id = rav.Id }, rav);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RavDTO rav)
        {
            try
            {
                rav.Id = id;
                await _ravService.UpdateAsync(rav);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                await _ravService.DeleteAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
