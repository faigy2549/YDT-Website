using Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public interface IRavRepository
    {
        Task<IEnumerable<Rav>> GetAllAsync();
        Task<Rav> GetByIdAsync(int id);
        Task<Rav> GetByNameAsync(string name);
        Task AddAsync(Rav rav);
        Task UpdateAsync(Rav rav);
        Task DeleteAsync(Rav rav);
    }
}

