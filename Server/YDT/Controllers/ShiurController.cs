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
    public class ShiurController : ControllerBase
    {
        private readonly IShiurService _shiurService;

        public ShiurController(IShiurService shiurService)
        {
            _shiurService = shiurService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetAll()
        {
            try
            {
                var shiurim = await _shiurService.GetAllAsync();
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ShiurDTO>> GetById(int id)
        {
            try
            {
                var shiur = await _shiurService.GetByIdAsync(id);
                if (shiur == null) return NotFound();
                return Ok(shiur);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("length")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByLength([FromQuery] TimeSpan minLength, [FromQuery] TimeSpan maxLength)
        {
            try
            {
                var shiurim = await _shiurService.GetByLengthAsync(minLength, maxLength);
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("year/{year}")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByYear(int year)
        {
            try
            {
                var shiurim = await _shiurService.GetByYearAsync(year);
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("rav/{ravId}")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByRavId(int ravId)
        {
            try
            {
                var shiurim = await _shiurService.GetByRavIdAsync(ravId);
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] ShiurDTO shiur)
        {
            try
            {
                await _shiurService.AddAsync(shiur);
                return CreatedAtAction(nameof(GetById), new { id = shiur.Id }, shiur);
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ShiurDTO shiur)
        {
            try
            {
                shiur.Id = id;
                await _shiurService.UpdateAsync(shiur);
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
                await _shiurService.DeleteAsync(id);
                return Ok();
            }
            catch (Exception ex)
            {
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
