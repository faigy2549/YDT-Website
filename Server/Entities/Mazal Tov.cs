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
        [ForeignKey("Alumni")]
        public int AlumniId { get; set; }
        public Alumni Alumni { get; set; }

        public DateTime Date { get; set; }
    }
}
