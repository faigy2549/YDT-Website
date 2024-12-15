using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;
using DTOs;
using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using Microsoft.Extensions.Logging;

namespace YDT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class ShiurController : ControllerBase
    {
        private readonly IShiurService _shiurService;
        private readonly ILogger<ShiurController> _logger;

        public ShiurController(IShiurService shiurService, ILogger<ShiurController> logger)
        {
            _shiurService = shiurService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetAll()
        {
            try
            {
                _logger.LogInformation("Fetching all shiurim.");
                var shiurim = await _shiurService.GetAllAsync();
                _logger.LogInformation("Successfully retrieved all shiurim.");
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching all shiurim.");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<ShiurDTO>> GetById(int id)
        {
            try
            {
                _logger.LogInformation("Fetching shiur by id {ShiurId}.", id);
                var shiur = await _shiurService.GetByIdAsync(id);
                if (shiur == null)
                {
                    _logger.LogWarning("Shiur with id {ShiurId} not found.", id);
                    return NotFound();
                }
                _logger.LogInformation("Successfully retrieved shiur with id {ShiurId}.", id);
                return Ok(shiur);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching shiur by id {ShiurId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("length")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByLength([FromQuery] TimeSpan minLength, [FromQuery] TimeSpan maxLength)
        {
            try
            {
                _logger.LogInformation("Fetching shiurim by length between {MinLength} and {MaxLength}.", minLength, maxLength);
                var shiurim = await _shiurService.GetByLengthAsync(minLength, maxLength);
                _logger.LogInformation("Successfully retrieved all shiurim within the specified length range.");
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching shiurim by length.");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("year/{year}")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByYear(int year)
        {
            try
            {
                _logger.LogInformation("Fetching shiurim by year {Year}.", year);
                var shiurim = await _shiurService.GetByYearAsync(year);
                _logger.LogInformation($"Successfully retrieved all shiurim for the year {year}.");
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching shiurim by year {Year}.", year);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("rav/{ravId}")]
        public async Task<ActionResult<IEnumerable<ShiurDTO>>> GetByRavId(int ravId)
        {
            try
            {
                _logger.LogInformation("Fetching shiurim by RavId {RavId}.", ravId);
                var shiurim = await _shiurService.GetByRavIdAsync(ravId);
                _logger.LogInformation($"Successfully retrieved shiurim for RavId {ravId}.");
                return Ok(shiurim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error fetching shiurim by RavId {RavId}.", ravId);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] ShiurDTO shiur)
        {
            try
            {
                _logger.LogInformation($"Adding new shiur: {shiur}.");
                await _shiurService.AddAsync(shiur);
                _logger.LogInformation($"Successfully added shiur: {shiur}.");
                return CreatedAtAction(nameof(GetById), new { id = shiur.Id }, shiur);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error adding new shiur.");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] ShiurDTO shiur)
        {
            try
            {
                shiur.Id = id;
                _logger.LogInformation("Updating shiur with id {ShiurId}.", id);
                await _shiurService.UpdateAsync(shiur);
                _logger.LogInformation("Successfully updated shiur with id {ShiurId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error updating shiur with id {ShiurId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                _logger.LogInformation("Deleting shiur with id {ShiurId}.", id);
                await _shiurService.DeleteAsync(id);
                _logger.LogInformation("Successfully deleted shiur with id {ShiurId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "Error deleting shiur with id {ShiurId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
