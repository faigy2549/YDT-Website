using DotNetEnv;
using Entities;
using Microsoft.EntityFrameworkCore;
using NLog.Web;
using Repositories;
using Services;
using System.Net.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// Load environment variables from .env file
Env.Load();

// Set up configuration and read from appsettings.json and environment variables
builder.Configuration
    .SetBasePath(Directory.GetCurrentDirectory())
    .AddJsonFile("appsettings.json", optional: false, reloadOnChange: true)
    .AddEnvironmentVariables(); // Automatically loads environment variables from the system

var smtpUsername = Environment.GetEnvironmentVariable("SMTP_USERNAME");
var smtpPassword = Environment.GetEnvironmentVariable("SMTP_PASSWORD");

// Your API key and server prefix
string apiKey = "a76d62d0ed2ba4d6a8ee5969ca2ff96b-us17"; // Replace with your actual API key
string serverPrefix = "us17"; // Example: "us20"

// Mailchimp API base URL
string baseUrl = $"https://{serverPrefix}.api.mailchimp.com/3.0/";

try
{
    using (HttpClient client = new HttpClient())
    {
        client.DefaultRequestHeaders.Authorization =
            new AuthenticationHeaderValue("Basic", Convert.ToBase64String(
                System.Text.Encoding.ASCII.GetBytes($"anystring:{apiKey}")));

        HttpResponseMessage response = await client.GetAsync(baseUrl + "campaigns");
        response.EnsureSuccessStatusCode();

        string responseBody = await response.Content.ReadAsStringAsync();
        Console.WriteLine("Raw Response: " + responseBody);
    }
}
catch (Exception ex)
{
    Console.WriteLine($"Error: {ex.Message}");
}

// Add services to the container
builder.Services.AddControllers();
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

// Configure CORS policy
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
        builder =>
        {
            builder.WithOrigins("http://localhost:4200", "development web site")
                   .AllowAnyHeader()
                   .AllowAnyMethod();
        });
});

// Configure DbContext with SQL Server connection string from configuration
builder.Services.AddDbContext<YDTDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YDTDb")));

// Add AutoMapper
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());

// Add repository and service dependencies
builder.Services.AddScoped<IRavRepository, RavRepository>();
builder.Services.AddScoped<IRavService, RavService>();

builder.Services.AddScoped<IShiurRepository, ShiurRepository>();
builder.Services.AddScoped<IShiurService, ShiurService>();

builder.Services.AddScoped<IAlumniRepository, AlumniRepository>();
builder.Services.AddScoped<IAlumniService, AlumniService>();

builder.Services.AddScoped<IMazalTovRepository, MazalTovRepository>();
builder.Services.AddScoped<IMazalTovService, MazalTovService>();

builder.Services.AddScoped<IOccasionRepository, OccasionRepository>();
builder.Services.AddScoped<IOccasionService, OccasionService>();

builder.Services.AddScoped<ITopicRepository, TopicRepository>();
builder.Services.AddScoped<ITopicService, TopicService>();

builder.Services.AddScoped<IContactService, ContactService>();
// Configure EmailSettings from appsettings.json and override with environment variables
builder.Services.Configure<EmailSettings>(options =>
{
    builder.Configuration.GetSection("EmailSettings").Bind(options); // Load from appsettings.json

    // Override sensitive values with environment variables if available
    options.Username = Environment.GetEnvironmentVariable("SMTP_USERNAME") ?? options.Username;
    options.Password = Environment.GetEnvironmentVariable("SMTP_PASSWORD") ?? options.Password;
});

// Configure EmailService
builder.Services.AddTransient<IEmailService, EmailService>();

// Configure NLog for logging
builder.Host.UseNLog();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseCors("CorsPolicy");
app.UseStaticFiles();
app.UseHttpsRedirection();
app.UseAuthorization();
app.MapControllers();

app.Run();
