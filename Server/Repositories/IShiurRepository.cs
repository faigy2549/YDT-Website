using Entities;
using System.Collections.Generic;
using System.Threading.Tasks;

namespace Repositories
{
    public interface IShiurRepository
    {
        Task<IEnumerable<Shiur>> GetAllAsync();
        Task<Shiur> GetByIdAsync(int id);
        Task<IEnumerable<Shiur>> GetByLengthAsync(int minLength, int maxLength);
        Task<IEnumerable<Shiur>> GetByYearAsync(int year);
        Task<IEnumerable<Shiur>> GetByRavIdAsync(int ravId);
        Task AddAsync(Shiur shiur);
        Task UpdateAsync(Shiur shiur);
        Task DeleteAsync(Shiur shiur);
    }
}
