using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class OccasionRepository : IOccasionRepository
    {
        private readonly YDTDbContext _context;

        public OccasionRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Occasion>> GetAllAsync()
        {
            return await _context.Occasions.ToListAsync();
        }

        public async Task<Occasion> GetByIdAsync(int id)
        {
            return await _context.Occasions.FindAsync(id);
        }

        public async Task AddAsync(Occasion occasion)
        {
            await _context.Occasions.AddAsync(occasion);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Occasion occasion)
        {
            _context.Occasions.Update(occasion);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var occasion = await GetByIdAsync(id);
            if (occasion != null)
            {
                _context.Occasions.Remove(occasion);
                await _context.SaveChangesAsync();
            }
        }
    }

}
