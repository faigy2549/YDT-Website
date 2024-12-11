using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Repositories
{
    public class ShiurRepository : IShiurRepository
    {
        private readonly YDTDbContext _context;

        public ShiurRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Shiur>> GetAllAsync()
        {
            return await _context.Shiurim
                .Include(s => s.Rav)
                .Include(s => s.Topic)
                .ToListAsync();
        }

        public async Task<Shiur> GetByIdAsync(int id)
        {
            return await _context.Shiurim.Include(s => s.Rav).FirstOrDefaultAsync(s => s.Id == id);
        }

        public async Task<IEnumerable<Shiur>> GetByLengthAsync(int minLength, int maxLength)
        {
            return await _context.Shiurim
               .Where(s => s.Length.TotalMinutes >= minLength && s.Length.TotalMinutes <= maxLength)
                .ToListAsync();
        }

        public async Task<IEnumerable<Shiur>> GetByYearAsync(int year)
        {
            return await _context.Shiurim.Where(s => s.Year == year).ToListAsync();
        }

        public async Task<IEnumerable<Shiur>> GetByRavIdAsync(int ravId)
        {
            return await _context.Shiurim.Where(s => s.RavId == ravId).ToListAsync();
        }

        public async Task AddAsync(Shiur shiur)
        {
            await _context.Shiurim.AddAsync(shiur);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Shiur shiur)
        {
            _context.Shiurim.Update(shiur);
            await _context.SaveChangesAsync();
        }
        public async Task DeleteAsync(Shiur shiur)
        {
            _context.Shiurim.Remove(shiur);
            await _context.SaveChangesAsync();
        }
    }
}
