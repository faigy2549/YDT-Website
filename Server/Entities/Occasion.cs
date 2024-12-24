using System.ComponentModel.DataAnnotations;

namespace Entities
{
    public class Occasion
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [MaxLength(50)]
        public string EventName { get; set; }
    }
}
