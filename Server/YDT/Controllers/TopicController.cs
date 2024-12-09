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
    public class TopicController : ControllerBase
    {
        private readonly ITopicService _topicService;

        public TopicController(ITopicService topicService)
        {
            _topicService = topicService;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<TopicDTO>>> GetAll()
        {
            var topics = await _topicService.GetAllAsync();
            return Ok(topics);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<TopicDTO>> GetById(int id)
        {
            var topic = await _topicService.GetByIdAsync(id);
            if (topic == null) return NotFound();
            return Ok(topic);
        }

        [HttpPost]
        public async Task<IActionResult> Add([FromBody] Topic topic)
        {
            await _topicService.AddAsync(topic);
            return CreatedAtAction(nameof(GetById), new { id = topic.Id }, topic);
        }

        [HttpPut("{id}")]
        public async Task<IActionResult> Update(int id, [FromBody] Topic topic)
        {
            topic.Id = id;
            await _topicService.UpdateAsync(topic);
            return NoContent();
        }
    }
}
