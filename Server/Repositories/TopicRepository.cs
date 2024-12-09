using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class TopicRepository : ITopicRepository
    {
        private readonly YDTDbContext _context;

        public TopicRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Topic>> GetAllAsync()
        {
            return await _context.Topics
                .Include(t=>t.Shiurim)
                .ToListAsync();
        }

        public async Task<Topic> GetByIdAsync(int id)
        {
            return await _context.Topics.FirstOrDefaultAsync(t => t.Id == id);
        }

        public async Task AddAsync(Topic topic)
        {
            await _context.Topics.AddAsync(topic);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Topic topic)
        {
            _context.Topics.Update(topic);
            await _context.SaveChangesAsync();
        }
    }
}
