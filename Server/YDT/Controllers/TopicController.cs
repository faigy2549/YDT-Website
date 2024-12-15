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
    public class TopicController : ControllerBase
    {
        private readonly ITopicService _topicService;
        private readonly ILogger<TopicController> _logger;

        public TopicController(ITopicService topicService, ILogger<TopicController> logger)
        {
            _topicService = topicService;
            _logger = logger;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TopicDTO>>> GetAll()
        {
            try
            {
                _logger.LogInformation("Fetching all topics.");
                var topics = await _topicService.GetAllAsync();
                _logger.LogInformation($"Successfully retrieved all topics");
                return Ok(topics);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching all topics.");
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TopicDTO>> GetById(int id)
        {
            try
            {
                _logger.LogInformation("Fetching topic by id {TopicId}.", id);
                var topic = await _topicService.GetByIdAsync(id);
                if (topic == null)
                {
                    _logger.LogWarning("Topic with id {TopicId} not found.", id);
                    return NotFound();
                }
                _logger.LogInformation("Successfully retrieved topic with id {TopicId}.", id);
                return Ok(topic);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while fetching topic by id {TopicId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] TopicDTO topic)
        {
            try
            {
                _logger.LogInformation("Adding a new topic: {TopicName}.", topic.Name);
                await _topicService.AddAsync(topic);
                _logger.LogInformation("Successfully added topic: {TopicName}.", topic.Name);
                return CreatedAtAction(nameof(GetById), new { id = topic.Id }, topic);
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while adding a new topic: {TopicName}.", topic.Name);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] TopicDTO topic)
        {
            try
            {
                topic.Id = id;
                _logger.LogInformation("Updating topic with id {TopicId}.", id);
                await _topicService.UpdateAsync(topic);
                _logger.LogInformation("Successfully updated topic with id {TopicId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while updating topic with id {TopicId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> Delete(int id)
        {
            try
            {
                _logger.LogInformation("Deleting topic with id {TopicId}.", id);
                await _topicService.DeleteAsync(id);
                _logger.LogInformation("Successfully deleted topic with id {TopicId}.", id);
                return Ok();
            }
            catch (Exception ex)
            {
                _logger.LogError(ex, "An error occurred while deleting topic with id {TopicId}.", id);
                return StatusCode(500, $"Internal server error: {ex.Message}");
            }
        }
    }
}
