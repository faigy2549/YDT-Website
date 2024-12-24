using Entities;
using Microsoft.AspNetCore.Mvc;

namespace Services
{
    public interface IContactService
    {
        Task<bool> SendMessage(ContactFormRequest contact);
    }
}