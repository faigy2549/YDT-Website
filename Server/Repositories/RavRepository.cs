using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class RavRepository : IRavRepository
    {
        private readonly YDTDbContext _context;

        public RavRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Rav>> GetAllAsync()
        {
            return await _context.Rabbanim.Include(r => r.Shiurim).ToListAsync();
        }

        public async Task<Rav> GetByIdAsync(int id)
        {
            return await _context.Rabbanim.Include(r => r.Shiurim).FirstOrDefaultAsync(r => r.Id == id);
        }

        public async Task<Rav> GetByNameAsync(string name)
        {
            return await _context.Rabbanim.Include(r => r.Shiurim).FirstOrDefaultAsync(r => r.Name == name);
        }

        public async Task AddAsync(Rav rav)
        {
            await _context.Rabbanim.AddAsync(rav);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Rav rav)
        {
            _context.Rabbanim.Update(rav);
            await _context.SaveChangesAsync();
        }
    }
}
