using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Repositories
{
    using Entities;
    using Microsoft.EntityFrameworkCore;
    using System.Collections.Generic;
    using System.Threading.Tasks;

    namespace Repositories
    {
        public class EventRepository : IEventRepository
        {
            private readonly YDTDbContext _context;

            public EventRepository(YDTDbContext context)
            {
                _context = context;
            }

            public async Task<IEnumerable<Event>> GetAllAsync()
            {
                return await _context.Set<Event>().ToListAsync();
            }

            public async Task<Event> GetByIdAsync(int id)
            {
                return await _context.Set<Event>().FindAsync(id);
            }

            public async Task AddAsync(Event eventEntity)
            {
                await _context.Set<Event>().AddAsync(eventEntity);
                await _context.SaveChangesAsync();
            }

            public async Task UpdateAsync(Event eventEntity)
            {
                _context.Set<Event>().Update(eventEntity);
                await _context.SaveChangesAsync();
            }

            public async Task DeleteAsync(int id)
            {
                var eventEntity = await GetByIdAsync(id);
                if (eventEntity != null)
                {
                    _context.Set<Event>().Remove(eventEntity);
                    await _context.SaveChangesAsync();
                }
            }
        }
    }

}
