using Entities;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;

namespace Repositories
{
    public class YDTDbContext : DbContext
    {
        private readonly IConfiguration _configuration;

        public YDTDbContext(DbContextOptions<YDTDbContext> options, IConfiguration configuration)
            : base(options)
        {
            _configuration = configuration;
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            // Try to get the UseInMemoryDatabase configuration value
            var useInMemoryDb = _configuration["UseInMemoryDatabase"];
            bool useInMemoryDatabase = false; // Default value

            if (!string.IsNullOrEmpty(useInMemoryDb))
            {
                bool.TryParse(useInMemoryDb, out useInMemoryDatabase); // Safe parsing
            }

            if (!useInMemoryDatabase)
            {
                optionsBuilder.UseSqlServer(
                    _configuration.GetConnectionString("YDTDb"),
                    b => b.MigrationsAssembly("YDT"));  // Set migrations assembly to "YDT"
            }
            else
            {
                optionsBuilder.UseInMemoryDatabase("YDTDb");
            }
        }

        public DbSet<Rav> Rabbanim { get; set; }
        public DbSet<Shiur> Shiurim { get; set; }
        public DbSet<Topic> Topics { get; set; }
    }
}
