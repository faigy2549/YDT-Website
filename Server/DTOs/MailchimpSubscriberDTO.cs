public class MailchimpSubscriberDTO
{
    public string Email { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }

    private static readonly HashSet<string> AllowedTags = new() { "Talmid", "Parent", "Alumni" };

    public List<string> Tags { get; set; } = new List<string>(); 

    public bool ValidateTags(out string errorMessage)
    {
        if (Tags == null || Tags.Count == 0)
        {
            errorMessage = null; 
            return true;
        }

        if (Tags.Contains("Other"))
        {
            Tags.Clear(); 
            errorMessage = null;
            return true;
        }

        var invalidTags = Tags.Except(AllowedTags).ToList();
        if (invalidTags.Any())
        {
            errorMessage = $"Invalid tags: {string.Join(", ", invalidTags)}";
            return false;
        }

        errorMessage = null;
        return true;
    }
}
