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
    public class RavController : ControllerBase
    {
        private readonly IRavService _ravService;
        private readonly ILogger<RavController> _logger;

        public RavController(IRavService ravService, ILogger<RavController> logger)
        {
            _ravService = ravService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Rav>>> GetAll()
        {
            try
            {
                _logger.LogInformation("Fetching all rabbanim.");
                var rabbanim = await _ravService.GetAllAsync();
                _logger.LogInformation("Successfully retrieved all rabbanim.");
                return Ok(rabbanim);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching all rabbanim.");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Rav>> GetById(int id)
        {
            try
            {
                _logger.LogInformation("Fetching rav by id {RavId}.", id);
                var rav = await _ravService.GetByIdAsync(id);
                if (rav == null)
                {
                    _logger.LogWarning("Rav with id {RavId} not found.", id);
                    return NotFound();
                }
                _logger.LogInformation("Successfully retrieved rav with id {RavId}.", id);
                return Ok(rav);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching rav by id {RavId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("name/{name}")]
        public async Task<ActionResult<Rav>> GetByName(string name)
        {
            try
            {
                _logger.LogInformation("Fetching rav by name {RavName}.", name);
                var rav = await _ravService.GetByNameAsync(name);
                if (rav == null)
                {
                    _logger.LogWarning("Rav with name {RavName} not found.", name);
                    return NotFound();
                }
                _logger.LogInformation("Successfully retrieved rav with name {RavName}.", name);
                return Ok(rav);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching rav by name {RavName}.", name);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] RavDTO rav)
        {
            try
            {
                _logger.LogInformation("Adding a new rav: {RavName}.", rav.Name);
                await _ravService.AddAsync(rav);
                _logger.LogInformation("Successfully added rav: {RavName}.", rav.Name);
                return CreatedAtAction(nameof(GetById), new { id = rav.Id }, rav);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while adding a new rav: {RavName}.", rav.Name);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] RavDTO rav)
        {
            try
            {
                rav.Id = id;
                _logger.LogInformation("Updating rav with id {RavId}.", id);
                await _ravService.UpdateAsync(rav);
                _logger.LogInformation("Successfully updated rav with id {RavId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating rav with id {RavId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                _logger.LogInformation("Deleting rav with id {RavId}.", id);
                await _ravService.DeleteAsync(id);
                _logger.LogInformation("Successfully deleted rav with id {RavId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while deleting rav with id {RavId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
