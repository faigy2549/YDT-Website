using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Entities
{
    public class Shiur
    {
        public int Id { get; set; }  
        public string Title { get; set; }  
        public DateTime Date { get; set; }  
        public TimeSpan Length { get; set; }  

        public int TopicId { get; set; } 
        public Topic Topic { get; set; }

        public int RavId { get; set; }  
        public Rav Rav { get; set; }  

        public string Description { get; set; }  
        public string AudioUrl { get; set; } 
    }
}
