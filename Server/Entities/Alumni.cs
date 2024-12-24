using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.ComponentModel.DataAnnotations;

namespace Entities
{ 
        public class Alumni
        {
            [Key]
            public int Id { get; set; }

            [Required]
            [MaxLength(50)]
            public string FirstName { get; set; }

            [Required]
            [MaxLength(50)]
            public string LastName { get; set; }

            [MaxLength(15)]
            public string MobilePhone { get; set; }

            [MaxLength(100)]
            public string Address { get; set; }

            [MaxLength(50)]
            public string City { get; set; }

            [MaxLength(50)]
            public string State { get; set; }

            [MaxLength(10)]
            public string Zip { get; set; }

            [Required]
            [EmailAddress]
            public string EmailAddress { get; set; }

            public string GraduationYear { get; set; }
        }
    }

