using Microsoft.EntityFrameworkCore;
using NLog.Web;
using Repositories;
using Services;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();
builder.Services.AddCors(options =>
{
    options.AddPolicy("CorsPolicy",
                  builder =>
                  {
                      builder.WithOrigins("http://localhost:4200",
                                           "development web site")
                                          .AllowAnyHeader()
                                          .AllowAnyMethod()
                                          ;
                  });

});

builder.Services.AddDbContext<YDTDbContext>(options =>
    options.UseSqlServer(builder.Configuration.GetConnectionString("YDTDb")));
builder.Services.AddAutoMapper(AppDomain.CurrentDomain.GetAssemblies());
builder.Services.AddScoped<IRavRepository, RavRepository>();
builder.Services.AddScoped<IRavService, RavService>();

builder.Services.AddScoped<IShiurRepository, ShiurRepository>();
builder.Services.AddScoped<IShiurService, ShiurService>();

builder.Services.AddScoped<ITopicRepository, TopicRepository>();
builder.Services.AddScoped<ITopicService, TopicService>();


builder.Host.UseNLog();
var app = builder.Build();


// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}
app.UseCors("CorsPolicy");

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
