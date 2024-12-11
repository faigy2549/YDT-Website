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
        public TopicDTO Topic { get; set; }  // Reference the simplified TopicDTO
        public RavDTO Rav { get; set; }      // Reference the simplified RavDTO
        public string Description { get; set; }
        public string AudioUrl { get; set; }
    }

}


