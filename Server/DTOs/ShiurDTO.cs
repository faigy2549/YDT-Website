using System;
using System.ComponentModel.DataAnnotations;

namespace DTOs
{
    public class ShiurDTO
    {
        public int Id { get; set; }

        [Required(ErrorMessage = "Title is required")]
        [StringLength(100, ErrorMessage = "Title cannot be longer than 100 characters")]
        public string Title { get; set; }

        [Range(1, 9999, ErrorMessage = "Year must be between 1 and 9999")]
        public DateTime Date { get; set; }

        [TimeSpanFormat(ErrorMessage = "Invalid time format. Please use hh:mm:ss.")]
        public string Length { get; set; } // Now Length is a string to enforce format validation

        [Required(ErrorMessage = "TopicId is required")]
        public int TopicId { get; set; }

        [Required(ErrorMessage = "RavId is required")]
        public int RavId { get; set; }

        [StringLength(500, ErrorMessage = "Description cannot be longer than 500 characters")]
        public string Description { get; set; }

        [Url(ErrorMessage = "Invalid URL format")]
        public string AudioUrl { get; set; }
    }
}
