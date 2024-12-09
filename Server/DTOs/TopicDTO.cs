using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
    public class TopicDTO
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public ICollection<ShiurDTO> Shiurim { get; set; }
    }
}
