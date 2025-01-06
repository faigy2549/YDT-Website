using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Entities
{
    public class MazalTov
    {
        [Key]
        public int Id { get; set; }

        [Required]
        [ForeignKey("Occasion")]
        public int OccasionId { get; set; }
        public Occasion Occasion { get; set; }

        [Required]
        public string Name { get; set; }

        [Required]
        [EmailAddress]
        public string EmailAddress { get; set; }
        public DateTime Date { get; set; }
    }
}
