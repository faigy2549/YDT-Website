using Entities;

namespace Services
{
    public interface IOccasionService
    {
        Task AddAsync(Occasion occasion);
        Task DeleteAsync(int id);
        Task<IEnumerable<Occasion>> GetAllAsync();
        Task<Occasion> GetByIdAsync(int id);
        Task UpdateAsync(Occasion occasion);
    }
}