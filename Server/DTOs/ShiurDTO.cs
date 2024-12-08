using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class ShiurDTO
    {
        public int Id { get; set; }
        public string Title { get; set; }
        public int Year { get; set; }
        public TimeSpan Length { get; set; }
        public string Description { get; set; }
        public string AudioUrl { get; set; }

        // Topic information, included as a DTO
        public TopicDTO Topic { get; set; }
    }
}
