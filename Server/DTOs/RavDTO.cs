using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

namespace DTOs
{
    public class RavDTO
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Name is required")]
        [StringLength(100, ErrorMessage = "Name cannot be longer than 100 characters")]
        public string Name { get; set; }

        [StringLength(50, ErrorMessage = "Title cannot be longer than 50 characters")]
        public string Title { get; set; }

        [StringLength(1000, ErrorMessage = "Bio cannot be longer than 1000 characters")]
        public string Bio { get; set; }
        public int ChashivusLevel { get; set; }
        public string ImageUrl { get; set; }
    }
}
