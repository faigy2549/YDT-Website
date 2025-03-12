using DTOs;
using Microsoft.AspNetCore.Mvc;
using Services;
using System.Text.Json;
using System.Threading.Tasks;

[ApiController]
[Route("api/newsletter")]
public class NewsletterController : ControllerBase
{
    private readonly INewsletterService _newsletterService;

    public NewsletterController(INewsletterService newsletterService)
    {
        _newsletterService = newsletterService;
    }
    [HttpPost("add-subscriber")]
    public async Task<IActionResult> AddSubscriber([FromBody] MailchimpSubscriberDTO subscriber)
    {
        Console.WriteLine("maaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaximmmmmmmmmmmmmot",subscriber.Tags);
        if (subscriber == null)
        {
            return BadRequest(new { error = "Subscriber details are required." });
        }

        if (!subscriber.ValidateTags(out string errorMessage))
        {
            return BadRequest(new { error = errorMessage });
        }

        try
        {
            await _newsletterService.AddSubscriberToList(subscriber);
            return Ok(new { message = "Subscriber added successfully." });
        }
        catch (Exception ex)
        {
            return StatusCode(500, new { error = "An unexpected error occurred.", details = ex.Message });
        }
    }


    [HttpGet("campaigns")]
    public async Task<IActionResult> ListCampaigns()
    {
        try
        {
            var campaigns = await _newsletterService.ListCampaigns();
            return Ok(campaigns);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred: {ex.Message}");
        }
    }
    [HttpGet("campaigns/{campaignId}/html-content")]
    public async Task<IActionResult> GetCampaignHtmlContent(string campaignId)
    {
        try
        {
            var content = await _newsletterService.GetCampaignHtmlContent(campaignId);
            var response = JsonSerializer.Deserialize<JsonElement>(content);
            var html = response.GetProperty("html").GetString();
            return Content(html, "text/html"); // Serve the HTML content directly
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred: {ex.Message}");
        }
    }

    [HttpGet("campaigns/{campaignId}/content")]
    public async Task<IActionResult> GetCampaignContent(string campaignId)
    {
        try
        {
            var content = await _newsletterService.GetCampaignContent(campaignId);
            return Ok(content);
        }
        catch (Exception ex)
        {
            return StatusCode(500, $"An error occurred: {ex.Message}");
        }
    }


}
