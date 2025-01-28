using Entities;
using Microsoft.AspNetCore.Mvc;
using Services;

namespace YDT.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class EventsController : ControllerBase
    {
        private readonly IEventService _service;

        public EventsController(IEventService service)
        {
            _service = service;
        }

        [HttpGet]
        public async Task<ActionResult<IEnumerable<Event>>> GetAll()
        {
            var events = await _service.GetAllAsync();
            return Ok(events);
        }

        [HttpGet("{id}")]
        public async Task<ActionResult<Event>> GetById(int id)
        {
            var eventEntity = await _service.GetByIdAsync(id);
            if (eventEntity == null)
            {
                return NotFound();
            }

            return Ok(eventEntity);
        }

        [HttpPost]
        public async Task<ActionResult> Create(Event eventEntity)
        {
            await _service.AddAsync(eventEntity);
            return CreatedAtAction(nameof(GetById), new { id = eventEntity.Id }, eventEntity);
        }

        [HttpPut("{id}")]
        public async Task<ActionResult> Update(int id, Event eventEntity)
        {
            if (id != eventEntity.Id)
            {
                return BadRequest("ID mismatch.");
            }

            await _service.UpdateAsync(eventEntity);
            return NoContent();
        }

        [HttpDelete("{id}")]
        public async Task<ActionResult> Delete(int id)
        {
            await _service.DeleteAsync(id);
            return NoContent();
        }
    }
}
