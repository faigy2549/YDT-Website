using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace DTOs
{
        public class RavDTO
        {
            public int Id { get; set; }
            public string Name { get; set; }
            public string Title { get; set; }
            public string Bio { get; set; }
            public List<ShiurDTO> Shiurim { get; set; }  // List of Shiur DTOs to represent the associated shiurim
        }
 }


