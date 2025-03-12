using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Rav
    {
        public int Id { get; set; }  
        public string Name { get; set; }
        public string Title { get; set; }  
        public string Bio { get; set; }  
        public int ChashivusLevel { get; set; }
        public string ImageUrl { get; set; }
        public ICollection<Shiur> Shiurim { get; set; }  
    }
}
