using Entities;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public class AlumniRepository : IAlumniRepository
    {
        private readonly YDTDbContext _context;

        public AlumniRepository(YDTDbContext context)
        {
            _context = context;
        }

        public async Task<IEnumerable<Alumni>> GetAllAsync()
        {
            return await _context.Alumni.ToListAsync();
        }

        public async Task<Alumni> GetByIdAsync(int id)
        {
            return await _context.Alumni.FindAsync(id);
        }

        public async Task AddAsync(Alumni alumni)
        {
            await _context.Alumni.AddAsync(alumni);
            await _context.SaveChangesAsync();
        }

        public async Task UpdateAsync(Alumni alumni)
        {
            _context.Alumni.Update(alumni);
            await _context.SaveChangesAsync();
        }

        public async Task DeleteAsync(int id)
        {
            var alumni = await GetByIdAsync(id);
            if (alumni != null)
            {
                _context.Alumni.Remove(alumni);
                await _context.SaveChangesAsync();
            }
        }
    }
}
