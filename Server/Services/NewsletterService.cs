using System;
using System.Net.Http;
using System.Net.Http.Headers;
using System.Text;
using System.Text.Json;
using DTOs;
using System.Threading.Tasks;
using System.Text.Json.Nodes;

namespace Services
{
    public class NewsletterService : INewsletterService
    {
        private readonly string _apiKey;
        private readonly string _serverPrefix;
        private readonly HttpClient _httpClient;
        private readonly string _listId;

        public NewsletterService(IHttpClientFactory httpClientFactory)
        {
            _apiKey = Environment.GetEnvironmentVariable("MAILCHIMP_API_KEY");
            _serverPrefix = Environment.GetEnvironmentVariable("SERVER_PREFIX");
            _listId= Environment.GetEnvironmentVariable("LIST_ID");

            if (string.IsNullOrEmpty(_apiKey) || string.IsNullOrEmpty(_serverPrefix))
            {
                throw new InvalidOperationException("Mailchimp API credentials are not configured properly.");
            }

            _httpClient = httpClientFactory.CreateClient();
            _httpClient.BaseAddress = new Uri($"https://{_serverPrefix}.api.mailchimp.com/3.0/");
            _httpClient.DefaultRequestHeaders.Authorization = new AuthenticationHeaderValue("Basic",
                Convert.ToBase64String(Encoding.ASCII.GetBytes($"anystring:{_apiKey}")));
        }

        public async Task AddSubscriberToList( MailchimpSubscriberDTO subscriber)
        {
            if (string.IsNullOrEmpty(_listId))
                throw new ArgumentNullException(nameof(_listId));
            if (subscriber == null)
                throw new ArgumentNullException(nameof(subscriber));

            var subscriberPayload = new
            {
                email_address = subscriber.Email,
                status = "subscribed",
                merge_fields = new
                {
                    FNAME = subscriber.FirstName,
                    LNAME = subscriber.LastName
                }
            };

            var jsonPayload = JsonSerializer.Serialize(subscriberPayload);
            var content = new StringContent(jsonPayload, Encoding.UTF8, "application/json");

            var response = await _httpClient.PostAsync($"lists/{_listId}/members", content);

            if (!response.IsSuccessStatusCode)
            {
                var errorDetails = await response.Content.ReadAsStringAsync();
                throw new Exception($"Failed to add subscriber: {errorDetails}");
            }

            var responseBody = await response.Content.ReadAsStringAsync();
            Console.WriteLine($"Subscriber added successfully: {responseBody}");
        }

public async Task<string> ListCampaigns()
    {
        string fields = "campaigns.id,campaigns.settings.title,campaigns.settings.subject_line,campaigns.send_time";
        string sortField = "send_time";
        string sortDir = "DESC";
        int count = 200;

        string endpoint = $"campaigns?fields={fields}&count={count}&sort_field={sortField}&sort_dir={sortDir}";

        var response = await _httpClient.GetAsync(endpoint);

        if (!response.IsSuccessStatusCode)
        {
            var errorDetails = await response.Content.ReadAsStringAsync();
            throw new Exception($"Failed to fetch campaigns: {errorDetails}");
        }

        var responseBody = await response.Content.ReadAsStringAsync();
        var jsonResponse = JsonNode.Parse(responseBody);

        var filteredCampaigns = jsonResponse["campaigns"]
            ?.AsArray()
            .Where(campaign => !string.IsNullOrWhiteSpace(campaign["send_time"]?.ToString()))
            .ToList();

        var result = new
        {
            campaigns = filteredCampaigns
        };

        return JsonSerializer.Serialize(result);
    }

    public async Task<string> GetCampaignHtmlContent(string campaignId)
        {
            var response = await _httpClient.GetAsync($"campaigns/{campaignId}/content");

            if (!response.IsSuccessStatusCode)
            {
                var errorDetails = await response.Content.ReadAsStringAsync();
                throw new Exception($"Failed to fetch campaign content: {errorDetails}");
            }

            var responseBody = await response.Content.ReadAsStringAsync();
            return responseBody; // Returns full content including HTML
        }

        public async Task<string> GetCampaignContent(string campaignId)
        {
            if (string.IsNullOrEmpty(campaignId))
                throw new ArgumentException("Campaign ID cannot be null or empty.", nameof(campaignId));

            var response = await _httpClient.GetAsync($"campaigns/{campaignId}/content");

            if (!response.IsSuccessStatusCode)
            {
                var errorDetails = await response.Content.ReadAsStringAsync();
                throw new Exception($"Failed to fetch campaign content: {errorDetails}");
            }

            var responseBody = await response.Content.ReadAsStringAsync();
            return responseBody;
        }


    }
}
