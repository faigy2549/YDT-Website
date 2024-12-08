using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Topic
    {
        public int Id { get; set; } 
        public string Name { get; set; } 
        public ICollection<Shiur> Shiurim { get; set; }  
    }
}
