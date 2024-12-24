using Entities;

namespace Repositories
{
    public interface IOccasionRepository
    {
        Task AddAsync(Occasion occasion);
        Task DeleteAsync(int id);
        Task<IEnumerable<Occasion>> GetAllAsync();
        Task<Occasion> GetByIdAsync(int id);
        Task UpdateAsync(Occasion occasion);
    }
}