using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
        public class MazalTovDTO
        {
            public int Id { get; set; }
            public int OccasionId { get; set; }
            public string Name { get; set; }
            public string EmailAddress { get; set; }
            public DateTime Date { get; set; }
        }
}
