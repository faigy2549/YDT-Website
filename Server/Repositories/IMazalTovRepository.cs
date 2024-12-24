using Entities;

namespace Repositories
{
    public interface IMazalTovRepository
    {
        Task AddAsync(MazalTov mazalTov);
        Task DeleteAsync(int id);
        Task<IEnumerable<MazalTov>> GetAllAsync();
        Task<MazalTov> GetByIdAsync(int id);
        Task UpdateAsync(MazalTov mazalTov);
    }
}