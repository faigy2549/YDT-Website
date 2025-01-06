using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class MazalTovRepository : IMazalTovRepository
    {
        private readonly YDTDbContext _context;

        public MazalTovRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<MazalTov>> GetAllAsync()
        {
            return await _context.MazalTov.Include(m => m.Occasion).ToListAsync();
        }

        public async Task<MazalTov> GetByIdAsync(int id)
        {
            return await _context.MazalTov
                .Include(m => m.Occasion)
                .FirstOrDefaultAsync(m => m.Id == id);
        }

        public async Task AddAsync(MazalTov mazalTov)
        {
            await _context.MazalTov.AddAsync(mazalTov);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(MazalTov mazalTov)
        {
            _context.MazalTov.Update(mazalTov);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var mazalTov = await GetByIdAsync(id);
            if (mazalTov != null)
            {
                _context.MazalTov.Remove(mazalTov);
                await _context.SaveChangesAsync();
            }
        }
    }

}
