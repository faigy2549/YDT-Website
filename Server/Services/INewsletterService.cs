using DTOs;

namespace Services
{
    public interface INewsletterService
    {
        Task AddSubscriberToList(MailchimpSubscriberDTO subscriber);
        Task<string> ListCampaigns();
        Task<string> GetCampaignHtmlContent(string campaignId);
        Task<string> GetCampaignContent(string campaignId);
    }
}