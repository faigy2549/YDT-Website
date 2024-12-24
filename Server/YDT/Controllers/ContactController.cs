
using Microsoft.AspNetCore.Mvc;
using System.Threading.Tasks;
using Entities;
using Services;

namespace YDT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ContactController : ControllerBase
    {
        private readonly IContactService _contactService;

        public ContactController(IContactService contactService)
        {
            _contactService = contactService;
        }

        [HttpPost]
        public async Task<IActionResult> SubmitContactForm([FromBody] ContactFormRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest(new { message = "Invalid data. Please check the input fields." });
            }

            try
            {
                var result = await _contactService.SendMessage(request);

                if (result)
                {
                    return Ok(new { message = "Contact form submitted successfully." });
                }
                else
                {
                    return StatusCode(500, new { message = "Failed to send the message. Please try again later." });
                }
            }
            catch (System.Exception ex)
            {
                return StatusCode(500, new { message = $"An error occurred: {ex.Message}" });
            }
        }
    }
}
