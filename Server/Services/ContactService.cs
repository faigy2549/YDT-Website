using Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using System.Text;
using System.Threading.Tasks;

namespace Services
{
    public class ContactService : IContactService

    {
        private readonly IEmailService _emailService;
        public ContactService(IEmailService emailService)
        {
            this._emailService = emailService;
        }

        public async Task<bool> SendMessage(ContactFormRequest contact)
        {
            string subject =contact.Email + " Sent a message";
            string body = $@"{contact.Name} sent a message from the YDT websute
            Email- {contact.Email}  
            Message-
            {contact.Message}";
            await _emailService.SendEmailAsync("ydvartorah@gmail.com", subject, body);
            return true;
        }

    }
}