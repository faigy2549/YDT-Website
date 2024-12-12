using System;
using System.ComponentModel.DataAnnotations;
using System.Text.RegularExpressions;

namespace DTOs
{
    public class TimeSpanFormatAttribute : ValidationAttribute
    {
        private const string TimeSpanPattern = @"^(?:[0-9]{2}):(?:[0-9]{2}):(?:[0-9]{2})$";

        public TimeSpanFormatAttribute() : base("Invalid time format. Please use hh:mm:ss.")
        {
        }

        public override bool IsValid(object value)
        {
            if (value == null)
                return false;

            // Check if the value is a string and matches the pattern
            if (value is string timeString)
            {
                return Regex.IsMatch(timeString, TimeSpanPattern);
            }

            return false;
        }
    }
}
